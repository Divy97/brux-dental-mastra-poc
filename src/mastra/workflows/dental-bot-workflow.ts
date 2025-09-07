import { createWorkflow, createStep } from "@mastra/core/workflows";
import { z } from "zod";
import { analyzeDentalDataTool } from "../agents/dental-assistant";
import { createLeadTool, updateLeadTool } from "../tools/database";
import { sendSMSTool } from "../tools/twilio";

// Step 1: Map Typeform data to database format
const mapTypeformData = createStep({
  id: "map-typeform-data",
  description: "Transform Typeform data to database lead format",
  inputSchema: z.object({
    typeformData: z.any(),
  }),
  outputSchema: z.object({
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    postal_code: z.string().optional(),
    bcbs: z.string().optional(),
    bcbs_type: z.string().optional(),
    dentures: z.string().optional(),
    current_conditions: z.string().optional(),
    existing_fractured_teeth: z.string().optional(),
    employer_insurance: z.string().optional(),
    isAiTagOn: z.boolean().default(true),
  }),
  execute: async ({ inputData }) => {
    const formData = inputData.typeformData;
    
    // Map Typeform fields to database fields
    return {
      first_name: formData["First name"] || formData["field_YASEminSiKyr"] || "",
      last_name: formData["Last name"] || formData["field_HUN4hC0rEkts"] || "",
      email: formData["Email"] || formData["field_LjheJKKOgyAi"] || "",
      phone: formData["Phone number"] || formData["field_C78JCoLmtIp0"] || "+19804077356",
      postal_code: formData["What is your Zip Code?"] || formData["field_tm7VN1OQIEjp"] || "",
      bcbs: formData["Do you have Blue Cross Blue Shield for your health insurance?"] || formData["field_DTpuRP1oKRb4"] || "",
      bcbs_type: formData["Which Blue Cross Blue Shield plan do you have?"] || formData["field_RfqA5AeM9dbK"] || "",
      dentures: formData["Which dentures do you currently have?"] || formData["field_xcCqRjmpnj0h"] || "",
      current_conditions: formData["What Best Describes Your Condition?"] || formData["field_oEnES0AUWYG6"] || "",
      existing_fractured_teeth: formData["Do you have existing fractured or decaying teeth?"] || formData["field_9oluKuDjHQpE"] || "",
      employer_insurance: formData["Does an employer provide your insurance?"] || "Yes",
      isAiTagOn: true,
    };
  },
});

// Step 2: Create lead in database using API-based tool
const createLeadStep = createStep(createLeadTool);

// Step 3: Prepare data for AI analysis
const prepareAIData = createStep({
  id: "prepare-ai-data",
  description: "Prepare lead data for AI analysis",
  inputSchema: z.object({
    leadId: z.number(),
    success: z.boolean(),
    error: z.string().optional(),
  }),
  outputSchema: z.object({
    leadId: z.number(),
    leadData: z.any(),
  }),
  execute: async ({ inputData, getInitData }) => {
    if (!inputData.success) {
      throw new Error(`Lead creation failed: ${inputData.error}`);
    }
    
    // Get the original typeform data from initial workflow input
    const initData = getInitData();
    const formData = initData.typeformData;
    
    // Create lead data object for AI analysis
    const leadData = {
      id: inputData.leadId,
      first_name: formData["First name"] || formData["field_YASEminSiKyr"] || "",
      last_name: formData["Last name"] || formData["field_HUN4hC0rEkts"] || "",
      email: formData["Email"] || formData["field_LjheJKKOgyAi"] || "",
      phone: formData["Phone number"] || formData["field_C78JCoLmtIp0"] || "+19804077356",
      // Add other fields for AI analysis context
      current_conditions: formData["What Best Describes Your Condition?"] || formData["field_oEnES0AUWYG6"] || "",
      existing_fractured_teeth: formData["Do you have existing fractured or decaying teeth?"] || formData["field_9oluKuDjHQpE"] || "",
      bcbs: formData["Do you have Blue Cross Blue Shield for your health insurance?"] || formData["field_DTpuRP1oKRb4"] || "",
      transcript: "", // Empty initially
    };
    
    return {
      leadId: inputData.leadId,
      leadData: leadData,
    };
  },
});

// Step 4: AI Analysis
const aiAnalysisStep = createStep({
  id: "ai-analysis",
  description: "Analyze patient data with AI assistant",
  inputSchema: z.object({
    leadId: z.number(),
    leadData: z.any(),
  }),
  outputSchema: z.object({
    leadId: z.number(),
    aiResponse: z.object({
      question: z.string(),
      jsonField: z.any(),
    }),
    leadData: z.any(),
  }),
  execute: async ({ inputData }) => {
    const chatHistory = inputData.leadData.transcript || "";
    
    const aiResponse = await analyzeDentalDataTool(
      inputData.leadData,
      chatHistory
    );
    
    return {
      leadId: inputData.leadId,
      aiResponse,
      leadData: inputData.leadData,
    };
  },
});

// Step 5: Prepare update data for lead
const prepareUpdateData = createStep({
  id: "prepare-update-data", 
  description: "Prepare AI results for database update",
  inputSchema: z.object({
    leadId: z.number(),
    aiResponse: z.object({
      question: z.string(),
      jsonField: z.any(),
    }),
    leadData: z.any(),
  }),
  outputSchema: z.object({
    leadId: z.number(),
    updateData: z.any(),
  }),
  execute: async ({ inputData }) => {
    const { aiResponse } = inputData;
    
    const updateData = {
      transcript: `bot: ${aiResponse.question}`,
      ...aiResponse.jsonField,
    };
    
    return {
      leadId: inputData.leadId,
      updateData: updateData,
    };
  },
});

// Step 6: Update lead with AI results using API-based tool
const updateLeadStep = createStep(updateLeadTool);

// Step 7: Prepare SMS data
const prepareSMSData = createStep({
  id: "prepare-sms-data",
  description: "Prepare SMS data from update results",
  inputSchema: z.object({
    success: z.boolean(),
    error: z.string().optional(),
  }),
  outputSchema: z.object({
    to: z.string(),
    message: z.string(),
  }),
  execute: async ({ inputData, getInitData, getStepResult }) => {
    if (!inputData.success) {
      throw new Error(`Lead update failed: ${inputData.error}`);
    }
    
    // Get AI analysis results from previous step
    const aiAnalysisResult = getStepResult(aiAnalysisStep);
    const initData = getInitData();
    const formData = initData.typeformData;
    
    const phoneNumber = formData["Phone number"] || formData["field_C78JCoLmtIp0"] || "+19804077356";
    const smsMessage = aiAnalysisResult?.aiResponse?.question || "Thank you for your submission! Our dental team will review your information and contact you soon.";
    
    return {
      to: phoneNumber,
      message: smsMessage,
    };
  },
});

// Step 8: Send SMS using tool
const sendSMSStep = createStep(sendSMSTool);

// Main workflow (replaces entire "Brux dental Bot Flow")
export const dentalBotWorkflow = createWorkflow({
  id: "dental-bot-workflow",
  inputSchema: z.object({
    typeformData: z.any().describe("Typeform submission data"),
  }),
  outputSchema: z.object({
    success: z.boolean(),
    messageSid: z.string().optional(),
    error: z.string().optional(),
  }),
})
  .then(mapTypeformData)
  .then(createLeadStep)
  .then(prepareAIData)
  .then(aiAnalysisStep)
  .then(prepareUpdateData)
  .then(updateLeadStep)
  .then(prepareSMSData)
  .then(sendSMSStep);

dentalBotWorkflow.commit(); 