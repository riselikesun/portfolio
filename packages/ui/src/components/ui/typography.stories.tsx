import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './typography'

const meta: Meta<typeof Typography> = {
  title: 'All Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1', 'h2', 'h3', 'h4', 'p', 'lead', 'small',
        'muted', 'overline', 'display', 'subtitle', 'eyebrow',
      ],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'accent', 'on-dark'],
    },
    weight: {
      control: 'select',
      options: ['default', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
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
        <Typography variant="muted" className="mt-2">text-4xl · font-heading · font-bold</Typography>
      </div>
      <div>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="muted" className="mt-2">text-3xl · font-heading · font-bold · tracking-tight</Typography>
      </div>
      <div>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="muted" className="mt-2">text-2xl · font-heading · font-semibold</Typography>
      </div>
      <div>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="muted" className="mt-2">text-xl · font-heading · font-semibold · tracking-tight</Typography>
      </div>
      <div>
        <Typography variant="lead">Lead Paragraph</Typography>
        <Typography variant="muted" className="mt-2">text-xl</Typography>
      </div>
      <div>
        <Typography variant="p">
          Paragraph. This is standard body text. It has a generous line height for readability.
          Use this for the majority of text content on your pages.
        </Typography>
        <Typography variant="muted" className="mt-2">text-base · leading-7</Typography>
      </div>
      <div>
        <Typography variant="small">Small Text</Typography>
        <Typography variant="muted" className="mt-2">text-sm · leading-none</Typography>
      </div>
      <div>
        <Typography variant="muted">Muted Text. Used for secondary information or descriptions.</Typography>
        <Typography variant="muted" className="mt-2">text-sm · text-muted-foreground</Typography>
      </div>
      <div>
        <Typography variant="overline">Overline / Label</Typography>
        <Typography variant="muted" className="mt-2">text-sm · font-medium · uppercase · tracking-wider</Typography>
      </div>
      <div>
        <Typography variant="subtitle">Subtitle text for supporting content</Typography>
        <Typography variant="muted" className="mt-2">text-lg / md:text-2xl</Typography>
      </div>
      <div>
        <Typography variant="eyebrow">Software Engineer</Typography>
        <Typography variant="muted" className="mt-2">text-sm→xl · uppercase · wide tracking</Typography>
      </div>
      <div className="bg-black rounded-xl p-6">
        <Typography variant="display" color="on-dark">Display</Typography>
        <Typography variant="muted" className="mt-2">text-5xl→9xl · font-heading</Typography>
      </div>
    </div>
  ),
}

export const Colors: Story = {
  tags: ['!dev'],
  render: () => (
    <div className="flex flex-col gap-4 p-6 max-w-xl">
      <Typography variant="h4" color="default">Default — text-foreground</Typography>
      <Typography variant="h4" color="muted">Muted — text-muted-foreground</Typography>
      <Typography variant="h4" color="primary">Primary — text-primary</Typography>
      <div className="bg-black rounded-xl p-4 flex flex-col gap-4">
        <Typography variant="h4" color="accent">Accent — text-amber-300</Typography>
        <Typography variant="h4" color="on-dark">On Dark — text-white</Typography>
      </div>
    </div>
  ),
}

export const Weights: Story = {
  tags: ['!dev'],
  render: () => (
    <div className="flex flex-col gap-3 p-6 max-w-xl">
      <Typography variant="p" weight="normal">Normal weight (400)</Typography>
      <Typography variant="p" weight="medium">Medium weight (500)</Typography>
      <Typography variant="p" weight="semibold">Semibold weight (600)</Typography>
      <Typography variant="p" weight="bold">Bold weight (700)</Typography>
      <Typography variant="p" weight="extrabold">Extrabold weight (800)</Typography>
    </div>
  ),
}

export const Alignment: Story = {
  tags: ['!dev'],
  render: () => (
    <div className="flex flex-col gap-4 p-6 max-w-xl border rounded-xl">
      <Typography variant="p" align="left">Left aligned text</Typography>
      <Typography variant="p" align="center">Center aligned text</Typography>
      <Typography variant="p" align="right">Right aligned text</Typography>
    </div>
  ),
}
