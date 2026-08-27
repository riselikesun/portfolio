"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useLenis } from "lenis/react";
import type { Hobby } from "./data";

interface HobbyDetailModalProps {
  hobby: Hobby | null;
  onClose: () => void;
}

export function HobbyDetailModal({ hobby, onClose }: HobbyDetailModalProps) {
  // ESC to close modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const lenis = useLenis();

  // Lock body scroll while open
  useEffect(() => {
    if (hobby) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [hobby, lenis]);

  return (
    <AnimatePresence>
      {hobby && (
        <>
          {/* ── Backdrop ──────────────────────────────────────────────── */}
          <motion.div
            key="hobby-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-md"
            onClick={onClose}
            aria-hidden
          />

          {/* ── Modal — shares layoutId with the strip card ────────────── */}
          <motion.div
            key={`modal-${hobby.id}`}
            layoutId={`hobby-card-${hobby.id}`}
            className="fixed z-[201] rounded-3xl overflow-hidden bg-[#0c0b09] border border-white/[0.08] shadow-2xl"
            style={{
              inset: "clamp(16px, 4vw, 64px)",
              borderRadius: 24,
            }}
          >
            <div
              className="relative h-full flex flex-col overflow-y-auto scrollbar-none"
              data-lenis-prevent="true"
            >
              <div className="flex flex-col lg:flex-row w-full flex-shrink-0 lg:min-h-[75vh]">
                {/* ── Hero image — shares layoutId with card image ────────── */}
                <motion.div
                  layoutId={`hobby-image-${hobby.id}`}
                  className="relative w-full lg:w-[55%] xl:w-[60%] h-[40vh] sm:h-[50vh] lg:h-auto flex-shrink-0"
                  style={{ borderRadius: 0 }}
                >
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  {/* Fade toward content panel */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#0c0b09] lg:via-[#0c0b09]/50 via-transparent to-transparent"
                  />
                </motion.div>

                {/* ── Content panel ──────────────────────────────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: 0.18, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-center"
                >
                  {/* Text Section (Constrained for readability) */}
                  <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 pt-8 pb-4 lg:py-12 flex flex-col gap-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {hobby.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-[0.22em] uppercase bg-[#D89432]/10 border border-[#D89432]/25 text-[#D89432]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-snug">
                      {hobby.title}
                    </h2>

                    {/* Details */}
                    <p className="text-base sm:text-lg text-white/50 leading-[1.85] whitespace-pre-wrap">
                      {hobby.details}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Gallery Section (Edge-to-edge, dense masonry grid) */}
              {hobby.gallery.length > 0 && (
                <div className="w-full px-2 sm:px-6 pb-12 mt-4 lg:mt-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D89432] mb-6 px-2">
                    Gallery
                  </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                      {hobby.gallery.map((src, i) => {
                        // Dynamic Mosaic Layout Logic:
                        // If there is an odd number of images, the first one becomes a massive full-width feature.
                        // The rest fall into a beautiful 2-column grid. This guarantees ZERO wasted space.
                        const isOdd = hobby.gallery.length % 2 !== 0;
                        const isFeatured = isOdd && i === 0;
                        
                        // Featured images get a cinematic wide ratio, grid images get a classic photo ratio
                        const spanClass = isFeatured ? "md:col-span-2 aspect-video md:aspect-[21/9]" : "col-span-1 aspect-square md:aspect-[4/3]";

                        return (
                          <motion.div
                            key={src}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black/40 ${spanClass}`}
                          >
                            <Image
                              src={src}
                              alt={`${hobby.title} photo ${i + 1}`}
                              fill
                              className="object-cover"
                              sizes={isFeatured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}
              {/* ── Close button ───────────────────────────────────────── */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.15, duration: 0.2 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-white/20 hover:border-[#D89432]/50 transition-all duration-200 cursor-pointer"
                aria-label="Close"
              >
                <X size={15} />
              </motion.button>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
