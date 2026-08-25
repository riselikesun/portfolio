import { Experience } from '../types/types'
import { ProjectDialog } from './experience/project-dialog'
import { TechStackDialog } from './experience/tech-stack-dialog'
import { ExperienceDialog } from './experience/experience-dialog'
import { TechPill } from './experience/tech-pill'
import { ExternalLink } from 'lucide-react'

interface ExperienceCardProps {
  exp: Experience
  isFeatured?: boolean
}

export default function ExperienceCard({ exp, isFeatured = false }: ExperienceCardProps) {
  // Combine top-level responsibilities and achievements to show on the card
  const highlights = [
    ...(exp.responsibilities || []),
    ...(exp.achievements || []),
    // If no top-level responsibilities, grab the first few from projects
    ...(exp.responsibilities?.length || exp.achievements?.length ? [] : 
        (exp.projects?.flatMap(p => p.responsibilities || []).slice(0, 3) || []))
  ];

  // Combine tech from top-level and projects, removing duplicates
  const allTech = [
    ...(exp.tech || []),
    ...(exp.projects?.flatMap(p => p.tech || []) || [])
  ];
  const uniqueTech = Array.from(new Map(allTech.map(t => [t.name, t])).values());

  // Limit visible tech tags for a cleaner bento look, show all if featured
  const maxTech = isFeatured ? 15 : 8;
  const visibleTech = uniqueTech.slice(0, maxTech);
  const hasMoreTech = uniqueTech.length > maxTech;

  return (
    <article 
      className={`
        h-full rounded-3xl p-6 md:p-8 backdrop-blur-md transition-all duration-300 flex flex-col
        ${isFeatured 
          ? 'bg-gradient-to-br from-white/[0.06] to-white/[0.02] border-[#D89432]/30 border shadow-[0_0_40px_rgba(216,148,50,0.15)] hover:shadow-[0_0_60px_rgba(216,148,50,0.25)] hover:border-[#D89432]/50' 
          : 'bg-white/[0.03] border-white/10 border hover:bg-white/[0.05] hover:border-white/20'
        }
      `}
    >
      <div className={isFeatured ? "grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow mb-6" : "flex flex-col flex-grow mb-6"}>
        {/* Left Column (or full width if not featured) */}
        <div className="flex flex-col">
          <header className="mb-5 flex flex-col gap-1">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <h3 className={`font-bold tracking-tight text-white ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                {exp.role}
              </h3>
              {isFeatured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#D89432]/10 border border-[#D89432]/20 text-xs font-medium text-[#D89432] whitespace-nowrap">
                  Featured Role
                </span>
              )}
            </div>
            
            <p className="text-base text-slate-300 mt-1 flex items-center flex-wrap gap-2">
              {exp.company.website ? (
                <a
                  href={exp.company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#D89432] hover:text-amber-300 transition-colors flex items-center gap-1 group"
                >
                  {exp.company.name}
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                <span className="font-semibold text-[#D89432]">{exp.company.name}</span>
              )}
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{exp.location ?? exp.company.location ?? 'Remote'}</span>
            </p>
            <p className="text-sm font-mono text-slate-500 mt-1">{exp.period}</p>
          </header>

          <div className="flex-grow">
            {highlights.length > 0 && (
              <ul className="space-y-3">
                {highlights.map((r, i) => (
                  <li key={i} className="flex items-start text-sm md:text-base text-slate-300 leading-relaxed">
                    <span className="mr-3 mt-1.5 flex-shrink-0 flex items-center justify-center w-1.5 h-1.5 rounded-full bg-[#D89432]/70" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {/* Show Projects for non-featured cards */}
            {!isFeatured && exp.projects && exp.projects.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Projects</h4>
                <div className="flex flex-col gap-3">
                  {exp.projects.slice(0, 2).map((proj, i) => (
                    <ProjectDialog key={i} project={proj} isFeatured={false} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column (only if featured) */}
        {isFeatured && (
          <div className="flex flex-col">
            {exp.projects && exp.projects.length > 0 && (
              <div className="flex-grow">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Key Projects</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  {exp.projects.slice(0, 4).map((proj, i) => (
                    <ProjectDialog key={i} project={proj} companyTech={exp.tech} isFeatured={true} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tech Stack spans full width at the bottom */}
      <div className="mt-auto pt-6 border-t border-white/[0.06] w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {visibleTech.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center flex-grow">
            {visibleTech.map((tech, i) => (
              <TechPill key={i} tech={tech} className="px-2.5 py-1.5 text-xs" />
            ))}
            {hasMoreTech && (
              <TechStackDialog tech={uniqueTech} hiddenCount={uniqueTech.length - maxTech} />
            )}
          </div>
        )}
        
        <div className="flex-shrink-0 self-start sm:self-auto">
          <ExperienceDialog exp={exp} />
        </div>
      </div>
    </article>
  )
}

