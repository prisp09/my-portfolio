import React from "react";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { experience } from "@/constants/constants";
import SystemDiagram from "./SystemDiagram";
import { Section, SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";

const STACK = [
  "Go",
  "Gin Gonic",
  "PostgreSQL",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Docker",
  "Azure",
  "AWS S3",
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title={
          <>
            Shipping healthcare software <span className="accent-text">in production.</span>
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <div>
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 font-serif text-3xl italic text-accent">
                S
              </span>
              <div>
                <a
                  href="https://skinopathy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-xl font-medium tracking-tight hover:text-accent-soft"
                >
                  {experience.company}
                  <FiArrowUpRight
                    size={16}
                    className="text-fg-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft"
                  />
                </a>
                <p className="text-sm text-fg-muted">{experience.role}</p>
              </div>
            </div>

            <dl className="mt-8 space-y-3 border-t border-white/[0.06] pt-6 font-mono text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-fg-dim">Period</dt>
                <dd className="text-right text-fg-muted">{experience.period}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-fg-dim">Location</dt>
                <dd className="inline-flex items-center gap-1.5 text-fg-muted">
                  <FiMapPin size={12} /> {experience.location}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-fg-dim">Status</dt>
                <dd className="inline-flex items-center gap-2 text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Current role
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SystemDiagram />
        </Reveal>
      </div>

      <ol className="mt-16 grid gap-x-12 md:grid-cols-2">
        {experience.highlights.map((h, i) => (
          <Reveal
            as="li"
            key={h}
            delay={i * 60}
            className="group grid grid-cols-[3rem_1fr] gap-2 border-t border-white/[0.06] py-6 sm:grid-cols-[4rem_1fr]"
          >
            <span className="font-mono text-xs text-fg-dim transition-colors group-hover:text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-pretty text-base leading-relaxed text-fg-muted transition-colors group-hover:text-fg sm:text-lg">
              {h}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
