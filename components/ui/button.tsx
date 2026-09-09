import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:transition-transform [&_svg]:duration-200",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground font-bold tracking-wide hover:brightness-110 shadow-[0_0_15px] shadow-primary/20 hover:shadow-[0_0_25px] hover:shadow-primary/40",
        outline:
          "border-border hover:bg-foreground/5 hover:text-foreground aria-expanded:bg-foreground/5 aria-expanded:text-foreground",
        secondary:
          "border-foreground/15 font-semibold tracking-wide hover:border-primary/60 hover:text-primary aria-expanded:bg-foreground/10 aria-expanded:text-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline font-semibold",
      },
      size: {
        default:
          "h-10 gap-2 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        lg: "h-12 gap-2 px-7 py-3.5 has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5 text-base",
        icon: "size-10",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
      cursor: {
        default: "cursor-default",
        pointer: "cursor-pointer",
        "not-allowed": "cursor-not-allowed",
      },
      iconHover: {
        none: "",
        scale: "hover:[&_svg]:scale-125",
        right: "hover:[&_svg]:translate-x-1",
        "up-right": "hover:[&_svg]:translate-x-0.5 hover:[&_svg]:-translate-y-0.5",
        down: "hover:[&_svg]:translate-y-1",
        left: "hover:[&_svg]:-translate-x-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      cursor: "pointer",
      iconHover: "none",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  cursor = "default",
  iconHover = "none",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-cursor={cursor}
      className={cn(buttonVariants({ variant, size, cursor, iconHover, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
