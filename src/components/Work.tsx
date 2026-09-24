import React from "react";
import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { keyProjects, otherProjects } from "@/constants/constants";
import { Section, SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";

// Bento layout: a wide card and a narrow one, then rows of three
const SPANS = ["md:col-span-4", ...Array(7).fill("md:col-span-2")];

export default function Work() {
  return (
    <Section id="work">
      <SectionHeading
        index="03"
        eyebrow="Selected work"
        title={
          <>
            Features that moved <span className="accent-text">real numbers.</span>
          </>
        }
        intro="Highlights from Skinopathy OS, the EMR dermatology clinics use in Canada and Malaysia."
      />

      <div className="grid gap-4 md:grid-cols-6">
        {keyProjects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 90} className={SPANS[i]}>
            <SpotlightCard className="flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-center justify-between font-mono text-xs text-fg-dim">
                <span>
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mx-2 text-white/15">/</span>
                  {p.org}
                </span>
              </div>

              <div
                className="flex flex-1 flex-col"
              >
                <div className="mt-8">
                  <p
                    className={`whitespace-nowrap font-serif leading-none tracking-tight text-fg ${
                      i === 0 ? "text-6xl sm:text-8xl" : "text-5xl"
                    }`}
                  >
                    {p.metric}
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-accent-soft/80">
                    {p.metricLabel}
                  </p>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3
                    className={`mt-8 font-medium tracking-tight ${
                      i === 0 ? "text-2xl sm:text-3xl" : "text-xl"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`mt-3 text-pretty leading-relaxed text-fg-muted ${
                      i === 0 ? "max-w-2xl text-base" : "text-sm"
                    }`}
                  >
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      {/* Side projects & competitions */}
      <Reveal className="mt-24">
        <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-fg-dim">
          Projects & competitions
          <span className="h-px flex-1 bg-white/[0.08]" aria-hidden />
        </h3>
      </Reveal>

      <ul className="mt-4">
        {otherProjects.map((p, i) => {
          const winner = p.org.includes("Winner");
          const source = "visit" in p ? p.visit : undefined;
          return (
            <Reveal
              as="li"
              key={p.id}
              delay={i * 70}
              className="group grid gap-3 border-b border-white/[0.06] py-8 md:grid-cols-[10rem_1fr_auto] md:gap-8"
            >
              <span className="font-mono text-xs text-fg-dim md:pt-1.5">{p.date}</span>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h4 className="text-xl font-medium tracking-tight transition-colors group-hover:text-accent-soft sm:text-2xl">
                    {p.title}
                  </h4>
                  {winner && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[0.68rem] text-accent-soft">
                      <FiAward size={12} /> Winner
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-fg-dim">{p.org}</p>
                <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-fg-muted sm:text-base">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {(p.link || source) && (
                <div className="flex gap-2 md:flex-col md:items-end md:pt-1">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-fg-muted transition-colors hover:border-white/25 hover:text-fg"
                      aria-label={`View ${p.title}`}
                    >
                      View <FiArrowUpRight size={12} />
                    </a>
                  )}
                  {source && (
                    <a
                      href={source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-fg-muted transition-colors hover:border-white/25 hover:text-fg"
                      aria-label={`${p.title} source code`}
                    >
                      Source <FiArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              )}
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
