"use client";

import { Project, TechItem } from "@/app/types/types";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, ArrowUpRight } from "lucide-react";

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
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className={`
            cursor-pointer group flex flex-col transition-all duration-300
            bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1]
            ${isFeatured ? 'rounded-2xl p-5 min-h-[120px]' : 'rounded-xl p-4'}
          `}
        >
          <div className="font-medium text-white mb-2">
            {project.projectWebsite ? (
              <a 
                href={project.projectWebsite} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="card-link inline-flex items-center gap-2 hover:text-[#D89432] transition-colors group/link"
                aria-label={`Visit ${project.name} website`}
              >
                {project.name}
                <ExternalLink size={16} className="text-slate-400 group-hover/link:text-[#D89432] transition-colors" />
              </a>
            ) : (
              <span>{project.name}</span>
            )}
          </div>
          <p className={`text-sm text-slate-400 leading-relaxed ${isFeatured ? 'line-clamp-3' : 'line-clamp-2'}`}>
            {project.description}
          </p>
          
          <div className="mt-auto pt-4 flex items-center text-xs font-medium text-[#D89432] opacity-0 group-hover:opacity-100 group-has-[.card-link:hover]:opacity-0 transition-opacity duration-300">
            <span>View Details</span>
            <ArrowUpRight size={14} className="ml-1" />
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="bg-[#0a0a0a] border-white/10 text-slate-200 sm:max-w-7xl w-[95vw] max-h-[90vh] overflow-y-auto p-6 sm:p-10 md:p-12 lg:p-16">
        <DialogHeader>
          <div className="flex items-center justify-between gap-3 pr-8">
            <div className="flex items-center gap-3">
              <DialogTitle className="text-2xl font-bold text-white tracking-tight">
                {project.name}
              </DialogTitle>
              {project.projectWebsite && (
                <a 
                  href={project.projectWebsite} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D89432]/10 hover:bg-[#D89432]/20 text-xs font-medium leading-none text-[#D89432] transition-colors border border-[#D89432]/20 shrink-0 whitespace-nowrap"
                >
                  Live Project <ExternalLink size={12} className="relative -mt-[1px]" />
                </a>
              )}
            </div>
          </div>
          <DialogDescription className="text-slate-400 text-base leading-relaxed mt-4">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Key Responsibilities & Achievements</h4>
              <ul className="space-y-3">
                {project.responsibilities.map((res, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-300 leading-relaxed">
                    <span className="mr-3 mt-1.5 flex-shrink-0 flex items-center justify-center w-1.5 h-1.5 rounded-full bg-[#D89432]/70" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {uniqueTech.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {uniqueTech.map((t, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-medium bg-white/[0.03] text-slate-300 border border-white/10 rounded-full"
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
