import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import { Slot } from "radix-ui"

const linkVariants = cva(
  "group/link inline-flex items-center transition-colors duration-300 cursor-pointer",
  {
    variants: {
      variant: {
        default: "text-foreground gap-1.5 hover:text-highlight",
        underline: "text-foreground font-semibold underline decoration-primary decoration-2 underline-offset-4 hover:text-highlight hover:decoration-highlight gap-1.5",
        highlighted: "text-primary hover:text-highlight gap-1.5 font-medium",
        pill: "rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 font-medium text-primary hover:bg-primary/15 hover:border-primary/30 hover:text-highlight transition-all gap-1.5",
      },
      size: {
        default: "",
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const linkIconVariants = cva(
  "shrink-0 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "text-muted-foreground group-hover/link:text-highlight transition-colors",
        underline: "text-primary opacity-50 group-hover/link:opacity-100 group-hover/link:text-highlight transition-all",
        highlighted: "text-primary group-hover/link:text-highlight transition-colors",
        pill: "text-primary group-hover/link:text-highlight group-hover/link:scale-110 transition-transform",
      },
      size: {
        default: "size-4",
        xs: "size-3",
        sm: "size-3",
        base: "size-4",
        lg: "size-5",
      },
      hoverOnly: {
        true: "opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "underline",
        hoverOnly: true,
        className: "opacity-0 group-hover/link:opacity-100 group-hover/link:text-highlight duration-300",
      },
      {
        variant: "pill",
        size: "default",
        className: "size-4",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      hoverOnly: false,
    },
  }
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
  VariantProps<typeof linkVariants> {
  asChild?: boolean
  showExternalIcon?: boolean | 'hidden' | 'visible' | 'hover'
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, asChild = false, showExternalIcon, children, ...props }, ref) => {
    const Comp = (asChild ? Slot : "a") as React.ElementType

    const isHoverOnly = showExternalIcon === 'hover'

    const shouldShowIcon =
      showExternalIcon === 'visible' ||
      showExternalIcon === 'hover' ||
      showExternalIcon === true


    if (asChild) {
      return (
        <Comp
          className={cn(linkVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }

    return (
      <Comp
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {shouldShowIcon && (
          <ExternalLink className={cn(linkIconVariants({ variant, size, hoverOnly: isHoverOnly }))} />
        )}
      </Comp>
    )
  }
)
Link.displayName = "Link"

export { Link, linkVariants, linkIconVariants }
