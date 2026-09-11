import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedWord } from './animated-word';

const meta = {
  title: 'All Components/Animations/AnimatedWord',
  component: AnimatedWord,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedWord>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!dev'],
  args: {
    words: ['scale.', 'perform.', 'delight.', 'matter.'],
    className: 'text-primary',
  },
  render: (args) => (
    <div className="text-2xl font-bold flex gap-2">
      We build solutions that
      <AnimatedWord 
        {...args}
      />
    </div>
  ),
};
export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    words: ['scale.', 'perform.', 'delight.', 'matter.'],
    className: 'text-primary',
  },
  render: () => (
    <div className="p-4 max-w-7xl mx-auto">
      <section className="space-y-8">
        

        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Animated Word (Typewriter)</h4>
          <div className="h-40 flex items-center justify-center border border-border/50 rounded-[24px] bg-foreground/[0.02]">
            <h3 className="text-2xl font-bold flex gap-2">
              We build solutions that
              <AnimatedWord 
                words={['scale.', 'perform.', 'delight.', 'matter.']} 
                className="text-primary"
              />
            </h3>
          </div>
        </div>
      </section>
    </div>
  )
};

