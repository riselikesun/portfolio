import { TechItem } from "@/app/types/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface TechPillProps {
  tech: TechItem;
  className?: string;
}

export function TechPill({ tech, className = "" }: TechPillProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span 
          className={`inline-flex items-center text-xs font-medium bg-white/[0.03] text-slate-300 border border-white/10 rounded-full hover:border-[#D89432]/40 hover:text-white transition-colors cursor-default ${className}`}
        >
          {tech.name}
        </span>
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        className="bg-[#0a0a0a] border-white/10 p-3 max-w-[240px] shadow-2xl shadow-black rounded-xl z-[100]"
      >
        <div className="flex flex-col gap-2">
          <p className="font-bold text-white tracking-tight">{tech.name}</p>
          
          {tech.proficiency !== undefined && (
            <div className="flex flex-col gap-1 mt-1">
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                <span>Proficiency</span>
                <span className="text-[#D89432]">{tech.proficiency}%</span>
              </div>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-[#D89432] h-full" 
                  style={{width: `${tech.proficiency}%`}} 
                />
              </div>
            </div>
          )}

          {tech.tags && tech.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {tech.tags.map((tag, idx) => (
                <span key={idx} className="text-[9px] font-medium bg-white/[0.04] border border-white/5 px-1.5 py-0.5 rounded text-slate-300 capitalize">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
