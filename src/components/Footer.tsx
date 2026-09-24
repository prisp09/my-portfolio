import React from "react";
import { FiArrowUp, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { seo } from "@/constants/constants";

const SOCIALS = [
  { href: seo.social.github, label: "GitHub", Icon: FiGithub },
  { href: seo.social.linkedin, label: "LinkedIn", Icon: FiLinkedin },
  { href: seo.social.instagram, label: "Instagram", Icon: FiInstagram },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-shell flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-fg-muted">
            © {new Date().getFullYear()} {seo.person.fullName} · {seo.person.location}
          </p>
          <p className="mt-1 font-mono text-xs text-fg-dim">
            It&apos;s not a bug. It&apos;s a surprise feature! ✨
          </p>
        </div>
        <div className="flex items-center gap-2">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.08] text-fg-muted transition-colors hover:border-white/20 hover:text-fg"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-white/[0.06] text-fg transition-colors hover:bg-accent hover:text-ink-950"
          >
            <FiArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
