import { createServerFn } from "@tanstack/react-start";
import { streamText } from "ai";
import { z } from "zod";
import { CHAT_MODEL, createLovableAiGatewayProvider } from "./ai-gateway.server";
import { buildPrompt, ToolInput } from "./prompts";

const ChatInput = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string(),
    }),
  ),
});

function gateway() {
  const key = process.env["LOVABLE_API_KEY"];
  if (!key) throw new Error("AI is not configured (missing key).");
  return createLovableAiGatewayProvider(key);
}

export const runAssistantTool = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ToolInput.parse(input))
  .handler(async ({ data }) => {
    const { system, prompt } = buildPrompt(data);
    const result = streamText({
      model: gateway()(CHAT_MODEL),
      system,
      prompt,
    });
    return { text: await result.text };
  });

export const chatWithAssistant = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ChatInput.parse(input))
  .handler(async ({ data }) => {
    const result = streamText({
      model: gateway()(CHAT_MODEL),
      system:
        "You are the AI Workplace Productivity Assistant, a concise, professional workplace copilot. " +
        "Help with emails, meetings, planning, research and general work questions. " +
        "Use clear markdown: short paragraphs, bullet points and headings when useful. " +
        "State uncertainty explicitly and never invent facts, names, numbers or citations.",
      messages: data.messages,
    });
    return { text: await result.text };
  });
