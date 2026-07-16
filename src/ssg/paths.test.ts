import { join } from 'node:path';
import { expect, test } from 'vite-plus/test';
import { ensureParentDir, prerenderOutputPath } from './paths';

test('root path writes dist/index.html', () => {
  expect(prerenderOutputPath('/dist', '/')).toBe(join('/dist', 'index.html'));
});

test('nested paths write directory-style index.html', () => {
  expect(prerenderOutputPath('/dist', '/work/learncraft-spanish')).toBe(
    join('/dist', 'work', 'learncraft-spanish', 'index.html'),
  );
});

test('404 path writes dist/404.html for Cloudflare not_found_handling', () => {
  expect(prerenderOutputPath('/dist', '/404')).toBe(join('/dist', '404.html'));
});

test('ensureParentDir returns the directory containing the file', () => {
  expect(ensureParentDir(join('/dist', '404.html'))).toBe('/dist');
  expect(ensureParentDir(join('/dist', 'work', 'page', 'index.html'))).toBe(
    join('/dist', 'work', 'page'),
  );
});
