"use client";

import { Fragment, useEffect, useState } from "react";
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { metrics, seo } from "@/constants/constants";
import Magnetic from "./interactive/Magnetic";
import Reveal from "./ui/Reveal";

function TorontoTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-CA", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Toronto",
      timeZoneName: "short",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time ?? "Toronto"}</span>;
}

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

/** Splits a line into words that rise in one after another. */
function Words({ text, start, className = "" }: { text: string; start: number; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <Fragment key={i}>
          <span className={`inline-block animate-rise ${className}`} style={delay(start + i * 70)}>
            {w}
          </span>{" "}
        </Fragment>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative mx-auto flex min-h-[100svh] max-w-shell flex-col justify-center px-5 pb-20 pt-32 sm:px-8 lg:pb-24">
        <div className="max-w-3xl lg:max-w-[46rem]">
          <p
            className="glass mb-8 inline-flex animate-rise items-center gap-2.5 rounded-full border border-white/[0.08] py-1.5 pl-2 pr-3.5 font-mono text-[0.72rem] text-fg-muted"
            style={delay(0)}
          >
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-accent">Full stack</span>
            Software Engineer · Toronto, ON
          </p>

          <h1 className="text-balance text-[2.7rem] font-medium leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[5rem]">
            <span className="block animate-rise pb-4 text-lg font-normal tracking-normal text-fg-muted sm:text-xl" style={delay(80)}>
              Hi, I&apos;m {seo.person.fullName}.
            </span>
            <Words text="I build software" start={160} />
            <span className="inline-block animate-rise" style={delay(370)}>
              <span className="accent-text">end to end</span>,
            </span>{" "}
            <Words text="from the database to the doctor's screen." start={440} />
          </h1>

          <p
            className="mt-8 max-w-xl animate-rise text-pretty text-base leading-relaxed text-fg-muted sm:text-lg"
            style={delay(900)}
          >
            Full stack engineer on Skinopathy OS, the EMR dermatology clinics use in
            Canada and Malaysia. Go, Next.js, PostgreSQL, AWS and Azure.
          </p>

          <div className="mt-10 flex animate-rise flex-wrap items-center gap-3" style={delay(1000)}>
            <Magnetic>
              <a
                href={seo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="PDF"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-soft via-accent to-accent-deep px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-[0_10px_40px_-10px_rgba(255,159,74,0.6)]"
              >
                View résumé
                <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#work"
                className="glass group inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:border-white/25"
              >
                See my work
                <FiArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
          </div>

          <div
            className="mt-10 flex animate-rise flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-fg-dim"
            style={delay(1100)}
          >
            <a
              href={seo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-fg"
            >
              <FiGithub size={14} /> prisp09
            </a>
            <a
              href={seo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-fg"
            >
              <FiLinkedin size={14} /> LinkedIn
            </a>
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-fg-dim" aria-hidden />
              <TorontoTime />
            </span>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-fg-dim transition-colors hover:text-fg md:flex"
        >
          Scroll
          <span className="relative h-10 w-px overflow-hidden bg-white/10">
            <span className="absolute inset-0 animate-scroll-hint bg-accent" />
          </span>
        </a>
      </div>

      {/* Impact strip */}
      <div className="glass border-y border-white/[0.06]">
        <dl className="mx-auto grid max-w-shell grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal
              key={m.value}
              delay={i * 90}
              className={`px-5 py-8 sm:px-8 md:py-10 ${i % 2 === 1 ? "border-l border-white/[0.06]" : ""} ${
                i >= 2 ? "border-t border-white/[0.06] lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block font-serif text-5xl leading-none tracking-tight text-fg md:text-6xl">
                  {m.value}
                </span>
                <span className="mt-3 block max-w-[15rem] text-sm leading-snug text-fg-muted">{m.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
        <p className="mx-auto max-w-shell border-t border-white/[0.06] px-5 py-3 font-mono text-[0.68rem] text-fg-dim sm:px-8">
          Skinopathy OS since Feb 2023 · ticket count covers Linear only, not earlier Jira work
        </p>
      </div>
    </section>
  );
}
