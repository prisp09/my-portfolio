import React from "react";

export interface TimelineEntry {
  id: string;
  type: "education" | "experience";
  yearStart: number;
  yearEnd: number | null;
  period: string;
  title: string;
  subtitle: string;
  location: string;
  details: string[];
}

interface TimelineProps {
  entries: TimelineEntry[];
}

function YearBadge({
  yearStart,
  yearEnd,
}: {
  yearStart: number;
  yearEnd: number | null;
}) {
  const label =
    yearEnd === null ? `${yearStart} – Present` : `${yearStart} – ${yearEnd}`;
  return (
    <div className="flex-shrink-0 w-20 md:w-24 text-right pr-4">
      <span className="text-white/90 font-semibold text-sm md:text-base">
        {label}
      </span>
    </div>
  );
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative w-full min-w-0">
      {/* Vertical line */}
      <div
        className="absolute left-[4.75rem] md:left-[5.5rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#13ADC7] via-[#945DD6] to-[#F46737]"
        aria-hidden
      />
      <div className="space-y-0">
        {entries.map((entry) => (
          <div
            key={entry.id}
            id={entry.id}
            className="relative flex gap-6 md:gap-8 pb-12 last:pb-0 scroll-mt-24 min-w-0"
          >
            {/* Year */}
            <YearBadge yearStart={entry.yearStart} yearEnd={entry.yearEnd} />
            {/* Dot on line */}
            <div
              className="absolute left-[4.75rem] md:left-[5.5rem] w-4 h-4 rounded-full border-2 border-white bg-portfolio-dark flex-shrink-0 mt-0.5 z-10 -translate-x-1/2"
              aria-hidden
            />
            {/* Content card */}
            <div className="flex-1 min-w-0">
              <div className="rounded-lg border border-white/10 bg-white/5 p-5 md:p-6 hover:border-white/20 transition-colors min-w-0 overflow-hidden">
                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded mb-2 ${
                    entry.type === "experience"
                      ? "bg-[#13ADC7]/20 text-[#13ADC7]"
                      : "bg-[#945DD6]/20 text-[#945DD6]"
                  }`}
                >
                  {entry.type === "experience" ? "Experience" : "Education"}
                </span>
                <h3 className="text-white font-semibold text-lg md:text-xl mb-1">
                  {entry.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base mb-1">
                  {entry.subtitle}
                </p>
                <p className="text-white/50 text-xs mb-4">{entry.period}</p>
                {entry.details.length > 0 && (
                  <ul className="list-disc list-inside text-white/75 text-sm md:text-base space-y-1.5 leading-relaxed min-w-0 break-words">
                    {entry.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
