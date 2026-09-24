import React from "react";

/** Card with a soft glow and border highlight that follow the cursor. */
export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={onMove}
      className={`spotlight relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-ink-850 to-ink-900 ${className}`}
    >
      {children}
    </div>
  );
}
