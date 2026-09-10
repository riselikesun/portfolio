import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from './navbar';
import { Button } from './button';
import Image from 'next/image';

const meta = {
  title: 'All Components/Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['ai-generated', 'autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['sticky', 'floating'],
      description: 'The visual style and positioning of the navbar',
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sticky: Story = {
  tags: ['!dev'],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      }
    }
  },
  render: () => (
    <div className="min-h-screen relative bg-background">
      <Navbar variant="sticky">
        <NavbarBrand>Acme Inc</NavbarBrand>
        <NavbarContent justify="center" className="hidden md:flex">
          <NavbarItem>Products</NavbarItem>
          <NavbarItem>Solutions</NavbarItem>
          <NavbarItem>Pricing</NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Button variant="outline" size="sm">Log in</Button>
          <Button size="sm">Sign up</Button>
        </NavbarContent>
      </Navbar>
      <div className="p-8 pt-24 max-w-4xl mx-auto text-muted-foreground">
        <h1 className="text-4xl font-bold text-foreground mb-4">Sticky Navbar Demo</h1>
        <p>Scroll down to see the navbar stick to the top of the viewport.</p>
        <div className="h-[200vh]" />
      </div>
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
    </div>
  )
};

export const Floating: Story = {
  tags: ['!dev'],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      }
    }
  },
  render: () => (
    <div className="min-h-screen relative bg-background">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image 
          src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&auto=format&fit=crop" 
          alt="Background" 
          fill 
          className="object-cover" 
        />
      </div>
      
      <Navbar variant="floating" className="max-w-4xl mx-auto mt-6">
        <NavbarBrand>Linear</NavbarBrand>
        <NavbarContent justify="center" className="hidden md:flex">
          <NavbarItem>Features</NavbarItem>
          <NavbarItem>Method</NavbarItem>
          <NavbarItem>Customers</NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Log in</Button>
          <Button size="sm" className="rounded-full">Get Started</Button>
        </NavbarContent>
      </Navbar>
      
      <div className="relative z-0 p-8 pt-32 max-w-4xl mx-auto text-muted-foreground">
        <h1 className="text-4xl font-bold text-foreground mb-4">Floating Navbar Demo</h1>
        <p>The floating navbar sits inside the page layout and looks like a pill.</p>
        <div className="h-[200vh]" />
      </div>
    </div>
  ),
};
