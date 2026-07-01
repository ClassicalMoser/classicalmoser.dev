import type { PrerenderMeta } from './manifest';

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function replaceMetaContent(html: string, selector: string, content: string): string {
  const pattern = new RegExp(`(<meta[^>]*${selector}[^>]*content=")([^"]*)(")`, 'i');
  return html.replace(pattern, `$1${escapeHtml(content)}$3`);
}

function replaceTitle(html: string, title: string): string {
  return html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`);
}

function replaceCanonical(html: string, href: string): string {
  return html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/i,
    `<link rel="canonical" href="${escapeHtml(href)}" />`,
  );
}

export function applyRouteMeta(html: string, meta: PrerenderMeta): string {
  let next = html;
  next = replaceTitle(next, meta.title);
  next = replaceMetaContent(next, 'name="description"', meta.description);
  next = replaceCanonical(next, meta.canonical);
  next = replaceMetaContent(next, 'property="og:title"', meta.ogTitle);
  next = replaceMetaContent(next, 'property="og:description"', meta.ogDescription);
  next = replaceMetaContent(next, 'property="og:url"', meta.canonical);
  next = replaceMetaContent(next, 'property="og:image"', meta.ogImage);
  next = replaceMetaContent(next, 'name="twitter:title"', meta.ogTitle);
  next = replaceMetaContent(next, 'name="twitter:description"', meta.ogDescription);
  next = replaceMetaContent(next, 'name="twitter:image"', meta.ogImage);
  return next;
}

export function injectAppHtml(html: string, appHtml: string): string {
  return html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}
