import type { ReactNode } from "react";
import { Disclaimer } from "@/components/Disclaimer";

export function ToolPage({
  title,
  description,
  form,
  output,
}: {
  title: string;
  description: string;
  form: ReactNode;
  output: ReactNode;
}) {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="font-display text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="surface-card space-y-4 rounded-2xl border border-border p-5">{form}</div>
        {output}
      </div>

      <Disclaimer />
    </div>
  );
}
