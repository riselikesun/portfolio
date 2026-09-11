import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva(
  "text-foreground",
  {
    variants: {
      variant: {
        h1: "text-4xl font-heading font-bold",
        h2: "text-3xl font-heading font-bold tracking-tight",
        h3: "text-2xl font-heading font-semibold",
        h4: "text-xl font-heading font-semibold tracking-tight",
        p: "text-base leading-7",
        lead: "text-xl text-muted-foreground",
        small: "text-sm font-medium leading-none",
        muted: "text-sm text-muted-foreground",
        overline: "text-sm font-medium text-muted-foreground uppercase tracking-wider",
      },
    },
    defaultVariants: {
      variant: "p",
    },
  }
)

const variantToElement: Record<string, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  lead: "p",
  small: "small",
  muted: "p",
  overline: "p",
}

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, ...props }, ref) => {
    const Comp = as || (variant ? variantToElement[variant] : "p") || "p"

    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
