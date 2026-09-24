"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

const INTERACTIVE = "a, button, [data-cursor]";

/**
 * A dot that tracks the pointer exactly and a ring that trails it. The ring grows
 * over links and buttons, and shows a label for elements with data-cursor="Label".
 * Only enabled for mouse/trackpad users who haven't asked for reduced motion.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = fine && !reduced;
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let hovering = false;
    let pressed = false;
    let visible = false;
    let raf = 0;

    const apply = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      const scale = (hovering ? 1.9 : 1) * (pressed ? 0.8 : 1);
      if (ring.current) {
        ring.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      raf = requestAnimationFrame(apply);
    };
    raf = requestAnimationFrame(apply);

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      if (!visible) {
        visible = true;
        dot.current?.classList.remove("opacity-0");
        ring.current?.classList.remove("opacity-0");
      }
      const el = (e.target as Element | null)?.closest?.(INTERACTIVE) as HTMLElement | null;
      hovering = !!el;
      ring.current?.classList.toggle("is-hover", hovering);
      dot.current?.firstElementChild?.classList.toggle("scale-0", hovering);
      setLabel(el?.dataset.cursor ?? "");
    };
    const onLeave = () => {
      visible = false;
      dot.current?.classList.add("opacity-0");
      ring.current?.classList.add("opacity-0");
    };
    const onDown = () => (pressed = true);
    const onUp = () => (pressed = false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[100] grid h-9 w-9 place-items-center rounded-full border border-white/60 opacity-0 transition-[opacity,background-color,border-color,width,height] duration-300"
      >
        {label && (
          <span className="whitespace-nowrap font-mono text-[0.42rem] uppercase tracking-[0.12em] text-ink-950">
            {label}
          </span>
        )}
      </div>
      {/* The outer div follows the pointer; only the inner dot scales, so shrinking it
          on hover can't pull it toward the page's top-left corner */}
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] opacity-0 transition-opacity duration-200"
      >
        <div className="cursor-dot h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-200" />
      </div>
    </>
  );
}
