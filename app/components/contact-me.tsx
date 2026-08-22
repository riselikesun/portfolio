import { ArrowUpRight, BriefcaseBusiness, CalendarDays, Globe, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/lucide-linkedin"
import { GithubIcon } from "@/components/icons/lucide-github"
import { Button } from "@/components/ui/button";
import config from "@/app/config";

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
        icon: GithubIcon,
        accent: "text-emerald-300",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/riselikesun",
        href: config.linkedin,
        icon: LinkedinIcon,
        accent: "text-blue-300",
    },
];

export default function ContactMe() {
    return (
        <section id="contact" className="w-full bg-[#050816] px-6 py-20 text-white md:px-10 md:py-28">
            <div className="mx-auto flex max-w-6xl flex-col">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-amber-300">
                            Let&apos;s build something meaningful
                        </p>
                        <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                            Contact me.
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
                            I&apos;m available for product engineering, thoughtful product design partnerships, and opportunities where strong execution matters.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                        <Button asChild size="lg" className="bg-amber-300 text-slate-950 hover:bg-amber-200">
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
                    </div>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {contactMethods.map(({ label, value, href, icon: Icon, accent }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:border-amber-300/40 hover:bg-white/[0.05]"
                        >
                            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80">
                                <Icon className={`h-5 w-5 ${accent}`} />
                            </div>
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{label}</p>
                            <div className="mt-4 flex items-center justify-between gap-3">
                                <span className="text-lg font-medium text-white">{value}</span>
                                <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-300" />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-16 rounded-3xl border border-amber-300/20 bg-gradient-to-br from-amber-300/8 via-slate-900 to-slate-900 p-8 md:p-10">
                    <p className="text-sm uppercase tracking-[0.24em] text-amber-300">Response time</p>
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
                </div>
            </div>
        </section>
    );
}
