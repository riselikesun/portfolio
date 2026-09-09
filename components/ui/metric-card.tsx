import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Slot } from "radix-ui"

const metricCardVariants = cva(
  "group relative overflow-hidden transition-all duration-300 rounded-[20px]",
  {
    variants: {
      variant: {
        default: "bg-foreground/[0.03] border-border hover:border-primary/40 hover:bg-foreground/[0.05]",
        featured: "bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:border-primary/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface MetricCardProps extends React.ComponentProps<"div">, VariantProps<typeof metricCardVariants> {
  /** Optional icon displayed in the top-left corner. */
  icon?: React.ReactNode;
  /** The descriptive title for the metric. */
  label: string;
  /** The primary value to display. */
  value: string;
  /** Optional URL. If provided, the card becomes a clickable link. */
  href?: string;
  /** Optional Tailwind text color class for the icon (e.g. `text-sky-300`). */
  accent?: string; 
  /** If true, merges the component onto its immediate child via Radix Slot. */
  asChild?: boolean;
}

const MetricCardContent = ({ icon, label, value, href, accent }: MetricCardProps) => (
  <div className="flex flex-col h-full p-5">
    {icon && (
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-foreground/[0.04]">
        <div className={cn("flex items-center justify-center [&_svg]:size-5", accent || "text-foreground")}>
          {icon}
        </div>
      </div>
    )}
    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    <div className="mt-4 flex items-center justify-between gap-3">
      <span className="text-lg font-medium text-foreground">{value}</span>
      {href && (
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      )}
    </div>
  </div>
)

/**
 * Display component for numeric or text metrics.
 * Supports link variants and an optional icon.
 */
const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ className, variant, icon, label, value, href, accent, asChild = false, ...props }, ref) => {
    
    if (href) {
      const isExternal = href.startsWith("http");
      const Comp = asChild ? Slot.Root : "a";
      return (
        <Comp 
          href={!asChild ? href : undefined}
          target={!asChild && isExternal ? "_blank" : undefined}
          rel={!asChild && isExternal ? "noreferrer noopener" : undefined}
          className={cn("block focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded-[20px]", className)}
        >
          <Card ref={ref} padding="none" className={cn(metricCardVariants({ variant }), "h-full")} {...props}>
            <MetricCardContent icon={icon} label={label} value={value} href={href} accent={accent} />
          </Card>
        </Comp>
      )
    }

    const Comp = asChild ? Slot.Root : "div";
    return (
      <Comp className={className}>
        <Card ref={ref} padding="none" className={cn(metricCardVariants({ variant }), "h-full")} {...props}>
           <MetricCardContent icon={icon} label={label} value={value} href={href} accent={accent} />
        </Card>
      </Comp>
    )
  }
)
MetricCard.displayName = "MetricCard"

export { MetricCard }
