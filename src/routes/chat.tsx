import { createFileRoute } from "@tanstack/react-router";
import { Chatbot } from "@/components/Chatbot";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "AI Chatbot | AI Workplace Assistant" },
      {
        name: "description",
        content:
          "Chat with an AI workplace copilot about emails, meetings, planning, research and day-to-day work questions.",
      },
      { property: "og:title", content: "AI Workplace Chatbot" },
      {
        property: "og:description",
        content: "Ask the AI assistant anything about your day-to-day work.",
      },
    ],
  }),
  component: Chatbot,
});
