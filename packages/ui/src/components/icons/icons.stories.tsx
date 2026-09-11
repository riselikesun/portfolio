import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from './index';

const meta = {
  title: 'All Components/Icons',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto p-8">
        {Object.entries(Icons).map(([name, Icon]) => (
          <div 
            key={name} 
            className="flex flex-col items-center justify-center p-6 border border-border/50 rounded-xl bg-background/50 hover:bg-muted/50 transition-colors gap-4"
          >
            <Icon className="w-8 h-8 text-foreground" />
            <span className="text-xs text-muted-foreground font-mono">{name}</span>
          </div>
        ))}
      </div>
    );
  },
};
