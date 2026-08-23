// lib/motion-variants.ts
import type { Variants, Transition } from "motion/react";

/**
 * MOTION TOKENS
 * ──────────────
 * Same discipline as color/spacing tokens: named, centralized values that
 * every component references instead of hardcoding. If a component's
 * animation "feels different" from another's, it's almost always because
 * someone typed a slightly different duration/ease inline instead of
 * importing from here.
 *
 * This file only covers Motion's domain — interaction-state-driven
 * animation (hover, tap, mount, scroll-into-view once). It does NOT cover
 * GSAP's domain (scroll-scrubbed, pinned timelines) — those live in
 * lib/gsap.ts / per-scene files, with their own eases, because scrub
 * animations are driven by scroll position, not time, and don't share a
 * duration/ease vocabulary with Motion's tween-based model.
 */

// ── EASING ──────────────────────────────────────────────────────────────
// This is the SAME curve as --ease-spring in styles/tokens.css. Keeping
// the two in sync (one for CSS transitions, one for Motion's JS tweens)
// is what makes hover states and mount animations feel like they belong
// to the same product instead of two different libraries guessing at
// "smooth" independently.
export const EASE_SPRING: Transition["ease"] = [0.16, 1, 0.3, 1];
export const EASE_OUT: Transition["ease"] = [0.22, 1, 0.36, 1];

// ── DURATIONS ───────────────────────────────────────────────────────────
export const DURATION = {
  fast: 0.2,   // hover/tap feedback — must feel instant, not "animated"
  base: 0.5,   // standard element reveal
  slow: 0.7,   // hero-weight moments, larger elements
} as const;

// ── SPRING CONFIGS ──────────────────────────────────────────────────────
// For whileHover/whileTap — genuine spring physics, not duration-based.
// Two presets cover everything built so far: a snappy one for small UI
// (the nav glyph) and a softer one for anything bigger (MagneticButton).
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

// ── REUSABLE VARIANTS ────────────────────────────────────────────────────
// These are what RevealText.tsx / RevealGroup.tsx should import instead of
// defining their own `initial`/`animate` objects inline.

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

/**
 * REDUCED MOTION
 * ───────────────
 * Wire this in once, here, rather than every component re-implementing
 * its own prefers-reduced-motion branch. Import getReducedVariants() and
 * pass its output instead of the raw variant when
 * `useReducedMotion()` (from "motion/react") is true.
 */
export function getReducedVariants(variants: Variants): Variants {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.15 } },
  };
}