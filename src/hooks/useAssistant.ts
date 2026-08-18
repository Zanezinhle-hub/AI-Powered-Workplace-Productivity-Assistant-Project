import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { runAssistantTool } from "@/lib/ai.functions";
import type { ToolInputType } from "@/lib/prompts";

export function useAssistant() {
  const run = useServerFn(runAssistantTool);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async (data: ToolInputType) => {
    setLoading(true);
    setError(null);
    try {
      const result = await run({ data });
      setOutput(result.text);
    } catch (err) {
      setError(
        err instanceof Error
          ? `The assistant could not complete this request: ${err.message}`
          : "The assistant could not complete this request. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return { output, setOutput, loading, error, generate };
}
