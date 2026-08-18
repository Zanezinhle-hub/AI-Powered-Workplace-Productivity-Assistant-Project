import { Check, Copy, Download, Eye, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  value: string;
  onChange: (value: string) => void;
  loading?: boolean;
  error?: string | null;
  emptyHint: string;
  filename?: string;
};

export function AiOutput({
  value,
  onChange,
  loading,
  error,
  emptyHint,
  filename = "ai-output.md",
}: Props) {
  const [editing, setEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  const download = () => {
    const blob = new Blob([value], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="surface-card flex min-h-[24rem] flex-col rounded-2xl border border-border">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <h2 className="font-display text-sm font-semibold">AI output</h2>
        <div className="ml-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            disabled={!value}
            onClick={() => setEditing((v) => !v)}
            className="gap-1.5"
          >
            {editing ? <Eye className="size-3.5" /> : <Pencil className="size-3.5" />}
            {editing ? "Preview" : "Edit"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            disabled={!value}
            onClick={() => {
              void navigator.clipboard.writeText(value);
              setCopied(true);
            }}
            className="gap-1.5"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? "Copied" : "Copy"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            disabled={!value}
            onClick={download}
            className="gap-1.5"
          >
            <Download className="size-3.5" />
            <span className="hidden sm:inline">Export</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4">
        {loading ? (
          <div className="space-y-3">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-24 w-full" />
          </div>
        ) : error ? (
          <p className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </p>
        ) : !value ? (
          <p className="text-sm text-muted-foreground">{emptyHint}</p>
        ) : editing ? (
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-[20rem] resize-y font-mono text-xs leading-relaxed"
          />
        ) : (
          <div className="prose-ai text-sm text-foreground">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
