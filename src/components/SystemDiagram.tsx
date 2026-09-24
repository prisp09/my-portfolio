/*
 * Stack map of Skinopathy OS, drawn as tiers rather than exact call paths.
 * Every box comes from the résumé or the GitHub/Linear work record.
 */

type Tone = "cool" | "warm" | "mint" | "sand";

type Node = {
  title: string;
  sub: string;
  tone: Tone;
  stat?: string;
};

type Tier = {
  label: string;
  note?: string;
  boundary?: boolean;
  cols: string;
  nodes: Node[];
};

const TIERS: Tier[] = [
  {
    label: "Clients",
    cols: "grid-cols-2",
    nodes: [
      { title: "EMR web app", sub: "Next.js · React · TypeScript", tone: "cool" },
      { title: "Patient web portal", sub: "Prescriptions 2.0", tone: "cool" },
    ],
  },
  {
    label: "Go services",
    note: "Docker · GitHub Actions",
    boundary: true,
    cols: "grid-cols-2 lg:grid-cols-4",
    nodes: [
      { title: "EMR API", sub: "Gin · REST", tone: "warm", stat: "−50% response time" },
      { title: "Portal API", sub: "patient portal backend", tone: "warm" },
      { title: "Scheduler", sub: "appointments · slots", tone: "warm" },
      { title: "Email service", sub: "recommendation metrics", tone: "warm" },
    ],
  },
  {
    label: "Data & cloud",
    cols: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    nodes: [
      { title: "PostgreSQL", sub: "trigram · tsvector", tone: "mint", stat: "<300 ms search" },
      { title: "S3 · PDFs", sub: "chart documents", tone: "sand" },
      { title: "S3 · thumbnails", sub: "PDF previews", tone: "sand", stat: "−80% load time" },
      { title: "Azure Comms", sub: "encrypted chat · calls", tone: "cool" },
      { title: "OHIP claims", sub: "Python · Azure Functions", tone: "cool" },
    ],
  },
  {
    label: "Integrations",
    cols: "grid-cols-2 sm:grid-cols-3",
    nodes: [
      { title: "SRFax API", sub: "chart & pharmacy fax", tone: "sand" },
      { title: "OHIP", sub: "claim submit · response", tone: "mint" },
      { title: "Excel catalog", sub: "GetSkinBeauty products", tone: "sand" },
    ],
  },
];

const DOT: Record<Tone, string> = {
  cool: "bg-cool",
  warm: "bg-accent",
  mint: "bg-emerald-300",
  sand: "bg-accent-soft",
};

function Connector() {
  return (
    <div aria-hidden className="relative mx-auto h-7 w-px overflow-hidden bg-white/10">
      <span className="absolute inset-x-0 h-3 animate-flow bg-gradient-to-b from-transparent via-accent to-transparent" />
    </div>
  );
}

export default function SystemDiagram() {
  return (
    <figure className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(124,149,255,0.14),transparent)] blur-2xl"
      />
      <div className="glass overflow-hidden rounded-2xl border border-white/[0.09] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="truncate font-mono text-[0.7rem] text-fg-dim">
            <span className="hidden sm:inline">skinopathy-os / </span>stack.map
          </span>
          <span className="flex shrink-0 items-center gap-1.5 font-mono text-[0.68rem] text-fg-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            in production
          </span>
        </div>

        <div className="bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] p-3 sm:p-6">
          {TIERS.map((tier, t) => (
            <div key={tier.label}>
              {t > 0 && <Connector />}
              <section
                aria-label={tier.label}
                className={`rounded-xl p-3 sm:p-4 ${
                  tier.boundary
                    ? "border border-dashed border-accent/35 bg-accent/[0.03]"
                    : "border border-white/[0.05] bg-white/[0.015]"
                }`}
              >
                <div className="mb-3 flex items-baseline justify-between gap-3 font-mono text-[0.66rem] uppercase tracking-[0.14em]">
                  <span className={tier.boundary ? "text-accent/90" : "text-fg-dim"}>{tier.label}</span>
                  {tier.note && <span className="truncate text-accent/70">{tier.note}</span>}
                </div>
                <ul className={`grid gap-2 ${tier.cols}`}>
                  {tier.nodes.map((n) => (
                    <li
                      key={n.title}
                      className="min-w-0 rounded-lg border border-white/[0.08] bg-ink-850/90 px-3 py-2.5 transition-colors hover:border-accent/40"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className={`h-1.5 w-1.5 shrink-0 -translate-y-px rounded-full ${DOT[n.tone]}`} />
                        <span className="text-[0.82rem] font-medium leading-tight text-fg">{n.title}</span>
                      </div>
                      <p className="mt-1 pl-3.5 font-mono text-[0.64rem] leading-snug text-fg-dim">{n.sub}</p>
                      {n.stat && (
                        <p className="mt-1.5 pl-3.5 font-mono text-[0.64rem] leading-snug text-accent-soft">
                          {n.stat}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-center font-mono text-[0.7rem] text-fg-dim">
        Skinopathy OS by tier · the systems I work across
      </figcaption>
    </figure>
  );
}
