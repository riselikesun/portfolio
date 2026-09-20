"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * (variant, color, weight, size...) and all native span HTML attributes
 * (className, style, aria-*, data-*, etc.) without declaring them explicitly.
 */
export interface AnimatedWordProps {
  /** Array of words to animate through */
  words: string[];
  /** Time in milliseconds between each word change. Default is 2500ms. */
  interval?: number;
  /** Additional CSS classes to apply to the component */
  className?: string;
}

/**
 * An inline word cycler that animates through an array of words.
 *
 * The component manages its own interval and uses Framer Motion for the slide-in/out effect.
 *
 * @example
 * ```tsx
 * <AnimatedWord
 *   words={["scales.", "performs.", "delights."]}
 *   color="accent"
 *   weight="bold"
 *   interval={3000}
 * />
 * ```
 */
export function AnimatedWord({
  words,
  interval = 2500,
  className,
}: AnimatedWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-block align-bottom text-left ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}