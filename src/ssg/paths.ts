import { dirname, join } from 'node:path';

export function prerenderOutputPath(distDir: string, routePath: string): string {
  if (routePath === '/') {
    return join(distDir, 'index.html');
  }

  const normalized = routePath.replace(/^\/+|\/+$/g, '');
  return join(distDir, normalized, 'index.html');
}

export function ensureParentDir(filePath: string): string {
  return dirname(filePath);
}
