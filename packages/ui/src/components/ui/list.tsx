"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const listVariants = cva("list-none p-0 m-0", {
  variants: {
    variant: {
      default: "",
      bullet: "",
      ordered: "list-decimal pl-5",
      unstyled: "",
    },
    spacing: {
      none: "space-y-0",
      sm: "space-y-1.5",
      default: "space-y-3",
      md: "space-y-3",
      lg: "space-y-4",
    },
    size: {
      xs: "text-xs leading-normal",
      sm: "text-sm leading-relaxed",
      default: "text-base leading-relaxed",
      lg: "text-lg leading-relaxed",
    },
    color: {
      default: "text-muted-foreground",
      foreground: "text-foreground",
      muted: "text-muted-foreground",
      secondary: "text-secondary-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
    spacing: "default",
    size: "default",
    color: "default",
  },
})

type ListContextValue = VariantProps<typeof listVariants> & {
  isOrdered?: boolean
}

const ListContext = React.createContext<ListContextValue>({
  variant: "default",
  spacing: "default",
  size: "default",
  color: "default",
})

export interface ListProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof listVariants> {
  as?: "ul" | "ol"
}

const List = React.forwardRef<HTMLElement, ListProps>(
  (
    {
      as,
      className,
      variant = "default",
      spacing = "default",
      size = "default",
      color = "default",
      ...props
    },
    ref
  ) => {
    const isOrdered = variant === "ordered" || as === "ol"
    const Comp = (as || (isOrdered ? "ol" : "ul")) as "ul"

    return (
      <ListContext.Provider value={{ variant, spacing, size, color, isOrdered }}>
        <Comp
          ref={ref as React.Ref<HTMLUListElement>}
          data-slot="list"
          data-variant={variant}
          className={cn(listVariants({ variant, spacing, size, color, className }))}
          {...props}
        />
      </ListContext.Provider>
    )
  }
)
List.displayName = "List"

const listIndicatorVariants = cva(
  "mr-3 mt-1.5 shrink-0 flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        default: "w-1.5 h-1.5 bg-primary/70",
        primary: "w-1.5 h-1.5 bg-primary",
        muted: "w-1.5 h-1.5 bg-muted-foreground/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ListIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof listIndicatorVariants> {}

function ListIndicator({ className, variant = "default", ...props }: ListIndicatorProps) {
  return (
    <span
      data-slot="list-indicator"
      aria-hidden="true"
      className={cn(listIndicatorVariants({ variant, className }))}
      {...props}
    />
  )
}

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  indicator?: React.ReactNode
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, indicator, children, ...props }, ref) => {
    const { variant, isOrdered } = React.useContext(ListContext)
    const showBullet = (variant === "default" || variant === "bullet") && !isOrdered

    return (
      <li
        ref={ref}
        data-slot="list-item"
        className={cn(
          "flex items-start",
          isOrdered && "block",
          className
        )}
        {...props}
      >
        {indicator ? (
          <span aria-hidden="true" className="mr-3 shrink-0 inline-flex items-center justify-center">
            {indicator}
          </span>
        ) : showBullet ? (
          <ListIndicator />
        ) : null}
        <span className="flex-1">{children}</span>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

export { List, ListItem, ListIndicator, listVariants, listIndicatorVariants }
