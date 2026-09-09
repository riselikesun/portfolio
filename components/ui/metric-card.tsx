import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"

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
  icon?: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  accent?: string; 
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

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ className, variant, icon, label, value, href, accent, ...props }, ref) => {
    
    if (href) {
      const isExternal = href.startsWith("http");
      return (
        <a 
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer noopener" : undefined}
          className={cn("block focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded-[20px]", className)}
        >
          <Card ref={ref} padding="none" className={cn(metricCardVariants({ variant }), "h-full")} {...props}>
            <MetricCardContent icon={icon} label={label} value={value} href={href} accent={accent} />
          </Card>
        </a>
      )
    }

    return (
      <Card ref={ref} padding="none" className={cn(metricCardVariants({ variant }), className)} {...props}>
         <MetricCardContent icon={icon} label={label} value={value} href={href} accent={accent} />
      </Card>
    )
  }
)
MetricCard.displayName = "MetricCard"

export { MetricCard }
