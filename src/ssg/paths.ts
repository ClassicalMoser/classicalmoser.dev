import { dirname, join } from 'node:path';

export function prerenderOutputPath(distDir: string, routePath: string): string {
  if (routePath === '/') {
    return join(distDir, 'index.html');
  }

  // Cloudflare `not_found_handling: "404-page"` requires root `404.html`, not `404/index.html`.
  if (routePath === '/404') {
    return join(distDir, '404.html');
  }

  const normalized = routePath.replace(/^\/+|\/+$/g, '');
  return join(distDir, normalized, 'index.html');
}

export function ensureParentDir(filePath: string): string {
  return dirname(filePath);
}
