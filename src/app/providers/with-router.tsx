import { RouterProvider } from '@tanstack/react-router';
import { router } from '../router';
import { useAuth } from './auth-context';
export const withRouter = (_Component: React.ComponentType) => {
  return function WithRouterWrapper() {
    const auth = useAuth();
    if (auth.isLoading) {
      return null;
    }
    return (
      <RouterProvider
        router={router}
        context={{ auth }} // This passes auth to all routes
      />
    );
  };
};
