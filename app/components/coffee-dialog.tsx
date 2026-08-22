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
          className="bg-amber-300 text-slate-950 hover:bg-amber-200"
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