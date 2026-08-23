// components/shared/RevealText.tsx + RevealGroup.tsx
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import {
  fadeUp,
  fadeUpLarge,
  staggerContainer,
  getReducedVariants,
} from "@/lib/motion-variants";
import type { Variants } from "motion/react";


interface RevealTextProps {
  children: ReactNode;
  className?: string;
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