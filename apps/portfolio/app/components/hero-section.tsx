"use client";

import { BlobImage } from "@/components/ui/blob-image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AnimatedWord } from "@riselikesun/ui";
import { CoffeeDialog } from "./coffee-dialog";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";
import { Typography } from "@riselikesun/ui";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  const titleContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.9 },
    },
  };


  const item: any = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  useEffect(() => {
    if (!heroContentRef.current) return;

    let ctx: gsap.Context;

    const init = () => {
      ctx = gsap.context(() => {
        gsap.set(heroContentRef.current, {
          background: "radial-gradient(circle, #0000007e, #000000, #000000a6)"
        });

        gsap.to(heroContentRef.current, {
          ease: "power3.out",
          background: "radial-gradient(circle, #00000000, #00000000, #00000000)",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "+=500",
            scrub: 0.6,
          },
        }
        );
      }, heroContentRef);
    };

    init();
    return () => {
      ctx?.revert();
    };
  }, []);




  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 1.03, }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <BlobImage
          src="/risingsun.png"
          alt="Rising Sun"
          fill
          preload
          className="object-cover w-full h-full"
        />
        <div
          ref={heroContentRef}
          className="h-screen grid relative p-2">
          <motion.div
            className="text-center grid content-end pt-8 pb-8"
            variants={titleContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={item}>
              <Typography variant="eyebrow" color="accent">
                SOFTWARE ENGINEER
              </Typography>
            </motion.div>
            <Typography variant="display" color="on-dark">
              <motion.span
                variants={item}
              >Suraj </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
                }}

              >Sharma</motion.span>

            </Typography>
          </motion.div>

          <div className="h-8" />

          <motion.div
            className="text-white text-center content-center pt-8 pb-8 flex flex-col justify-between"
            variants={titleContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div>
              <motion.div variants={item} className="p-4">
                <CoffeeDialog />
              </motion.div>
              <motion.div variants={item} className="p-2">
                <Typography variant="subtitle">
                  Building software that&nbsp;
                  <AnimatedWord
                    color="accent"
                    words={["scales.", "performs.", "delights.", "matters."]}
                    className="w-30"
                    interval={3000}
                  />
                </Typography>
              </motion.div>
            </div>
            <div>
              <motion.div variants={item}>
                <SmoothScrollLink href="#intro" className="cursor-pointer">
                  Scroll to rise
                </SmoothScrollLink>
              </motion.div>
              <motion.p variants={item} className="flex justify-center p-2">
                <ArrowDown className="animate-bounce" />
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div >
    </div >
  );
}
