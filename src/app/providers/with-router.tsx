// src/app/providers/with-router.tsx
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from '../../routeTree.gen';
import { ComponentType } from 'react';

const router = createRouter({ routeTree });

export const withRouter = (_Component: ComponentType) => {
  return () => <RouterProvider router={router} />;
};
