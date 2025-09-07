import { createWorkflow, createStep } from "@mastra/core/workflows";
import { z } from "zod";

const API_BASE_URL = process.env.API_URL || "http://localhost:3000";

// Step 1: Get lead information (replaces n8n "Execute a SQL query")
const getLeadById = createStep({
  id: "get-lead-by-id",
  description: "Get lead information by ID",
  inputSchema: z.object({
    leadId: z.number(),
    message: z.string(),
  }),
  outputSchema: z.object({
    lead: z.any(),
    message: z.string(),
  }),
  execute: async ({ inputData }) => {
    // Call Next.js API to get lead
    const response = await fetch(`${API_BASE_URL}/api/leads/${inputData.leadId}`);
    
    if (!response.ok) {
      throw new Error("Lead not found");
    }
    
    const lead = await response.json();
    
    return {
      lead,
      message: inputData.message,
    };
  },
});

// Step 2: Check AI status (replaces n8n "If" condition)
const checkAIStatus = createStep({
  id: "check-ai-status",
  description: "Check if AI is disabled for manual message handling",
  inputSchema: z.object({
    lead: z.any(),
    message: z.string(),
  }),
  outputSchema: z.object({
    shouldProcessManually: z.boolean(),
    lead: z.any(),
    message: z.string(),
  }),
  execute: async ({ inputData }) => {
    const shouldProcessManually = !inputData.lead.isAiTagOn;
    
    return {
      shouldProcessManually,
      lead: inputData.lead,
      message: inputData.message,
    };
  },
});

// Step 3: Update transcript with agent message (replaces n8n "Update rows in a table")
const updateAgentMessage = createStep({
  id: "update-agent-message",
  description: "Update lead transcript with agent message",
  inputSchema: z.object({
    shouldProcessManually: z.boolean(),
    lead: z.any(),
    message: z.string(),
  }),
  outputSchema: z.object({
    success: z.boolean(),
    phoneNumber: z.string(),
    smsMessage: z.string(),
    leadId: z.number(),
  }),
  execute: async ({ inputData }) => {
    if (!inputData.shouldProcessManually) {
      throw new Error("AI is enabled - should not process manually");
    }

    const { lead, message } = inputData;
    const currentTranscript = lead.transcript || "";
    const newTranscript = `${currentTranscript}${currentTranscript ? '\n' : ''}bot: ${message || "Our clinical team will reach out shortly to you"}`;
    
    // Update transcript and disable AI tag
    const response = await fetch(`${API_BASE_URL}/api/leads/${lead.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        transcript: newTranscript,
        isAiTagOn: false,
        // Reset AI analysis fields as per n8n flow
        isDecayedOrRotTeethPresent: false,
        isUserApplicableForBcbsPpoInsurance: false,
        isUserUploadingCards: false,
        isManualConsultationRequired: false,
        isInsuranceCardValid: false,
        isUserInterestedInCashOptions: false,
        okayWithPrice: false,
        humanInterventionNeeded: false,
        numberOfMissingTeeth: 0,
      }),
    });
    
    if (!response.ok) {
      throw new Error("Failed to update lead");
    }
    
    return {
      success: true,
      phoneNumber: lead.phone,
      smsMessage: message || "Our clinical team will reach out shortly to you",
      leadId: lead.id,
    };
  },
});

// Step 4: Send agent reply via SMS (replaces n8n "Send clinic agent's reply to user")
const sendAgentReply = createStep({
  id: "send-agent-reply",
  description: "Send agent's manual reply to patient",
  inputSchema: z.object({
    success: z.boolean(),
    phoneNumber: z.string(),
    smsMessage: z.string(),
    leadId: z.number(),
  }),
  outputSchema: z.object({
    success: z.boolean(),
    leadId: z.number(),
  }),
  execute: async ({ inputData }) => {
    if (!inputData.success) {
      throw new Error("Previous step failed");
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

// Admin Message Workflow (replaces "Flow for AI Tag")
export const adminMessageWorkflow = createWorkflow({
  id: "admin-message-workflow",
  inputSchema: z.object({
    leadId: z.number(),
    message: z.string(),
  }),
  outputSchema: z.object({
    success: z.boolean(),
    leadId: z.number(),
  }),
})
  .then(getLeadById)
  .then(checkAIStatus)
  .then(updateAgentMessage)
  .then(sendAgentReply); 

adminMessageWorkflow.commit(); 