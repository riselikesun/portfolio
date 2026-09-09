import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-[22px] [--card-spacing:--spacing(8)] data-[size=sm]:[--card-spacing:--spacing(5)] transition-all duration-300 *:[img:first-child]:rounded-t-[22px] *:[img:last-child]:rounded-b-[22px] text-card-foreground",
  {
    variants: {
      variant: {
        default:
          "bg-card border border-border backdrop-blur-md hover:bg-foreground/[0.04] hover:border-foreground/20 shadow-[0_0_30px] shadow-primary/10 hover:shadow-[0_0_40px] hover:shadow-primary/15",
        featured:
          "bg-gradient-to-br from-foreground/[0.06] to-foreground/[0.02] border-primary/30 border shadow-[0_0_40px] shadow-primary/15 hover:shadow-[0_0_60px] hover:shadow-primary/25 hover:border-primary/50 backdrop-blur-md",
        image:
          "relative border border-border/50 bg-background cursor-default",
        blurred:
          "bg-foreground/[0.025] border border-border/50 backdrop-blur-sm hover:border-primary/30",
      },
      padding: {
        default: "py-(--card-spacing) has-[>img:first-child]:pt-0",
        none: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

export interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
  size?: "default" | "sm"
}

function Card({ className, variant, padding, size = "default", ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-2 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-heading text-xl font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing) flex-1", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl px-(--card-spacing) [.border-t]:pt-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
