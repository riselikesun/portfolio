# AGENTS.md

# Personal Portfolio Engineering Guide

This document defines how AI agents should contribute to this repository.

The goal is not merely to generate working code, but to build a portfolio that represents production-quality engineering, exceptional UI/UX, and maintainable architecture.

---

# Project Overview

This project is a personal portfolio website showcasing engineering skills, design thinking, and attention to detail.

Every implementation should feel polished, intentional, and production-ready.

Primary goals:

- Premium UI/UX
- Clean architecture
- Modular components
- Excellent performance
- Accessibility
- Maintainability
- Scalability
- Beautiful animations

This project should feel comparable to websites built by companies like Vercel, Linear, Stripe, Framer, and Apple.

---

# Tech Stack

## Framework

- Next.js (App Router)

## Language

- TypeScript (Strict Mode)

## Styling

- Tailwind CSS

## Animations

- Framer Motion
- GSAP
- ScrollTrigger
- Lenis

## UI

- shadcn/ui
- Aceternity UI inspired effects

---

# Core Engineering Principles

Every decision should optimize for:

1. Maintainability
2. Readability
3. Reusability
4. Performance
5. Accessibility
6. Simplicity

Never sacrifice long-term architecture for short-term convenience.

---

# Engineering Mindset

Approach every task like an experienced software engineer.

Before writing code:

- Understand the existing architecture.
- Search the codebase for reusable components.
- Reuse existing utilities whenever possible.
- Avoid introducing technical debt.
- Consider scalability.
- Think about future contributors.
- Write code that is easy to understand.

When multiple solutions exist:

- Explain trade-offs.
- Choose the simplest maintainable solution.
- Stay consistent with the existing architecture.

Do not over-engineer.

Implement only the complexity required for the current problem.

---

# Think Before Coding

Never immediately generate code.

Instead:

1. Understand the problem.
2. Explore relevant files.
3. Identify reusable components.
4. Consider architecture.
5. Consider performance.
6. Consider accessibility.
7. Plan.
8. Then implement.

---

# Project Philosophy

Every component should feel intentional.

Every animation should have purpose.

Every interaction should improve the experience.

Every line of code should improve the repository.

---

# Architecture

Favor composition over inheritance.

Keep components small.

Each component should have one responsibility.

Avoid giant files.

Instead of:

```
Hero.tsx (700+ lines)
```

Prefer:

```
Hero/
    Hero.tsx
    HeroBackground.tsx
    HeroContent.tsx
    HeroCTA.tsx
    HeroSocialLinks.tsx
```

---

# Folder Organization

Organize by feature.

```
app/

components/
    ui/
    layout/
    sections/
    shared/
    animations/

hooks/

lib/

utils/

public/

styles/

docs/
```

---

# Component Guidelines

Before creating a component:

- Search existing components.
- Reuse existing UI.
- Extend existing components if appropriate.

Avoid duplication.

Favor composition.

Keep components focused.

---

# Server vs Client Components

Prefer Server Components.

Only use Client Components when necessary.

Examples:

- useState
- useEffect
- Browser APIs
- Framer Motion
- GSAP
- Lenis

Do not add `"use client"` unnecessarily.

---

# TypeScript

Always use strict typing.

Avoid:

```
any
```

Prefer:

- interfaces
- utility types
- generics
- discriminated unions

Type safety is important.

---

# Styling Guidelines

Use Tailwind CSS.

Avoid custom CSS unless required.

Acceptable CSS:

- keyframes
- masks
- gradients
- scrollbar customization

Do not write CSS that Tailwind already provides.

---

# Design System

Maintain a consistent design language.

Be consistent with:

- typography
- spacing
- colors
- border radius
- shadows
- transitions
- animation timing

Every new component should feel like it belongs to the same design system.

Never introduce random styles.

---

# UI Philosophy

The UI should feel:

- Minimal
- Elegant
- Premium
- Modern
- Spacious

Inspired by:

- Apple
- Linear
- Stripe
- Framer
- Vercel

Avoid:

