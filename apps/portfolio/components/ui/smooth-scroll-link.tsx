"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useLenis } from "lenis/react";

type NextLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps;

export interface SmoothScrollLinkProps extends NextLinkProps {
  /**
   * If true, forces the link to bypass Lenis smooth scrolling even if it's a hash link.
   */
  disableSmoothScroll?: boolean;
}

const SmoothScrollLink = React.forwardRef<HTMLAnchorElement, SmoothScrollLinkProps>(
  ({ href, onClick, disableSmoothScroll, className, children, ...props }, ref) => {
    const lenis = useLenis();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const hrefString = href.toString();

      // If it's a hash link, intercept it with Lenis to ensure momentum scrolling works
      if (!disableSmoothScroll && hrefString.startsWith("#")) {
        e.preventDefault();
        lenis?.scrollTo(hrefString);
      }

      // Execute any custom onClick handler passed to the component
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <Link ref={ref} href={href} onClick={handleClick} className={className} {...props}>
        {children}
      </Link>
    );
  }
);

SmoothScrollLink.displayName = "SmoothScrollLink";

export { SmoothScrollLink };
