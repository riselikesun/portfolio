"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedWordProps {
  words: string[];
  interval?: number;
  className?: string;
   minWidth?: string | number;
}

export function AnimatedWord({
  words,
  interval = 2500,
  className = "",
  minWidth,
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
    <span
      className={`relative inline-block align-bottom text-left ${className}`} style={{ minWidth }}
    >
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