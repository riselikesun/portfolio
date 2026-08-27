"use client";

import { motion } from "motion/react";
import { HobbiesHorizontalStrip } from "./hobbies-horizontal-strip";
import { HOBBIES } from "./data";

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const headingItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};


export default function Hobbies() {
  return (
    <section
      id="hobbies"
      aria-label="Hobbies and personal projects"
      className="w-full bg-[#070706] text-[#F7F1E7]"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-5 sm:px-8 lg:px-12 pt-28 pb-0 max-w-7xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          variants={headingItemVariants}
          className="mb-6 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#D89432]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#D89432]">
            Beyond the keyboard
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={headingItemVariants}
          className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white"
        >
          What I build
          <br />
          <span className="text-[#D89432]">off-screen.</span>
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          variants={headingItemVariants}
          className="mt-8 max-w-xl text-base leading-7 text-white/40 sm:text-lg"
        >
          Engineering doesn&apos;t stop when I close VS Code. Whether it&apos;s a 3D-printed
          airframe, a trail summit, or a sunrise from a cliff edge — the process
          is always the same: understand, design, build, improve, repeat.
        </motion.p>
      </motion.div>

      <HobbiesHorizontalStrip hobbies={HOBBIES} />
    </section>
  );
}
