import { createFileRoute } from "@tanstack/react-router";
import { MeetingSummarizer } from "@/components/MeetingSummarizer";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Meeting Notes Summarizer | AI Workplace Assistant" },
      {
        name: "description",
        content:
          "Turn messy meeting notes or transcripts into a summary, decisions, owners and action items.",
      },
      { property: "og:title", content: "Meeting Notes Summarizer" },
      {
        property: "og:description",
        content: "Convert raw meeting notes into decisions, action items and follow-ups.",
      },
    ],
  }),
  component: MeetingSummarizer,
});
