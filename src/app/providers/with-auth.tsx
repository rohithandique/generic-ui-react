import { ComponentType } from 'react';
import { AuthProvider } from './auth-context';

export const withAuth = (Component: ComponentType) => {
  const WrappedComponent = (props: any) => (
    <AuthProvider>
      <Component {...props} />
    </AuthProvider>
  );
  WrappedComponent.displayName = `withAuth(${Component.displayName || Component.name || 'Component'})`;
  return WrappedComponent;
};
