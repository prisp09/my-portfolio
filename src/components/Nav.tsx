import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { seo } from "../constants/constants";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

function useActiveSection() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const sections = LINKS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return active;
}

export default function Nav() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-shell items-center justify-between px-5 sm:px-8 md:h-[4.5rem]">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label={`${seo.person.fullName}, back to top`}
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-ink-850 font-serif text-lg italic text-fg transition-colors group-hover:border-accent/50">
              pp
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-fg sm:block">
              {seo.person.fullName}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-white/[0.07] bg-ink-900/60 p-1 backdrop-blur-md">
              {LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={active === id ? "true" : undefined}
                    className={`block rounded-full px-3.5 py-1.5 text-[0.82rem] transition-colors ${
                      active === id
                        ? "bg-white/[0.08] text-fg"
                        : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={seo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-[0.82rem] font-medium text-ink-950 transition-colors hover:bg-accent-soft sm:inline-flex"
            >
              Résumé
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-ink-900/70 text-fg md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <FiMenu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[70] bg-ink-950/95 backdrop-blur-2xl transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-dim">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-fg"
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
          >
            <FiX size={18} />
          </button>
        </div>
        <nav aria-label="Mobile" className="px-5 pt-6">
          <ul className="flex flex-col">
            {LINKS.map(({ id, label }, i) => (
              <li
                key={id}
                className={`border-b border-white/[0.06] transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
              >
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="flex items-baseline justify-between py-4 text-4xl tracking-tight text-fg"
                >
                  <span className={active === id ? "accent-text" : ""}>{label}</span>
                  <span className="font-mono text-xs text-fg-dim">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={seo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-ink-950"
          >
            View résumé <FiArrowUpRight />
          </a>
        </nav>
      </div>
    </>
  );
}
