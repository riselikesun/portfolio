"use client";

import { motion, useScroll, useTransform, useMotionValue } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Typography } from "@riselikesun/ui";
import { Sun } from "@riselikesun/ui/icons";


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

                offsetX.set(centerX - placeholderCenterX);
                offsetY.set(centerY);
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
        <>
            <motion.div
                style={{ opacity: isMounted ? navOpacity : 0 }}
            >
                <Navbar variant="floating" width="sm">
                    <NavbarBrand>
                        <div ref={placeholderRef} className="flex items-center gap-2 opacity-0">
                            <div className="h-4 w-4 sm:h-5 sm:w-5" />
                            <Typography size='xl' tracking="widest" className="font-serif hover:opacity-80 transition-opacity">riselikesun</Typography>
                        </div>
                    </NavbarBrand>
                    <NavbarContent justify="center" className="hidden md:flex">
                        <SmoothScrollLink href="#intro"><NavbarItem>About</NavbarItem></SmoothScrollLink>
                        <SmoothScrollLink href="#professional-experience"><NavbarItem>Work</NavbarItem></SmoothScrollLink>
                        <SmoothScrollLink href="#hobbies"><NavbarItem>Beyond Code</NavbarItem></SmoothScrollLink>
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem className="hidden md:flex">
                            <Link href="/resume" target="_blank" rel="noopener noreferrer">
                                <Typography size="xs">Resume</Typography>
                            </Link>
                        </NavbarItem>
                        <SmoothScrollLink
                            href="#contact"
                        >
                            <Button variant="filled" size='xs'>Say hi</Button>
                        </SmoothScrollLink>
                    </NavbarContent>
                </Navbar>
            </motion.div>
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl h-13 pointer-events-none">
                <motion.div
                    style={{ x, y, scale, opacity: isMounted ? 1 : 0 }}
                    className="absolute left-5 top-0 bottom-0 flex items-center gap-2 origin-center pointer-events-auto"    
                >
                    <motion.div style={{ rotate }} className="text-primary">
                        <Sun className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
                    </motion.div>
                    <SmoothScrollLink href="#top">
                        <Typography size='xl' tracking="widest" className="font-serif hover:opacity-80 transition-opacity">RiseLikeSun</Typography>
                    </SmoothScrollLink>
                </motion.div>
            </div>
        </>
    );
};

export default HomeAppBar;