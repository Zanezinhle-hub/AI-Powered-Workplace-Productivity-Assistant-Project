import type { Tone } from "./data";

export const TONE: Record<
  Tone,
  { text: string; border: string; bg: string; dot: string; glow: string }
> = {
  primary: {
    text: "text-primary",
    border: "border-primary/40",
    bg: "bg-primary/10",
    dot: "bg-primary",
    glow: "hover:shadow-[0_0_40px_-14px_var(--primary)]",
  },
  net: {
    text: "text-net",
    border: "border-net/40",
    bg: "bg-net/10",
    dot: "bg-net",
    glow: "hover:shadow-[0_0_40px_-14px_var(--net)]",
  },
  elec: {
    text: "text-elec",
    border: "border-elec/40",
    bg: "bg-elec/10",
    dot: "bg-elec",
    glow: "hover:shadow-[0_0_40px_-14px_var(--elec)]",
  },
  ai: {
    text: "text-ai",
    border: "border-ai/40",
    bg: "bg-ai/10",
    dot: "bg-ai",
    glow: "hover:shadow-[0_0_40px_-14px_var(--ai)]",
  },
};
