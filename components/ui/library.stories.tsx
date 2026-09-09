import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './dialog';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip';
import { BlobImage } from './blob-image';
import { SmoothScrollLink } from './smooth-scroll-link';
import { ArrowRight } from '@/components/icons';
import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

addons.setConfig({
  theme: themes.dark,
});

const meta = {
  title: 'Overview',
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
                  <p className="text-sm text-muted-foreground">
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
                  <p className="text-sm text-muted-foreground">
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
                <BlobImage 
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop" 
                  alt="Detailed Forest Background" 
                  fill 
                  className="object-cover opacity-100" 
                />
              </div>
              
              <div className="relative z-10 flex flex-col h-full gap-4">
                <h4 className="text-sm font-medium text-white uppercase tracking-wider">Blurred</h4>
                <Card variant="blurred" className="min-h-[220px] h-full">
                  <CardHeader>
                    <CardTitle className="text-white">Blurred Card</CardTitle>
                    <CardDescription className="text-white/70">Extra subtle blurred glass</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/60">
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
                <div className="absolute inset-0 z-0 opacity-50">
                  <BlobImage 
                    src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&auto=format&fit=crop" 
                    alt="Sample Background" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="relative z-10 flex flex-col justify-end h-full p-6">
                  <h3 className="text-xl font-bold text-white">Image Overlay</h3>
                  <p className="text-sm text-white/70 mt-1">Full-bleed image background without default padding.</p>
                </div>
              </Card>
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
