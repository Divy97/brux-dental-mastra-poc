import { createTool } from "@mastra/core/tools";
import { z } from "zod";

const API_BASE_URL = process.env.API_URL || "http://localhost:3000";

// Lead creation tool (replaces n8n "Insert rows in a table")
export const createLeadTool = createTool({
  id: "create-lead",
  description: "Create a new dental consultation lead from Typeform data",
  inputSchema: z.object({
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    postal_code: z.string().optional(),
    bcbs_type: z.string().optional(),
    bcbs: z.string().optional(),
    dentures: z.string().optional(),
    current_conditions: z.string().optional(),
    existing_fractured_teeth: z.string().optional(),
    employer_insurance: z.string().optional(),
    isAiTagOn: z.boolean().default(true),
  }),
  outputSchema: z.object({
    leadId: z.number(),
    success: z.boolean(),
    error: z.string().optional(),
  }),
  execute: async ({ context }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(context),
      });

      if (!response.ok) {
        throw new Error(`Failed to create lead: ${response.statusText}`);
      }

      const result = await response.json();
      return {
        leadId: result.id,
        success: true,
      };
    } catch (error) {
      console.error("Error creating lead:", error);
      return {
        leadId: 0,
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
});

// Lead update tool (replaces n8n "Update rows in a table")
export const updateLeadTool = createTool({
  id: "update-lead",
  description: "Update an existing lead with AI analysis or other data",
  inputSchema: z.object({
    leadId: z.number(),
    updateData: z.any(),
  }),
  outputSchema: z.object({
    success: z.boolean(),
    error: z.string().optional(),
  }),
  execute: async ({ context }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/leads/${context.leadId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(context.updateData),
      });

      if (!response.ok) {
        throw new Error(`Failed to update lead: ${response.statusText}`);
      }

      return { success: true };
    } catch (error) {
      console.error("Error updating lead:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
});

// Get lead tool (replaces n8n "Execute a SQL query")
export const getLeadTool = createTool({
  id: "get-lead",
  description: "Get lead information by ID",
  inputSchema: z.object({
    leadId: z.number(),
  }),
  outputSchema: z.object({
    lead: z.any(),
    success: z.boolean(),
    error: z.string().optional(),
  }),
  execute: async ({ context }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/leads/${context.leadId}`);

      if (!response.ok) {
        throw new Error(`Failed to get lead: ${response.statusText}`);
      }

      const lead = await response.json();
      return {
        lead,
        success: true,
      };
    } catch (error) {
      console.error("Error getting lead:", error);
      return {
        lead: null,
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
});

// Update transcript tool (replaces n8n transcript updates)
export const updateTranscriptTool = createTool({
  id: "update-transcript",
  description: "Update transcript with new messages",
  inputSchema: z.object({
    leadId: z.number(),
    message: z.string(),
    sender: z.enum(["user", "bot", "agent"]),
  }),
  outputSchema: z.object({
    success: z.boolean(),
    error: z.string().optional(),
  }),
  execute: async ({ context }) => {
    try {
      // Use the existing transcript update logic via API
      const response = await fetch(`${API_BASE_URL}/api/leads/${context.leadId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transcript: {
            append: {
              timestamp: new Date().toISOString(),
              sender: context.sender,
              message: context.message,
            }
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update transcript: ${response.statusText}`);
      }

      return { success: true };
    } catch (error) {
      console.error("Error updating transcript:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
}); 