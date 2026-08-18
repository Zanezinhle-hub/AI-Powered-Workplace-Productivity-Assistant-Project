import { useServerFn } from "@tanstack/react-start";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { chatWithAssistant } from "@/lib/ai.functions";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "Help me say no to a meeting request politely",
  "Give me an agenda for a 30-minute project kickoff",
  "How do I prioritise when everything is urgent?",
];

export function Chatbot() {
  const chat = useServerFn(chatWithAssistant);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);
    setError(null);
    try {
      const result = await chat({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: result.text }]);
    } catch (err) {
      setError(
        err instanceof Error
          ? `The assistant could not reply: ${err.message}`
          : "The assistant could not reply. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="font-display text-2xl font-semibold tracking-tight">AI Chatbot</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          A conversational copilot for everyday work questions. It remembers the current
          conversation.
        </p>
      </header>

      <div className="surface-card flex h-[32rem] flex-col rounded-2xl border border-border">
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {messages.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <span className="brand-gradient flex size-11 items-center justify-center rounded-2xl">
                <Bot className="size-5 text-primary-foreground" />
              </span>
              <p className="max-w-sm text-sm text-muted-foreground">
                Ask about drafting messages, prioritising work, preparing meetings or anything else
                on your plate.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => void send(s)}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <AnimatePresence initial={false}>
            {messages.map((message, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Bot className="size-4" />
                  </span>
                )}
                <div
                  className={`prose-ai max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-foreground"
                  }`}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
                </div>
                {message.role === "user" && (
                  <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <User className="size-4" />
                  </span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && <p className="text-xs text-muted-foreground">The assistant is thinking…</p>}
          {error && (
            <p className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </p>
          )}
          <div ref={endRef} />
        </div>

        <form
          className="flex items-end gap-2 border-t border-border p-3"
          onSubmit={(e) => {
            e.preventDefault();
            void send(input);
          }}
        >
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send(input);
              }
            }}
            rows={1}
            placeholder="Ask the assistant… (Enter to send, Shift+Enter for a new line)"
            className="max-h-32 min-h-11 resize-none"
          />
          <Button type="submit" size="icon" disabled={loading || !input.trim()} aria-label="Send">
            <Send className="size-4" />
          </Button>
        </form>
      </div>

      <Disclaimer />
    </div>
  );
}
