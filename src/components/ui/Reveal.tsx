"use client";

import React, { useEffect, useRef } from "react";

/** Fades its children up once they scroll into view. */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  as?: "div" | "li";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return React.createElement(
    as,
    {
      ref,
      "data-reveal": true,
      className,
      style: { "--d": `${delay}ms` } as React.CSSProperties,
    },
    children
  );
}
