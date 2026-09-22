"use client";

import { TechItem } from "@/app/types/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@riselikesun/ui";
import { TechPill } from "./tech-pill";
import { Badge } from "@riselikesun/ui";

interface TechStackDialogProps {
  tech: TechItem[];
  hiddenCount: number;
}

export function TechStackDialog({ tech, hiddenCount }: TechStackDialogProps) {
  return (
    <Dialog closeOnBackButton>
      <DialogTrigger asChild>
        <Badge variant="glass">{`+${hiddenCount} more`}</Badge>
      </DialogTrigger>

      <DialogContent width="4xl">
        <DialogHeader>
          <DialogTitle>
            Complete Technology Stack
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, i) => (
            <TechPill key={i} tech={t}/>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
