"use client";

import { Experience } from "@/app/types/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, ExternalLink } from "lucide-react";
import { TechPill } from "./tech-pill";
import { motion, Variants } from "motion/react";

const dialogContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const dialogItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

interface ExperienceDialogProps {
  exp: Experience;
}

export function ExperienceDialog({ exp }: ExperienceDialogProps) {
  // Combine all tech from top-level and projects to show in the modal
  const allTech = [
    ...(exp.tech || []),
    ...(exp.projects?.flatMap(p => p.tech || []) || [])
  ];
  const uniqueTech = Array.from(new Map(allTech.map(t => [t.name, t])).values());

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 text-sm font-medium text-[#D89432] hover:text-white transition-colors group px-1 py-2">
          View Full Details
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </DialogTrigger>

      <DialogContent className="bg-[#0a0a0a] border-white/10 text-slate-200 sm:max-w-7xl w-[95vw] max-h-[90vh] overflow-y-auto p-6 sm:p-10 md:p-12 lg:p-16">
        <motion.div variants={dialogContainerVariants} initial="hidden" animate="visible" className="flex flex-col">
          <motion.div variants={dialogItemVariants}>
            <DialogHeader>
              <div className="flex items-center justify-between gap-3 pr-8">
                <div className="flex flex-col gap-1">
                  <DialogTitle className="text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </DialogTitle>
                  <div className="flex items-center gap-2 text-lg text-[#D89432] font-medium">
                    {exp.company.website ? (
                      <a
                        href={exp.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors group/link"
                      >
                        {exp.company.name}
                        <ExternalLink size={16} className="text-[#D89432] group-hover/link:text-amber-300 transition-colors" />
                      </a>
                    ) : (
                      <span>{exp.company.name}</span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-slate-400 font-mono text-sm mt-2">{exp.period} • {exp.location ?? exp.company.location ?? 'Remote'}</p>
            </DialogHeader>
          </motion.div>

          <div className="mt-6 space-y-8">
            {/* Top level responsibilities / achievements */}
            {(exp.responsibilities || exp.achievements) && (
              <motion.section variants={dialogItemVariants}>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Impact & Responsibilities</h4>
                <ul className="space-y-3">
                  {[...(exp.responsibilities || []), ...(exp.achievements || [])].map((r, i) => (
                    <li key={i} className="flex items-start text-sm md:text-base text-slate-300 leading-relaxed">
                      <span className="mr-3 mt-2 flex-shrink-0 flex items-center justify-center w-1.5 h-1.5 rounded-full bg-[#D89432]/70" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* All Tech */}
            {uniqueTech.length > 0 && (
              <motion.section variants={dialogItemVariants}>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Comprehensive Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {uniqueTech.map((t, i) => (
                    <TechPill key={i} tech={t} className="px-3 py-1.5 text-xs" />
                  ))}
                </div>
              </motion.section>
            )}

            {/* Projects */}
            {exp.projects && exp.projects.length > 0 && (
              <motion.section variants={dialogItemVariants}>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Key Projects</h4>
                <div className="grid grid-cols-1 gap-4">
                  {exp.projects.map((proj, i) => (
                    <div key={i} className="bg-white/[0.02] rounded-xl p-5 border border-white/[0.05]">
                      <div className="font-medium text-white mb-2">
                        {proj.projectWebsite ? (
                          <a
                            href={proj.projectWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 hover:text-[#D89432] transition-colors group/link"
                          >
                            {proj.name}
                            <ExternalLink size={16} className="text-slate-400 group-hover/link:text-[#D89432] transition-colors" />
                          </a>
                        ) : (
                          <span>{proj.name}</span>
                        )}
                      </div>
                      {proj.client && (
                        <div className="flex items-center gap-1.5 text-xs font-medium mb-3">
                          <span className="text-slate-500">Client:</span>
                          {proj.clientWebsite ? (
                            <a
                              href={proj.clientWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[#D89432] hover:text-amber-300 transition-colors group/client"
                            >
                              {proj.client}
                              <ExternalLink size={10} className="text-[#D89432] group-hover/client:text-amber-300 transition-colors" />
                            </a>
                          ) : (
                            <span className="text-slate-300">{proj.client}</span>
                          )}
                        </div>
                      )}
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {proj.description}
                      </p>
                      {proj.responsibilities && proj.responsibilities.length > 0 && (
                        <ul className="space-y-2 mt-4">
                          {proj.responsibilities.slice(0, 3).map((res, j) => (
                            <li key={j} className="flex items-start text-xs text-slate-400">
                              <span className="mr-2 mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-slate-500" />
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
