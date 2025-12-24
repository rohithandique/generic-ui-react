import { useEffect } from 'react';
import { LandingPage } from '@/pages/landing';
import { notifications } from '@mantine/notifications';
import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  component: () => {
    const { auth } = Route.useRouteContext();
    const navigate = useNavigate();

    useEffect(() => {
      if (!auth.isLoading && !auth.user) {
        notifications.show({
          id: 'auth-required',
          title: 'Access Restricted',
          message: 'Please sign in to access this page.',
          color: 'red',
          autoClose: 5000,
          withCloseButton: true,
        });

        navigate({ to: '/', replace: true });
      }
    }, [auth.isLoading, auth.user, navigate]);

    if (auth.isLoading) return null;

    if (!auth.user) {
      return <LandingPage />;
    }

    return <Outlet />;
  },
});
