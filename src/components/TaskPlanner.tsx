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

export function TaskPlanner() {
  const { output, setOutput, loading, error, generate } = useAssistant();
  const [goal, setGoal] = useState("");
  const [context, setContext] = useState("");
  const [horizon, setHorizon] = useState("This week (5 working days)");
  const [hoursPerDay, setHoursPerDay] = useState("4");

  return (
    <ToolPage
      title="AI Task Planner"
      description="Describe your goal and constraints. The assistant returns a prioritised plan you can edit and share."
      form={
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            void generate({ tool: "planner", goal, context, horizon, hoursPerDay });
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="goal">Goal *</Label>
            <Input
              id="goal"
              required
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="e.g. Launch the internal onboarding portal"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="context">Context & constraints</Label>
            <Textarea
              id="context"
              rows={6}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Team size, dependencies, fixed meetings, deadlines, tools available…"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Time horizon</Label>
              <Select value={horizon} onValueChange={setHorizon}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["Today", "This week (5 working days)", "Two weeks", "This month", "Quarter"].map(
                    (h) => (
                      <SelectItem key={h} value={h}>
                        {h}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="hours">Focus hours per day</Label>
              <Input
                id="hours"
                type="number"
                min="1"
                max="12"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(e.target.value)}
              />
            </div>
          </div>
          <Button type="submit" disabled={loading || !goal} className="w-full">
            {loading ? "Planning…" : "Generate task plan"}
          </Button>
        </form>
      }
      output={
        <AiOutput
          value={output}
          onChange={setOutput}
          loading={loading}
          error={error}
          filename="task-plan.md"
          emptyHint="Your prioritised task plan and daily schedule will appear here."
        />
      }
    />
  );
}
