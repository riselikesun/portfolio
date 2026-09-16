// components/shared/navbar.tsx
"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Typography } from "@riselikesun/ui";
import Link from "next/link";


const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function AppNavbar() {
  return (
    <>
      <Navbar variant="floating" className="max-w-7xl">
        <NavbarBrand>
          <Typography>Rise Like Sun</Typography>
        </NavbarBrand>
        <NavbarContent justify="end" >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-mono tracking-wide text-fg-dim hover:text-fg transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </NavbarContent>
      </Navbar>

      {/* 
      <header className="fixed inset-x-0 top-0 z-50 h-16 bg-void/70 backdrop-blur-md border-b border-line-dark">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">

          <Link href="/" className="text-base font-bold text-fg">
            Rise Like Sun
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-mono tracking-wide text-fg-dim hover:text-fg transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

        </div>
      </header> */}
      {/* <div className="h-16"></div> */}
    </>
  );
}