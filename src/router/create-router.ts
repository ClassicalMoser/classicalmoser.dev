import { NotFoundPage } from '@pages';
import { createRouter as createTanStackRouter } from '@tanstack/solid-router';
import { routeTree } from './route-tree';

export function createRouter() {
  return createTanStackRouter({
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultNotFoundComponent: NotFoundPage,
  });
}

declare module '@tanstack/solid-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
