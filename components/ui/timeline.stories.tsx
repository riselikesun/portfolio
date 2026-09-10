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
              Senior Software Engineer
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">Present</Badge>
            </h3>
            <p className="text-sm font-mono text-muted-foreground mt-1">2023 - Present</p>
            <p className="text-muted-foreground mt-2">Leading the frontend architecture and building scalable component libraries.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <h3 className="text-lg font-semibold">Software Engineer</h3>
            <p className="text-sm font-mono text-muted-foreground mt-1">2021 - 2023</p>
            <p className="text-muted-foreground mt-2">Developed core product features and improved web performance metrics.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <h3 className="text-lg font-semibold">Junior Developer</h3>
            <p className="text-sm font-mono text-muted-foreground mt-1">2019 - 2021</p>
            <p className="text-muted-foreground mt-2">Started career working on bug fixes and small features for the main application.</p>
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

