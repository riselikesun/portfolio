import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from './dialog'

describe('Dialog components', () => {
  it('renders correctly when triggered', async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
          <div data-testid="content-body">Content Body</div>
          <DialogFooter>
            <DialogClose>Close Footer</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    const trigger = screen.getByText('Open Dialog')
    expect(trigger).toBeInTheDocument()

    // It should not be visible initially
    expect(screen.queryByText('Dialog Title')).not.toBeInTheDocument()

    // Click trigger to open
    await userEvent.click(trigger)

    expect(screen.getByText('Dialog Title')).toBeInTheDocument()
    expect(screen.getByText('Dialog Description')).toBeInTheDocument()
    expect(screen.getByTestId('content-body')).toBeInTheDocument()
    expect(screen.getByText('Close Footer')).toBeInTheDocument()
  })

  it('closes when close button is clicked', async () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent showCloseButton={true}>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    await userEvent.click(screen.getByText('Open'))
    expect(screen.getByText('Title')).toBeInTheDocument()

    const closeButton = screen.getByRole('button', { name: /close/i })
    await userEvent.click(closeButton)

    // Wait for the dialog to be removed
    expect(screen.queryByText('Title')).not.toBeInTheDocument()
  })
})
