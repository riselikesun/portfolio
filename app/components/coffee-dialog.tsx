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
          <Button asChild variant="outline">
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on LinkedIn
            </a>
          </Button>

          <Button asChild variant="outline">
            <a href={`mailto:${config.email}`}>Email me</a>
          </Button>

          <Button
            asChild
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