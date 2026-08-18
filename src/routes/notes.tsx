import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AiOutput } from "@/components/AiOutput";
import { ToolPage } from "@/components/ToolPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAssistant } from "@/hooks/useAssistant";

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
  component: NotesPage,
});

function NotesPage() {
  const { output, setOutput, loading, error, generate } = useAssistant();
  const [notes, setNotes] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <ToolPage
      title="Meeting Notes Summarizer"
      description="Paste raw notes or a transcript. Get a structured summary with decisions, owners, due dates and open questions."
      form={
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            void generate({ tool: "notes", notes, focus });
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="notes">Meeting notes or transcript *</Label>
            <Textarea
              id="notes"
              required
              rows={14}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Paste your raw notes here — bullet points, transcript text or shorthand all work."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="focus">Focus (optional)</Label>
            <Input
              id="focus"
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              placeholder="e.g. budget decisions and delivery risks"
            />
          </div>
          <Button type="submit" disabled={loading || !notes} className="w-full">
            {loading ? "Summarising…" : "Summarise meeting"}
          </Button>
        </form>
      }
      output={
        <AiOutput
          value={output}
          onChange={setOutput}
          loading={loading}
          error={error}
          filename="meeting-summary.md"
          emptyHint="Your summary, decisions and action items will appear here."
        />
      }
    />
  );
}
