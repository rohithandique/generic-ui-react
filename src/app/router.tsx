import { createRouter } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';
import { NotFoundPage } from '@/pages/not-found';

export interface MyRouterContext {
  auth: {
    user: any | null;
    isLoading: boolean;
  };
}

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <NotFoundPage />,
  context: {
    auth: undefined!,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
