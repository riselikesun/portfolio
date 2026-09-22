"use client";

import { BlobImage } from "@/components/ui/blob-image";
import {
    FlaskConical,
    Hammer,
    Code2,
    RefreshCw,
    Sprout,
    Hand,
} from "@riselikesun/ui/icons";

import { RevealText, RevealGroup, RevealItem } from "@/components/shared/reveal-text";
import { Card, CardHeader, CardContent } from "@riselikesun/ui";

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
        <section className="relative overflow-hidden bg-[#070706]  w-full px-5 lg:px-12 sm:px-8 py-24 lg:py-32 z-0">
            {/* Todo: ⚠️ hardcoded #070706/#F7F1E7 instead of --void/--fg tokens */}


            <div className="relative mx-auto max-w-7xl bg-[linear-gradient(90deg,#070706_23%,transparent_100%)] z-50">

                <RevealText className="pb-4 md:pb-14 max-w-4xl md:pt-24 lg:pt-32 bg-[radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,.8)_30%,rgba(0,0,0,0)_70%)]">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="h-px w-10 bg-primary" />
                        <span className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
                            How I work
                        </span>
                    </div>

                    <h2 className="text-[clamp(3.2rem,7vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                        I like to get my
                        <br />
                        <span className="text-primary">hands dirty</span>
                        <br />
                        trying new tools.
                    </h2>

                    <p className="mt-8 text-[clamp(1.5rem,3vw,3rem)] font-light leading-tight tracking-[-0.035em] text-fg">
                        I meant{" "}
                        <span className="font-serif italic text-primary">literally</span>{" "}
                        as well.
                    </p>

                    <p className="mt-7 max-w-xl text-base leading-7 text-fg sm:text-lg">
                        I learn by doing. I experiment, build, break things, fix them,
                        and do it all over again. That's how I grow as a developer.
                    </p>
                </RevealText>
            </div>

            <div className="md:absolute flex justify-center w-full right-0 md:right-[-250px] top-24 lg:top-32 z-10">
                <RevealText variant="large" className="max-w-7xl w-full">
                    <div className="relative aspect-[1/1] w-full">
                        <BlobImage
                            src="/dirty-hands.jpeg"
                            alt="Working the soil in the garden"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover rounded-2xl md:rounded-[40px] opacity-70 border border-border"
                        />
                        <div className="absolute shadow-[inset_0px_0px_24px_36px_#070706] inset-0 md:bg-[linear-gradient(100deg,#00000000_0%,#0000_81%,#070706_83%)]" />
                    </div>
                </RevealText>
            </div>

            <div className="relative mx-auto max-w-7xl bg-[linear-gradient(90deg,#070706_23%,transparent_100%)] z-50">
                <RevealGroup className="pt-5 grid gap-5 md:grid-cols-3">
                    {highlights.map((item) => {
                        const Icon = item.icon;
                        return (
                            <RevealItem
                                key={item.title}
                            >
                                <Card variant="blurred" className="group" >
                                    <CardHeader>
                                        <Icon
                                            size={24}
                                            strokeWidth={1.5}
                                            className="text-primary transition-transform duration-500 group-hover:rotate-[-8deg]"
                                        />
                                    </CardHeader>
                                    <CardContent>
                                        <h3 className="text-xs font-medium tracking-[0.25em] text-primary">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </RevealItem>
                        );
                    })}
                </RevealGroup>
                <RevealText className="mt-48 hidden md:block">
                    <Card variant="image" padding="none" className="grid md:grid-cols-5">
                        {principles.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="relative p-7 sm:p-8 md:p-9">
                                    {index > 0 && (
                                        <div className="absolute left-0 top-1/2 hidden h-2/3 w-px -translate-y-1/2 bg-white/[0.08] md:block" />
                                    )}
                                    <Icon size={30} strokeWidth={1.4} className="text-primary" />
                                    <h3 className="mt-7 text-xs font-medium tracking-[0.24em] text-primary">
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </Card>
                </RevealText>
            </div>

        </section>
    );
}