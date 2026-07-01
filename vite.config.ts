import { defineConfig } from 'vite-plus';
import tailwindcss from '@tailwindcss/vite';
// Native ESM config load requires `./boundaries.ts`; the rule wants extensionless.
// Scoped suppression — `import-boundaries` still applies to all of `src/`.
/* eslint-disable-next-line import-boundaries/enforce */
import { boundaries } from './boundaries.ts';
import solid from 'vite-plugin-solid';

export default defineConfig({
  fmt: {
    singleQuote: true,
    trailingComma: 'all',
  },
  lint: {
    options: { typeAware: true, typeCheck: true },
    jsPlugins: ['eslint-plugin-import-boundaries'],
    rules: {
      'import-boundaries/enforce': [
        'error',
        {
          rootDir: 'src',
          boundaries,
        },
      ],
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [tailwindcss(), solid({ ssr: true })],
});
