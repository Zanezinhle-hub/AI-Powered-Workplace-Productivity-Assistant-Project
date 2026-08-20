import { useState } from "react";
import {
  Award,
  Brain,
  Cpu,
  Code2,
  Download,
  FileText,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal, Section } from "./Section";
import { TONE } from "./tone";
import {
  AI_JOURNEY,
  COURSEWORK,
  HIGHLIGHTS,
  LABS,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
} from "./data";

const HIGHLIGHT_ICONS = [GraduationCap, Code2, Brain, Sparkles, Users, Rocket];

export function About() {
  const paragraphs = [
    "I'm Zanezinhle Nondumiso Mkwanazi, a Computer Engineering graduate from the Cape Peninsula University of Technology (CPUT), passionate about technology, problem-solving and continuous learning.",
    "My academic journey has given me exposure to software development, computer programming, computer networking, digital communications, systems analysis, electronics, microprocessors, digital systems, process control and database fundamentals.",
    "What makes my background unique is the combination of engineering and computing. I enjoy understanding how systems work, identifying problems and developing technical solutions that connect software, hardware and communication technologies.",
    "I am currently participating in an AI Skills Acceleration programme, where I am developing my knowledge of Artificial Intelligence and emerging technologies while earning AI-related certifications.",
    "I am now looking for an opportunity where I can contribute my technical foundation, learn from experienced professionals and grow into a technology professional.",
  ];

  return (
    <Section id="about" index="01" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = HIGHLIGHT_ICONS[i] ?? Sparkles;
            return (
              <Reveal key={h.title} delay={i * 0.05}>
                <div className="glass-card h-full rounded-xl p-4 transition-colors hover:border-primary/50">
                  <Icon className="size-5 text-primary" />
                  <p className="mt-3 font-display text-xs font-bold uppercase tracking-[0.18em]">
                    {h.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{h.note}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      title="Technical foundation"
      subtitle="Skills built through academic study, personal practice and ongoing AI learning."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {SKILL_GROUPS.map((g, i) => {
          const t = TONE[g.tone];
          return (
            <Reveal key={g.title} delay={i * 0.06}>
              <div
                className={`glass-card h-full rounded-xl border p-6 transition-shadow ${t.border} ${t.glow}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`font-display text-sm font-bold uppercase tracking-[0.16em] ${t.text}`}>
                    {g.title}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${t.bg} ${t.text}`}
                  >
                    {g.level}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-border bg-surface-2/60 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

const FILTERS = ["All", "Software", "Networking", "Engineering", "Electronics", "AI"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section
      id="projects"
      index="03"
      title="Featured projects"
      subtitle="Academic and personal work across software, networking, engineering, electronics and AI."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-md border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
              filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((p, i) => {
          const t = TONE[p.tone];
          return (
            <Reveal key={p.title} delay={i * 0.05}>
              <article
                className={`glass-card group flex h-full flex-col overflow-hidden rounded-xl transition-shadow ${t.glow}`}
              >
                <div className={`relative h-32 overflow-hidden border-b border-border ${t.bg}`}>
                  <div className="grid-bg absolute inset-0 opacity-70" aria-hidden />
                  <svg viewBox="0 0 300 120" className="relative size-full" aria-hidden>
                    <g stroke="currentColor" className={t.text} strokeOpacity="0.55" fill="none">
                      <path d="M0 90 H70 L96 62 H176 L202 90 H300" />
                      <circle cx="96" cy="62" r="4" />
                      <circle cx="202" cy="90" r="4" />
                      <rect x="126" y="34" width="48" height="34" rx="4" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${t.text}`}>
                      {p.category}
                    </span>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold uppercase tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-border px-2 py-1 text-[10px] text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-4 border-t border-border pt-4 text-[11px] font-semibold uppercase tracking-[0.14em]">
                    <a href={PROFILE.github} className="text-muted-foreground hover:text-primary">
                      GitHub
                    </a>
                    <span className="text-muted-foreground/50">Live demo — coming soon</span>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Lab() {
  return (
    <Section
      id="lab"
      index="04"
      title="Engineering lab"
      subtitle="Experiments, technical explorations and projects I'm currently building."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {LABS.map((l, i) => {
          const t = TONE[l.tone];
          return (
            <Reveal key={l.title} delay={i * 0.05}>
              <div className={`glass-card h-full rounded-xl border p-6 ${t.border}`}>
                <div className={`flex size-9 items-center justify-center rounded-md ${t.bg}`}>
                  <Cpu className={`size-4 ${t.text}`} />
                </div>
                <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-[0.16em]">
                  {l.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">{l.note}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function AiJourney() {
  return (
    <Section
      id="ai-journey"
      index="05"
      title="My AI journey"
      subtitle="Growing capability in artificial intelligence and emerging technologies."
    >
      <ol className="relative space-y-4 border-l border-ai/40 pl-6">
        {AI_JOURNEY.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.06}>
            <li className="relative">
              <span className="absolute -left-[31px] top-3 size-2.5 rounded-full bg-ai shadow-[0_0_18px_var(--ai)]" />
              <div className="glass-card rounded-xl border border-ai/25 p-5">
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ai">
                  {s.step}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">{s.note}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" index="06" title="Education">
      <Reveal>
        <div className="glass-card rounded-xl p-6 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-tight lg:text-2xl">
                Cape Peninsula University of Technology (CPUT)
              </h3>
              <p className="mt-1 text-sm text-primary">Diploma in Computer Engineering</p>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Completed
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {COURSEWORK.map((c) => {
              const t = TONE[c.tone];
              return (
                <div key={c.group} className="rounded-lg border border-border bg-surface-2/50 p-4">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.18em] ${t.text}`}>
                    {c.group}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {c.items.map((it) => (
                      <li key={it} className="text-xs text-muted-foreground">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      index="07"
      title="Certifications"
      subtitle="Verified credentials will be listed here as they are earned."
    >
      <Reveal>
        <div className="glass-card flex flex-col items-start gap-4 rounded-xl border border-dashed border-primary/40 p-8">
          <Award className="size-6 text-primary" />
          <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
            [Add certifications here]
          </p>
          <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
            Each card will display the certificate name, provider, date, credential ID and a view
            link. Currently in progress: AI-related certifications through the AI Skills
            Acceleration programme. No certificates are listed until they are supplied.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

export function GithubSection() {
  return (
    <Section
      id="github"
      index="08"
      title="Building in public"
      subtitle="Repositories and code will appear here once the GitHub profile is connected."
    >
      <Reveal>
        <div className="glass-card rounded-xl p-8">
          <Github className="size-6 text-primary" />
          <p className="mt-4 font-display text-sm font-bold uppercase tracking-[0.18em]">
            [Add GitHub profile link here]
          </p>
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-muted-foreground">
            Featured repositories, languages and project descriptions will be listed here. No
            repository statistics are shown until the profile is provided.
          </p>
          <a
            href={PROFILE.github}
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary hover:bg-primary/10"
          >
            <Github className="size-4" />
            GitHub — placeholder
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" index="09" title="Let's connect">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight lg:text-4xl">
              Let&apos;s build <span className="text-primary">the future.</span>
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              I&apos;m open to graduate opportunities, internships, learnerships, entry-level
              technology roles and collaborative technical projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground"
              >
                <Linkedin className="size-4" />
                View LinkedIn
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-primary/60 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary hover:bg-primary/10"
              >
                <Mail className="size-4" />
                Email me
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-3">
          <Reveal delay={0.05}>
            <a
              href={`mailto:${PROFILE.email}`}
              className="glass-card flex items-center gap-4 rounded-xl p-5 hover:border-primary/50"
            >
              <Mail className="size-5 text-primary" />
              <span className="text-xs break-all text-muted-foreground">{PROFILE.email}</span>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card flex items-center gap-4 rounded-xl p-5 hover:border-primary/50"
            >
              <Linkedin className="size-5 text-net" />
              <span className="text-xs break-all text-muted-foreground">
                linkedin.com/in/zanezinhle-mkwanazi-6b1362332
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card flex items-center gap-4 rounded-xl p-5">
              <MapPin className="size-5 text-elec" />
              <span className="text-xs text-muted-foreground">{PROFILE.location}</span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass-card rounded-xl p-5">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em]">
                Interactive CV
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={PROFILE.cv}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
                >
                  <FileText className="size-4" /> View CV
                </a>
                <a
                  href={PROFILE.cv}
                  className="inline-flex items-center gap-2 rounded-md border border-primary/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary hover:bg-primary/10"
                >
                  <Download className="size-4" /> Download CV
                </a>
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                [Upload CV file to enable]
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 lg:grid-cols-2 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md border border-primary/60 bg-primary/10 font-display text-sm font-bold text-primary">
              ZM
            </span>
            <span className="font-display text-sm font-bold uppercase tracking-[0.18em]">
              Zanezinhle Mkwanazi
            </span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Computer Engineering Graduate</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Software | Networking | AI | Engineering
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-5 lg:justify-end">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a
            href={PROFILE.github}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary"
          >
            <Github className="size-4" /> GitHub
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary"
          >
            <Mail className="size-4" /> Email
          </a>
          <a
            href={PROFILE.cv}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary"
          >
            <FileText className="size-4" /> CV
          </a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        © 2026 Zanezinhle Mkwanazi
        <Globe className="ml-2 inline size-3" />
      </div>
    </footer>
  );
}
