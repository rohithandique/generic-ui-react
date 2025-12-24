import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  beforeLoad: ({ context, location }) => {
    if (context.auth.isLoading) {
      return;
    }

    if (!context.auth.user) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.pathname === '/' ? undefined : location.href,
        },
      });
    }
  },
  component: () => <Outlet />,
});
