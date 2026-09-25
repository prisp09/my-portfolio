import React from "react";
import { skills } from "@/constants/constants";
import { Section, SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";

const GROUPS = [
  { title: "Languages", items: skills.languages },
  { title: "Frameworks & libraries", items: skills.frameworks },
  { title: "Cloud & DevOps", items: skills.devOpsTools },
  { title: "Concepts", items: skills.concepts },
  { title: "AI-Assisted Development", items: skills.aiTools },
];

const MARQUEE = [...skills.languages, ...skills.frameworks, ...skills.devOpsTools];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="04"
        eyebrow="Skills"
        title={
          <>
            The <span className="accent-text">toolkit.</span>
          </>
        }
      />

      <div
        aria-hidden
        className="relative -mx-5 mb-12 overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] sm:-mx-8"
      >
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="flex items-center gap-10 font-serif text-4xl italic text-fg/25 sm:text-5xl"
            >
              {s}
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {GROUPS.map((g, i) => (
          <Reveal
            key={g.title}
            delay={(i % 2) * 90}
            className={i === GROUPS.length - 1 && GROUPS.length % 2 ? "sm:col-span-2" : undefined}
          >
            <SpotlightCard className="h-full p-6 sm:p-7">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium tracking-tight">{g.title}</h3>
                <span className="font-mono text-xs text-fg-dim">
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-sm text-fg-muted transition-colors hover:border-accent/40 hover:text-fg"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
