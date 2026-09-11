import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const navbarVariants = cva(
  "flex items-center w-full z-50 transition-all duration-300 px-4 md:px-8 h-16",
  {
    variants: {
      variant: {
        default: "bg-background/80 backdrop-blur-md border-b border-border",
        sticky: "sticky top-0 bg-background/80 backdrop-blur-md border-b border-border",
        floating: "fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] rounded-full border border-border bg-background/70 backdrop-blur-md shadow-lg px-6 md:px-8",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface NavbarProps
  extends React.ComponentProps<"header">,
    VariantProps<typeof navbarVariants> {}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, variant, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(navbarVariants({ variant }), className)}
      {...props}
    />
  )
)
Navbar.displayName = "Navbar"

const NavbarBrand = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center font-bold tracking-wider", className)}
      {...props}
    />
  )
)
NavbarBrand.displayName = "NavbarBrand"

const NavbarContent = React.forwardRef<HTMLElement, React.ComponentProps<"nav"> & { justify?: "start" | "center" | "end" }>(
  ({ className, justify = "start", ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(
        "flex items-center gap-6",
        {
          "mr-auto": justify === "start",
          "mx-auto": justify === "center",
          "ml-auto": justify === "end",
        },
        className
      )}
      {...props}
    />
  )
)
NavbarContent.displayName = "NavbarContent"

const NavbarItem = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer", className)}
      {...props}
    />
  )
)
NavbarItem.displayName = "NavbarItem"

export { Navbar, NavbarBrand, NavbarContent, NavbarItem, navbarVariants }
