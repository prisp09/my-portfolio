import Image from "next/image";
import React from "react";
import { FiGitMerge, FiLayers, FiUsers } from "react-icons/fi";
import portrait from "../../public/images/dp.png";
import { experience, seo, yearsSince } from "@/constants/constants";
import { Section, SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";

const PILLARS = [
  {
    Icon: FiLayers,
    title: "End-to-end ownership",
    body: "PostgreSQL schemas, Go APIs and React interfaces. I take features from concept to deployment and keep them fast once they're live.",
  },
  {
    Icon: FiGitMerge,
    title: "Architecture & integration",
    body: "Azure Communication Services without an SDK, AWS S3 pipelines, SRFax. I contribute to architecture decisions across backend services.",
  },
  {
    Icon: FiUsers,
    title: "Working across teams",
    body: "I partner with product, design and QA to ship major features faster, and I help train junior developers.",
  },
];

export default function About() {
  const years = yearsSince(experience.startDate);

  return (
    <Section id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title={
          <>
            Clean architecture, <span className="accent-text">shipped to production.</span>
          </>
        }
      />

      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        <Reveal>
          <div className="group relative aspect-[4/3] overflow-hidden md:aspect-[4/5] rounded-2xl border border-white/[0.08] bg-ink-850">
            <Image
              src={portrait}
              alt={`Portrait of ${seo.person.fullName}`}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              placeholder="blur"
              className="object-cover object-[45%_center] transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fg-dim">
                  Based in
                </p>
                <p className="mt-1 text-lg font-medium text-fg">{seo.person.location}</p>
              </div>
              <span className="rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 font-mono text-[0.7rem] text-fg-muted backdrop-blur">
                {years}+ yrs in production
              </span>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal delay={80}>
            <p className="text-pretty text-xl leading-relaxed text-fg sm:text-2xl sm:leading-relaxed">
              Full Stack Software Engineer with {years}+ years of experience building
              scalable, cloud-native systems using{" "}
              <span className="text-accent-soft">Go, React.js, AWS and Azure</span>.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
              I&apos;m skilled in clean architecture design, CI/CD optimization with
              Docker, and delivering production-grade software from concept to
              deployment. I studied Computer Science at York University&apos;s Lassonde
              School of Engineering.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
              Outside of coding, I enjoy mountain biking, exploring, and the gym.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {PILLARS.map(({ Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 90}>
            <SpotlightCard className="h-full p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                <Icon size={18} />
              </span>
              <h3 className="mt-5 text-lg font-medium tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{body}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
