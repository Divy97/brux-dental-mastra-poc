
import { Mastra } from "@mastra/core";
import { registerApiRoute } from "@mastra/core/server";
import { dentalAssistant } from "./agents/dental-assistant";
import { dentalBotWorkflow } from "./workflows/dental-bot-workflow";
import { smsHandlerWorkflow } from "./workflows/sms-handler-workflow";
import { adminMessageWorkflow } from "./workflows/admin-message-workflow";
import { handleTypeformSubmission, handleIncomingSMS, handleAdminMessage } from "./api/webhooks";

export const mastra = new Mastra({

  agents: { 
    dentalAssistant 
  },
  workflows: { 
    dentalBotWorkflow,
    smsHandlerWorkflow,
    adminMessageWorkflow,
  },
  server: {
    apiRoutes: [
      registerApiRoute("/webhooks/typeform", {
        method: "POST",
        handler: async (c) => {
          const request = c.req.raw;
          return await handleTypeformSubmission(request);
        }
      }),
      registerApiRoute("/webhooks/twilio/sms", {
        method: "POST",
        handler: async (c) => {
          const request = c.req.raw;
          return await handleIncomingSMS(request);
        }
      }),
      registerApiRoute("/webhooks/admin/message", {
        method: "POST",
        handler: async (c) => {
          const request = c.req.raw;
          return await handleAdminMessage(request);
        }
      })
    ]
  }
});
