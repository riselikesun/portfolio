"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Hobby } from "./data";

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
      gsap.from(cards, {
        opacity: 0,
        x: 50,
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

  // Drag-to-scroll on mobile / touch
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.pageX - strip.offsetLeft;
      scrollLeft = strip.scrollLeft;
      strip.style.cursor = "grabbing";
      strip.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const x = e.pageX - strip.offsetLeft;
      strip.scrollLeft = scrollLeft - (x - startX);
    };
    const onPointerUp = () => {
      isDragging = false;
      strip.style.cursor = "grab";
    };

    strip.addEventListener("pointerdown", onPointerDown);
    strip.addEventListener("pointermove", onPointerMove);
    strip.addEventListener("pointerup", onPointerUp);
    strip.addEventListener("pointercancel", onPointerUp);

    return () => {
      strip.removeEventListener("pointerdown", onPointerDown);
      strip.removeEventListener("pointermove", onPointerMove);
      strip.removeEventListener("pointerup", onPointerUp);
      strip.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-[#070706]">
      {/* Scrollable strip */}
      <div
        ref={stripRef}
        className="absolute top-0 left-0 h-full flex items-center will-change-transform cursor-grab select-none"
        style={{ paddingLeft: "calc(max(5vw, 24px))", paddingRight: "calc(max(5vw, 24px))", gap: `${CARD_GAP}px` }}
      >
        {hobbies.map((hobby, i) => (
          <StripCard key={hobby.id} hobby={hobby} index={i} />
        ))}
      </div>

      {/* Progress bar */}
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

      {/* Scroll hint — fades out once user starts scrolling */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-12 right-[max(5vw,24px)] flex items-center gap-2 text-[11px] font-medium tracking-[0.25em] uppercase text-white/30"
        aria-hidden
      >
        <span>Scroll to explore</span>
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
          <path d="M0 5h18M13 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </div>
  );
}

/* ── Individual strip card ─────────────────────────────────────────────── */

function StripCard({ hobby, index }: { hobby: Hobby; index: number }) {
  // Alternate card heights for visual rhythm
  const heights = ["h-[72vh]", "h-[60vh]", "h-[76vh]", "h-[65vh]", "h-[70vh]", "h-[80vh]", "h-[62vh]"];
  const cardHeight = heights[index % heights.length];

  return (
    <article
      className={`hobby-strip-card flex-shrink-0 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0907] group ${cardHeight}`}
      style={{ width: `${CARD_WIDTH}px` }}
      aria-label={hobby.title}
    >
      {/* Image */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform group-hover:scale-105">
        <Image
          src={hobby.image}
          alt={hobby.title}
          fill
          sizes="340px"
          className="object-cover"
          quality={85}
          loading={index === 0 ? "eager" : "lazy"}
          priority={index === 0}
        />
      </div>

      {/* Gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#070706] via-[#070706]/60 to-transparent"
      />

      {/* Amber glow — hover accent */}
      <div
        aria-hidden
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#D89432]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6">
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

        {/* Subtitle revealed on hover */}
        <div className="overflow-hidden mt-1">
          <p className="text-sm text-white/45 leading-relaxed max-w-[260px] translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms] ease-out">
            {hobby.subtitle}
          </p>
        </div>
      </div>
    </article>
  );
}
