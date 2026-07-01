/**
 * Paths published as static HTML on build.
 *
 * When adding a route:
 * 1. Register it in `route-tree.ts`
 * 2. Append its path here
 * 3. Add metadata in `src/ssg/manifest.ts`
 */
export const staticRoutes = ['/'] as const;

export type StaticRoutePath = (typeof staticRoutes)[number];
