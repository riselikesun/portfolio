import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Check, AlertCircle } from 'lucide-react';

const meta = {
  title: 'All Components/Data Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['ai-generated', 'autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'destructive', 'ghost', 'link', 'glass'],
      description: 'The visual style of the badge',
    },
  },
  args: {
    children: 'Badge',
    variant: 'default',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!dev'],
  args: {
    children: 'Active',
  },
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const badgeVariants = ['default', 'secondary', 'destructive', 'outline', 'glass'] as const;

    return (
      <div className="p-4 max-w-7xl mx-auto">
        <section className="space-y-8">
          

          <div className="overflow-x-auto pb-4">
            <table className="text-left border-collapse w-full">
              <thead>
                <tr>
                  {badgeVariants.map(v => (
                    <th key={v} className="p-4 font-medium text-muted-foreground border-b border-border/50 capitalize">{v}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {badgeVariants.map(variant => (
                    <td key={variant} className="p-4 align-middle bg-background/50">
                      <Badge variant={variant}>New</Badge>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
};

export const Secondary: Story = {
  tags: ['!dev'],
  args: {
    variant: 'secondary',
    children: 'Draft',
  },
};

export const Outline: Story = {
  tags: ['!dev'],
  args: {
    variant: 'outline',
    children: 'v1.0.0',
  },
};

export const Destructive: Story = {
  tags: ['!dev'],
  args: {
    variant: 'destructive',
    children: 'Error',
  },
};

export const Glass: Story = {
  tags: ['!dev'],
  args: {
    variant: 'glass',
    children: 'Experimental',
  },
};

export const WithIconStart: Story = {
  tags: ['!dev'],
  args: {
    children: (
      <>
        <Check />
        Success
      </>
    ),
  },
};

export const WithIconEnd: Story = {
  tags: ['!dev'],
  args: {
    variant: 'destructive',
    children: (
      <>
        Failed
        <AlertCircle />
      </>
    ),
  },
};
