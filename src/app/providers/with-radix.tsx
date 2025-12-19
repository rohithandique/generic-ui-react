import { Theme } from '@radix-ui/themes';
import { ComponentType } from 'react';

export const withRadix = (Component: ComponentType) => {
  return (props: any) => (
    <Theme>
      <Component {...props} />
    </Theme>
  );
};
