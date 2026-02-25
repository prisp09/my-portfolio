"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineUser,
  AiOutlineProfile,
  AiOutlineBook,
  AiOutlineCode,
  AiOutlineFolderOpen,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt2, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { href: "#about", label: "About", Icon: AiOutlineUser },
  { href: "#experience", label: "Experience", Icon: AiOutlineProfile },
  { href: "#education", label: "Education", Icon: AiOutlineBook },
  { href: "#tech", label: "Skills", Icon: AiOutlineCode },
  { href: "#projects", label: "Projects", Icon: AiOutlineFolderOpen },
  { href: "#footer", label: "Contact", Icon: AiOutlineMail },
] as const;

function NavLink({
  href,
  label,
  onClick,
  className = "",
  iconOnly,
  Icon,
  showTooltip,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
  iconOnly?: boolean;
  Icon?: React.ComponentType<{ size?: number; className?: string }>;
  showTooltip?: boolean;
}) {
  const content = iconOnly && Icon ? (
    <Icon size={22} className="shrink-0" />
  ) : (
    label
  );
  return (
    <a
      href={href}
      onClick={onClick}
      title={iconOnly ? label : undefined}
      aria-label={label}
      className={`block text-white/75 transition-all duration-300 ease-out hover:text-white hover:translate-x-0.5 ${className} ${showTooltip ? "group relative" : ""}`}
    >
      {content}
      {showTooltip && (
        <span
          className="pointer-events-none absolute left-full top-1/2 z-[110] -translate-y-1/2 ml-3 whitespace-nowrap rounded-md bg-white/95 px-2.5 py-1.5 text-xs font-medium text-portfolio-dark opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
          role="tooltip"
        >
          {label}
        </span>
      )}
    </a>
  );
}

const EMAIL = "priyanshu.sanjay.patel@gmail.com";
const PHONE = "tel:+16475689541";

function ContactIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <a
        href={`mailto:${EMAIL}`}
        className="group relative flex items-center justify-center p-1 text-white/75 transition-all duration-300 ease-out hover:text-white hover:translate-x-0.5"
        aria-label="Email"
        title="Email"
      >
        <AiOutlineMail size={22} className="shrink-0" />
        <span
          className="pointer-events-none absolute left-full top-1/2 z-[110] -translate-y-1/2 ml-3 whitespace-nowrap rounded-md bg-white/95 px-2.5 py-1.5 text-xs font-medium text-portfolio-dark opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
          role="tooltip"
        >
          Email
        </span>
      </a>
      <a
        href={PHONE}
        className="group relative flex items-center justify-center p-1 text-white/75 transition-all duration-300 ease-out hover:text-white hover:translate-x-0.5"
        aria-label="Cell"
        title="Cell"
      >
        <AiOutlinePhone size={22} className="shrink-0" />
        <span
          className="pointer-events-none absolute left-full top-1/2 z-[110] -translate-y-1/2 ml-3 whitespace-nowrap rounded-md bg-white/95 px-2.5 py-1.5 text-xs font-medium text-portfolio-dark opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
          role="tooltip"
        >
          Cell
        </span>
      </a>
    </div>
  );
}

function SocialLinks({ className = "", vertical = false }: { className?: string; vertical?: boolean }) {
  return (
    <div className={`flex ${vertical ? "flex-col gap-3" : "gap-2"} ${className}`}>
      <a
        href="https://github.com/prisp09"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
        aria-label="GitHub"
      >
        <AiFillGithub size={vertical ? "1.25rem" : "1.5rem"} />
      </a>
      <a
        href="https://www.linkedin.com/in/priyanshu-sanjay-patel/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
        aria-label="LinkedIn"
      >
        <AiFillLinkedin size={vertical ? "1.25rem" : "1.5rem"} />
      </a>
      <a
        href="https://instagram.com/pri.s.p"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
        aria-label="Instagram"
      >
        <AiFillInstagram size={vertical ? "1.25rem" : "1.5rem"} />
      </a>
    </div>
  );
}

function scrollToTopSmooth() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isHome = router.pathname === "/";

  const handlePriyanshuClick = (e: React.MouseEvent, closeDrawer?: () => void) => {
    if (isHome) {
      e.preventDefault();
      scrollToTopSmooth();
    }
    closeDrawer?.();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, mounted]);

  return (
    <>
      {/* Desktop: fixed left sidebar with gradient */}
      <aside
        className="hidden md:flex fixed left-0 top-0 bottom-0 z-[100] w-[72px] flex-col items-center py-6 bg-portfolio-dark/95 backdrop-blur-md border-r border-white/10"
        style={{
          boxShadow: "4px 0 24px -4px rgba(19, 173, 199, 0.15), 4px 0 24px -4px rgba(148, 93, 214, 0.1), 4px 0 24px -4px rgba(244, 103, 55, 0.1)",
        }}
      >
        {/* Gradient line on right edge (animated) */}
        <div
          className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#13ADC7] via-[#945DD6] to-[#F46737] opacity-90 animate-gradient-shift"
          aria-hidden
        />
        <Link
          href="/"
          onClick={(e) => handlePriyanshuClick(e)}
          className="flex flex-col items-center gap-1 mb-8 text-white hover:opacity-90 transition-opacity"
        >
          <CgProfile size="2rem" />
          <span className="text-[10px] font-medium leading-tight max-w-[56px] text-center">
            Priyanshu
          </span>
        </Link>
        <nav className="flex flex-1 flex-col justify-center gap-6">
          {NAV_LINKS.map(({ href, label, Icon }) => (
            <NavLink
              key={href}
              href={href}
              label={label}
              Icon={Icon}
              iconOnly
              showTooltip
              className="flex items-center justify-center p-1"
            />
          ))}
        </nav>
        <ContactIcons className="mb-3" />
        <SocialLinks vertical />
      </aside>

      {/* Mobile: floating menu button */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 right-4 z-[90] p-3 rounded-xl bg-gradient-to-r from-[#13ADC7] via-[#945DD6] to-[#F46737] text-white shadow-lg hover:opacity-90 active:scale-95 transition-all duration-300"
        aria-label="Open menu"
      >
        <HiMenuAlt2 size="1.5rem" />
      </button>

      {/* Mobile: slide-in drawer from right */}
      <div
        className={`md:hidden fixed inset-0 z-[100] ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[min(calc(100%-3rem),280px)] max-w-full bg-portfolio-dark border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            boxShadow: mobileOpen ? "-4px 0 32px -4px rgba(19, 173, 199, 0.2), -4px 0 32px -4px rgba(148, 93, 214, 0.15), -4px 0 32px -4px rgba(244, 103, 55, 0.15)" : "none",
          }}
        >
          {/* Gradient accent on left edge of drawer */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#13ADC7] via-[#945DD6] to-[#F46737]"
            aria-hidden
          />
          <div className="p-4 pt-14 flex flex-col flex-1">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <HiX size="1.5rem" />
            </button>
            <Link
              href="/"
              onClick={(e) => handlePriyanshuClick(e, () => setMobileOpen(false))}
              className="flex items-center gap-3 mb-8 text-white"
            >
              <CgProfile size="2rem" />
              <span className="text-xl font-semibold">Priyanshu</span>
            </Link>
            <nav className="flex flex-col gap-1 flex-1">
              {NAV_LINKS.map(({ href, label }) => (
                <NavLink
                  key={href}
                  href={href}
                  label={label}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-3 rounded-lg text-lg font-medium hover:bg-white/5"
                />
              ))}
            </nav>
            <div className="pt-4 border-t border-white/10">
              <SocialLinks className="justify-start" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
