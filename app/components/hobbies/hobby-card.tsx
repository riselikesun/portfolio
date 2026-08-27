"use client";

import { BlobImage } from "@/components/ui/blob-image";
import { motion } from "motion/react";
import type { Hobby } from "./data";

interface HobbyCardProps {
  hobby: Hobby;
  index: number;
  /** Whether this card spans 2 columns in the bento grid */
  wide?: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function HobbyCard({ hobby, index, wide = false }: HobbyCardProps) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`
        group relative overflow-hidden rounded-3xl border border-white/[0.08]
        bg-[#0a0907] cursor-default
        ${wide ? "md:col-span-2" : "col-span-1"}
      `}
      aria-label={hobby.title}
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out will-change-transform group-hover:scale-105">
        <BlobImage
          src={hobby.image}
          alt={hobby.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
          quality={85}
        />
      </div>

      {/* Bottom gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-gradient-to-t from-[#080705] via-[#080705]/70 to-transparent"
      />

      {/* Top-right amber glow on hover */}
      <div
        aria-hidden
        className="absolute -top-12 -right-12 z-10 w-40 h-40 rounded-full bg-[#D89432]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end h-full p-6 sm:p-7">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hobby.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase bg-[#D89432]/10 border border-[#D89432]/25 text-[#D89432]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white leading-snug">
          {hobby.title}
        </h3>

        {/* Subtitle revealed on hover */}
        <div className="overflow-hidden">
          <p className="mt-2 text-sm text-white/50 leading-relaxed max-w-xs translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms] ease-out">
            {hobby.subtitle}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
