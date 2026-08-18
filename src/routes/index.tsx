import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Sparkles, Wand2 } from "lucide-react";
import { navItems } from "@/components/AppShell";
import { Disclaimer } from "@/components/Disclaimer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard | AI Workplace Productivity Assistant" },
      {
        name: "description",
        content:
          "One AI workspace for professionals: draft emails, summarise meetings, plan tasks, research topics and chat with an AI assistant.",
      },
      { property: "og:title", content: "AI Workplace Productivity Assistant" },
      {
        property: "og:description",
        content:
          "Automate everyday workplace tasks with AI: emails, meeting summaries, task plans, research briefs and a built-in chatbot.",
      },
    ],
  }),
  component: Dashboard,
});

const stats = [
  { label: "AI workspaces", value: "5", icon: Wand2 },
  { label: "Avg. draft time", value: "~15s", icon: Clock },
  { label: "Outputs", value: "Fully editable", icon: Sparkles },
];

function Dashboard() {
  const tools = navItems.filter((item) => item.to !== "/");

  return (
    <div className="space-y-8">
      <section className="surface-card overflow-hidden rounded-2xl border border-border p-6 lg:p-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
          <Sparkles className="size-3.5" /> Your workplace copilot
        </span>
        <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight lg:text-4xl">
          Automate the busywork. Keep the judgement.
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
          Draft emails, summarise meetings, plan your week and research topics with structured AI
          prompts. Every output is editable, exportable and reviewed by you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/email"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Draft an email <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent/20"
          >
            Open AI chat
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-4">
            <stat.icon className="size-4 text-primary" />
            <p className="mt-3 font-display text-xl font-semibold">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-lg font-semibold">Workspaces</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.to}
              to={tool.to}
              className="surface-card group rounded-2xl border border-border p-5 transition-shadow hover:shadow-[var(--shadow-float)]"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <tool.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{tool.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{tool.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Open <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Disclaimer />
    </div>
  );
}
