"use client";

import { useMediaQuery } from "@/lib/useMediaQuery";

type Node = {
  x: number;
  y: number;
  w: number;
  title: string;
  sub: string;
  dot: string;
};

const H = 64;

const NODES: Node[] = [
  { x: 120, y: 18, w: 320, title: "Doctor & admin portals", sub: "Next.js · React · TypeScript", dot: "#7C95FF" },
  { x: 180, y: 166, w: 200, title: "Go APIs", sub: "Gin · scheduler · email", dot: "#FF9F4A" },
  { x: 12, y: 318, w: 164, title: "PostgreSQL", sub: "trigram · tsvector", dot: "#7CE0B5" },
  { x: 198, y: 318, w: 164, title: "Azure", sub: "Comms · Functions", dot: "#7C95FF" },
  { x: 384, y: 318, w: 164, title: "AWS S3", sub: "PDF thumbnails", dot: "#FFC38A" },
];

const EDGES = [
  "M280 82 L280 166",
  "M280 230 C280 284 94 266 94 318",
  "M280 230 L280 318",
  "M280 230 C280 284 466 266 466 318",
];

// Packets travelling along the edges: [edge index, reverse?, delay seconds]
const PACKETS: [number, boolean, number][] = [
  [0, false, 0],
  [0, true, 1.3],
  [1, false, 0.5],
  [2, false, 1.1],
  [3, false, 1.7],
  [1, true, 2.2],
  [3, true, 0.2],
];

function reversePath(d: string) {
  // Only handles the "M a b L c d" and "M a b C ... x y" shapes used above.
  const nums = d.match(/-?\d+(\.\d+)?/g)!.map(Number);
  if (d.includes("C")) {
    const [x0, y0, c1x, c1y, c2x, c2y, x1, y1] = nums;
    return `M${x1} ${y1} C${c2x} ${c2y} ${c1x} ${c1y} ${x0} ${y0}`;
  }
  const [x0, y0, x1, y1] = nums;
  return `M${x1} ${y1} L${x0} ${y0}`;
}

export default function SystemDiagram() {
  const animate = !useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <figure className="relative">
      {/* glow behind the card */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(124,149,255,0.16),transparent)] blur-2xl"
      />
      <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-900/80 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[0.7rem] text-fg-dim">stack.map</span>
          <span className="flex items-center gap-1.5 font-mono text-[0.68rem] text-fg-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            in production
          </span>
        </div>

        <svg
          viewBox="0 0 560 400"
          className="block h-auto w-full"
          role="img"
          aria-label="Architecture sketch: Next.js doctor and admin portals call Go APIs, running in Docker with CI/CD on GitHub Actions, which talks to PostgreSQL, Azure Communication Services and Functions, and AWS S3."
        >
          <defs>
            <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.06)" />
            </pattern>
            <filter id="glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="560" height="400" fill="url(#dots)" />

          {/* Docker / CI boundary around the API */}
          <rect
            x="150"
            y="132"
            width="260"
            height="116"
            rx="18"
            fill="rgba(255,159,74,0.03)"
            stroke="rgba(255,159,74,0.35)"
            strokeDasharray="4 5"
          />
          <text x="166" y="152" className="fill-accent/80 font-mono" fontSize="9.5" letterSpacing="1.2">
            DOCKER · CI/CD
          </text>

          {EDGES.map((d) => (
            <g key={d}>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.25" />
              <path
                d={d}
                fill="none"
                stroke="rgba(255,159,74,0.45)"
                strokeWidth="1.25"
                strokeDasharray="3 9"
                className={animate ? "animate-dash" : undefined}
              />
            </g>
          ))}

          <text x="292" y="118" className="fill-fg-dim font-mono" fontSize="10">
            REST · JSON
          </text>

          {animate &&
            PACKETS.map(([edge, reverse, delay], i) => (
              <circle
                key={i}
                r="3"
                fill={reverse ? "#AAB9FF" : "#FFB36B"}
                filter="url(#glow)"
                opacity="0"
              >
                <animateMotion
                  dur="2.6s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                  path={reverse ? reversePath(EDGES[edge]) : EDGES[edge]}
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.85;1"
                  dur="2.6s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

          {NODES.map((n) => (
            <g key={n.title}>
              <rect
                x={n.x}
                y={n.y}
                width={n.w}
                height={H}
                rx="12"
                fill="#10131A"
                stroke="rgba(255,255,255,0.1)"
              />
              <circle cx={n.x + 20} cy={n.y + H / 2} r="3.5" fill={n.dot} />
              <circle cx={n.x + 20} cy={n.y + H / 2} r="8" fill={n.dot} opacity="0.12" />
              <text x={n.x + 36} y={n.y + 28} className="fill-fg font-sans" fontSize="14" fontWeight="500">
                {n.title}
              </text>
              <text x={n.x + 36} y={n.y + 46} className="fill-fg-dim font-mono" fontSize="10.5">
                {n.sub}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <figcaption className="mt-3 text-center font-mono text-[0.7rem] text-fg-dim">
        The stack I build and ship at Skinopathy
      </figcaption>
    </figure>
  );
}
