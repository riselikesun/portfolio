// components/shared/navbar.tsx
"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@riselikesun/ui";
import Link from "next/link";
import { Sun } from "@riselikesun/ui/icons";


const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function AppNavbar() {
  return (
    <>
      <Navbar variant="floating" width="sm">
        <NavbarBrand >

          <Link href="/" title="Rise Like Sun - Home" className="flex items-center gap-2 font-serif text-sm sm:text-lg tracking-widest font-normal text-default hover:opacity-80 transition-opacity">
            <div className="text-primary">
              <Sun className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
            </div>
            RiseLikeSun
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end" >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              title={`Navigate to ${link.label}`}
              className="text-sm font-mono tracking-wide text-fg-dim hover:text-fg transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </NavbarContent>
      </Navbar>
    </>
  );
}