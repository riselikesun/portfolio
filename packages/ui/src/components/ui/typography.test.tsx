import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Typography, typographyVariants } from './typography'

describe('Typography component', () => {
  it('renders children correctly', () => {
    render(<Typography>Hello world</Typography>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('renders as a <p> by default', () => {
    render(<Typography>Default</Typography>)
    const el = screen.getByText('Default')
    expect(el.tagName).toBe('P')
  })

  it('applies data-slot and data-variant attributes', () => {
    render(<Typography variant="h2">Heading</Typography>)
    const el = screen.getByText('Heading')
    expect(el).toHaveAttribute('data-slot', 'typography')
    expect(el).toHaveAttribute('data-variant', 'h2')
  })

  it('maps heading variants to correct HTML elements', () => {
    const { container } = render(
      <>
        <Typography variant="h1">H1</Typography>
        <Typography variant="h2">H2</Typography>
        <Typography variant="h3">H3</Typography>
        <Typography variant="h4">H4</Typography>
      </>
    )

    expect(container.querySelector('h1')).toHaveTextContent('H1')
    expect(container.querySelector('h2')).toHaveTextContent('H2')
    expect(container.querySelector('h3')).toHaveTextContent('H3')
    expect(container.querySelector('h4')).toHaveTextContent('H4')
  })

  it('maps display variant to h1', () => {
    render(<Typography variant="display">Display</Typography>)
    expect(screen.getByText('Display').tagName).toBe('H1')
  })

  it('maps small variant to <small>', () => {
    render(<Typography variant="small">Small text</Typography>)
    expect(screen.getByText('Small text').tagName).toBe('SMALL')
  })

  it('maps muted, lead, overline, subtitle, eyebrow to <p>', () => {
    const variants = ['muted', 'lead', 'overline', 'subtitle', 'eyebrow'] as const
    const { container } = render(
      <>
        {variants.map((v) => (
          <Typography key={v} variant={v}>{v}</Typography>
        ))}
      </>
    )

    const paragraphs = container.querySelectorAll('p')
    expect(paragraphs).toHaveLength(variants.length)
  })

  it('applies color variant classes', () => {
    render(<Typography color="muted">Muted</Typography>)
    const el = screen.getByText('Muted')
    expect(el.className).toContain('text-muted-foreground')
  })

  it('applies primary color', () => {
    render(<Typography color="primary">Primary</Typography>)
    const el = screen.getByText('Primary')
    expect(el.className).toContain('text-primary')
  })

  it('applies accent color', () => {
    render(<Typography color="accent">Accent</Typography>)
    const el = screen.getByText('Accent')
    expect(el.className).toContain('text-amber-300')
  })

  it('applies on-dark color', () => {
    render(<Typography color="on-dark">White</Typography>)
    const el = screen.getByText('White')
    expect(el.className).toContain('text-white')
  })

  it('applies weight variant', () => {
    render(<Typography weight="bold">Bold</Typography>)
    const el = screen.getByText('Bold')
    expect(el.className).toContain('font-bold')
  })

  it('applies align variant', () => {
    render(<Typography align="center">Centered</Typography>)
    const el = screen.getByText('Centered')
    expect(el.className).toContain('text-center')
  })

  it('merges custom className', () => {
    render(<Typography className="mt-4">Spaced</Typography>)
    const el = screen.getByText('Spaced')
    expect(el.className).toContain('mt-4')
  })

  it('does not have an as prop', () => {
    // Verify the component renders the variant's element, not a custom one
    render(<Typography variant="h3">Title</Typography>)
    expect(screen.getByText('Title').tagName).toBe('H3')
  })
})

describe('typographyVariants utility', () => {
  it('is exported for direct usage', () => {
    expect(typeof typographyVariants).toBe('function')
  })

  it('generates class strings for any variant', () => {
    const classes = typographyVariants({ variant: 'h3' })
    expect(classes).toContain('font-heading')
    expect(classes).toContain('font-semibold')
  })

  it('combines variant and color classes', () => {
    const classes = typographyVariants({ variant: 'p', color: 'muted' })
    expect(classes).toContain('text-muted-foreground')
    expect(classes).toContain('leading-7')
  })
})
