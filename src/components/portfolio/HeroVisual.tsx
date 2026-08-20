import { motion } from "framer-motion";

const NODES = [
  { x: 60, y: 90, c: "var(--primary)" },
  { x: 330, y: 60, c: "var(--net)" },
  { x: 380, y: 300, c: "var(--ai)" },
  { x: 80, y: 320, c: "var(--elec)" },
  { x: 200, y: 30, c: "var(--primary)" },
  { x: 30, y: 210, c: "var(--net)" },
  { x: 410, y: 180, c: "var(--ai)" },
  { x: 220, y: 380, c: "var(--primary)" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-6 rounded-full bg-primary/10 blur-3xl" />
      <svg
        viewBox="0 0 440 420"
        className="relative size-full"
        role="img"
        aria-label="Abstract computer engineering visual with circuit traces, network nodes and a ZM monogram"
      >
        <defs>
          <radialGradient id="core" cx="50%" cy="50%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.28" />
            <stop offset="70%" stopColor="var(--primary)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="55%" stopColor="var(--net)" />
            <stop offset="100%" stopColor="var(--ai)" />
          </linearGradient>
        </defs>

        {/* circuit traces */}
        <g stroke="var(--primary)" strokeOpacity="0.22" strokeWidth="1" fill="none">
          <path d="M10 60 H120 L150 90 H210" />
          <path d="M430 110 H340 L310 140 H260" />
          <path d="M20 350 H130 L165 315" />
          <path d="M420 340 H320 L286 306" />
          <path d="M220 8 V60" />
          <path d="M220 412 V360" />
        </g>

        {/* microchip outlines */}
        <g stroke="var(--net)" strokeOpacity="0.35" strokeWidth="1" fill="none">
          <rect x="24" y="46" width="44" height="34" rx="4" />
          <rect x="372" y="336" width="44" height="34" rx="4" />
          <path d="M24 56 h-10 M24 68 h-10 M68 56 h10 M68 68 h10" />
          <path d="M372 346 h-10 M372 358 h-10 M416 346 h10 M416 358 h10" />
        </g>

        {/* network links */}
        <g stroke="var(--foreground)" strokeOpacity="0.12" strokeWidth="1">
          {NODES.map((n, i) => (
            <line key={i} x1={220} y1={210} x2={n.x} y2={n.y} className="dash-flow" />
          ))}
        </g>

        {NODES.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={4}
            fill={n.c}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3.5, delay: i * 0.35, repeat: Infinity }}
          />
        ))}

        {/* core */}
        <circle cx="220" cy="210" r="150" fill="url(#core)" />
        <motion.circle
          cx="220"
          cy="210"
          r="132"
          fill="none"
          stroke="url(#ring)"
          strokeOpacity="0.55"
          strokeWidth="1"
          strokeDasharray="3 9"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "220px 210px" }}
        />
        <motion.circle
          cx="220"
          cy="210"
          r="104"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.4"
          strokeWidth="1"
          strokeDasharray="30 14"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "220px 210px" }}
        />
        <circle cx="220" cy="210" r="76" fill="none" stroke="var(--primary)" strokeOpacity="0.25" />

        {/* neural lines */}
        <g stroke="var(--ai)" strokeOpacity="0.35" strokeWidth="0.8" fill="none">
          <path d="M150 160 C190 190, 250 150, 292 186" />
          <path d="M150 262 C196 232, 248 274, 292 240" />
        </g>

        <text
          x="220"
          y="228"
          textAnchor="middle"
          fill="var(--primary)"
          className="font-display"
          fontSize="64"
          fontWeight="700"
          letterSpacing="2"
        >
          ZM
        </text>
        <text
          x="220"
          y="252"
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontSize="8"
          letterSpacing="4"
        >
          ENGINEERING CORE
        </text>

        {/* labels */}
        <g fontSize="9" letterSpacing="3" fontWeight="600">
          <text x="14" y="26" fill="var(--primary)">
            SOFTWARE
          </text>
          <text x="426" y="26" fill="var(--net)" textAnchor="end">
            NETWORKING
          </text>
          <text x="14" y="412" fill="var(--elec)">
            ELECTRONICS
          </text>
          <text x="416" y="410" fill="var(--ai)" textAnchor="end">
            AI
          </text>
        </g>

        {/* code fragments */}
        <g fill="var(--muted-foreground)" fillOpacity="0.5" fontSize="8" fontFamily="monospace">
          <text x="300" y="80">{"if (signal) route();"}</text>
          <text x="40" y="300">{"class Node { }"}</text>
          <text x="272" y="360">{"model.predict(x)"}</text>
        </g>
      </svg>
    </div>
  );
}
