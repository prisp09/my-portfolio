import React from "react";
import {
  Section,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { education } from "../../constants/constants";

export default function Education() {
  return (
    <Section id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="mt-8 max-w-[800px] space-y-4">
        <h3 className="text-white font-semibold text-xl">
          {education.degree}
        </h3>
        <p className="text-white/80 text-lg">{education.school}</p>
        <p className="text-white/60 text-sm">
          {education.period} | {education.location}
        </p>
        <div className="pt-2 space-y-1">
          <p className="text-white/75 text-sm">
            <span className="text-white/60 font-medium">Awards:</span>{" "}
            {education.awards.join(", ")}
          </p>
          <p className="text-white/75 text-sm">
            <span className="text-white/60 font-medium">Activities:</span>{" "}
            {education.activities.join(", ")}
          </p>
        </div>
      </div>
    </Section>
  );
}
