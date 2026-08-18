import { z } from "zod";

export const ToolInput = z.discriminatedUnion("tool", [
  z.object({
    tool: z.literal("email"),
    recipient: z.string(),
    purpose: z.string(),
    keyPoints: z.string(),
    tone: z.string(),
    length: z.string(),
  }),
  z.object({
    tool: z.literal("notes"),
    notes: z.string(),
    focus: z.string(),
  }),
  z.object({
    tool: z.literal("planner"),
    goal: z.string(),
    context: z.string(),
    horizon: z.string(),
    hoursPerDay: z.string(),
  }),
  z.object({
    tool: z.literal("research"),
    topic: z.string(),
    depth: z.string(),
    audience: z.string(),
  }),
]);

export type ToolInputType = z.infer<typeof ToolInput>;

const BASE_SYSTEM =
  "You are the AI Workplace Productivity Assistant, an expert workplace copilot for busy professionals. " +
  "Write in clear, professional business English. Output well-structured markdown. " +
  "Never fabricate facts, figures, quotes, names or sources — if something is unknown, mark it as [assumption] or [needs confirmation].";

export function buildPrompt(data: ToolInputType): { system: string; prompt: string } {
  switch (data.tool) {
    case "email":
      return {
        system: `${BASE_SYSTEM} You draft workplace emails. Always return: a "Subject:" line, then the email body, then 2 short alternative subject lines.`,
        prompt: [
          `Draft a workplace email.`,
          `Recipient / audience: ${data.recipient || "colleague"}`,
          `Purpose: ${data.purpose}`,
          `Key points to include:\n${data.keyPoints || "(none provided)"}`,
          `Tone: ${data.tone}`,
          `Length: ${data.length}`,
          `Use [placeholders] for any detail that was not provided.`,
        ].join("\n\n"),
      };
    case "notes":
      return {
        system: `${BASE_SYSTEM} You summarise meeting notes and transcripts.`,
        prompt: [
          `Summarise the following meeting notes.`,
          `Return these sections: ## Summary (3-5 bullets), ## Decisions, ## Action items (markdown table: Owner | Action | Due date), ## Risks & open questions, ## Suggested follow-up email (short).`,
          data.focus ? `Pay special attention to: ${data.focus}` : "",
          `Notes:\n"""\n${data.notes}\n"""`,
        ]
          .filter(Boolean)
          .join("\n\n"),
      };
    case "planner":
      return {
        system: `${BASE_SYSTEM} You are a pragmatic work planner who produces realistic, prioritised plans.`,
        prompt: [
          `Build an actionable task plan.`,
          `Goal: ${data.goal}`,
          `Context / constraints: ${data.context || "(none provided)"}`,
          `Time horizon: ${data.horizon}`,
          `Available focus time per day: ${data.hoursPerDay} hours`,
          `Return: ## Objective, ## Prioritised tasks (markdown table: # | Task | Priority (P1-P3) | Est. effort | Suggested day), ## Daily schedule, ## Dependencies & blockers, ## Definition of done.`,
        ].join("\n\n"),
      };
    case "research":
      return {
        system: `${BASE_SYSTEM} You are a research assistant. You have no live web access, so rely on general knowledge and clearly flag anything that must be verified against primary sources.`,
        prompt: [
          `Produce a research brief.`,
          `Topic: ${data.topic}`,
          `Depth: ${data.depth}`,
          `Audience: ${data.audience}`,
          `Return: ## Executive summary, ## Key findings (bullets), ## Considerations & trade-offs, ## Open questions to verify, ## Suggested next steps and search queries.`,
          `Do not invent citations or statistics. Mark uncertain claims with [needs verification].`,
        ].join("\n\n"),
      };
  }
}
