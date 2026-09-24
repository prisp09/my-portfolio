"use client";

import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { seo } from "@/constants/constants";
import Reveal from "./ui/Reveal";

const LINKS = [
  { href: seo.social.linkedin, label: "LinkedIn", Icon: FiLinkedin, external: true },
  { href: seo.social.github, label: "GitHub", Icon: FiGithub, external: true },
  { href: seo.resumePath, label: "Résumé", Icon: FiFileText, external: true },
  { href: seo.person.phoneHref, label: seo.person.phone, Icon: FiPhone, external: false },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(seo.person.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${seo.person.email}`;
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-white/[0.06]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_100%,#000_30%,transparent_100%)]" />
        <div className="absolute bottom-[-40%] left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,159,74,0.16),transparent)]" />
      </div>

      <div className="mx-auto max-w-shell px-5 py-28 text-center sm:px-8 md:py-40">
        <Reveal>
          <p className="mb-6 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-fg-dim">
            <span className="text-accent">06</span>
            <span className="h-px w-8 bg-white/15" aria-hidden />
            Contact
          </p>
          <h2 className="mx-auto max-w-4xl text-balance text-5xl font-medium leading-[1] tracking-[-0.04em] sm:text-7xl md:text-[5.5rem]">
            Let&apos;s build something <span className="accent-text">that ships.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-base text-fg-muted sm:text-lg">
            Based in Toronto, ON. Email is the fastest way to reach me.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${seo.person.email}`}
            className="group inline-flex max-w-full items-center gap-3 rounded-full bg-gradient-to-r from-accent-soft via-accent to-accent-deep px-6 py-4 text-sm font-semibold text-ink-950 shadow-[0_10px_50px_-10px_rgba(255,159,74,0.7)] transition-transform hover:-translate-y-0.5 sm:text-base"
          >
            <FiMail className="shrink-0" />
            <span className="truncate">{seo.person.email}</span>
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-4 text-sm text-fg transition-colors hover:border-white/25"
            aria-live="polite"
          >
            {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </Reveal>

        <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {LINKS.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-sm text-fg-muted transition-colors hover:border-white/20 hover:text-fg"
            >
              <Icon size={14} />
              {label}
              {external && (
                <FiArrowUpRight
                  size={12}
                  className="text-fg-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              )}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
