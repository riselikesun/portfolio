import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.css'
import { Inter, Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"] });

import { themes } from 'storybook/theming';

import React, { useEffect } from 'react';

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
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      theme: themes.dark,
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