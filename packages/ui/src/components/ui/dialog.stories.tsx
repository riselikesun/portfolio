import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './dialog';
import { Button } from './button';

const meta = {
  title: 'All Components/Feedback/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['ai-generated', 'autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="p-8 max-w-7xl mx-auto">
      <section className="space-y-8">
        <div className="border-b border-border/50 pb-4">
          <h2 className="text-3xl font-bold tracking-tight">Overlays: Dialog</h2>
          <p className="text-muted-foreground mt-2">Interactive popups and modals.</p>
        </div>

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
      </section>
    </div>
  )
};

export const Default: Story = {
  tags: ['!dev'],
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete account</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete your account? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">Type "DELETE" to confirm.</p>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive" type="submit">Confirm Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
