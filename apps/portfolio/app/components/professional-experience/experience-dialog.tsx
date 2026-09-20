"use client";

import { Experience } from "@/app/types/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight } from "@riselikesun/ui/icons";
import { TechPill } from "./tech-pill";
import { motion, Variants } from "motion/react";
import { Button, Card, CardContent, CardHeader, Link, List, ListItem } from "@riselikesun/ui";

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
        <Button variant="ghost" className="text-primary hover:text-highlight" iconHover="right" >
          View Full Details
          <ArrowRight size={14} />
        </Button>
      </DialogTrigger>

      <DialogContent width="7xl" padding="xl" background="solid">
        <motion.div variants={dialogContainerVariants} initial="hidden" animate="visible" className="flex flex-col">
          <motion.div variants={dialogItemVariants}>
            <DialogHeader>
              <div className="flex items-center justify-between gap-3 pr-8">
                <div className="flex flex-col gap-1">
                  <DialogTitle className="text-2xl font-bold tracking-tight">
                      {exp.role}
                  </DialogTitle>
                    {exp.company.website ? (
                      <Link
                        variant="highlighted"
                        showExternalIcon
                        size="lg"
                        href={exp.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.company.name}
                      </Link>
                    ) : (
                      <h3 className="text-lg">{exp.company.name}</h3>
                    )}
                </div>
              </div>
               <p className="text-muted-foreground/80 font-mono text-sm mt-2">{exp.period} • {exp.location ?? exp.company.location ?? 'Remote'}</p>
            </DialogHeader>
          </motion.div>

          <div className="mt-6 space-y-8">
            {/* Top level responsibilities / achievements */}
            {(exp.responsibilities || exp.achievements) && (
              <motion.section variants={dialogItemVariants}>
               <p className="text-sm font-semibold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Impact & Responsibilities</p>
                <List color="secondary">
                  {[...(exp.responsibilities || []), ...(exp.achievements || [])].map((r, i) => (
                    <ListItem key={i}>{r}</ListItem>
                  ))}
                </List>
              </motion.section>
            )}

            {/* All Tech */}
            {uniqueTech.length > 0 && (
              <motion.section variants={dialogItemVariants}>
                <p className="text-sm font-semibold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Comprehensive Tech Stack</p>
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
                <p className="text-sm font-semibold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Key Projects</p>
                <div className="grid grid-cols-1 gap-4">
                  {exp.projects.map((proj, i) => (
                    <Card key={i} variant="blurred" size="sm">
                      <CardHeader>
                        <div>
                          {proj.projectWebsite ? (
                            <Link
                              href={proj.projectWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              showExternalIcon
                              variant="highlighted"
                            >
                              {proj.name}
                            </Link>
                          ) : (
                            <h4 >
                              {proj.name}
                            </h4>
                          )}
                        </div>
                        {proj.client && (
                          <div className="flex items-center gap-1.5 text-xs font-medium">
                            <p className="text-muted-foreground text-xs">Client:</p>
                            {proj.clientWebsite ? (
                              <Link
                                href={proj.clientWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                showExternalIcon
                                variant="highlighted"
                                size="xs"
                              >
                                {proj.client}
                              </Link>
                            ) : (
                              <p className="text-muted-foreground text-xs">
                                {proj.client}
                              </p>
                            )}
                          </div>
                        )}
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {proj.description}
                        </p>
                        {proj.responsibilities && proj.responsibilities.length > 0 && (
                          <List  spacing="sm" color="muted" className="mt-4">
                            {proj.responsibilities.slice(0, 3).map((res, j) => (
                              <ListItem key={j}>{res}</ListItem>
                            ))}
                          </List>
                        )}
                      </CardContent>
                    </Card>
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
