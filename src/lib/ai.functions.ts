import { createServerFn } from "@tanstack/react-start";
import { streamText } from "ai";
import { getGateway, CHAT_MODEL, ASSISTANT_SYSTEM } from "./ai-gateway.server";
import { buildPrompt, ToolInput, ChatInput } from "./prompts";

export const runAssistantTool = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ToolInput.parse(input))
  .handler(async ({ data }) => {
    const { system, prompt } = buildPrompt(data);
    const result = streamText({ model: getGateway()(CHAT_MODEL), system, prompt });
    return { text: await result.text };
  });

export const chatWithAssistant = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ChatInput.parse(input))
  .handler(async ({ data }) => {
    const result = streamText({
      model: getGateway()(CHAT_MODEL),
      system: ASSISTANT_SYSTEM,
      messages: data.messages,
    });
    return { text: await result.text };
  });
