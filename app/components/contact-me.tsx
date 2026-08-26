"use client";

import { ArrowUpRight, CalendarDays, Mail, Linkedin, Github } from "@/components/icons"
import {  } from "@/components/icons/lucide-github"
import { Button } from "@/components/ui/button";
import config from "@/app/config";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};


const contactMethods = [
    {
        label: "Email",
        value: config.email,
        href: `mailto:${config.email}`,
        icon: Mail,
        accent: "text-sky-300",
    },
    {
        label: "GitHub",
        value: "github.com/riselikesun",
        href: config.github,
        icon: Github,
        accent: "text-emerald-300",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/riselikesun",
        href: config.linkedin,
        icon: Linkedin,
        accent: "text-blue-300",
    },
];

export default function ContactMe() {
    //  Todo: ⚠️ hardcoded colors
    return (
        <section id="contact" className="w-full bg-[#050816] px-6 py-20 text-white md:px-10 md:py-28">
            <div className="mx-auto flex max-w-7xl flex-col">
                <motion.div 
                    variants={containerVariants} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-50px" }} 
                    className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
                >
                    <motion.div variants={itemVariants}>
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#D89432]">
                            Let&apos;s build something meaningful
                        </p>
                        <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                            Contact me.
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
                            I&apos;m available for product engineering, thoughtful product design partnerships, and opportunities where strong execution matters.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                        <Button asChild size="lg" className="bg-[#D89432] text-slate-950 hover:bg-amber-400">
                            <a href={config.calendarURL} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" />
                                Book a coffee chat
                            </a>
                        </Button>
                        <Button asChild size="lg" >
                            <a href={`mailto:${config.email}`} >
                                <Mail className="h-4 w-4" />
                                Say hello
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div 
                    variants={containerVariants} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-50px" }} 
                    className="mt-14 grid gap-5 md:grid-cols-3"
                >
                    {contactMethods.map(({ label, value, href, icon: Icon, accent }) => (
                        <motion.a
                            variants={itemVariants}
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-200 hover:border-amber-300/40 hover:bg-white/[0.05]"
                        >
                            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80">
                                <Icon className={`h-5 w-5 ${accent}`} />
                            </div>
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{label}</p>
                            <div className="mt-4 flex items-center justify-between gap-3">
                                <span className="text-lg font-medium text-white">{value}</span>
                                <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-300" />
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={itemVariants} 
                    className="mt-16 rounded-3xl border border-amber-300/20 bg-gradient-to-br from-amber-300/8 via-slate-900 to-slate-900 p-8 md:p-10"
                >
                    <p className="text-sm uppercase tracking-[0.24em] text-[#D89432]">Response time</p>
                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        <div>
                            <p className="text-3xl font-semibold text-white">24h</p>
                            <p className="mt-2 text-slate-300">for general inquiries</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-white">2-3d</p>
                            <p className="mt-2 text-slate-300">for project conversations</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-white">Weekly</p>
                            <p className="mt-2 text-slate-300">for coffee chats and new ideas</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
