import { cn } from "@/lib/utils";
import { ReactNode, ElementType, HTMLAttributes, forwardRef } from "react";

const backgroundVariants = {
  transparent: "bg-transparent",
  black: "bg-black",
  dark: "bg-[#050505]",
  navy: "bg-[#050816]",
  charcoal: "bg-[#070706]",
};

export type ContainerBackground = keyof typeof backgroundVariants;

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
  background?: ContainerBackground;
  as?: ElementType;
}

export const Container = forwardRef<HTMLElement, ContainerProps>(
  (
    {
      children,
      className,
      innerClassName,
      fullWidth = false,
      noPadding = false,
      background = "transparent",
      as: Component = "section",
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full",
          !noPadding && "py-8 sm:py-16 md:py-24", // Default padding
          !noPadding && !fullWidth && "px-4 md:px-6",
          backgroundVariants[background],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "mx-auto",
            fullWidth ? "w-full" : "max-w-7xl",
            innerClassName
          )}
        >
          {children}
        </div>
      </Component>
    );
  }
);
Container.displayName = "Container";
