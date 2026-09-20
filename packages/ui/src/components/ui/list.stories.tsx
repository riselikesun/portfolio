import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem, ListIndicator } from './list';
import { Check } from 'lucide-react';

const meta = {
  title: 'All Components/Data Display/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['ai-generated', 'autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bullet', 'ordered', 'unstyled'],
      description: 'The visual style of the list items',
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'default', 'md', 'lg'],
      description: 'Vertical spacing between items',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg'],
      description: 'Typography size scale',
    },
    color: {
      control: 'select',
      options: ['default', 'foreground', 'muted', 'secondary'],
      description: 'Text color of list items',
    },
  },
  args: {
    variant: 'default',
    spacing: 'default',
    size: 'default',
    color: 'default',
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-md p-6 bg-card rounded-xl border border-border">
      <List {...args}>
        <ListItem>Architected scalable full-stack applications with Next.js and TypeScript.</ListItem>
        <ListItem>Implemented responsive, accessible design systems using Tailwind CSS.</ListItem>
        <ListItem>Optimized Core Web Vitals resulting in 40% faster initial page load.</ListItem>
      </List>
    </div>
  ),
};

export const CustomIndicators: Story = {
  render: () => (
    <div className="w-full max-w-md p-6 bg-card rounded-xl border border-border">
      <List>
        <ListItem indicator={<Check className="size-4 text-primary" />}>
          Automated end-to-end testing with Playwright
        </ListItem>
        <ListItem indicator={<Check className="size-4 text-primary" />}>
          Zero-downtime deployment pipelines via GitHub Actions
        </ListItem>
        <ListItem indicator={<Check className="size-4 text-primary" />}>
          WCAG 2.1 AA accessibility compliance
        </ListItem>
      </List>
    </div>
  ),
};

export const Ordered: Story = {
  render: () => (
    <div className="w-full max-w-md p-6 bg-card rounded-xl border border-border">
      <List variant="ordered">
        <ListItem>Clone the repository from GitHub.</ListItem>
        <ListItem>Install dependencies with your preferred package manager.</ListItem>
        <ListItem>Run development server to preview live changes.</ListItem>
      </List>
    </div>
  ),
};
