import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { AiOutlineUser } from "react-icons/ai";

export default function About() {
  return (
    <Section id="about">
      <SectionTitle icon={<AiOutlineUser />}>About</SectionTitle>
      <div className="w-[69%] min-w-0 max-w-full sm:w-4/5 sm:flex sm:flex-col sm:mx-auto md:w-full md:flex md:flex-col md:mx-auto">
        <SectionText>
          Full Stack Software Engineer with 2+ years of experience building
          scalable, cloud-native systems using Go, React.js, AWS, and Azure.
          Skilled in clean architecture design, CI/CD optimization with Docker,
          and delivering production-grade software from concept to deployment.
        </SectionText>
        <SectionText className="mt-8">
          Outside of coding, I enjoy mountain biking, exploring, and the gym.
        </SectionText>
      </div>
    </Section>
  );
}
