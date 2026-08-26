"use client";

import { motion, useScroll, useTransform, useMotionValue } from "motion/react";
import { Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SmoothScrollLink } from "./ui/smooth-scroll-link";

const HomeAppBar = () => {
    const { scrollY } = useScroll();
    const rotate = useTransform(scrollY, [0, 1000], [0, 90], { clamp: false });

    const placeholderRef = useRef<HTMLDivElement>(null);
    const offsetX = useMotionValue(0);
    const offsetY = useMotionValue(0);
    const [isMounted, setIsMounted] = useState(false);

    // Store the initial innerHeight to prevent jumping when mobile browser UI hides/shows on scroll
    const initialHeightRef = useRef(typeof window !== 'undefined' ? window.innerHeight : 0);
    const initialWidthRef = useRef(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        setIsMounted(true);
        const updatePos = () => {
            if (placeholderRef.current) {
                // If width changed (e.g. orientation change), we update the stored height.
                // Otherwise, we keep the initial height so mobile scroll doesn't cause jumps.
                if (window.innerWidth !== initialWidthRef.current) {
                    initialHeightRef.current = window.innerHeight;
                    initialWidthRef.current = window.innerWidth;
                }

                const centerX = document.documentElement.clientWidth / 2;
                const centerY = initialHeightRef.current * 0.4;

                const rect = placeholderRef.current.getBoundingClientRect();
                const placeholderCenterX = rect.left + rect.width / 2;
                const placeholderCenterY = rect.top + rect.height / 2;

                offsetX.set(centerX - placeholderCenterX);
                offsetY.set(centerY - placeholderCenterY);
            }
        };

        updatePos();

        let frame: number;
        let count = 0;
        const checkLayout = () => {
            updatePos();
            count++;
            if (count < 60) frame = requestAnimationFrame(checkLayout);
        };
        checkLayout();

        window.addEventListener('resize', updatePos);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', updatePos);
        };
    }, [offsetX, offsetY]);

    const [scaleMax, setScaleMax] = useState(4.5);
    useEffect(() => {
        const w = window.innerWidth;
        if (w < 768) setScaleMax(2.5); // Mobile
        else if (w < 1024) setScaleMax(3.5); // Tablet (iPad)
        else setScaleMax(4.5); // Desktop
    }, []);

    // Use the auto-tracking function signature for useTransform (Framer Motion v12+)
    const y = useTransform(() => {
        const oy = offsetY.get();
        if (oy === 0) return 0;
        return Math.max(0, oy - scrollY.get());
    });

    const x = useTransform(() => {
        const oy = offsetY.get();
        const ox = offsetX.get();
        if (oy === 0) return 0;
        const progress = Math.min(1, Math.max(0, scrollY.get() / oy));
        return ox * (1 - progress);
    });

    const scale = useTransform(() => {
        const oy = offsetY.get();
        if (oy === 0) return 1;
        const progress = Math.min(1, Math.max(0, scrollY.get() / oy));
        return scaleMax - (scaleMax - 1) * progress;
    });

    const navOpacity = useTransform(() => {
        const oy = offsetY.get();
        if (oy === 0) return 1;
        const start = Math.max(0, oy - 150);
        const s = scrollY.get();
        if (s < start) return 0;
        if (s >= oy) return 1;
        return (s - start) / (oy - start);
    });

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(92vw,900px)] h-[52px]">
            {/* The Pill Background and Links */}
            <motion.div
                style={{ opacity: isMounted ? navOpacity : 0 }}
                className="absolute inset-0 backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-full px-5 flex items-center justify-between shadow-lg"
            >
                <div ref={placeholderRef} className="flex items-center gap-2 opacity-0 pointer-events-none">
                    <div className="h-5 w-5" />
                    <div className="font-serif text-lg tracking-tight">riselikesun</div>
                </div>

                <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
                    <SmoothScrollLink href="#intro" className="hover:text-white transition">About</SmoothScrollLink>
                    <SmoothScrollLink href="#professional-experience" className="hover:text-white transition">Work</SmoothScrollLink>
                    <SmoothScrollLink href="#hobbies" className="hover:text-white transition">Beyond Code</SmoothScrollLink>
                </nav>

                <div className="flex items-center gap-3">
                    <Link href="/resume" target="_blank" rel="noopener noreferrer" className="hidden sm:block text-xs font-medium text-white/70 hover:text-white transition">
                        Resume
                    </Link>
                    <SmoothScrollLink
                        href="#contact"
                        className="text-xs font-medium bg-white text-black rounded-full px-4 py-1.5 hover:bg-[#D89432] transition-colors"
                    >
                        Say hi
                    </SmoothScrollLink>
                </div>
            </motion.div>

            {/* The Animated Logo that scales down and docks */}
            <motion.div
                style={{ x, y, scale, opacity: isMounted ? 1 : 0 }}
                className="absolute left-5 top-0 bottom-0 flex items-center gap-2 origin-center"
            >
                <motion.div style={{ rotate }} className="text-[#D89432]">
                    <Sun className="h-5 w-5" strokeWidth={1.8} />
                </motion.div>
                <SmoothScrollLink href="#top" className="font-serif text-lg tracking-tight text-white hover:opacity-80 transition-opacity">
                    riselikesun
                </SmoothScrollLink>
            </motion.div>
        </header>
    );
};

export default HomeAppBar;