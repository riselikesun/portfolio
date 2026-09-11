"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import config from "../config";

export function CoffeeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="default"
          cursor="pointer"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D89432] text-black text-sm font-bold rounded-full tracking-wide hover:bg-amber-400 transition-colors duration-200 group"
        >
          ☕ Let's Grab a Coffee
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Let's talk</DialogTitle>
          <DialogDescription>
            Pick whatever's easiest for you.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-2">
          <Button asChild variant="outline" cursor="pointer">
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on LinkedIn
            </a>
          </Button>

          <Button asChild variant="outline" cursor="pointer">
            <a href={`mailto:${config.email}`}>Email me</a>
          </Button>

          <Button
            asChild
            cursor="pointer"
          >
            <a
              href={config.calendarURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}