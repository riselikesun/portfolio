"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import { Button } from "@ui/button";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


type HeroClientProps = {
  src: string;
  alt: string;
};

export default function HeroClient({ src, alt }: HeroClientProps) {
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
          background: "radial-gradient(#00000000, #000000, #000000a6)"
        });

        gsap.to(heroContentRef.current, {
          ease: "power3.out",
          background: "radial-gradient(#00000000, #00000000, #00000000)",
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
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover w-full h-full"
        />
        <div
          ref={heroContentRef}
          className="h-screen grid content-stretch relative p-2">
          <motion.div
            className="text-center grid content-end pt-8 pb-8"
            variants={titleContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p variants={item} className="md:text-xl md:tracking-[16px] text-amber-300">
              SOFTWARE ENGINEER
            </motion.p>
            <h1 className="text-5xl md:text-9xl font-sans-serif text-white">
              <motion.span
                variants={item}
              >Suraj </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
                }}

              >Sharma</motion.span>

            </h1>
          </motion.div>

          <div className="h-50" />

          <motion.div
            className="text-white text-center content-center pt-8 pb-8"
            variants={titleContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Button asChild variant="outline" size="lg">
              <Link href="#coffee">
                ☕ Let's Grab a Coffee
              </Link>
            </Button>
            <motion.p variants={item} className="md:text-2xl p-2">
              Building Software that scale
            </motion.p>
            <motion.p variants={item} className="md:text-2xl p-2">
              Engineer products beyond the screen
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
