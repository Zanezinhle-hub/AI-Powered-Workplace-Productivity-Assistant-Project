import { createFileRoute } from "@tanstack/react-router";
import { EmailGenerator } from "@/components/EmailGenerator";

export const Route = createFileRoute("/email")({
  head: () => ({
    meta: [
      { title: "Smart Email Generator | AI Workplace Assistant" },
      {
        name: "description",
        content:
          "Generate professional workplace emails with the right tone, structure and subject lines in seconds.",
      },
      { property: "og:title", content: "Smart Email Generator" },
      {
        property: "og:description",
        content: "Draft clear, professional workplace emails with structured AI prompts.",
      },
    ],
  }),
  component: EmailGenerator,
});
