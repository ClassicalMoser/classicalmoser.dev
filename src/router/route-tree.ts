import { createRootRoute, createRoute } from '@tanstack/solid-router';
import { HomePage, LearnCraftSpanishPage, NotFoundPage, RootLayout } from '@pages';
import { learncraftSpanishPath } from '@content';

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const learncraftSpanishRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: learncraftSpanishPath,
  component: LearnCraftSpanishPage,
});

export const routeTree = rootRoute.addChildren([indexRoute, learncraftSpanishRoute]);
