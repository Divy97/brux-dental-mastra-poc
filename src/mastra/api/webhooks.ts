import crypto from "crypto";

// Define types for Typeform webhook payload
interface TypeformAnswer {
  type: string;
  field?: {
    id: string;
    title: string;
  };
  text?: string;
  email?: string;
  phone_number?: string;
  number?: number;
  choice?: {
    label: string;
  };
  choices?: {
    labels: string[];
  };
  boolean?: boolean;
  date?: string;
  value?: unknown;
}

interface TypeformFormResponse {
  answers: TypeformAnswer[];
  [key: string]: unknown;
}

interface TypeformPayload {
  form_response: TypeformFormResponse;
  event_id: string;
  [key: string]: unknown;
}

interface ExtractedFormData {
  [key: string]: string | number | boolean;
}

interface WorkflowResult {
  status: string;
  result?: {
    success?: boolean;
    messageSid?: string;
    leadId?: string;
    error?: string;
  };
  error?: string | Error;
}

interface AdminMessageRequest {
  msg: string;
  leadId: string;
}

// Verify Typeform webhook signature for security
function verifyTypeformSignature(signature: string | null, payload: string): boolean {
  if (!signature || !process.env.TYPEFORM_WEBHOOK_SECRET) {
    console.warn("Missing Typeform signature or secret - proceeding without verification");
    return true; // Allow for development, but warn
  }

  const hash = crypto
    .createHmac("sha256", process.env.TYPEFORM_WEBHOOK_SECRET)
    .update(payload)
    .digest("base64");
  
  const expectedSignature = `sha256=${hash}`;
  return signature === expectedSignature;
}

// Extract form responses from Typeform webhook payload
function extractTypeformData(payload: TypeformPayload): ExtractedFormData {
  const formResponse = payload.form_response;
  if (!formResponse || !formResponse.answers) {
    throw new Error("Invalid Typeform payload structure");
  }

  // Convert Typeform answers array to key-value pairs
  const extractedData: ExtractedFormData = {};
  
  formResponse.answers.forEach((answer: TypeformAnswer) => {
    const fieldTitle = answer.field?.title || `field_${answer.field?.id}`;
    const fieldId = answer.field?.id;
    
    // Extract the actual answer value based on type
    let value: string | number | boolean;
    switch (answer.type) {
      case "text":
        value = answer.text || "";
        break;
      case "email":
        value = answer.email || "";
        break;
      case "phone_number":
        value = answer.phone_number || "";
        break;
      case "number":
        value = answer.number || 0;
        break;
      case "choice":
        value = answer.choice?.label || "";
        break;
      case "choices":
        value = answer.choices?.labels?.join(", ") || "";
        break;
      case "boolean":
        value = answer.boolean ? "Yes" : "No";
        break;
      case "date":
        value = answer.date || "";
        break;
      default:
        value = answer.text || String(answer.value) || "N/A";
    }
    
    // Store both by title and by field ID for flexibility
    extractedData[fieldTitle] = value;
    if (fieldId) {
      extractedData[`field_${fieldId}`] = value;
    }
  });

  return extractedData;
}

// Execute dental bot workflow using proper Mastra pattern
async function executeDentalBotWorkflow(typeformData: ExtractedFormData): Promise<WorkflowResult> {
  try {
    // Import the mastra instance to get the registered workflow
    const { mastra } = await import("../index");
    
    // Get the workflow and create a run
    const workflow = mastra.getWorkflow("dentalBotWorkflow");
    const run = await workflow.createRunAsync();
    
    // Start the workflow with input data
    const result = await run.start({
      inputData: {
        typeformData
      }
    });
    
    return result;
  } catch (error) {
    console.error("Workflow execution error:", error);
    throw error;
  }
}

// Typeform webhook handler (replaces n8n webhook "03e1ce0d-89a9-46a8-ae43-4b23650778a3")
export async function handleTypeformSubmission(req: Request) {
  try {
    const rawPayload = await req.text();
    const signature = req.headers.get("typeform-signature");
    
    // Verify webhook signature for security
    if (!verifyTypeformSignature(signature, rawPayload)) {
      console.error("Invalid Typeform webhook signature");
      return new Response(JSON.stringify({ error: "Invalid signature" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    const payload: TypeformPayload = JSON.parse(rawPayload);
    console.log("Received Typeform submission:", payload.event_id);
    
    // Extract form data from Typeform payload
    const typeformData = extractTypeformData(payload);
    console.log("Extracted form data:", typeformData);
    
    // Execute the dental bot workflow
    const result = await executeDentalBotWorkflow(typeformData);
    
    console.log("Workflow execution completed:", result);
    
    // Extract the actual workflow output from the run result according to Mastra standards
    let workflowOutput: { success?: boolean; messageSid?: string; error?: string } = {};
    let success = false;
    
    if (result.status === "success" && result.result) {
      workflowOutput = result.result;
      success = workflowOutput.success || false;
    } else if (result.status === "failed") {
      console.error("Workflow failed:", result.error);
    }
    
    return new Response(JSON.stringify({ 
      success,
      messageSid: workflowOutput.messageSid,
      status: result.status,
      error: result.status === "failed" ? result.error : workflowOutput.error
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Typeform webhook error:", error);
    return new Response(JSON.stringify({ 
      error: "Failed to process submission",
      details: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Twilio SMS webhook handler (replaces n8n Twilio trigger)
export async function handleIncomingSMS(req: Request) {
  try {
    const formData = await req.formData();
    
    const smsData = {
      from: formData.get("From") as string,
      to: formData.get("To") as string,
      body: formData.get("Body") as string,
    };
    
    console.log("Received SMS:", smsData);
    
    // Import the mastra instance to get the registered workflow
    const { mastra } = await import("../index");
    
    // Get the SMS handler workflow and create a run
    const workflow = mastra.getWorkflow("smsHandlerWorkflow");
    const run = await workflow.createRunAsync();
    
    // Start the workflow with input data
    const result = await run.start({
      inputData: { smsData }
    });
    
    let success = false;
    let leadId = null;
    if (result.status === "success" && result.result) {
      success = result.result.success || false;
      leadId = result.result.leadId;
    }
    
    return new Response(JSON.stringify({ 
      success, 
      status: result.status,
      leadId: leadId
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("SMS webhook error:", error);
    return new Response(JSON.stringify({ error: "Failed to process SMS" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Admin dashboard webhook handler (replaces n8n webhook "16fb8b9f-cbf4-4013-b4c5-b4cef91d660a")
export async function handleAdminMessage(req: Request) {
  try {
    const { msg, leadId }: AdminMessageRequest = await req.json();
    
    console.log("Received admin message:", { msg, leadId });
    
    // Import the mastra instance to get the registered workflow
    const { mastra } = await import("../index");
    
    // Get the admin message workflow and create a run
    const workflow = mastra.getWorkflow("adminMessageWorkflow");
    const run = await workflow.createRunAsync();
    
    // Start the workflow with input data
    const result = await run.start({
      inputData: { 
        leadId: parseInt(leadId), 
        message: msg 
      }
    });
    
    let success = false;

    if (result.status === "success" && result.result) {
      success = result.result.success || false;
    }
    
    return new Response(JSON.stringify({ 
      success, 
      status: result.status,
      leadId
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Admin message webhook error:", error);
    return new Response(JSON.stringify({ error: "Failed to process message" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
