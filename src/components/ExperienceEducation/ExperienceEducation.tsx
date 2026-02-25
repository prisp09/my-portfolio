import React from "react";
import {
  Section,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { timelineEntries } from "../../constants/constants";
import Timeline from "../Timeline/Timeline";
import { AiOutlineProfile } from "react-icons/ai";

export default function ExperienceEducation() {
  return (
    <Section id="experience" className="scroll-mt-24">
      <SectionTitle icon={<AiOutlineProfile />}>Experience & Education</SectionTitle>
      <div className="mt-8 max-w-[800px] min-w-0 w-full">
        <Timeline entries={timelineEntries} />
      </div>
    </Section>
  );
}
