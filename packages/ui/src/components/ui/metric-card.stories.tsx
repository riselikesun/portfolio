import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './metric-card';
import { Mail, Target, Activity } from 'lucide-react';
import { Github } from '@/components/icons';

const meta = {
  title: 'All Components/Data Display/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['ai-generated', 'autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'featured'],
      description: 'The visual style of the metric card',
    },
    label: {
      control: 'text',
      description: 'The descriptive title for the metric',
    },
    value: {
      control: 'text',
      description: 'The primary numeric or string value',
    },
    href: {
      control: 'text',
      description: 'Optional URL to make the card clickable',
    },
    accent: {
      control: 'text',
      description: 'Tailwind text color class for the icon',
    },
  },
  args: {
    variant: 'default',
    label: 'Total Users',
    value: '12,345',
  },
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!dev'],
  args: {
    icon: <Activity />,
    label: 'Monthly Active',
    value: '45.2k',
    accent: 'text-indigo-400',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="p-4 max-w-7xl mx-auto">
      <section className="space-y-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            icon={<Mail />}
            label="Email"
            value="hello@example.com"
            href="mailto:hello@example.com"
            accent="text-sky-300"
          />
          <MetricCard
            icon={<Github />}
            label="GitHub"
            value="github.com/user"
            href="https://github.com"
            accent="text-emerald-300"
          />
          <MetricCard
            variant="featured"
            icon={<Target />}
            label="Status"
            value="Available for hire"
            accent="text-primary"
          />
        </div>
      </section>
    </div>
  )
};

export const Featured: Story = {
  tags: ['!dev'],
  args: {
    variant: 'featured',
    icon: <Target />,
    label: 'Status',
    value: 'Available for hire',
    accent: 'text-primary',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export const ClickableLink: Story = {
  tags: ['!dev'],
  args: {
    icon: <Github />,
    label: 'GitHub',
    value: 'github.com/user',
    href: 'https://github.com',
    accent: 'text-emerald-300',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};
