import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createServer } from 'vite';

const projectRoot = process.cwd();
const distDir = join(projectRoot, 'dist');
const templatePath = join(distDir, 'index.html');

const template = readFileSync(templatePath, 'utf8');

const vite = await createServer({
  configFile: join(projectRoot, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const { prerenderManifest } = await vite.ssrLoadModule('/src/ssg/manifest.ts');
  const { renderRouteAppHtml } = await vite.ssrLoadModule('/src/ssg/render-route.tsx');
  const { applyRouteMeta, injectAppHtml } = await vite.ssrLoadModule('/src/ssg/document.ts');
  const { ensureParentDir, prerenderOutputPath } = await vite.ssrLoadModule('/src/ssg/paths.ts');

  for (const route of prerenderManifest) {
    const appHtml = await renderRouteAppHtml(route.path);
    const html = applyRouteMeta(injectAppHtml(template, appHtml), route.meta);
    const outputPath = prerenderOutputPath(distDir, route.path);

    mkdirSync(ensureParentDir(outputPath), { recursive: true });
    writeFileSync(outputPath, html, 'utf8');
    console.log(`prerendered ${route.path} -> ${outputPath}`);
  }
} finally {
  await vite.close();
}
