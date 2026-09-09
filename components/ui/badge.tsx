import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-transparent px-2.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors duration-200 cursor-default focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_0_10px] shadow-primary/10 hover:brightness-110 hover:shadow-[0_0_15px] hover:shadow-primary/30",
        secondary:
          "bg-transparent text-foreground border border-foreground/15 hover:border-primary/60 hover:text-primary",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 hover:bg-destructive/30",
        outline:
          "border-border bg-transparent text-foreground hover:bg-foreground/5",
        ghost:
          "hover:bg-muted hover:text-muted-foreground",
        link: "text-primary underline-offset-4 cursor-pointer hover:underline",
        glass:
          "bg-foreground/[0.03] text-foreground/80 border border-foreground/10 hover:border-primary/40 hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
