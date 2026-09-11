import type { Meta, StoryObj } from '@storybook/react';
import { Timeline, TimelineItem, TimelineDot, TimelineContent } from './timeline';
import { Badge } from './badge';

const meta = {
  title: 'All Components/Data Display/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['ai-generated', 'autodocs'],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!dev'],
  render: () => (
    <div className="w-[500px] p-6 bg-foreground/[0.02] border border-border/50 rounded-xl">
      <Timeline>
        <TimelineItem>
          <TimelineDot active />
          <TimelineContent>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              Order Delivered
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">Today</Badge>
            </h3>
            <p className="text-sm font-mono text-muted-foreground mt-1">10:42 AM</p>
            <p className="text-muted-foreground mt-2">Package was handed directly to a resident.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <h3 className="text-lg font-semibold">Out for Delivery</h3>
            <p className="text-sm font-mono text-muted-foreground mt-1">08:15 AM</p>
            <p className="text-muted-foreground mt-2">The package is on the truck and out for delivery.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <h3 className="text-lg font-semibold">Order Shipped</h3>
            <p className="text-sm font-mono text-muted-foreground mt-1">Yesterday, 4:30 PM</p>
            <p className="text-muted-foreground mt-2">Carrier has received the package at the distribution center.</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  ),
};
export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="p-4 max-w-7xl mx-auto">
      <section className="space-y-8">
        
        <div className="max-w-2xl bg-foreground/[0.02] p-8 rounded-2xl border border-border/50">
          <Timeline>
            <TimelineItem>
              <TimelineDot active />
              <TimelineContent>
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  Senior Engineer <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">Present</Badge>
                </h3>
                <p className="text-sm text-muted-foreground font-mono">2023 - Present</p>
                <p className="text-muted-foreground mt-2">Leading the frontend architecture and building scalable component libraries.</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <h3 className="text-lg font-semibold text-foreground">Frontend Developer</h3>
                <p className="text-sm text-muted-foreground font-mono">2021 - 2023</p>
                <p className="text-muted-foreground mt-2">Developed dynamic user interfaces and optimized web vitals by 40%.</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </section>
    </div>
  )
};

