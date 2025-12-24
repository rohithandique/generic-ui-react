import { RouterProvider } from '@tanstack/react-router';
import { router } from '../router';
import { useAuth } from './auth-context';
import { FullPageLoader } from '@/shared/ui';

export const withRouter = (_Component: React.ComponentType) => {
  return function WithRouterWrapper() {
    const auth = useAuth();
    if (auth.isLoading) {
      return <FullPageLoader />;
    }
    return (
      <RouterProvider
        router={router}
        context={{ auth }} // This passes auth to all routes
      />
    );
  };
};
