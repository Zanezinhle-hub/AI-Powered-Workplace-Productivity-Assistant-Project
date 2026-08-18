import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/Dashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard | AI Workplace Productivity Assistant" },
      {
        name: "description",
        content:
          "One AI workspace for professionals: draft emails, summarise meetings, plan tasks, research topics and chat with an AI assistant.",
      },
      { property: "og:title", content: "AI Workplace Productivity Assistant" },
      {
        property: "og:description",
        content:
          "Automate everyday workplace tasks with AI: emails, meeting summaries, task plans, research briefs and a built-in chatbot.",
      },
    ],
  }),
  component: Dashboard,
});
