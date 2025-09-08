import { createWorkflow, createStep } from "@mastra/core/workflows";
import { z } from "zod";
import { analyzeDentalDataTool } from "../agents/dental-assistant";

// Step 1: Validate incoming SMS (replaces n8n "If" condition)
const validateIncomingSMS = createStep({
  id: "validate-incoming-sms",
  description: "Validate if SMS is for the bot number",
  inputSchema: z.object({
    smsData: z.object({
      from: z.string(),
      to: z.string(),
      body: z.string(),
    }),
  }),
  outputSchema: z.object({
    isValid: z.boolean(),
    smsData: z.any(),
  }),
  execute: async ({ inputData }) => {
    const expectedNumber = process.env.TWILIO_PHONE_NUMBER;
    const isValid = inputData.smsData.to === expectedNumber;

    if (!isValid) {
      throw new Error("Invalid SMS recipient");
    }

    return {
      isValid,
      smsData: inputData.smsData,
    };
  },
});

// Step 2: Get lead by phone number (replaces n8n "Execute a SQL query")
const getLeadByPhone = createStep({
  id: "get-lead-by-phone",
  description: "Find lead by phone number",
  inputSchema: z.object({
    isValid: z.boolean(),
    smsData: z.any(),
  }),
  outputSchema: z.object({
    lead: z.any(),
    smsData: z.any(),
    found: z.boolean(),
  }),
  execute: async ({ inputData }) => {
    if (!inputData.isValid) {
      throw new Error("Invalid SMS recipient");
    }

    // Call existing API to get lead by phone
    const response = await fetch(
      `${process.env.API_URL}/api/leads?phone=${encodeURIComponent(inputData.smsData.from)}`
    );
    
    if (!response.ok) {
      // Fallback: get latest lead (as per n8n flow)
      const fallbackResponse = await fetch(`${process.env.API_URL}/api/leads`);
      const allLeads = await fallbackResponse.json();
      const latestLead = allLeads[0]; // First item is latest due to ordering
      
      return {
        lead: latestLead,
        smsData: inputData.smsData,
        found: !!latestLead,
      };
    }
    
    const leads = await response.json();
    const lead = leads[0]; // Get most recent lead for this phone
    
    return {
      lead,
      smsData: inputData.smsData,
      found: !!lead,
    };
  },
});

// Step 3: Update transcript with user message (replaces n8n "Update user msg in db")
const updateUserMessage = createStep({
  id: "update-user-message",
  description: "Update lead transcript with user message",
  inputSchema: z.object({
    lead: z.any(),
    smsData: z.any(),
    found: z.boolean(),
  }),
  outputSchema: z.object({
    lead: z.any(),
    smsData: z.any(),
  }),
  execute: async ({ inputData }) => {
    if (!inputData.found) {
      throw new Error("Lead not found");
    }

    const { lead, smsData } = inputData;
    const currentTranscript = lead.transcript || "";
    const newTranscript = `${currentTranscript}${currentTranscript ? '\n' : ''}user: ${smsData.body}`;
    
    // Update transcript via API
    const response = await fetch(`${process.env.API_URL}/api/leads/${lead.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        transcript: newTranscript,
      }),
    });
    
    if (!response.ok) {
      throw new Error("Failed to update transcript");
    }
    
    const updatedLead = await response.json();
    
    return {
      lead: { ...updatedLead, transcript: newTranscript },
      smsData,
    };
  },
});

// Step 4: Check AI tag and process accordingly (replaces n8n "Check AI Tag")
const processAIResponse = createStep({
  id: "process-ai-response",
  description: "Check AI tag and generate response if enabled",
  inputSchema: z.object({
    lead: z.any(),
    smsData: z.any(),
  }),
  outputSchema: z.object({
    shouldSendSMS: z.boolean(),
    smsMessage: z.string().optional(),
    phoneNumber: z.string(),
    leadId: z.number(),
  }),
  execute: async ({ inputData }) => {
    const { lead, smsData } = inputData;
    
    if (lead.isAiTagOn) {
      // Generate AI response
      const aiResponse = await analyzeDentalDataTool(lead, lead.transcript);
      
      // Update lead with AI response
      await fetch(`${process.env.API_URL}/api/leads/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          transcript: `${lead.transcript}\nbot: ${aiResponse.question}`,
          ...aiResponse.jsonField,
        }),
      });
      
      return {
        shouldSendSMS: true,
        smsMessage: aiResponse.question,
        phoneNumber: smsData.from,
        leadId: lead.id,
      };
    } else {
      // AI is off - manual handling
      return {
        shouldSendSMS: false,
        phoneNumber: smsData.from,
        leadId: lead.id,
      };
    }
  },
});

// Step 5: Send SMS response (replaces n8n "Send an SMS/MMS/WhatsApp message1")
const sendSMSResponse = createStep({
  id: "send-sms-response",
  description: "Send SMS response to patient",
  inputSchema: z.object({
    shouldSendSMS: z.boolean(),
    smsMessage: z.string().optional(),
    phoneNumber: z.string(),
    leadId: z.number(),
  }),
  outputSchema: z.object({
    success: z.boolean(),
    leadId: z.number(),
  }),
  execute: async ({ inputData }) => {
    if (!inputData.shouldSendSMS || !inputData.smsMessage) {
      return {
        success: true, // No SMS to send
        leadId: inputData.leadId,
      };
    }

    // Send SMS via Twilio
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !fromNumber) {
      throw new Error("Missing Twilio configuration");
    }

    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          "Authorization": `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          To: inputData.phoneNumber,
          From: fromNumber,
          Body: inputData.smsMessage,
        }),
      }
    );
    
    return {
      success: response.ok,
      leadId: inputData.leadId,
    };
  },
});

// SMS Handler Workflow (replaces n8n SMS processing flows)
export const smsHandlerWorkflow = createWorkflow({
  id: "sms-handler-workflow",
  inputSchema: z.object({
    smsData: z.object({
      from: z.string(),
      to: z.string(),
      body: z.string(),
    }),
  }),
  outputSchema: z.object({
    success: z.boolean(),
    leadId: z.number(),
  }),
})
  .then(validateIncomingSMS)
  .then(getLeadByPhone)
  .then(updateUserMessage)
  .then(processAIResponse)
  .then(sendSMSResponse)
  .commit(); 