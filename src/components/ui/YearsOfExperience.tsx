"use client";

import { useSyncExternalStore } from "react";
import { experience, yearsSince } from "@/constants/constants";

const noop = () => () => {};

/**
 * Years of experience in half-year steps. The server renders the value at build
 * time and the browser recomputes it, so it stays current without a redeploy.
 */
export default function YearsOfExperience() {
  const years = useSyncExternalStore(
    noop,
    () => yearsSince(experience.startDate),
    () => yearsSince(experience.startDate)
  );
  return <>{years}+</>;
}
