"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import type { Hobby } from "../../data/hobbies";
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
  const stRef = useRef<ScrollTrigger | null>(null);
  const lenis = useLenis();
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
      const tween = gsap.to(strip, {
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

      stRef.current = tween.scrollTrigger ?? null;

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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let initialScrollY = 0;
    let isHorizontalGesture: boolean | null = null;
    let isTouching = false;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;

    const onTouchStart = (e: TouchEvent) => {
      // Don't intercept if modal is open or multi-touch
      if (selectedHobby || e.touches.length !== 1) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      lastX = touchStartX;
      lastTime = performance.now();
      velocity = 0;
      initialScrollY = window.scrollY;
      isHorizontalGesture = null;
      isTouching = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isTouching || selectedHobby || e.touches.length !== 1) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const dx = currentX - touchStartX;
      const dy = currentY - touchStartY;
      const now = performance.now();

      // Track velocity for momentum release
      const dt = now - lastTime;
      if (dt > 0) {
        velocity = (currentX - lastX) / dt;
      }
      lastX = currentX;
      lastTime = now;

      // Determine gesture axis once threshold (6px) is passed
      if (isHorizontalGesture === null) {
        if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
          isHorizontalGesture = Math.abs(dx) > Math.abs(dy);
        }
      }

      if (isHorizontalGesture) {
        const st = stRef.current || ScrollTrigger.getAll().find((t) => t.trigger === sectionRef.current);
        if (!st) return;

        if (e.cancelable) {
          e.preventDefault();
        }

        // Swiping left (dx < 0) advances scroll (targetScrollY increases)
        // Swiping right (dx > 0) rewinds scroll (targetScrollY decreases)
        const touchMultiplier = 1.35;
        const targetScrollY = Math.max(st.start, Math.min(st.end, initialScrollY - dx * touchMultiplier));

        if (lenis) {
          lenis.scrollTo(targetScrollY, { immediate: true });
        } else {
          window.scrollTo({ top: targetScrollY, behavior: "instant" });
        }
        st.scroll(targetScrollY);
        ScrollTrigger.update();
      }
    };

    const onTouchEnd = () => {
      if (isTouching && isHorizontalGesture) {
        const st = stRef.current || ScrollTrigger.getAll().find((t) => t.trigger === sectionRef.current);
        if (st && Math.abs(velocity) > 0.25) {
          // Apply smooth glide momentum
          const momentum = velocity * 300;
          const targetScrollY = Math.max(st.start, Math.min(st.end, window.scrollY - momentum));
          if (lenis) {
            lenis.scrollTo(targetScrollY, { duration: 0.6 });
          } else {
            window.scrollTo({ top: targetScrollY, behavior: "smooth" });
          }
        }
      }
      isTouching = false;
      isHorizontalGesture = null;
      velocity = 0;
    };

    section.addEventListener("touchstart", onTouchStart, { passive: true });
    section.addEventListener("touchmove", onTouchMove, { passive: false });
    section.addEventListener("touchend", onTouchEnd, { passive: true });
    section.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      section.removeEventListener("touchstart", onTouchStart);
      section.removeEventListener("touchmove", onTouchMove);
      section.removeEventListener("touchend", onTouchEnd);
      section.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [lenis, selectedHobby]);

  const handleCardClick = (hobby: Hobby, index: number) => {
    if (stripRef.current && sectionRef.current) {
      const cards = stripRef.current.querySelectorAll<HTMLElement>(".hobby-strip-card");
      const card = cards[index];
      if (card) {
        const strip = stripRef.current;
        const totalWidth = strip.scrollWidth;
        const viewportWidth = window.innerWidth;
        const maxScrollDistance = Math.max(0, totalWidth - viewportWidth + 120);

        if (maxScrollDistance > 0) {
          const currentStripX = (gsap.getProperty(strip, "x") as number) || 0;
          const cardLeft = card.offsetLeft;
          const cardWidth = card.offsetWidth;
          const cardLeftOnScreen = currentStripX + cardLeft;
          const cardRightOnScreen = cardLeftOnScreen + cardWidth;
          const margin = Math.max(viewportWidth * 0.05, 24);

          let targetStripX = currentStripX;

          // Only adjust if the card is clipped or partially out of view
          if (cardLeftOnScreen < margin) {
            // Cut off on the left -> scroll right just enough to bring left edge into view
            targetStripX = margin - cardLeft;
          } else if (cardRightOnScreen > viewportWidth - margin) {
            // Cut off on the right -> scroll left just enough to bring right edge into view
            targetStripX = viewportWidth - margin - (cardLeft + cardWidth);
          }

          const clampedStripX = Math.max(-maxScrollDistance, Math.min(0, targetStripX));

          // Only update scroll position if an adjustment is needed
          if (Math.abs(clampedStripX - currentStripX) > 1) {
            const progress = -clampedStripX / maxScrollDistance;
            const st = stRef.current || ScrollTrigger.getAll().find((t) => t.trigger === sectionRef.current);
            if (st) {
              const targetScrollY = st.start + progress * (st.end - st.start);

              // Immediately synchronize animation state and scroll position
              if (st.animation) {
                st.animation.progress(progress);
              }
              gsap.set(strip, { x: clampedStripX });
              if (progressRef.current) {
                progressRef.current.style.width = `${progress * 100}%`;
              }

              if (lenis) {
                lenis.scrollTo(targetScrollY, { immediate: true });
              } else {
                window.scrollTo({ top: targetScrollY, behavior: "instant" });
              }
              st.scroll(targetScrollY);
              ScrollTrigger.update();
            }
          }
        }
      }
    }

    setSelectedHobby(hobby);
  };

  return (
    <>
      <div ref={sectionRef} className="relative w-full overflow-hidden h-screen bg-[#070706] touch-pan-y">
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
              onClick={() => handleCardClick(hobby, i)}
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

