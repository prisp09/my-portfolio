import React from "react";
import { FiAward, FiUsers } from "react-icons/fi";
import { education } from "../constants/constants";
import { Section, SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";

export default function Education() {
  const [university, faculty] = education.school.split(" — ");

  return (
    <Section id="education">
      <SectionHeading
        index="05"
        eyebrow="Education"
        title={
          <>
            Where it <span className="accent-text">started.</span>
          </>
        }
      />

      <Reveal>
        <SpotlightCard className="grid gap-10 p-6 sm:p-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-mono text-xs text-fg-dim">{education.period}</p>
            <h3 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              {education.degree}
            </h3>
            <p className="mt-3 text-lg text-fg">{university}</p>
            <p className="text-fg-muted">
              {faculty} · {education.location}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
            <div>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-fg-dim">
                <FiAward size={13} className="text-accent" /> Awards
              </p>
              <ul className="mt-3 space-y-2">
                {education.awards.map((a) => (
                  <li key={a} className="text-fg-muted">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-fg-dim">
                <FiUsers size={13} className="text-accent" /> Activities
              </p>
              <ul className="mt-3 space-y-2">
                {education.activities.map((a) => (
                  <li key={a} className="text-fg-muted">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SpotlightCard>
      </Reveal>
    </Section>
  );
}
