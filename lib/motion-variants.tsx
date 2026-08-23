import type { Variants, Transition } from "motion/react";

export const EASE_SPRING: Transition["ease"] = [0.16, 1, 0.3, 1];
export const EASE_OUT: Transition["ease"] = [0.22, 1, 0.36, 1];

// ── DURATIONS ───────────────────────────────────────────────────────────
export const DURATION = {
  fast: 0.2,
  base: 0.5,
  slow: 0.7,
} as const;


export const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 20,
};

export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 24,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_SPRING },
  },
};

export const fadeUpLarge: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE_SPRING },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const tooltipReveal: Variants = {
  hidden: { opacity: 0, y: -4 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.fast } },
};

export function getReducedVariants(variants: Variants): Variants {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.15 } },
  };
}