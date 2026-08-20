import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <div className="relative mb-10 lg:mb-14">
        <span
          aria-hidden
          className="section-index pointer-events-none absolute -top-8 -left-1 text-[5rem] lg:-top-12 lg:text-[8rem]"
        >
          {index}
        </span>
        <Reveal>
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                {index}
              </span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight lg:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground lg:text-base">{subtitle}</p>
            )}
          </div>
        </Reveal>
      </div>
      {children}
    </section>
  );
}
