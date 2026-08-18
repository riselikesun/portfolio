// components/shared/navbar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";


const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 h-16 bg-void/70 backdrop-blur-md border-b border-line-dark">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

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
          <Button asChild variant="outline" size="sm">
            <Link href="/resume">Resume</Link>
          </Button>
        </nav>

      </div>
    </header>
    <div className="h-16"></div>
    </>
  );
}