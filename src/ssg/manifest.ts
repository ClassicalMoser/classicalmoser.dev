import { learncraftSpanishMeta, learncraftSpanishPath, site } from '@content';
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
    'Four years running the LearnCraft Spanish platform, open-source tooling, and a case study in rearchitecting under live traffic.',
  ogImage: `${site.url}/og.png`,
};

const learncraftSpanishPageMeta: PrerenderMeta = {
  title: learncraftSpanishMeta.title,
  description: learncraftSpanishMeta.description,
  canonical: `${site.url}${learncraftSpanishPath}`,
  ogTitle: learncraftSpanishMeta.title,
  ogDescription: learncraftSpanishMeta.description,
  ogImage: `${site.url}/og.png`,
};

const metaByPath: Record<StaticRoutePath, PrerenderMeta> = {
  '/': homeMeta,
  [learncraftSpanishPath]: learncraftSpanishPageMeta,
};

/** Explicit publish list — extend `metaByPath` when `staticRoutes` grows. */
export const prerenderManifest: PrerenderRoute[] = staticRoutes.map((path) => ({
  path,
  meta: metaByPath[path],
}));
