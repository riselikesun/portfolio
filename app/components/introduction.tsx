"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { SmoothScrollLink } from "./ui/smooth-scroll-link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stats = [
  { value: "7+", label: "Years of\nExperience" },
  { value: "50M+", label: "Users\nImpacted" },
  { value: "15+", label: "Projects\nDelivered" },
];

export default function IntroSection() {
  return (
    <section
      id="intro"
      aria-label="About Suraj Sharma — Best Full Stack Engineer in India"
      className="w-full py-16 md:py-20 bg-[#050505] overflow-hidden flex items-center relative"
    >
      {/* Full-bleed ambient glow — anchored to left side behind the photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[45%] aspect-square bg-[radial-gradient(circle,rgba(216,148,50,0.12)_0%,transparent_70%)] blur-3xl"
      />

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center relative z-10">

        {/* ── Left: Portrait ── */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Glow disc behind image */}
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-32 bg-[#D89432]/20 blur-3xl rounded-full"
          />

          <div className="relative w-full h-[36rem] sm:h-[42rem] md:h-[52rem] lg:h-[60vh] xl:h-[70vh] max-h-[720px] z-10">
            <Image
              src="/intro-image.png"
              alt="Suraj Sharma — Full Stack Engineer India"
              fill
              priority
              className="object-contain drop-shadow-[0_0_60px_rgba(216,148,50,0.15)]"
              sizes="(max-width: 768px) 80vw, 40vw"
            />
          </div>
        </motion.div>

        {/* ── Right: Content ── */}
        <motion.div
          className="flex flex-col gap-8 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Eye-brow label */}
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold tracking-[0.35em] uppercase text-[#D89432]"
          >
            Full Stack Engineer · Team Lead · India
          </motion.p>

          {/* Hero heading — SEO target embedded naturally */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            The Engineer Behind{" "}
            <span className="text-[#D89432]">
              Products That Scale.
            </span>
          </motion.h2>

          {/* Supporting copy — impactful, keyword-rich */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/55 leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            I&apos;m{" "}
            <strong className="text-white font-semibold">Suraj Sharma,</strong>
            {" "} a Staff Web Developer and one of India&apos;s most sought-after
            full stack engineers. I&apos;ve shipped products used by{" "}
            <strong className="text-white font-semibold">50 million+ people</strong>{" "}
            globally, led cross-functional teams, and built AI-powered platforms
            that redefine what software can do. From scaling Infoblox&apos;s
            marketing tech to engineering{" "}
            <a
              href="https://quillbot.com/paraphrasing-tool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold underline decoration-[#D89432] decoration-2 underline-offset-4"
            >
              QuillBot
            </a>&apos;s core writing product, I build things that last.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-6 pt-2"
          >
            {stats.map(({ value, label }) => (
              <div key={value} className="flex flex-col items-center lg:items-start gap-1">
                <span className="text-3xl md:text-4xl font-extrabold text-[#D89432] tracking-tight">
                  {value}
                </span>
                <span className="text-xs text-white/40 font-medium leading-tight uppercase tracking-widest whitespace-pre-line text-center lg:text-left">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
          >
            <SmoothScrollLink
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D89432] text-black text-sm font-bold rounded-full tracking-wide hover:bg-amber-400 transition-colors duration-200 group"
            >
              Let&apos;s Work Together
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#professional-experience"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white text-sm font-semibold rounded-full tracking-wide hover:border-[#D89432]/60 hover:text-[#D89432] transition-all duration-200"
            >
              View My Work
            </SmoothScrollLink>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}