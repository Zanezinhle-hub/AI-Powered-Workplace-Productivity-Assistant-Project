import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Bot,
  CalendarCheck,
  LayoutDashboard,
  Mail,
  NotebookPen,
  Search,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, desc: "Overview of your AI workspace" },
  { to: "/email", label: "Email Generator", icon: Mail, desc: "Draft professional emails fast" },
  {
    to: "/notes",
    label: "Meeting Summarizer",
    icon: NotebookPen,
    desc: "Turn notes into decisions & actions",
  },
  {
    to: "/planner",
    label: "Task Planner",
    icon: CalendarCheck,
    desc: "Prioritised, realistic work plans",
  },
  { to: "/research", label: "Research Assistant", icon: Search, desc: "Structured research briefs" },
  { to: "/chat", label: "AI Chatbot", icon: Bot, desc: "Ask anything about your work" },
] as const;

export function Sidebar({ onNavigate }: { onNavigate?: (() => void) | undefined }) {
  return (
    <div className="flex h-full flex-col bg-sidebar p-4">
      <Link to="/" onClick={onNavigate} className="mb-6 flex items-center gap-3 px-1">
        <span className="brand-gradient flex size-9 items-center justify-center rounded-xl">
          <Sparkles className="size-4 text-primary-foreground" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="font-display text-sm font-semibold text-sidebar-foreground">
            Workplace AI
          </span>
          <span className="text-xs text-sidebar-foreground/60">Productivity Assistant</span>
        </span>
      </Link>

      <nav className="flex flex-col gap-1">
        {navItems.map((item, i) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.03 * i, duration: 0.25 }}
          >
            <Link
              to={item.to}
              onClick={onNavigate}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground"
            >
              <item.icon className="size-4 shrink-0" />
              <span>{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </nav>

      <div className="mt-auto rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-3">
        <p className="text-xs leading-relaxed text-sidebar-foreground/70">
          AI outputs are drafts. Always review before sending or sharing.
        </p>
      </div>
    </div>
  );
}
