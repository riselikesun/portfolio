"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Hobby } from "./data";
import { HobbyDetailModal } from "./hobby-detail-modal";
import StripCard from "./strip-card";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HobbiesHorizontalStripProps {
  hobbies: Hobby[];
}

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
      
      const getScrollDistance = () => {
        const totalWidth = strip.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Ensure we don't scroll negatively if items perfectly fit on screen
        return Math.max(0, totalWidth - viewportWidth + 120);
      };

      // Pin + horizontal scroll
      gsap.to(strip, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
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
  }, [hobbies.length]);

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

