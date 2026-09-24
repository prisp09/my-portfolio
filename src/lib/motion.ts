/**
 * Shared, mutable motion state. Scroll and pointer handlers write here and the
 * WebGL scene reads it every frame, so neither side triggers React renders.
 */
export const motionState = {
  /** 0 at the top of the page, 1 at the bottom */
  progress: 0,
  /** Scroll velocity in px per frame, signed */
  velocity: 0,
  /** Pointer position in normalized device coords, -1..1 */
  pointerX: 0,
  pointerY: 0,
};

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
