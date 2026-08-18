"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const HomeAppBar = () => {
    const navRef = useRef<HTMLElement>(null);
    const wordmarkRef = useRef<HTMLHeadingElement>(null);
    const didAnimateRef = useRef(false);

    const navLinks = [
        { label: "Work", href: "#work" },
        { label: "Contact", href: "#contact" },
        { label: "Resume", href: "/resume", target: "_blank", rel: "noopener noreferrer" },
    ];

    useEffect(() => {
        if (!wordmarkRef.current || !navRef.current) return;

        let ctx: gsap.Context;
        const getOffsetY = () => {
            const navHeight = navRef.current?.offsetHeight ?? 64;
            const restingCenter = navHeight / 2;
            const viewportMid = window.innerHeight / 2;
            return viewportMid - restingCenter;
        };

        const init = () => {
            ctx = gsap.context(() => {
                if (!didAnimateRef.current) {
                    gsap.set(navRef.current, {
                        y: -120,
                        opacity: 0,
                    });

                    gsap.to(navRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: 0.5,
                        ease: "power3.out",
                        onComplete: () => {
                            didAnimateRef.current = true;
                        },
                    });
                } else {
                    // On resize/re-init, just set final position instantly
                    gsap.set(navRef.current, { y: 0, opacity: 1 });
                }

                gsap.set(wordmarkRef.current, {
                    scale: 1,
                    y: getOffsetY(),
                    transformOrigin: "50% 0%",
                });

                gsap.to(wordmarkRef.current, {
                    scale: 0.267,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: document.body,
                        start: "top top",
                        end: "+=100",
                        scrub: 0.6,
                    },
                });
            }, navRef);
        };

        init();

        let resizeTimer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                ctx.revert();
                init();
                ScrollTrigger.refresh();
            }, 150);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimer);
            ctx.revert();
        };
    }, []);



    return (
        <nav
            ref={navRef}
            className="fixed inset-x-0 top-0 z-10 w-full bg-transparent shadow-none mix-blend-difference opacity-0"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 items-center p-4">

                    <div />

                    <h1
                        ref={wordmarkRef}
                        className="text-3xl md:text-6xl font-bold text-white text-center fixed left-1/2 -translate-x-1/2 top-5 w-max z-50 font-mono tracking-widest"
                    >
                        <a
                            key='/'
                            href='#'
                        >
                            Rise Like Sun
                        </a>
                    </h1>

                    <div className="flex items-center justify-end gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.target}
                                rel={link.rel}
                                className="text-m font-mono tracking-wide text-white hover:opacity-70 transition-opacity"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default HomeAppBar;