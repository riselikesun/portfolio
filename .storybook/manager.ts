import { addons } from 'storybook/manager-api';
import { themes, create } from 'storybook/theming';
import { GLOBALS_UPDATED } from 'storybook/internal/core-events';

const sharedTheme = {
  brandTitle: 'Suraj Sharma | UI Library',
  brandUrl: '/',
  brandTarget: '_self',
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
  colorPrimary: '#D89432',
  colorSecondary: '#D89432',
  barSelectedColor: '#D89432',
};

const customDarkTheme = create({
  base: 'dark',
  ...sharedTheme,
  appBg: '#0a0a0a',
  appContentBg: '#0a0a0a',
});

const customLightTheme = create({
  base: 'light',
  ...sharedTheme,
});

addons.setConfig({
  theme: customDarkTheme, // initial theme
});

addons.register('theme-sync', (api) => {
  const channel = addons.getChannel();
  
  channel.on(GLOBALS_UPDATED, ({ globals }) => {
    const isDark = globals.theme === 'dark';
    api.setOptions({
      theme: isDark ? customDarkTheme : customLightTheme,
    });
  });
});
