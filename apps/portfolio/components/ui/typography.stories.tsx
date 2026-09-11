import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './typography'

const meta: Meta<typeof Typography> = {
  title: 'All Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'lead', 'small', 'muted', 'overline'],
    },
    as: {
      control: 'text',
      description: 'Override the default HTML element (e.g., span, div)'
    }
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Default: Story = {
  tags: ['!dev'],
  args: {
    variant: 'p',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}

export const Overview: Story = {
    tags: ['!dev'],
  render: () => (
    <div className="flex flex-col gap-8 p-6 max-w-3xl">
      <div>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="muted" className="mt-2">text-4xl font-heading font-bold</Typography>
      </div>
      <div>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="muted" className="mt-2">text-3xl font-heading font-bold tracking-tight</Typography>
      </div>
      <div>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="muted" className="mt-2">text-2xl font-heading font-semibold</Typography>
      </div>
      <div>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="muted" className="mt-2">text-xl font-heading font-semibold tracking-tight</Typography>
      </div>
      <div>
        <Typography variant="lead">Lead Paragraph</Typography>
        <Typography variant="muted" className="mt-2">text-xl text-muted-foreground</Typography>
      </div>
      <div>
        <Typography variant="p">
          Paragraph. This is standard body text. It has a generous line height for readability.
          Use this for the majority of text content on your pages.
        </Typography>
        <Typography variant="muted" className="mt-2">text-base leading-7</Typography>
      </div>
      <div>
        <Typography variant="small">Small Text</Typography>
        <Typography variant="muted" className="mt-2">text-sm font-medium leading-none</Typography>
      </div>
      <div>
        <Typography variant="muted">Muted Text. Used for secondary information or descriptions.</Typography>
        <Typography variant="muted" className="mt-2">text-sm text-muted-foreground</Typography>
      </div>
      <div>
        <Typography variant="overline">Overline / Label</Typography>
        <Typography variant="muted" className="mt-2">text-sm font-medium text-muted-foreground uppercase tracking-wider</Typography>
      </div>
    </div>
  )
}
