import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AiOutput } from "@/components/AiOutput";
import { ToolPage } from "@/components/ToolPage";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAssistant } from "@/hooks/useAssistant";

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
  component: ResearchPage,
});

function ResearchPage() {
  const { output, setOutput, loading, error, generate } = useAssistant();
  const [topic, setTopic] = useState("");
  const [depth, setDepth] = useState("Standard brief");
  const [audience, setAudience] = useState("Internal team");

  return (
    <ToolPage
      title="AI Research Assistant"
      description="Get a structured starting point for any work topic. The assistant has no live web access, so claims needing verification are flagged."
      form={
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            void generate({ tool: "research", topic, depth, audience });
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="topic">Research topic or question *</Label>
            <Textarea
              id="topic"
              required
              rows={6}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. What should we consider before adopting a four-day work week?"
            />
          </div>
          <div className="space-y-2">
            <Label>Depth</Label>
            <Select value={depth} onValueChange={setDepth}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["Quick overview", "Standard brief", "In-depth analysis"].map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="audience">Audience</Label>
            <Input
              id="audience"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="e.g. Executive leadership, engineering team"
            />
          </div>
          <Button type="submit" disabled={loading || !topic} className="w-full">
            {loading ? "Researching…" : "Generate research brief"}
          </Button>
        </form>
      }
      output={
        <AiOutput
          value={output}
          onChange={setOutput}
          loading={loading}
          error={error}
          filename="research-brief.md"
          emptyHint="Your research brief will appear here, with uncertain claims marked for verification."
        />
      }
    />
  );
}
