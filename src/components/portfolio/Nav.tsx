import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, PROFILE } from "./data";

export function Nav() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.6] },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass-card border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="#home" className="flex items-center gap-3" aria-label="ZM home">
          <span className="flex size-10 items-center justify-center rounded-md border border-primary/60 bg-primary/10 font-display text-sm font-bold tracking-tight text-primary">
            ZM
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-xs font-bold uppercase tracking-[0.22em]">
              Zanezinhle
            </span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Mkwanazi
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                active === n.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-px bg-primary transition-transform duration-300 ${
                  active === n.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.cv}
            className="hidden rounded-md border border-primary/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-block"
          >
            Download CV
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 text-foreground xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-card border-t border-border xl:hidden">
          <nav className="mx-auto grid w-full max-w-7xl gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] ${
                  active === n.id ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
