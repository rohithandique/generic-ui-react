import { Header } from '@/widgets/header';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { MyRouterContext } from '../router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    {/* <TanStackRouterDevtools /> */}
  </>
);

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootLayout,
});
