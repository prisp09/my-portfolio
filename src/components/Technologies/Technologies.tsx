import React from "react";
import {
  Section,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { skills } from "../../constants/constants";
import { AiOutlineCode } from "react-icons/ai";

const skillGroups = [
  { title: "Languages", items: skills.languages },
  { title: "Frameworks & Libraries", items: skills.frameworks },
  { title: "DevOps & Tools", items: skills.devOpsTools },
  { title: "Concepts", items: skills.concepts },
];

export default function Technologies() {
  return (
    <Section id="tech">
      <SectionTitle icon={<AiOutlineCode />}>Skills & Technologies</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-8 max-w-[900px] min-w-0 w-full">
        {skillGroups.map((group) => (
          <div key={group.title} className="min-w-0">
            <h3 className="text-white font-semibold text-lg mb-3 border-b border-white/20 pb-1">
              {group.title}
            </h3>
            <p className="text-white/75 text-base leading-relaxed min-w-0 break-words">
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
