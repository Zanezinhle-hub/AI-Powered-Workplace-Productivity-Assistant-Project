import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AiOutput } from "@/components/AiOutput";
import { ToolPage } from "@/components/ToolPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAssistant } from "@/hooks/useAssistant";

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
  component: EmailPage,
});

function EmailPage() {
  const { output, setOutput, loading, error, generate } = useAssistant();
  const [recipient, setRecipient] = useState("");
  const [purpose, setPurpose] = useState("");
  const [keyPoints, setKeyPoints] = useState("");
  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("Short (under 150 words)");

  return (
    <ToolPage
      title="Smart Email Generator"
      description="Describe the situation and the assistant drafts a ready-to-review email with subject line options."
      form={
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            void generate({ tool: "email", recipient, purpose, keyPoints, tone, length });
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="recipient">Recipient / audience</Label>
            <Input
              id="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="e.g. Head of Operations, external client"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="purpose">Purpose *</Label>
            <Input
              id="purpose"
              required
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="e.g. Request a deadline extension for the Q3 report"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="points">Key points</Label>
            <Textarea
              id="points"
              rows={5}
              value={keyPoints}
              onChange={(e) => setKeyPoints(e.target.value)}
              placeholder="One point per line: context, blockers, what you need, dates..."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Tone</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["Professional", "Friendly", "Direct", "Formal", "Persuasive", "Apologetic"].map(
                    (t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Length</Label>
              <Select value={length} onValueChange={setLength}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Very short (under 80 words)",
                    "Short (under 150 words)",
                    "Standard (150-250 words)",
                    "Detailed (250-400 words)",
                  ].map((l) => (
                    <SelectItem key={l} value={l}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" disabled={loading || !purpose} className="w-full">
            {loading ? "Drafting…" : "Generate email"}
          </Button>
        </form>
      }
      output={
        <AiOutput
          value={output}
          onChange={setOutput}
          loading={loading}
          error={error}
          filename="email-draft.md"
          emptyHint="Your generated email will appear here. You can switch to Edit mode to refine it before copying."
        />
      }
    />
  );
}
