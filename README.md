# ClassicalMoser.dev

Josiah Moser's developer portfolio site. This README is the source of truth for working in the repo — for humans and agents alike.

## Development

Commands use the Vite+ CLI (`vp`). Linting and formatting are configured in [`vite.config.ts`](vite.config.ts) (Oxlint + type-aware checks, plus `eslint-plugin-import-boundaries`). There is no separate `eslint.config.js`; boundary rules live next to [`boundaries.ts`](boundaries.ts).

| Script           | What it runs                                               |
| ---------------- | ---------------------------------------------------------- |
| `pnpm check`     | `vp check` — format, lint, and TypeScript                  |
| `pnpm lint`      | `vp lint`                                                  |
| `pnpm fmt`       | `vp fmt`                                                   |
| `pnpm typecheck` | `tsc -b` — project references only, no Oxlint              |
| `pnpm test`      | `vp test` (Vitest via Vite+)                               |
| `pnpm build`     | `tsc -b` + `vp build` + prerender (`scripts/prerender.ts`) |

## Architecture

The site is a Solid SPA with build-time static rendering. Routing is explicit (no filesystem routing): routes live in `src/router/route-tree.ts`, the publish list in `src/router/static-routes.ts`, and per-route meta in `src/ssg/manifest.ts` — the comment in `static-routes.ts` walks through adding a route. `scripts/prerender.ts` renders each route to static HTML in `dist/`, including a root `404.html` for Cloudflare's `not_found_handling`.

Import boundaries between layers (`content` → `ui` → `components` → `pages` → `router`/`ssg`) are enforced by lint via [`boundaries.ts`](boundaries.ts). Work within them rather than suppressing the rule.

## Editing content

All copy lives in `src/content/` as typed data — components under `src/components/site/` only render it. Tests cover behaviour (routing, prerender paths, the `paragraphs` helper), not copy strings, so prose changes stand on review alone.

Voice: plain, first-person, concrete. Claims stay verifiable (numbers, dates, links); no marketing gloss.

## Built with

- Solid.js
- TanStack Solid Router
- Vite Plus (Vite + OXC Toolchain)
- Shadcn UI (Zaidan port for Solid.js)
- Tailwind CSS
- Cloudflare Workers (static assets via `wrangler.jsonc`)
