// src/app/providers/with-mantine.tsx
import { MantineProvider } from '@mantine/core';
import { ComponentType } from 'react';
import '@mantine/core/styles.css';

export const withMantine = (Component: ComponentType) => {
  return (props: any) => (
    <MantineProvider defaultColorScheme="auto">
      <Component {...props} />
    </MantineProvider>
  );
};
