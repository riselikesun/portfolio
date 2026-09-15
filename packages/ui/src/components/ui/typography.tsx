/**
 * @riselikesun/ui — Typography
 *
 * Industry-standard polymorphic Typography component.
 *
 * Patterns used (same as shadcn/ui, Radix Themes, Chakra UI v3, Mantine):
 *  - CVA (class-variance-authority)  → variant/token management
 *  - cn (clsx + tailwind-merge)      → class composition & override safety
 *  - Polymorphic `as` prop           → render any HTML element without losing styles
 *  - React.forwardRef                → ref access for consumers
 *
 * Usage:
 * ```tsx
 * // Default — renders the semantically correct element for the variant
 * <Typography variant="h1">Heading</Typography>
 *
 * // Polymorphic — render as a span but keep h3 styles
 * <Typography as="span" variant="h3">Inline styled heading</Typography>
 *
 * // With form elements
 * <Typography as="label" variant="overline" htmlFor="field">Label</Typography>
 *
 * // Pure styling utility — apply tokens without the component
 * <motion.span className={typographyVariants({ variant: "display", color: "on-dark" })} />
 * ```
 */

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// CVA variant definitions
// ---------------------------------------------------------------------------

export const typographyVariants = cva("", {
  variants: {
    variant: {
      // Semantic headings — map to h1–h4 by default
      h1: "text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-heading font-bold leading-[1.05]",
      h2: "text-3xl font-heading font-bold tracking-tight",
      h3: "text-2xl font-heading font-semibold",
      h4: "text-xl font-heading font-semibold tracking-tight",
      // Body text
      p: "text-base leading-7",
      lead: "text-xl text-muted-foreground",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      overline: "text-sm font-medium text-muted-foreground uppercase tracking-wider",
      // Display / hero — large-scale presentation text
      display: "text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading",
      subtitle: "text-lg md:text-2xl",
      eyebrow: "text-xs uppercase tracking-[0.35em] text-primary font-semibold",
    },
    /**
     * Semantic color tokens — intentionally design-system values only.
     * For arbitrary one-off colors use `className` directly.
     * `accent` and `on-dark` are common tokens in Radix, Mantine, Chakra.
     */
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive",
      accent: "text-highlight",
      "on-dark": "text-white",
    },
    weight: {
      thin: "font-thin",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    /**
     * Scale override — bypasses the variant's default size.
     * Useful when you want muted-style text but at a different scale.
     */
    size: {
      xs: "text-xs",
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
    tracking: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest",
    },
    leading: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
    noWrap: {
      true: "truncate",
    },
    gutterBottom: {
      true: "mb-4",
    },
  },
  defaultVariants: {
    // variant intentionally omitted — no default means no font-size class is applied
    // and the element inherits from its CSS context (parent font-size).
    // This matters for inline usage, e.g. AnimatedWord inside a Typography.
  },
})

// ---------------------------------------------------------------------------
// Variant → default HTML element map (semantic defaults)
// ---------------------------------------------------------------------------

const variantElementMap: Record<string, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  lead: "p",
  small: "small",
  muted: "p",
  overline: "p",
  display: "h1",
  subtitle: "p",
  eyebrow: "p",
}

// ---------------------------------------------------------------------------
// Polymorphic `as` prop typing
//
// Industry-standard approach — same pattern as Chakra UI, Mantine, Radix Themes.
// TypeScript infers correct HTML attributes from the element passed to `as`:
//
//   <Typography as="label" htmlFor="x" />   ✅ htmlFor is valid
//   <Typography as="p"    htmlFor="x" />    ❌ TS error — correct
// ---------------------------------------------------------------------------

type AsProp<E extends React.ElementType> = { as?: E }

type PolymorphicProps<
  E extends React.ElementType,
  OwnProps = object,
> = OwnProps &
  AsProp<E> &
  Omit<React.ComponentPropsWithRef<E>, keyof OwnProps | "as">

type PolymorphicRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>["ref"]

// ---------------------------------------------------------------------------
// Public TypographyProps
// ---------------------------------------------------------------------------

export type TypographyOwnProps = Omit<
  VariantProps<typeof typographyVariants>,
  "color"
> & {
  /** Design-system color token. For one-off colors prefer `className`. */
  color?: VariantProps<typeof typographyVariants>["color"]
}

export type TypographyProps<E extends React.ElementType = "p"> =
  PolymorphicProps<E, TypographyOwnProps>

type TypographyComponent = <E extends React.ElementType = "p">(
  props: TypographyProps<E>
) => React.ReactElement | null

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Polymorphic Typography component.
 *
 * - Renders the semantically correct HTML element for each `variant` by default.
 * - Override with `as` without losing any style tokens.
 * - TypeScript infers valid HTML attributes from the `as` element.
 * - Supports `ref` via forwardRef.
 */
/**
 * Note: React.forwardRef doesn't support generic type parameters on its own,
 * so we use a plain generic function and cast it to TypographyComponent.
 * This is the same approach used by Mantine and Radix Themes internally.
 */
const Typography = function Typography<E extends React.ElementType = "p">(
  {
    as,
    className,
    variant,
    color,
    weight,
    align,
    size,
    tracking,
    leading,
    noWrap,
    gutterBottom,
    ...props
  }: TypographyProps<E>
) {
  const Comp = (as ?? variantElementMap[variant ?? "p"] ?? "p") as React.ElementType

  return (
    <Comp
      data-slot="typography"
      data-variant={variant}
      className={cn(
        typographyVariants({ variant, color, weight, align, size, tracking, leading, noWrap, gutterBottom }),
        className
      )}
      {...props}
    />
  )
} as TypographyComponent

export { Typography }
