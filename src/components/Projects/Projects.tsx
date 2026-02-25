import React from "react";
import {
  Section,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { keyProjects, otherProjects } from "../../constants/constants";
import { AiOutlineFolderOpen, AiOutlineTrophy } from "react-icons/ai";

function ProjectCard({
  title,
  org,
  date,
  description,
  tags,
  link,
  visit,
}: {
  title: string;
  org: string;
  date?: string;
  description: string;
  tags: string[];
  link?: string;
  visit?: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-colors min-w-0 overflow-hidden">
      <div className="flex flex-wrap items-center gap-2 mb-2 min-w-0">
        <h3 className="text-white font-semibold text-lg min-w-0 break-words">{title}</h3>
        <span className="text-white/50 text-sm">{org}</span>
        {date && (
          <span className="text-white/40 text-sm ml-auto">{date}</span>
        )}
      </div>
      <p className="text-white/75 text-sm leading-relaxed mb-4 min-w-0 break-words">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-3 min-w-0">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>
      {(link || visit) && (
        <div className="flex gap-3 text-sm">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#13ADC7] hover:text-white transition-colors"
            >
              View
            </a>
          )}
          {visit && (
            <a
              href={visit}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F46737] hover:text-white transition-colors"
            >
              Source
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle icon={<AiOutlineFolderOpen />}>Key Projects</SectionTitle>
      <p className="text-white/50 max-w-[800px] min-w-0 text-base mb-8 break-words">
        Highlights from my work at Skinopathy and side projects.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 min-w-0 w-full">
        {keyProjects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            org={p.org}
            description={p.description}
            tags={p.tags}
            link="https://skinopathy.com/"
          />
        ))}
      </div>
      <SectionTitle icon={<AiOutlineTrophy />}>Projects & Competitions</SectionTitle>
      <div className="grid grid-cols-1 gap-6 mt-6 min-w-0 w-full">
        {otherProjects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            org={p.org}
            date={p.date}
            description={p.description}
            tags={p.tags}
            link={p.link}
            visit={"visit" in p ? p.visit : undefined}
          />
        ))}
      </div>
    </Section>
  );
}
