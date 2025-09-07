import { handleAdminMessage } from "@/src/mastra/api/webhooks";

export async function POST(request: Request) {
  try {
    // Call the Mastra webhook handler directly
    const response = await handleAdminMessage(request);
    return response;
  } catch (error) {
    console.error("Error in admin message webhook:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}