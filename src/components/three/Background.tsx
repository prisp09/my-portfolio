"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/** Fixed page backdrop: soft gradients always, the WebGL particle field when supported. */
export default function Background() {
  const [webgl, setWebgl] = useState(false);

  useEffect(() => {
    // Wait for the first paint so the canvas never competes with the hero text
    const id = requestAnimationFrame(() => setWebgl(hasWebGL()));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 bg-ink-950">
        <div className="absolute -top-1/3 left-1/2 h-[80vh] w-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,149,255,0.14),transparent)]" />
        <div className="absolute bottom-[-30%] right-[-20%] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(closest-side,rgba(255,159,74,0.08),transparent)]" />
      </div>
      {webgl && <ParticleField />}
    </>
  );
}
