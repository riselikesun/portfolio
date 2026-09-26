"use client";

import { BlobImage } from "@/components/ui/blob-image";
import { motion } from "motion/react";
import type { Hobby } from "../../data/hobbies";
import { Badge } from "@riselikesun/ui";

interface StripCardProps {
  hobby: Hobby;
  index: number;
  onClick: () => void;
}

export default function StripCard({ hobby, index, onClick }: StripCardProps) {
  const heights = [
    "h-[72vh]",
    "h-[60vh]",
    "h-[76vh]",
    "h-[65vh]",
    "h-[70vh]",
    "h-[80vh]",
    "h-[62vh]",
  ];
  const cardHeight = heights[index % heights.length];

  return (
    <div
      className={`hobby-strip-card shrink-0 md:opacity-0 md:translate-x-12.5 snap-center ${cardHeight} `}
      style={{ width: "clamp(280px, 28vw, 450px)" }}
    >
      <motion.article
        layoutId={`hobby-card-wrapper-${hobby.id}`}
        className="relative w-full h-full rounded-3xl bg-[#0a0907] group cursor-pointer"
        style={{ borderRadius: 24 }}
        onClick={onClick}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        aria-label={`View ${hobby.title} details`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
      >
        {/* The clipped content mask */}
        <motion.div
          layoutId={`hobby-card-${hobby.id}`}
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{
            borderRadius: 24,
            WebkitMaskImage: "-webkit-radial-gradient(white, black)"
          }}
        >
          <motion.div
            layoutId={`hobby-image-${hobby.id}`}
            className="absolute inset-0"
            style={{ borderRadius: 0 }}
          >
            <div className="relative w-full h-full will-change-transform group-hover:scale-105 transition-transform duration-700 ease-out">
              <BlobImage
                src={hobby.image}
                alt={hobby.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={75}
              />
            </div>
          </motion.div>

          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-[#070706] via-[#070706]/60 to-transparent pointer-events-none w-[120%] h-[120%] ml-[-10%] mt-[-10%]"
          />

          <div
            aria-hidden
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#D89432]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          />

          <div className="relative z-10 flex flex-col justify-end h-full p-6 pointer-events-none">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {hobby.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="highlighted"
                  className="h-5"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h3 className="text-xl font-semibold tracking-tight leading-snug">
              {hobby.title}
            </h3>

            <div className="overflow-hidden mt-1">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-65 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                {hobby.subtitle}
              </p>
            </div>

            <div className="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-primary">
                Tap to explore
              </span>
            </div>
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
}

