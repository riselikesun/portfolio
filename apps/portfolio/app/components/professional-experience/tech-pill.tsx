import { TechItem } from "@/app/types/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "@riselikesun/ui";

import { Badge, Progress } from '@riselikesun/ui';

interface TechPillProps {
  tech: TechItem;
  className?: string;
}

export function TechPill({ tech, className = "" }: TechPillProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant="glass" className={className}>
          {tech.name}
        </Badge>
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
      >
        <div className="flex flex-col gap-2">
          <p className="text-2xl">{tech.name}</p>          
          {tech.proficiency !== undefined && (
            <div className="flex flex-col gap-1 mt-1">
              <div className="flex items-center justify-between gap-1">
                <p>Proficiency</p>
                <p className="text-primary">{tech.proficiency}%</p>
              </div>
              <Progress value={tech.proficiency} />
            </div>
          )}

          {tech.tags && tech.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {tech.tags.map((tag, idx) => (
                <Badge variant="outline" key={idx} >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
