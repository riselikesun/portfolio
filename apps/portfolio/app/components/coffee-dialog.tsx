"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  Typography,
} from "@riselikesun/ui";
import config from "../config";

export function CoffeeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" cursor="pointer">
          ☕ Let's Grab a Coffee
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Typography as="span" variant="h3">Let's talk</Typography>
          </DialogTitle>
          <DialogDescription>
            <Typography as="span" variant="muted">
              Pick whatever's easiest for you.
            </Typography>
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