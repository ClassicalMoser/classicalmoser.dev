import { site } from '@content';
import { staticRoutes, type StaticRoutePath } from '@router';

export type PrerenderMeta = {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
};

export type PrerenderRoute = {
  path: StaticRoutePath;
  meta: PrerenderMeta;
};

const homeMeta: PrerenderMeta = {
  title: site.title,
  description: site.description,
  canonical: `${site.url}/`,
  ogTitle: site.title,
  ogDescription:
    'Architecture that stays trustworthy under change. Production systems, open tooling, and the LearnCraft Spanish stack.',
  ogImage: `${site.url}/og.png`,
};

const metaByPath: Record<StaticRoutePath, PrerenderMeta> = {
  '/': homeMeta,
};

/** Explicit publish list — extend `metaByPath` when `staticRoutes` grows. */
export const prerenderManifest: PrerenderRoute[] = staticRoutes.map((path) => ({
  path,
  meta: metaByPath[path],
}));
