import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Badge } from './badge'

describe('Badge component', () => {
  it('renders children correctly', () => {
    render(<Badge>Status</Badge>)
    expect(screen.getByText('Status')).toBeInTheDocument()
  })

  it('applies default variant correctly', () => {
    render(<Badge>Default</Badge>)
    const badge = screen.getByText('Default')
    expect(badge).toHaveAttribute('data-variant', 'default')
    expect(badge.tagName).toBe('SPAN')
  })

  it('applies custom variants correctly', () => {
    render(<Badge variant="destructive">Destructive</Badge>)
    const badge = screen.getByText('Destructive')
    expect(badge).toHaveAttribute('data-variant', 'destructive')
  })

  it('renders as a different child when asChild is true', () => {
    render(
      <Badge asChild>
        <a href="https://example.com">Link Badge</a>
      </Badge>
    )
    const link = screen.getByRole('link', { name: /link badge/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
  })
})
