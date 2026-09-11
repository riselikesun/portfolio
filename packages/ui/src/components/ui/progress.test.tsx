import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Progress } from './progress'

describe('Progress component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Progress />)
    const progressRoot = container.firstChild as HTMLElement
    expect(progressRoot).toBeInTheDocument()
    expect(progressRoot).toHaveAttribute('data-slot', 'progress')
  })

  it('renders indicator with correct transform based on value', () => {
    const { container } = render(<Progress value={50} />)
    const indicator = container.querySelector('[data-slot="progress-indicator"]') as HTMLElement
    expect(indicator).toBeInTheDocument()
    expect(indicator.style.transform).toBe('translateX(-50%)')
  })

  it('renders indicator with 0% value if no value is provided', () => {
    const { container } = render(<Progress />)
    const indicator = container.querySelector('[data-slot="progress-indicator"]') as HTMLElement
    expect(indicator.style.transform).toBe('translateX(-100%)')
  })

  it('applies custom className', () => {
    const { container } = render(<Progress className="custom-class" />)
    const progressRoot = container.firstChild as HTMLElement
    expect(progressRoot.className).toContain('custom-class')
  })
})
