/**
 * Paths published as static HTML on build.
 *
 * When adding a route:
 * 1. Register it in `route-tree.ts`
 * 2. Append its path here
 * 3. Add metadata in `src/ssg/manifest.ts`
 *
 * The Cloudflare `404.html` page is prerendered separately via
 * `notFoundPrerenderPath` in the SSG manifest — do not list it here.
 */
import { learncraftSpanishPath } from '@content';

export const staticRoutes = ['/', learncraftSpanishPath] as const;

export type StaticRoutePath = (typeof staticRoutes)[number];
