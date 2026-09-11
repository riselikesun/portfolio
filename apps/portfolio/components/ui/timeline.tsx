import * as React from "react"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

export interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  asChild?: boolean;
}

/**
 * Ordered list container for chronological data.
 */
const Timeline = React.forwardRef<HTMLOListElement, TimelineProps>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot.Root : "ol";
  return (
    <Comp ref={ref as any} className={cn("relative border-s border-border ml-3 md:ml-4", className)} {...props} />
  )
})
Timeline.displayName = "Timeline"

export interface TimelineItemProps extends React.HTMLAttributes<HTMLLIElement> {
  asChild?: boolean;
}

/**
 * Individual entry in a Timeline.
 */
const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot.Root : "li";
  return (
    <Comp ref={ref as any} className={cn("mb-10 ms-6 md:ms-8 last:mb-0 relative group", className)} {...props} />
  )
})
TimelineItem.displayName = "TimelineItem"

export interface TimelineDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Styles the dot with the primary accent color to indicate current status. */
  active?: boolean;
  asChild?: boolean;
}

/**
 * Visual indicator for a TimelineItem.
 */
const TimelineDot = React.forwardRef<HTMLSpanElement, TimelineDotProps>(({ className, active, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot.Root : "span";
  return (
    <Comp 
      ref={ref as any} 
      className={cn(
        "absolute flex items-center justify-center w-3 h-3 rounded-full -start-[30px] md:-start-[38px] top-1.5 ring-4 ring-background transition-colors duration-300",
        active ? "bg-primary shadow-[0_0_10px_var(--primary)] ring-primary/20" : "bg-border group-hover:bg-primary/50",
        className
      )} 
      {...props} 
    />
  )
})
TimelineDot.displayName = "TimelineDot"

export interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

/**
 * Container for the textual content of a TimelineItem.
 */
const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot.Root : "div";
  return (
    <Comp ref={ref as any} className={cn("flex flex-col gap-2", className)} {...props} />
  )
})
TimelineContent.displayName = "TimelineContent"

export { Timeline, TimelineItem, TimelineDot, TimelineContent }
