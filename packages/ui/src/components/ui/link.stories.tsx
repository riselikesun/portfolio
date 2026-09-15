import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';

const meta = {
  title: 'All Components/Navigation/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['ai-generated', 'autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'underline', 'highlighted', 'pill'],
      description: 'The visual style of the link',
    },
    size: {
      control: 'select',
      options: ['default', 'xs','sm', 'base', 'lg'],
      description: 'The size of the link and its icon',
    },
    showExternalIcon: {
      control: 'select',
      options: [true, false,'default', 'visible', 'hover'],
      description: 'Controls icon visibility: hidden, visible, or hover',
    },
  },
  args: {
    children: 'Visit Website',
    variant: 'default',
    size: 'default',
    showExternalIcon: false,
    href: 'https://example.com',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!dev'],
  args: {
    variant: 'default',
    children: 'Project Link',
  },
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const linkVariants = ['default', 'underline', 'highlighted', 'pill'] as const;

    return (
      <div className="p-4 max-w-7xl mx-auto">
        <section className="space-y-8 bg-[#0a0a0a] p-8 rounded-xl border border-white/10">
          <div className="overflow-x-auto pb-4">
            <table className="text-left border-collapse w-full">
              <thead>
                <tr>
                  {linkVariants.map(v => (
                    <th key={v} className="p-4 font-medium text-slate-400 border-b border-white/10 capitalize">{v}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {linkVariants.map(variant => (
                    <td key={variant} className="p-4 align-middle">
                      <Link variant={variant} showExternalIcon="visible" href="#">
                        Example Link
                      </Link>
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

export const Underline: Story = {
  tags: ['!dev'],
  args: {
    variant: 'underline',
    children: 'Read Documentation',
  },
};

export const Highlighted: Story = {
  tags: ['!dev'],
  args: {
    variant: 'highlighted',
    children: 'Company Website',
  },
};
