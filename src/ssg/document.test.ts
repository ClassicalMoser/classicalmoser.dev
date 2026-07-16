import { expect, test } from 'vite-plus/test';
import { applyRouteMeta, injectAppHtml } from './document';
import type { PrerenderMeta } from './manifest';

const baseHtml = `<!doctype html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta name="description" content="Home description" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://example.com/" />
    <meta property="og:title" content="Home" />
    <meta property="og:description" content="Home description" />
    <meta property="og:url" content="https://example.com/" />
    <meta property="og:image" content="https://example.com/og.png" />
    <meta name="twitter:title" content="Home" />
    <meta name="twitter:description" content="Home description" />
    <meta name="twitter:image" content="https://example.com/og.png" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

const meta: PrerenderMeta = {
  title: 'Missing <page> & more',
  description: 'That URL is gone.',
  canonical: 'https://example.com/404',
  ogTitle: 'Missing <page> & more',
  ogDescription: 'That URL is gone.',
  ogImage: 'https://example.com/og.png',
  robots: 'noindex, nofollow',
};

test('injectAppHtml places SSR markup inside #root', () => {
  expect(injectAppHtml(baseHtml, '<main>hi</main>')).toContain(
    '<div id="root"><main>hi</main></div>',
  );
});

test('applyRouteMeta rewrites document tags and escapes HTML', () => {
  const html = applyRouteMeta(baseHtml, meta);

  expect(html).toContain('<title>Missing &lt;page&gt; &amp; more</title>');
  expect(html).toContain('content="That URL is gone."');
  expect(html).toContain('content="noindex, nofollow"');
  expect(html).toContain('href="https://example.com/404"');
  expect(html).toContain('property="og:url" content="https://example.com/404"');
  expect(html).not.toContain('<title>Home</title>');
  expect(html).not.toContain('content="index, follow"');
});
