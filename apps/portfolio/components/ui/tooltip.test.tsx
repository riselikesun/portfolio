import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './tooltip'

describe('Tooltip components', () => {
  it('renders correctly', async () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip Content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover me')
    expect(trigger).toBeInTheDocument()

    // Tooltip content should not be in the document initially
    expect(screen.queryByText('Tooltip Content')).not.toBeInTheDocument()

    // Hover over the trigger
    await userEvent.hover(trigger)

    // Wait for the tooltip content to appear
    await waitFor(() => {
      expect(screen.getByText('Tooltip Content')).toBeInTheDocument()
    })

    // Unhover and close
    await userEvent.unhover(trigger)
    await userEvent.keyboard('{Escape}')

    // Wait for the tooltip content to disappear
    await waitFor(() => {
      expect(screen.queryByText('Tooltip Content')).not.toBeInTheDocument()
    }, { timeout: 3000 })
  })
})
