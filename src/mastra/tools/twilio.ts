import { createTool } from "@mastra/core/tools";
import { z } from "zod";

// Twilio SMS sending tool (replaces n8n Twilio nodes)
export const sendSMSTool = createTool({
  id: "send-sms",
  description: "Send SMS message via Twilio",
  inputSchema: z.object({
    to: z.string().describe("Recipient phone number"),
    message: z.string().describe("SMS message content"),
    from: z.string().optional().describe("Sender phone number (defaults to TWILIO_PHONE_NUMBER)"),
  }),
  outputSchema: z.object({
    success: z.boolean(),
    messageSid: z.string().optional(),
    error: z.string().optional(),
  }),
  execute: async ({ context }) => {
    try {
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const fromNumber = context.from || process.env.TWILIO_PHONE_NUMBER;

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
            To: context.to,
            From: fromNumber,
            Body: context.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        return {
          success: true,
          messageSid: data.sid,
        };
      } else {
        return {
          success: false,
          error: data.message || "Failed to send SMS",
        };
      }
    } catch (error) {
      console.error("Error sending SMS:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
});

// Tool to validate phone numbers (replaces n8n "If" condition)
export const validatePhoneTool = createTool({
  id: "validate-phone",
  description: "Validate if phone number matches bot number",
  inputSchema: z.object({
    phoneNumber: z.string(),
    expectedNumber: z.string().optional(),
  }),
  outputSchema: z.object({
    isValid: z.boolean(),
    phoneNumber: z.string(),
  }),
  execute: async ({ context }) => {
    const expectedNumber = context.expectedNumber || process.env.TWILIO_PHONE_NUMBER;
    const isValid = context.phoneNumber === expectedNumber;
    
    return {
      isValid,
      phoneNumber: context.phoneNumber,
    };
  },
}); 