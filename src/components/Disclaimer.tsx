import { ShieldCheck } from "lucide-react";

export function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl border border-border bg-muted/60 p-4 text-xs leading-relaxed text-muted-foreground ${className}`}
    >
      <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
      <p>
        <span className="font-semibold text-foreground">Responsible AI notice:</span> outputs are
        AI-generated drafts and may be inaccurate, incomplete or biased. Review and edit every
        result before you send, publish or act on it. Do not enter confidential personal data,
        credentials or client information, and keep a human accountable for final decisions.
      </p>
    </div>
  );
}
