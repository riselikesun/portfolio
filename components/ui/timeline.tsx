import * as React from "react"
import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<HTMLOListElement, React.HTMLAttributes<HTMLOListElement>>(({ className, ...props }, ref) => (
  <ol ref={ref} className={cn("relative border-s border-border ml-3 md:ml-4", className)} {...props} />
))
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("mb-10 ms-6 md:ms-8 last:mb-0 relative group", className)} {...props} />
))
TimelineItem.displayName = "TimelineItem"

interface TimelineDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
}

const TimelineDot = React.forwardRef<HTMLSpanElement, TimelineDotProps>(({ className, active, ...props }, ref) => (
  <span 
    ref={ref} 
    className={cn(
      "absolute flex items-center justify-center w-3 h-3 rounded-full -start-[30px] md:-start-[38px] top-1.5 ring-4 ring-background transition-colors duration-300",
      active ? "bg-primary shadow-[0_0_10px_var(--primary)] ring-primary/20" : "bg-border group-hover:bg-primary/50",
      className
    )} 
    {...props} 
  />
))
TimelineDot.displayName = "TimelineDot"

const TimelineContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props} />
))
TimelineContent.displayName = "TimelineContent"

export { Timeline, TimelineItem, TimelineDot, TimelineContent }
