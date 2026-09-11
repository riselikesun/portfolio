import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva(
  "",
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
      color: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary-foreground",
        destructive: "text-destructive",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
      size: {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl",
        "8xl": "text-8xl",
        "9xl": "text-9xl",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
      },
      tracking: {
        tighter: "tracking-tighter",
        tight: "tracking-tight",
        normal: "tracking-normal",
        wide: "tracking-wide",
        wider: "tracking-wider",
        widest: "tracking-widest",
      },
      noWrap: {
        true: "truncate",
      },
      gutterBottom: {
        true: "mb-4",
      },
    },
    defaultVariants: {
      variant: "p",
      color: "default",
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
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, color, size, weight, tracking, align, noWrap, gutterBottom, as, ...props }, ref) => {
    const Comp = as || (variant ? variantToElement[variant] : "p") || "p"

    return (
      <Comp
        className={cn(typographyVariants({ variant, color, size, weight, tracking, align, noWrap, gutterBottom, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
