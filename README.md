# ClassicalMoser.dev

Josiah Moser's developer portfolio site

## Development

Commands use the Vite+ CLI (`vp`). Linting and formatting are configured in [`vite.config.ts`](vite.config.ts) (Oxlint + type-aware checks, plus `eslint-plugin-import-boundaries`). There is no separate `eslint.config.js`; boundary rules live next to [`boundaries.ts`](boundaries.ts).

| Script           | What it runs                                                          |
| ---------------- | --------------------------------------------------------------------- |
| `pnpm check`     | `vp check` — format, lint, and TypeScript (same as CI in `AGENTS.md`) |
| `pnpm lint`      | `vp lint`                                                             |
| `pnpm fmt`       | `vp fmt`                                                              |
| `pnpm typecheck` | `tsc -b` — project references only, no Oxlint                         |
| `pnpm test`      | `vp test` (Vitest via Vite+)                                          |

## Built with

- Solid.js
- TanStack Solid Router
- Vite Plus (Vite + OXC Toolchain)
- Shadcn UI (Zaidan port for Solid.js)
- Tailwind CSS
