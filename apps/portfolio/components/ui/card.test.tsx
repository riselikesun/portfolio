import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from './card'

describe('Card components', () => {
  it('renders Card correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction><button>Action</button></CardAction>
        </CardHeader>
        <CardContent>Content goes here</CardContent>
        <CardFooter>Footer goes here</CardFooter>
      </Card>
    )

    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card Description')).toBeInTheDocument()
    expect(screen.getByText('Content goes here')).toBeInTheDocument()
    expect(screen.getByText('Footer goes here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
  })

  it('applies default size and padding correctly to Card', () => {
    const { container } = render(<Card>Card Content</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).toHaveAttribute('data-size', 'default')
    expect(card.className).toContain('py-(--card-spacing)')
  })

  it('applies custom variants to Card', () => {
    const { container } = render(<Card variant="featured" size="sm" padding="none">Content</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).toHaveAttribute('data-size', 'sm')
    expect(card.className).toContain('bg-gradient-to-br')
    expect(card.className).toContain('p-0')
  })

  it('renders as a different child when asChild is true on Card', () => {
    render(
      <Card asChild>
        <section>Section Content</section>
      </Card>
    )
    const section = screen.getByText('Section Content')
    expect(section.tagName).toBe('SECTION')
    expect(section).toHaveAttribute('data-slot', 'card')
  })
})
