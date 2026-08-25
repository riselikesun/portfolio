"use client";

import { TechItem } from "@/app/types/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TechPill } from "./tech-pill";

interface TechStackDialogProps {
  tech: TechItem[];
  hiddenCount: number;
}

export function TechStackDialog({ tech, hiddenCount }: TechStackDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="px-3 py-1.5 text-xs font-medium bg-white/[0.02] text-slate-400 border border-white/10 rounded-full cursor-pointer hover:bg-white/[0.06] hover:text-white transition-colors">
          +{hiddenCount} more
        </span>
      </DialogTrigger>

      <DialogContent className="bg-[#0a0a0a] border-white/10 text-slate-200 sm:max-w-xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white tracking-tight mb-4">
            Complete Technology Stack
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, i) => (
            <TechPill key={i} tech={t} className="px-4 py-2 text-sm" />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
