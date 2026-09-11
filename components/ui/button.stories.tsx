import type { Meta, StoryObj } from '@storybook/react';
import { expect } from 'storybook/test';
import { Button } from './button';
import { Mail, ArrowRight, Loader2 } from 'lucide-react';

const meta = {
  title: 'All Components/Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['ai-generated', 'autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'xs', 'icon-xs', 'icon-sm', 'icon-lg'],
      description: 'The size of the button',
    },
    cursor: {
      control: 'select',
      options: ['default', 'pointer', 'not-allowed'],
      description: 'The cursor style on hover',
    },
    iconHover: {
      control: 'select',
      options: ['none', 'scale', 'right', 'up-right', 'down', 'left'],
      description: 'Hover animation for icons',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    cursor: 'pointer',
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!dev'],
  args: {
    children: 'Primary Action',
  },
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const buttonVariants = ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] as const;
    const buttonSizes = ['default', 'sm', 'lg'] as const;

    return (
      <div className="p-4 max-w-7xl mx-auto">
        <section className="space-y-8">

          <div className="overflow-x-auto pb-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 font-medium text-muted-foreground border-b border-border/50">Size / Variant</th>
                  {buttonVariants.map(v => (
                    <th key={v} className="p-4 font-medium text-muted-foreground border-b border-border/50 capitalize">{v}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {buttonSizes.map(size => (
                  <tr key={size} className="border-b border-border/10 last:border-0">
                    <td className="p-4 font-medium text-muted-foreground capitalize align-middle">{size}</td>
                    {buttonVariants.map(variant => (
                      <td key={`${size}-${variant}`} className="p-4 align-middle">
                        <Button variant={variant} size={size}>
                          Button
                        </Button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">With Icons (Hover Effects)</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <Button iconHover="right">
                Slide Right <ArrowRight />
              </Button>
              <Button iconHover="up-right">
                Diagonal <ArrowRight />
              </Button>
              <Button iconHover="scale" variant="secondary">
                Scale Up <ArrowRight />
              </Button>
              <Button variant="outline" size="icon" iconHover="scale">
                <ArrowRight />
              </Button>
            </div>
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
    children: 'Secondary Action',
  },
};

export const Outline: Story = {
  tags: ['!dev'],
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  tags: ['!dev'],
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Destructive: Story = {
  tags: ['!dev'],
  args: {
    variant: 'destructive',
    children: 'Delete Item',
  },
};

export const WithIconStart: Story = {
  tags: ['!dev'],
  args: {
    children: (
      <>
        <Mail className="mr-2" />
        Email Support
      </>
    ),
  },
};

export const WithIconHoverRight: Story = {
  tags: ['!dev'],
  args: {
    iconHover: 'right',
    children: (
      <>
        Continue
        <ArrowRight className="ml-2" />
      </>
    ),
  },
};

export const Loading: Story = {
  tags: ['!dev'],
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="mr-2 animate-spin" />
        Please wait
      </>
    ),
  },
};

export const IconOnly: Story = {
  tags: ['!dev'],
  args: {
    size: 'icon',
    children: <Mail />,
  },
};

export const CssCheck: Story = {
  tags: ['!dev'],
  args: { children: 'Submit' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /submit/i });
    // Verify Tailwind loaded correctly by checking inline-flex display
    await expect(getComputedStyle(button).display).toBe('inline-flex');
  },
};
