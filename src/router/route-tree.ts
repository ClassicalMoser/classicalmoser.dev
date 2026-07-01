import { createRootRoute, createRoute } from '@tanstack/solid-router';
import { HomePage, RootLayout } from '@pages';

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

export const routeTree = rootRoute.addChildren([indexRoute]);
