import { createTheme, MantineProvider } from '@mantine/core';
import { ComponentType } from 'react';

import '@fontsource/geist';
import '@fontsource/geist/600.css';
import '@fontsource/geist-mono';

import '@mantine/core/styles.css';
import '@app/styles/index.css';

const theme = createTheme({
  fontFamily:
    'Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  fontFamilyMonospace: '"Geist Mono", Monaco, Courier, monospace',
  headings: {
    fontFamily: 'Geist, sans-serif',
    fontWeight: '600',
  },
});

export const withMantine = (Component: ComponentType) => {
  return (props: any) => (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Component {...props} />
    </MantineProvider>
  );
};
