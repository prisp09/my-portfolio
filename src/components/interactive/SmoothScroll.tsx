"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { motionState, prefersReducedMotion } from "@/lib/motion";

/**
 * Smooth scrolling (Lenis) plus the thin progress bar at the top of the page.
 * Also feeds scroll progress, scroll velocity and pointer position to the 3D scene.
 */
export default function SmoothScroll() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setProgress = (p: number) => {
      motionState.progress = p;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };

    const onPointer = (e: PointerEvent) => {
      motionState.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      motionState.pointerY = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    if (prefersReducedMotion()) {
      const onScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pointermove", onPointer);
      };
    }

    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -80 }, lerp: 0.09 });
    lenis.on("scroll", ({ progress, velocity }: Lenis) => {
      setProgress(Number.isFinite(progress) ? progress : 0);
      motionState.velocity = velocity;
    });

    return () => {
      lenis.destroy();
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <div
      ref={bar}
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left scale-x-0 bg-gradient-to-r from-accent-soft via-accent to-cool"
    />
  );
}
