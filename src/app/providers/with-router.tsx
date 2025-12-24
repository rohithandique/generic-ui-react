// src/app/providers/with-router.tsx
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from '../../routeTree.gen';
import { ComponentType } from 'react';
import { NotFoundPage } from '@/pages/not-found';

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => {
    return <NotFoundPage />;
  },
});

export const withRouter = (_Component: ComponentType) => {
  return () => <RouterProvider router={router} />;
};
