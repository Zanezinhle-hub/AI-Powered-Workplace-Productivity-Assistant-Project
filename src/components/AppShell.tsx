import { Link } from "@tanstack/react-router";
import {
  Bot,
  CalendarCheck,
  LayoutDashboard,
  Mail,
  Menu,
  NotebookPen,
  Search,
  Sparkles,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          activeOptions={{ exact: item.to === "/" }}
          activeProps={{
            className: "bg-sidebar-accent text-sidebar-accent-foreground",
          }}
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground"
        >
          <item.icon className="size-4 shrink-0" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
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
      <NavLinks onNavigate={onNavigate} />
      <div className="mt-auto rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-3">
        <p className="text-xs leading-relaxed text-sidebar-foreground/70">
          AI outputs are drafts. Always review before sending or sharing.
        </p>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-sidebar-border lg:block">
        <SidebarContent />
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur lg:px-8">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 border-sidebar-border p-0">
              <SidebarContent onNavigate={() => setOpen(false)} />
            </SheetContent>
          </Sheet>
          <span className="font-display text-sm font-semibold">
            AI Workplace Productivity Assistant
          </span>
          <span className="ml-auto hidden rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary sm:inline">
            Powered by Lovable AI
          </span>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-6 lg:px-8 lg:py-10">{children}</main>
      </div>
    </div>
  );
}
