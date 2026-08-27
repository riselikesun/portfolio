"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Hobby } from "./data";
import { HobbyDetailModal } from "./HobbyDetailModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HobbiesHorizontalStripProps {
  hobbies: Hobby[];
}

const CARD_WIDTH = 340; // px
const CARD_GAP = 24; // px

export function HobbiesHorizontalStrip({ hobbies }: HobbiesHorizontalStripProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !stripRef.current) return;

    const ctx = gsap.context(() => {
      const strip = stripRef.current!;
      const totalWidth = strip.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth + 120; // extra padding

      // Pin + horizontal scroll
      gsap.to(strip, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 0.9,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      // Stagger-reveal all cards the moment the section pins (enters viewport).
      // Individual ScrollTriggers inside a pinned section resolve offsets against
      // the pin spacer — causing them all to fire at the very end. A single shared
      // trigger with stagger avoids that entirely.
      const cards = strip.querySelectorAll<HTMLElement>(".hobby-strip-card");
      gsap.to(cards, {
        opacity: 1,
        x: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // fires when section top is 80% down the viewport = 20% visible
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={sectionRef} className="relative w-full overflow-hidden h-screen bg-[#070706]">
        <div
          ref={stripRef}
          className="absolute top-0 left-0 h-full flex items-center will-change-transform select-none"
          style={{
            paddingLeft: "calc(max(5vw, 24px))",
            paddingRight: "calc(max(5vw, 24px))",
            gap: `${CARD_GAP}px`,
          }}
        >
          {hobbies.map((hobby, i) => (
            <StripCard
              key={hobby.id}
              hobby={hobby}
              index={i}
              onClick={() => setSelectedHobby(hobby)}
            />
          ))}
        </div>

        <div
          aria-hidden
          className="absolute bottom-8 left-[max(5vw,24px)] right-[max(5vw,24px)] h-px bg-white/10"
        >
          <div
            ref={progressRef}
            className="h-full bg-[#D89432] transition-none origin-left"
            style={{ width: "0%" }}
          />
        </div>

      </div>
      <HobbyDetailModal
        hobby={selectedHobby}
        onClose={() => setSelectedHobby(null)}
      />
    </>
  );
}

/* ── Individual strip card ─────────────────────────────────────────────── */

interface StripCardProps {
  hobby: Hobby;
  index: number;
  onClick: () => void;
}

function StripCard({ hobby, index, onClick }: StripCardProps) {
  // Alternate card heights for visual rhythm
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
      className={`hobby-strip-card flex-shrink-0 opacity-0 translate-x-[50px] ${cardHeight}`} 
      style={{ width: `${CARD_WIDTH}px` }}
    >
      <motion.article
        // layoutId links this card to the modal — Motion morphs between the two
        layoutId={`hobby-card-${hobby.id}`}
        className="relative w-full h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0907] group cursor-pointer"
        style={{ borderRadius: 24 }}
        onClick={onClick}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        aria-label={`View ${hobby.title} details`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
      >
        {/* Image — layoutId shared with modal hero image */}
        <motion.div
          layoutId={`hobby-image-${hobby.id}`}
          className="absolute inset-0"
          style={{ borderRadius: 0 }}
        >
          {/* Wrapper for hover scale to prevent conflict with layoutId transform */}
          <div className="w-full h-full will-change-transform group-hover:scale-105 transition-transform duration-700 ease-out">
            <Image
              src={hobby.image}
              alt={hobby.title}
              fill
              sizes="340px"
              className="object-cover"
              quality={85}
              loading={index < 3 ? "eager" : "lazy"}
              priority={index < 3}
            />
          </div>
        </motion.div>

        {/* Gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#070706] via-[#070706]/60 to-transparent pointer-events-none"
        />

        {/* Amber glow — hover accent */}
        <div
          aria-hidden
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#D89432]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-6 pointer-events-none">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {hobby.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold tracking-[0.22em] uppercase bg-[#D89432]/10 border border-[#D89432]/20 text-[#D89432]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-white leading-snug">
            {hobby.title}
          </h3>

          {/* Subtitle + tap hint revealed on hover */}
          <div className="overflow-hidden mt-1">
            <p className="text-sm text-white/45 leading-relaxed max-w-[260px] translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms] ease-out">
              {hobby.subtitle}
            </p>
          </div>

          {/* Tap to expand hint */}
          <div className="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#D89432]">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#D89432]">
              Tap to explore
            </span>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

