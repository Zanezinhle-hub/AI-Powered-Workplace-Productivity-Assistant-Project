import { createFileRoute } from "@tanstack/react-router";
import { ResearchAssistant } from "@/components/ResearchAssistant";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "AI Research Assistant | AI Workplace Assistant" },
      {
        name: "description",
        content:
          "Generate structured research briefs with key findings, trade-offs, open questions and next steps.",
      },
      { property: "og:title", content: "AI Research Assistant" },
      {
        property: "og:description",
        content: "Structured research briefs for work topics, with items flagged for verification.",
      },
    ],
  }),
  component: ResearchAssistant,
});
