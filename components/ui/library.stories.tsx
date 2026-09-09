import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './dialog';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@/components/ui/navbar';
import Image from 'next/image';
import { ArrowRight, Github } from '@/components/icons';
import { Mail, Target, Briefcase } from 'lucide-react';
import { Progress } from './progress';
import { MetricCard } from './metric-card';
import { Timeline, TimelineItem, TimelineDot, TimelineContent } from './timeline';
import { AnimatedWord } from '@/components/animations/animated-word';
import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';
import { Overview as CardOverview } from './card.stories'

addons.setConfig({
  theme: themes.dark,
});

const meta = {
  title: 'All Components',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false }, // Hides the addons panel at the bottom
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => {
    const buttonVariants = ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] as const;
    const buttonSizes = ['default', 'sm', 'lg'] as const;
    const badgeVariants = ['default', 'secondary', 'destructive', 'outline', 'glass'] as const;

    return (
      <div className="flex flex-col gap-24 max-w-7xl mx-auto py-12 text-foreground">

        {/* BUTTONS */}
        <section className="space-y-8">
          <div className="border-b border-border/50 pb-4">
            <h2 className="text-3xl font-bold tracking-tight">Buttons</h2>
            <p className="text-muted-foreground mt-2">Interactive elements for user actions.</p>
          </div>

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

        {/* BADGES */}
        <section className="space-y-8">
          <div className="border-b border-border/50 pb-4">
            <h2 className="text-3xl font-bold tracking-tight">Badges</h2>
            <p className="text-muted-foreground mt-2">Small status descriptors and tags.</p>
          </div>

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
 
        {/* CARDS */}
        <section className="space-y-8">
          <div className="border-b border-border/50 pb-4">
            <h2 className="text-3xl font-bold tracking-tight">Cards</h2>
            <p className="text-muted-foreground mt-2">Containers for grouped content, built with cva variants.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Default Variant */}
            <div className="flex flex-col h-full gap-4 p-8">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Default</h4>
              <Card variant="default" className="h-full">
                <CardHeader>
                  <CardTitle>Standard Card</CardTitle>
                  <CardDescription>Default glassmorphism look</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    This is the standard look for cards with dynamic shadows.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">Cancel</Button>
                  <Button size="sm">Submit</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Featured Variant */}
            <div className="flex flex-col h-full gap-4 p-8">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Featured</h4>
              <Card variant="featured" className="h-full">
                <CardHeader>
                  <CardTitle>Featured Card</CardTitle>
                  <CardDescription>Enhanced gradient & shadow</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Prominent visual style used for highlighted content blocks.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">Action</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Blurred Variant */}
            <div className="relative flex flex-col h-full p-8 overflow-hidden">
              {/* Background on the outer wrapper */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop"
                  alt="Detailed Forest Background"
                  fill
                  className="object-cover opacity-100"
                />
              </div>

              <div className="relative z-10 flex flex-col h-full gap-4">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Blurred</h4>
                <Card variant="blurred" className="min-h-[220px] h-full">
                  <CardHeader>
                    <CardTitle>Blurred Card</CardTitle>
                    <CardDescription>Extra subtle blurred glass</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      A very subtle, translucent card designed to sit nicely over complex backgrounds.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Image Variant */}
            <div className="flex flex-col h-full gap-4 p-8">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Image Variant</h4>
              <Card variant="image" padding="none" className="min-h-[250px] h-full">
                <div className="absolute inset-0 z-0 bg-black">
                  <Image
                    src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&auto=format&fit=crop"
                    alt="Sample Background"
                    fill
                    className="object-cover opacity-60"
                  />
                </div>
                <div className="relative z-10 flex-1 flex flex-col justify-end w-full p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-2">Image Overlay</h3>
                  <p className="text-white/80 text-sm">Full-bleed image background without default padding.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* NAVIGATION */}
        <section className="space-y-8">
          <div className="border-b border-border/50 pb-4">
            <h2 className="text-3xl font-bold tracking-tight">Navigation</h2>
            <p className="text-muted-foreground mt-2">Top-level navigation bars with floating and sticky variants.</p>
          </div>

          <div className="flex flex-col gap-12 bg-muted/20 p-8 rounded-[24px] relative border border-border/50 overflow-hidden">

            {/* Sticky Variant Demo */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Sticky (Default)</h4>
              <div className="relative border border-border/50 rounded-lg overflow-hidden h-[160px] bg-background">
                <Navbar variant="sticky" className="absolute top-0 w-full">
                  <NavbarBrand>Acme Inc</NavbarBrand>
                  <NavbarContent justify="end">
                    <NavbarItem>Home</NavbarItem>
                    <NavbarItem>About</NavbarItem>
                    <NavbarItem>Contact</NavbarItem>
                    <Button size="sm" className="hidden sm:inline-flex">Sign Up</Button>
                  </NavbarContent>
                </Navbar>
                <div className="p-8 pt-24 text-muted-foreground text-sm">Scrollable page content...</div>
              </div>
            </div>

            {/* Floating Variant Demo */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Floating Pill</h4>
              <div className="relative border border-border/50 rounded-lg overflow-hidden h-[160px] bg-background">
                {/* Background image to show off blur */}
                <div className="absolute inset-0 opacity-20 z-0">
                  <Image src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&auto=format&fit=crop" alt="bg" fill className="object-cover" />
                </div>

                <Navbar variant="floating" className="absolute max-w-3xl">
                  <NavbarBrand>Linear</NavbarBrand>
                  <NavbarContent justify="center" className="hidden md:flex">
                    <NavbarItem>Features</NavbarItem>
                    <NavbarItem>Method</NavbarItem>
                    <NavbarItem>Customers</NavbarItem>
                  </NavbarContent>
                  <NavbarContent justify="end">
                    <Button variant="outline" size="sm" className="h-8 rounded-full border-foreground/20">Log in</Button>
                  </NavbarContent>
                </Navbar>
                <div className="relative z-0 p-8 pt-28 text-muted-foreground text-sm">Scrollable page content...</div>
              </div>
            </div>

          </div>
        </section>

        {/* DATA DISPLAY */}
        <section className="space-y-8">
          <div className="border-b border-border/50 pb-4">
            <h2 className="text-3xl font-bold tracking-tight">Data Display</h2>
            <p className="text-muted-foreground mt-2">Metrics, progress, and chronological data.</p>
          </div>

          <div className="space-y-16">

            {/* Metric Cards */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Metric Cards</h4>
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
            </div>

            {/* Progress */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Progress Bars</h4>
              <div className="flex flex-col gap-8 max-w-lg">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">React</span>
                    <span className="text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">Framer Motion</span>
                    <span className="text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} />
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Timeline</h4>
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
            </div>
          </div>
        </section>

        {/* ANIMATIONS */}
        <section className="space-y-8">
          <div className="border-b border-border/50 pb-4">
            <h2 className="text-3xl font-bold tracking-tight">Animations</h2>
            <p className="text-muted-foreground mt-2">Reusable motion components and effects.</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Animated Word (Typewriter)</h4>
            <div className="h-40 flex items-center justify-center border border-border/50 rounded-[24px] bg-foreground/[0.02]">
              <p className="text-2xl md:text-3xl font-medium text-foreground">
                Building software that{" "}
                <AnimatedWord
                  words={["scales.", "performs.", "delights.", "matters."]}
                  className="text-primary font-bold min-w-[140px]"
                  interval={2000}
                />
              </p>
            </div>
          </div>
        </section>

        {/* DIALOG & TOOLTIP */}
        <section className="space-y-8">
          <div className="border-b border-border/50 pb-4">
            <h2 className="text-3xl font-bold tracking-tight">Overlays</h2>
            <p className="text-muted-foreground mt-2">Interactive popups and floating labels.</p>
          </div>

          <div className="flex flex-wrap gap-12 items-center">
            {/* Dialog */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Dialog</h4>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-8">
                    <p className="text-sm text-muted-foreground">Dialog content area...</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Tooltip */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Tooltip</h4>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="secondary">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </section>
      </div>
    );
  }
};
