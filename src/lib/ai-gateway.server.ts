import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

export const CHAT_MODEL = "google/gemini-3.7-flash";

export const ASSISTANT_SYSTEM =
  "You are the AI Workplace Productivity Assistant, a concise, professional workplace copilot. " +
  "Help with emails, meetings, planning, research and general work questions. " +
  "Use clear markdown: short paragraphs, bullet points and headings when useful. " +
  "State uncertainty explicitly and never invent facts, names, numbers or citations.";

export function createLovableAiGatewayProvider(apiKey: string) {
  return createOpenAICompatible({
    name: "lovable-gateway",
    baseURL: "https://ai.gateway.lovable.dev/v1",
    headers: { "Lovable-API-Key": apiKey },
  });
}

export function getGateway() {
  const key = process.env["LOVABLE_API_KEY"];
  if (!key) throw new Error("AI is not configured (missing key).");
  return createLovableAiGatewayProvider(key);
}
