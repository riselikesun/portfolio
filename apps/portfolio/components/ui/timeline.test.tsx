import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Timeline, TimelineItem, TimelineDot, TimelineContent } from './timeline'

describe('Timeline components', () => {
  it('renders correctly', () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineDot data-testid="dot-1" />
          <TimelineContent>Item 1</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineDot data-testid="dot-2" active />
          <TimelineContent>Item 2</TimelineContent>
        </TimelineItem>
      </Timeline>
    )

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    
    const dot1 = screen.getByTestId('dot-1')
    expect(dot1.className).toContain('bg-border')
    
    const dot2 = screen.getByTestId('dot-2')
    expect(dot2.className).toContain('bg-primary')
  })

  it('renders as a different child when asChild is true', () => {
    render(
      <Timeline asChild>
        <ul data-testid="custom-ul">
          <TimelineItem asChild>
            <li data-testid="custom-li">
              <TimelineContent asChild>
                <section data-testid="custom-content">Content</section>
              </TimelineContent>
            </li>
          </TimelineItem>
        </ul>
      </Timeline>
    )

    expect(screen.getByTestId('custom-ul').tagName).toBe('UL')
    expect(screen.getByTestId('custom-li').tagName).toBe('LI')
    expect(screen.getByTestId('custom-content').tagName).toBe('SECTION')
  })
})
