import React from "react";
import {
  Section,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { experience } from "../../constants/constants";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="mt-8 max-w-[800px]">
        <h3 className="text-white font-semibold text-xl mb-1">
          {experience.role} · {experience.company}
        </h3>
        <p className="text-white/60 text-sm mb-4">
          {experience.period} | {experience.location}
        </p>
        <ul className="list-disc list-inside text-white/75 space-y-2 text-base leading-relaxed">
          {experience.highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
