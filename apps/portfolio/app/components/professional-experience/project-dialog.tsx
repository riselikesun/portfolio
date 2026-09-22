"use client";

import { Project, TechItem } from "@/app/types/types";
import { ArrowRight } from "lucide-react";
import { TechPill } from "./tech-pill";
import { motion, Variants } from "motion/react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, Link, Card, Button, CardHeader, CardContent, CardFooter, List, ListItem } from "@riselikesun/ui";
import { CardAction } from "@/components/ui/card";

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

interface ProjectDialogProps {
  project: Project;
  companyTech?: TechItem[];
  isFeatured?: boolean;
}

export function ProjectDialog({ project, companyTech = [], isFeatured = false }: ProjectDialogProps) {
  const allTech = [...(project.tech || []), ...companyTech];
  const uniqueTech = Array.from(new Map(allTech.map(t => [t.name, t])).values());

  // Prevent dialog from opening if clicking on the external link
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Dialog closeOnBackButton>
      <DialogTrigger asChild>
        <Card
          size="sm"
          className="group/project-dialog cursor-pointer"
        >
          <CardHeader >
            {project.projectWebsite ? (
              <Link showExternalIcon href={project.projectWebsite} target="_blank"
                className="card-header-link"
                rel="noopener noreferrer"
                onClick={handleLinkClick} aria-label={`Visit ${project.name} website`}><h4>{project.name}</h4></Link>
            ) : (
              <h4 className="text-default">{project.name}</h4>
            )}
          </CardHeader>

          <CardContent>
            <p className={`text-sm text-muted-foreground leading-relaxed ${isFeatured ? 'line-clamp-3' : 'line-clamp-2'}`}>
              {project.description}
            </p>
          </CardContent>
          <CardFooter>
            <CardAction>
              <Button
                variant="ghost"
                size="sm"
                iconHover="right"
                className="p-0 group-[:hover:not(:has(.card-header-link:hover))]/project-dialog:text-primary"
              >
                <span>View Details</span>
                <ArrowRight className="group-[:hover:not(:has(.card-header-link:hover))]/project-dialog:translate-x-1" />
              </Button>
            </CardAction>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent padding="lg" width="7xl">
        <motion.div variants={dialogContainerVariants} initial="hidden" animate="visible">
          <motion.div variants={dialogItemVariants}>
            <DialogHeader>
              <div className="flex items-center justify-between gap-3 pr-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <DialogTitle>
                      <p className="text-2xl">{project.name}</p></DialogTitle>
                    {project.projectWebsite && (
                      <Link
                        variant="pill"
                        size="xs"
                        showExternalIcon
                        href={project.projectWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Project
                      </Link>
                    )}
                  </div>

                  {project.client && (
                    <div className="flex items-center gap-1.5  font-medium">
                      <span className="text-muted-foreground text-sm">Client:</span>
                      {project.clientWebsite ? (
                        <Link
                          href={project.clientWebsite}
                          variant="highlighted"
                          showExternalIcon
                        >
                          {project.client}
                        </Link>
                      ) : (
                        <p className="text-primary">{project.client}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <DialogDescription className="mt-4">
                <span className="text-muted-foreground leading-relaxed"> {project.description}</span>
              </DialogDescription>
            </DialogHeader>
          </motion.div>

          <div className="mt-6 space-y-6">
            {project.responsibilities && project.responsibilities.length > 0 && (
              <motion.div variants={dialogItemVariants}>
                <p className="text-sm font-semibold text-default uppercase tracking-wider mb-4">Key Responsibilities & Achievements</p>
                <List >
                  {project.responsibilities.map((res, i) => (
                    <ListItem key={i}>{res}</ListItem>
                  ))}
                </List>
              </motion.div>
            )}

            {uniqueTech.length > 0 && (
              <motion.div variants={dialogItemVariants}>
                <p className="text-sm font-semibold text-default uppercase tracking-wider mb-4">Technology Stack</p>
                <div className="flex flex-wrap gap-2">
                  {uniqueTech.map((t, i) => (
                    <TechPill key={i} tech={t} />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
