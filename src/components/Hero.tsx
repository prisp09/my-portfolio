import React, { useEffect, useState } from "react";
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { metrics, seo } from "../constants/constants";
import SystemDiagram from "./SystemDiagram";
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

const rise = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="absolute -top-56 left-1/2 h-[640px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,149,255,0.20),transparent)]" />
        <div className="absolute right-[-12%] top-48 h-[420px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(255,159,74,0.13),transparent)]" />
      </div>

      <div className="mx-auto grid max-w-shell gap-14 px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 lg:pb-24">
        <div>
          <p
            className="mb-8 inline-flex animate-rise items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] py-1.5 pl-2 pr-3.5 font-mono text-[0.72rem] text-fg-muted"
            style={rise(0)}
          >
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-accent">
              Full stack
            </span>
            Software Engineer · {seo.person.location.replace(", Canada", "")}
          </p>

          <h1 className="text-balance text-[2.6rem] font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[4.3rem]">
            <span className="block animate-rise pb-3 text-lg font-normal tracking-normal text-fg-muted sm:text-xl" style={rise(80)}>
              Hi, I&apos;m {seo.person.fullName}.
            </span>
            <span className="block animate-rise" style={rise(160)}>
              I build software <span className="accent-text">end to end</span>,
              from the database to the doctor&apos;s&nbsp;screen.
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl animate-rise text-pretty text-base leading-relaxed text-fg-muted sm:text-lg"
            style={rise(260)}
          >
            Full stack engineer at {seo.company.replace(" Inc.", "")}, shipping EMR
            software for clinicians with Go, React, PostgreSQL, AWS and Azure.
          </p>

          <div className="mt-10 flex animate-rise flex-wrap items-center gap-3" style={rise(340)}>
            <a
              href={seo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-soft via-accent to-accent-deep px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-[0_10px_40px_-10px_rgba(255,159,74,0.6)] transition-transform hover:-translate-y-0.5"
            >
              View résumé
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:border-white/25 hover:bg-white/[0.06]"
            >
              See my work
              <FiArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </div>

          <div
            className="mt-10 flex animate-rise flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-fg-dim"
            style={rise(420)}
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

        <div className="animate-rise" style={rise(300)}>
          <SystemDiagram />
        </div>
      </div>

      {/* Impact strip */}
      <div className="border-y border-white/[0.06] bg-ink-900/40">
        <dl className="mx-auto grid max-w-shell grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal
              key={m.value}
              delay={i * 90}
              className={`px-5 py-8 sm:px-8 md:py-10 ${
                i % 2 === 1 ? "border-l border-white/[0.06]" : ""
              } ${i >= 2 ? "border-t border-white/[0.06] lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l" : ""
              }`}
            >
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block font-serif text-5xl leading-none tracking-tight text-fg md:text-6xl">
                  {m.value}
                </span>
                <span className="mt-3 block max-w-[15rem] text-sm leading-snug text-fg-muted">
                  {m.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
