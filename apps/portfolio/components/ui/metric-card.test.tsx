import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MetricCard } from './metric-card'

describe('MetricCard component', () => {
  it('renders label and value correctly', () => {
    render(<MetricCard label="Total Views" value="1,234" />)
    expect(screen.getByText('Total Views')).toBeInTheDocument()
    expect(screen.getByText('1,234')).toBeInTheDocument()
  })

  it('renders as a link when href is provided', () => {
    render(<MetricCard label="Link" value="Click Here" href="https://example.com" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })
})
