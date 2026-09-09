import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from './button'

describe('Button component', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('applies default variants correctly', () => {
    render(<Button>Default</Button>)
    const button = screen.getByRole('button', { name: /default/i })
    expect(button).toHaveAttribute('data-variant', 'default')
    expect(button).toHaveAttribute('data-size', 'default')
  })

  it('applies custom variants and sizes', () => {
    render(<Button variant="destructive" size="sm">Delete</Button>)
    const button = screen.getByRole('button', { name: /delete/i })
    expect(button).toHaveAttribute('data-variant', 'destructive')
    expect(button).toHaveAttribute('data-size', 'sm')
  })

  it('forwards refs correctly', () => {
    let buttonRef: HTMLButtonElement | null = null
    render(<Button ref={(el) => { buttonRef = el }}>Ref Button</Button>)
    expect(buttonRef).not.toBeNull()
    expect(buttonRef!.tagName).toBe('BUTTON')
  })

  it('renders as a different child when asChild is true', () => {
    render(
      <Button asChild>
        <a href="https://example.com">Link Button</a>
      </Button>
    )
    const link = screen.getByRole('link', { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
    // It should inherit the button classes via radix slot
    expect(link.className).toContain('inline-flex')
  })

  it('is disabled when disabled prop is passed', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button', { name: /disabled/i })
    expect(button).toBeDisabled()
  })
})
