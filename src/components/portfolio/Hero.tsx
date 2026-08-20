import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, Code2, Download, Globe, MapPin } from "lucide-react";
import { HeroVisual } from "./HeroVisual";
import { OPPORTUNITIES, PROFILE } from "./data";

const STRIP = [
  { label: "Software Development", icon: Code2, cls: "text-primary" },
  { label: "Networking", icon: Globe, cls: "text-net" },
  { label: "Electronics", icon: Cpu, cls: "text-elec" },
  { label: "Artificial Intelligence", icon: Brain, cls: "text-ai" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 lg:pt-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 -left-24 size-[420px] rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-40 right-0 size-[380px] rounded-full bg-ai/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-8 lg:px-10 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
            Computer Engineering Graduate
          </p>
          <h1 className="mt-5 font-display text-[2rem] font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Building technology
            <br />
            at the intersection of
            <br />
            <span className="text-primary">engineering, software</span>
            <br />
            <span className="text-primary">&amp; artificial intelligence</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
            I&apos;m Zanezinhle Mkwanazi, a Computer Engineering graduate from the Cape Peninsula
            University of Technology (CPUT) with a foundation in software development, computer
            networking, electronics, digital communications and systems analysis. I am currently
            expanding my skills in Artificial Intelligence and emerging technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-shadow hover:shadow-[0_0_36px_-10px_var(--primary)]"
            >
              View my projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={PROFILE.cv}
              className="inline-flex items-center gap-2 rounded-md border border-primary/60 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary/10"
            >
              <Download className="size-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-ai/50 bg-ai/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-foreground transition-shadow hover:shadow-[0_0_36px_-12px_var(--ai)]"
            >
              Let&apos;s connect
            </a>
          </div>

          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            CV placeholder — upload your CV file to activate the download links
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <HeroVisual />

          <div className="glass-card mx-auto mt-6 w-full max-w-md rounded-xl p-5 lg:max-w-none">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Open to
              <br />
              opportunities
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 sm:grid-cols-3">
              {OPPORTUNITIES.map((o) => (
                <li key={o} className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span className="size-1 rounded-full bg-primary" />
                  {o}
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 border-t border-border pt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground">
              <MapPin className="size-3 text-primary" />
              {PROFILE.location}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative border-y border-border bg-surface/60">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-px px-5 lg:grid-cols-4 lg:px-10">
          {STRIP.map((s) => (
            <div key={s.label} className="flex items-center gap-3 px-2 py-6">
              <s.icon className={`size-5 shrink-0 ${s.cls}`} />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] lg:text-xs">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
