// components/shared/RevealText.tsx + RevealGroup.tsx
"use client";

import { motion, useReducedMotion } from "motion/react"; // note: "motion/react",
// not "framer-motion" — see AGENTS.md re: the Motion rebrand
import { ReactNode } from "react";
import {
  fadeUp,
  fadeUpLarge,
  staggerContainer,
  getReducedVariants,
} from "@/lib/motion-variants";
import type { Variants } from "motion/react";

/**
 * Both components now import their animation shape from lib/motion-
 * variants.ts instead of defining `initial`/`animate` objects inline.
 * This is the actual point of a motion token system: change the site's
 * "feel" (ease curve, duration) in ONE file, every RevealText/RevealGroup
 * instance updates together, instead of hunting through every component
 * that copy-pasted its own version of "opacity 0, y 16, 0.6s."
 */

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  /** Defaults to the standard fadeUp token. Pass "large" for hero-weight
   *  moments (bigger elements, e.g. a large image) — uses fadeUpLarge
   *  instead, still a shared token, not a one-off custom value. */
  variant?: "default" | "large";
}

export function RevealText({ children, className, variant = "default" }: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const base = variant === "large" ? fadeUpLarge : fadeUp;
  const variants = shouldReduceMotion ? getReducedVariants(base) : base;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({ children, className }: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();
  // when reduced motion is on, drop the stagger entirely — a fast,
  // simultaneous fade reads as "respecting the setting," a staggered
  // sequence (even a quick one) still reads as motion-heavy
  const containerVariants = shouldReduceMotion
    ? { hidden: {}, visible: { transition: { staggerChildren: 0 } } }
    : staggerContainer;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? getReducedVariants(fadeUp) : fadeUp;

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}