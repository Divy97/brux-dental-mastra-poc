import { Agent } from "@mastra/core";
import { openai } from "@ai-sdk/openai";

// Define proper types for lead data
interface LeadData {
  first_name: string;
  last_name: string;
  [key: string]: unknown;
}

// Define the response structure
interface DentalAnalysisResponse {
  question: string;
  jsonField: {
    numberOfMissingTeeth: number;
    isDecayedOrRotTeethPresent: boolean;
    isUserApplicableForBcbsPpoInsurance: boolean;
    isUserUploadingCards: boolean;
    isManualConsultationRequired: boolean;
    isInsuranceCardValid: boolean;
    isUserInterestedInCashOptions: boolean;
    okayWithPrice: boolean;
    humanInterventionNeeded: boolean;
    userInsuranceCard: string;
    preferredTime: string;
    preferredDay: string;
  };
}

// Dental assistant agent (replaces n8n OpenAI Assistant nodes)
export const dentalAssistant = new Agent({
  name: "Brux Dental Assistant",
  instructions: `You are a professional dental consultation assistant for Brux Dental. Your role is to:

1. Analyze patient dental conditions and symptoms
2. Assess insurance eligibility (especially Blue Cross Blue Shield)
3. Determine treatment urgency and requirements
4. Extract structured information from patient responses
5. Decide if manual consultation is needed

When analyzing patient information, you must return a JSON response with:
- question: Your next question or response to the patient
- jsonField: Structured analysis containing boolean flags and extracted data

Key assessment criteria:
- numberOfMissingTeeth: Count of missing teeth (0-32)
- isDecayedOrRotTeethPresent: Are there decayed/rotten teeth?
- isUserApplicableForBcbsPpoInsurance: BCBS PPO eligibility
- isManualConsultationRequired: Need human dentist review?
- humanInterventionNeeded: Urgent attention required?
- isUserInterestedInCashOptions: Payment plan interest
- okayWithPrice: Price acceptance
- preferredTime/preferredDay: Scheduling preferences

Always be empathetic, professional, and focused on patient care.`,
  
  model: openai("gpt-4"),
  tools: {},
});

// Tool for structured dental analysis (replaces n8n OpenAI parsing)
export const analyzeDentalDataTool = async (
  leadData: LeadData,
  chatHistory: string
): Promise<DentalAnalysisResponse> => {
  const prompt = `Lead Details:
lead.first_name: ${leadData.first_name}
lead.last_name: ${leadData.last_name}

Chat History: ${chatHistory}

Based on the lead details and chat history, analyze the patient's dental condition and provide:
1. A question or response to continue the conversation
2. Structured analysis of their condition

Return your response in this exact JSON format:
{
  "question": "Your next question or response to the patient",
  "jsonField": {
    "numberOfMissingTeeth": 0,
    "isDecayedOrRotTeethPresent": false,
    "isUserApplicableForBcbsPpoInsurance": false,
    "isUserUploadingCards": false,
    "isManualConsultationRequired": false,
    "isInsuranceCardValid": false,
    "isUserInterestedInCashOptions": false,
    "okayWithPrice": false,
    "humanInterventionNeeded": false,
    "userInsuranceCard": "",
    "preferredTime": "",
    "preferredDay": ""
  }
}`;

  const response = await dentalAssistant.generateVNext([
    { role: "user", content: prompt }
  ]);

  try {
    const parsed = JSON.parse(response.text);
    return parsed;
  } catch {
    // Fallback if JSON parsing fails - removed unused error parameter
    return {
      question: response.text || "Our team will reach out shortly to you",
      jsonField: {
        numberOfMissingTeeth: 0,
        isDecayedOrRotTeethPresent: false,
        isUserApplicableForBcbsPpoInsurance: false,
        isUserUploadingCards: false,
        isManualConsultationRequired: true, // Safe default
        isInsuranceCardValid: false,
        isUserInterestedInCashOptions: false,
        okayWithPrice: false,
        humanInterventionNeeded: true, // Safe default
        userInsuranceCard: "",
        preferredTime: "",
        preferredDay: "",
      },
    };
  }
};
