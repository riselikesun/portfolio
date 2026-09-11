import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.css'
import { Inter, Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"] });

import { themes } from 'storybook/theming';

import React, { useEffect } from 'react';

import { DocsContainer } from '@storybook/addon-docs/blocks';
import { TooltipProvider } from "../components/ui/tooltip";
import SmoothScroll from '../app/components/smooth-scroll';
import MockDate from 'mockdate';
import { mswLoader } from 'msw-storybook-addon/csf3';
import { mswHandlers } from './msw-handlers';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'dark';

      useEffect(() => {
        const htmlTag = document.documentElement;
        if (theme === 'dark') {
          htmlTag.classList.add('dark');
        } else {
          htmlTag.classList.remove('dark');
        }
      }, [theme]);

      return (
        <div className={`${figtree.variable} ${inter.className} font-sans`}>
          <TooltipProvider delayDuration={200}>
            <SmoothScroll>
              <Story />
            </SmoothScroll>
          </TooltipProvider>
        </div>
      );
    },
  ],
  loaders: [mswLoader()],
  async beforeEach({ msw }) {
    if (msw) msw.use(...mswHandlers);
    localStorage.setItem('theme', 'dark');
    MockDate.set('2024-04-01T12:00:00Z');
  },
  parameters: {
    options: {
      storySort: {
        order: ['All Components', ['Overview', '*']],
      },
    },
    docs: {
      container: (props: any) => {
        const [isDark, setIsDark] = React.useState(
          document.documentElement.classList.contains('dark')
        );

        React.useEffect(() => {
          const html = document.documentElement;
          const observer = new MutationObserver(() => {
            setIsDark(html.classList.contains('dark'));
          });
          observer.observe(html, { attributes: true, attributeFilter: ['class'] });
          return () => observer.disconnect();
        }, []);

        return (
          <DocsContainer {...props} theme={isDark ? themes.dark : themes.light} />
        );
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;