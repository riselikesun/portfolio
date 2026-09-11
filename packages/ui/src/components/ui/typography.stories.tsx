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
    color: {
      control: 'select',
      options: ['default', 'primary', 'muted', 'secondary', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
    },
    tracking: {
      control: 'select',
      options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    noWrap: {
      control: 'boolean',
    },
    gutterBottom: {
      control: 'boolean',
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
    <div className="flex flex-col gap-16 p-6 max-w-5xl mx-auto">
      
      {/* VARIANTS SECTION */}
      <section className="space-y-8">
        <div className="border-b border-border/50 pb-4">
          <h2 className="text-3xl font-bold tracking-tight">Variants</h2>
          <p className="text-muted-foreground mt-2">Semantic typography variants used throughout the application.</p>
        </div>
        <div className="flex flex-col gap-8">
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
      </section>

      {/* COLORS SECTION */}
      <section className="space-y-8">
        <div className="border-b border-border/50 pb-4">
          <h2 className="text-3xl font-bold tracking-tight">Colors</h2>
          <p className="text-muted-foreground mt-2">Semantic color options passed directly via the color prop.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="h4" color="default">Default Color</Typography>
          <Typography variant="h4" color="primary">Primary Color</Typography>
          <Typography variant="h4" color="secondary">Secondary Color</Typography>
          <Typography variant="h4" color="muted">Muted Color</Typography>
          <Typography variant="h4" color="destructive">Destructive Color</Typography>
        </div>
      </section>

      {/* SIZES SECTION */}
      <section className="space-y-8">
        <div className="border-b border-border/50 pb-4">
          <h2 className="text-3xl font-bold tracking-tight">Sizes</h2>
          <p className="text-muted-foreground mt-2">Scale typography size dynamically, overriding the variant's default size.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="p" size="sm">Small (sm)</Typography>
          <Typography variant="p" size="base">Base (base)</Typography>
          <Typography variant="p" size="lg">Large (lg)</Typography>
          <Typography variant="p" size="xl">Extra Large (xl)</Typography>
          <Typography variant="p" size="2xl">2x Large (2xl)</Typography>
          <Typography variant="p" size="4xl">4x Large (4xl)</Typography>
          <Typography variant="p" size="7xl">7x Large (7xl)</Typography>
          <Typography variant="p" size="9xl">9x Large (9xl)</Typography>
        </div>
      </section>

      {/* WEIGHTS SECTION */}
      <section className="space-y-8">
        <div className="border-b border-border/50 pb-4">
          <h2 className="text-3xl font-bold tracking-tight">Weights</h2>
          <p className="text-muted-foreground mt-2">Adjust the font weight independently of the variant.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="h3" weight="light">Light Weight (light)</Typography>
          <Typography variant="h3" weight="normal">Normal Weight (normal)</Typography>
          <Typography variant="h3" weight="medium">Medium Weight (medium)</Typography>
          <Typography variant="h3" weight="semibold">Semibold Weight (semibold)</Typography>
          <Typography variant="h3" weight="bold">Bold Weight (bold)</Typography>
          <Typography variant="h3" weight="extrabold">Extrabold Weight (extrabold)</Typography>
        </div>
      </section>

      {/* LETTER SPACING SECTION */}
      <section className="space-y-8">
        <div className="border-b border-border/50 pb-4">
          <h2 className="text-3xl font-bold tracking-tight">Letter Spacing (Tracking)</h2>
          <p className="text-muted-foreground mt-2">Adjust the spacing between letters.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="h3" tracking="tighter">Tighter Tracking</Typography>
          <Typography variant="h3" tracking="tight">Tight Tracking</Typography>
          <Typography variant="h3" tracking="normal">Normal Tracking</Typography>
          <Typography variant="h3" tracking="wide">Wide Tracking</Typography>
          <Typography variant="h3" tracking="wider">Wider Tracking</Typography>
          <Typography variant="h3" tracking="widest">Widest Tracking</Typography>
        </div>
      </section>
    </div>
  )
}
