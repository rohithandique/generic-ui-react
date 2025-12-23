import { createTheme, MantineProvider } from '@mantine/core';
import { ComponentType } from 'react';

import '@fontsource/geist';
import '@fontsource/geist/600.css';
import '@fontsource/geist-mono';

import '@mantine/core/styles.css';
import '@app/styles/index.css';

const theme = createTheme({
  fontFamily: 'Geist, sans-serif',
  fontFamilyMonospace: '"Geist Mono", monospace',

  headings: {
    fontFamily: 'Geist, sans-serif',
    fontWeight: '600',
  },
  colors: {
    zinc: [
      '#fafafa',
      '#f4f4f5',
      '#e4e4e7',
      '#d4d4d8',
      '#a1a1aa',
      '#71717a',
      '#52525b',
      '#3f3f46',
      '#27272a',
      '#18181b',
    ],
  },

  primaryColor: 'zinc',
  primaryShade: 0,

  components: {
    Button: {
      defaultProps: {
        fw: 500,
        radius: 'md',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
  },

  autoContrast: true,
});

export const withMantine = (Component: ComponentType) => {
  return (props: any) => (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Component {...props} />
    </MantineProvider>
  );
};
