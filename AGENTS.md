# Agent guidance

Read [README.md](README.md) first. Documentation in this repo is human-first: agents follow the same docs, commands, and conventions as people, and the README is the single source of truth.

The short version:

- Toolchain is Vite+ (`vp`), wrapped by pnpm scripts: `pnpm check`, `pnpm test`, `pnpm build`. Use these — not `npx`, `vitest`, or `eslint` directly. The auto-generated Vite+ reference below has the details.
- Import boundaries are enforced by lint ([boundaries.ts](boundaries.ts)). Work within them; do not suppress the rule.
- All copy lives in `src/content/` as typed data, and content tests pin the section structure. Match the site's plain, first-person voice — no marketing gloss.
