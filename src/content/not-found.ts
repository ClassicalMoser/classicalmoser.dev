import { site } from './site';

/** Unmatched-path prerender target — writes `dist/404.html` for Cloudflare. */
export const notFoundPrerenderPath = '/404' as const;

export const notFound = {
  title: 'Page not found',
  lead: 'That URL isn’t on this site. It may have moved, or it may never have existed.',
  homeHref: '/',
  homeLabel: '← Back to home',
} as const;

export const notFoundMeta = {
  title: `Page not found · ${site.siteName}`,
  description: 'The page you requested could not be found on classicalmoser.dev.',
  ogTitle: `Page not found · ${site.siteName}`,
  ogDescription: 'The page you requested could not be found on classicalmoser.dev.',
} as const;
