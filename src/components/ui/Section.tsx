import React from "react";
import Reveal from "./Reveal";

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-shell px-5 py-24 sm:px-8 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-fg-dim">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-white/15" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-[3.5rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
