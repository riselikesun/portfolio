import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Button } from './button';
import { BlobImage } from './blob-image';
import Image from 'next/image';

const meta = {
  title: 'All Components/Surfaces/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'featured', 'image', 'blurred'],
      description: 'The visual style of the card',
    },
    padding: {
      control: 'select',
      options: ['default', 'none'],
      description: 'Internal padding of the card',
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'Padding scale',
    },
  },
  args: {
    variant: 'default',
    padding: 'default',
    size: 'default',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!dev'],
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>Card content goes here. You can add forms, text, or any other components.</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="flex flex-col gap-24 max-w-7xl mx-auto py-12 text-foreground">
       <section className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
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
            <div className="relative flex flex-col h-full p-8 overflow-hidden rounded-xl">
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
                <div className="absolute inset-0 z-0 opacity-50">
                  <Image
                    src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&auto=format&fit=crop"
                    alt="Sample Background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 flex flex-col justify-end h-full p-6">
                  <h3 className="text-xl font-bold">Image Overlay</h3>
                  <p className="text-muted-foreground mt-1">Full-bleed image background without default padding.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>
    </div>
  )
};

export const Featured: Story = {
  tags: ['!dev'],
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Premium Tier</CardTitle>
        <CardDescription>Unlock advanced features.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">$29<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Upgrade Now</Button>
      </CardFooter>
    </Card>
  ),
  args: {
    variant: 'featured',
  },
};

export const ImageCard: Story = {
  tags: ['!dev'],
  render: (args) => (
    <Card className="w-[350px] min-h-[300px]" {...args}>
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&auto=format&fit=crop"
          alt="Sample Background"
          fill
          className="object-cover opacity-60"
        />
      </div>
      <div className="relative z-10 flex-1 flex flex-col justify-end w-full p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <h3 className="text-xl font-bold text-white mb-2">Beautiful Imagery</h3>
        <p className="text-white/80 text-sm">Cards can contain background images with automatic contrast overlays.</p>
      </div>
    </Card>
  ),
  args: {
    variant: 'image',
    padding: 'none',
  },
};
