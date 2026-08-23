"use client";

import Image from "next/image";
import {
    FlaskConical,
    Hammer,
    Code2,
    RefreshCw,
    Sprout,
    Hand,
} from "@/components/icons";

import { RevealText, RevealGroup, RevealItem } from "@/components/shared/reveal-text";

const principles = [
    { icon: FlaskConical, title: "EXPERIMENT", description: "I try new things and explore what's possible." },
    { icon: Hammer, title: "BUILD", description: "I build projects from scratch to bring ideas to life." },
    { icon: Code2, title: "BREAK", description: "I break things to understand how they work." },
    { icon: RefreshCw, title: "FIX", description: "I fix, improve, and refine until it's working better." },
    { icon: Sprout, title: "GROW", description: "Every cycle makes me a better developer." },
];

const highlights = [
    { title: "HANDS DIRTY", description: "Ideas take shape through real work.", icon: Hand },
    { title: "NO SHORTCUTS", description: "I put in the work to understand deeply.", icon: Hammer },
    { title: "BUILD & GROW", description: "Every project makes me a little better.", icon: Sprout },
];

export default function DirtyHandsSection() {
    return (
        <section className="relative overflow-hidden bg-[#070706] text-[#F7F1E7] w-full px-5 lg:px-12 sm:px-8 py-24 lg:py-32">
            {/* Todo: ⚠️ hardcoded #070706/#F7F1E7 instead of --void/--fg tokens */}

            <div className="absolute flex justify-center w-full right-[-250px]">
                <RevealText variant="large" className="max-w-7xl w-full">
                    <div className="relative aspect-[1/1] w-full">
                        <Image
                            src="/dirty-hands.jpeg"
                            alt="Working the soil in the garden"
                            fill
                            priority={false}
                            className="object-cover"
                        />
                        <div className="absolute shadow-[inset_0px_0px_24px_36px_#070706] inset-0 bg-[linear-gradient(100deg,#00000000_0%,#0000_81%,#070706_83%)]" />
                    </div>
                </RevealText>
            </div>

            <div className="relative mx-auto max-w-7xl bg-[linear-gradient(90deg,#070706_23%,transparent_100%)]">

                <RevealText className="pb-14 max-w-4xl pt-24 lg:pt-32 bg-[radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,.8)_30%,rgba(0,0,0,0)_70%)]">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="h-px w-10 bg-[#D89432]" />
                        <span className="text-xs font-medium uppercase tracking-[0.32em] text-[#D89432]">
                            How I work
                        </span>
                        {/*Todo: ⚠️ hardcoded #D89432 */}
                    </div>

                    <h2 className="text-[clamp(3.2rem,7vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                        I like to get my
                        <br />
                        <span className="text-[#D89432]">hands dirty</span>
                        <br />
                        trying new tools.
                    </h2>

                    <p className="mt-8 text-[clamp(1.5rem,3vw,3rem)] font-light leading-tight tracking-[-0.035em] text-[#D9D0C2]">
                        I meant{" "}
                        <span className="font-serif italic text-[#E6A54B]">literally</span>{" "}
                        as well.
                    </p>

                    <p className="mt-7 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
                        I learn by doing. I experiment, build, break things, fix them,
                        and do it all over again. That's how I grow as a developer.
                    </p>
                </RevealText>
                <RevealGroup className="mt-5 grid gap-5 md:grid-cols-3">
                    {highlights.map((item) => {
                        const Icon = item.icon;
                        return (
                            <RevealItem
                                key={item.title}
                                className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-sm transition-colors duration-500 hover:border-[#D89432]/30"
                            >
                                <Icon
                                    size={24}
                                    strokeWidth={1.5}
                                    className="text-[#D89432] transition-transform duration-500 group-hover:rotate-[-8deg]"
                                />
                                <h3 className="mt-8 text-xs font-medium tracking-[0.25em] text-[#D89432]">
                                    {item.title}
                                </h3>
                                <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
                                    {item.description}
                                </p>
                            </RevealItem>
                        );
                    })}
                </RevealGroup>
                <RevealText className="mt-24 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0C0B09]">
                    <div className="grid md:grid-cols-5">
                        {principles.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="relative p-7 sm:p-8 md:p-9">
                                    {index > 0 && (
                                        <div className="absolute left-0 top-1/2 hidden h-2/3 w-px -translate-y-1/2 bg-white/[0.08] md:block" />
                                    )}
                                    <Icon size={30} strokeWidth={1.4} className="text-[#D89432]" />
                                    <h3 className="mt-7 text-xs font-medium tracking-[0.24em] text-[#D89432]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 text-sm leading-6 text-white/45">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </RevealText>
            </div>
        </section>
    );
}