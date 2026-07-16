import { expect, test } from 'vite-plus/test';
import { notFound, notFoundMeta, notFoundPrerenderPath } from './not-found';

test('not-found prerender path is the Cloudflare 404.html special case', () => {
  expect(notFoundPrerenderPath).toBe('/404');
});

test('not-found copy keeps a home escape hatch', () => {
  expect(notFound.homeHref).toBe('/');
  expect(notFound.title.length).toBeGreaterThan(0);
  expect(notFound.lead.length).toBeGreaterThan(0);
});

test('not-found meta is suitable for a noindex document', () => {
  expect(notFoundMeta.title).toContain('Page not found');
  expect(notFoundMeta.description.length).toBeGreaterThan(0);
});