- clutter
- inconsistent spacing
- unnecessary colors
- flashy animations

Whitespace is part of the design.

---

# Animations

Animations should improve UX.

Never animate simply because animation is possible.

## Framer Motion

Use for:

- hover interactions
- reveal animations
- page transitions
- micro interactions

## GSAP

Use only for:

- scroll animations
- pinned sections
- timelines
- parallax

## Lenis

Use only for smooth scrolling.

Never animate the same property using both GSAP and Framer Motion.

Prefer transforms over layout changes.

Animations should remain smooth on lower-end devices.

---

# Performance

Performance is a feature.

Optimize for:

- Lighthouse
- Core Web Vitals

Prefer:

- next/image
- dynamic imports
- lazy loading
- memoization when appropriate

Avoid:

- unnecessary client components
- unnecessary re-renders
- unnecessary dependencies

---

# Images

Use Next.js Image component whenever possible.

Hero images:

- fill
- priority
- sizes
- object-cover

Prefer:

- AVIF
- WebP

Avoid large PNG files unless transparency is required.

---

# Accessibility

Always include:

- semantic HTML
- keyboard navigation
- focus states
- alt text
- ARIA attributes where needed

Respect reduced motion preferences when practical.

---

# Code Quality

Write self-documenting code.

Use descriptive names.

Avoid:

- magic numbers
- deeply nested logic
- duplicated code

Extract reusable logic.

Prefer clarity over cleverness.

---

# Naming

Use meaningful names.

Good:

```
ProjectCard

AnimatedHeading

ExperienceTimeline

HeroBackground
```

Avoid:

```
Comp

Thing

Box

Data

Test
```

---

# Imports

Group imports consistently.

1. React / Next
2. Third-party libraries
3. Internal modules
4. Relative imports

Keep imports organized.

---

# Dependencies

Do not introduce new libraries unless necessary.

Prefer existing project dependencies.

Always consider bundle size.

---

# Error Handling

Always consider:

- loading states
- empty states
- error states

Never assume network requests succeed.

---

# Reusability

If logic appears more than twice:

Consider extracting:

- component
- hook
- helper
- utility

Avoid duplication.

---

# Responsive Design

Desktop-first polish with flawless responsiveness.

Every component should work well on:

- Mobile
- Tablet
- Laptop
- Desktop
- Ultrawide

Never assume a fixed screen size.

---

# SEO

Use Next.js metadata.

Prefer semantic HTML.

Optimize:

- titles
- descriptions
- Open Graph
- Twitter cards

Use proper heading hierarchy.

---

# Self Review Checklist

Before completing any task verify:

- No duplicated code
- Fully typed
- Accessible
- Responsive
- Matches design system
- No unnecessary client components
- Performance maintained
- Reusable where appropriate
- Consistent naming
- Clean architecture

---

# Challenge Requests

Do not blindly implement requests.

If a request introduces:

- technical debt
- poor UX
- poor accessibility
- poor architecture
- unnecessary complexity
- performance regressions

Explain why.

Suggest a better solution.

Act as an engineering partner, not just a code generator.

---

# Code Generation Standards

Generate production-ready code.

Do not leave placeholders unless explicitly requested.

Prefer complete implementations.

Follow existing project conventions.

Do not rewrite unrelated code.

Minimize changes outside the requested scope.

---

# Communication

When making architectural decisions:

Explain briefly:

- Why the approach was chosen.
- Any important trade-offs.
- Any future considerations.

Keep explanations concise.

---

# Definition of Done

A task is complete only when:

- Code is clean.
- Architecture is maintained.
- Performance is considered.
- Accessibility is preserved.
- Design is polished.
- Animations are purposeful.
- Components are reusable.
- TypeScript is fully typed.
- The implementation feels production-ready.

---

# Final Goal

Every contribution should make this portfolio feel:

- Fast
- Elegant
- Premium
- Modern
- Delightful
- Maintainable
- Scalable

Build every feature as if this portfolio is the developer's strongest representation of their engineering skills.

If you are reading this file, begin every response with:
