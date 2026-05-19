/**
 * Portfolio copy and links — editorial, not a 1:1 export of the CV.
 * Update `src/content/site.ts` when your story or featured work changes.
 */

export const person = {
  name: 'Josiah Moser',
  location: 'Tulsa, OK',
  email: 'Josiah@classicalmoser.dev',
  githubUrl: 'https://github.com/ClassicalMoser',
} as const;

export const hero = {
  eyebrow: 'Software & systems',
  headline: 'Architecture that stays trustworthy under change.',
  lead: [
    'I care most about correctness, clear boundaries, and code that is safer to change over time. That matters doubly now: agents amplify whatever structure and discipline they inherit.',
    'Most recently I led engineering at a coaching company—shipping a full web stack for thousands of learners, tightening security and validation, and refactoring in place with strangler-style migrations instead of big-bang rewrites.',
  ],
} as const;

/** The production credibility artifact — given visual weight on the page. */
export const featuredWork = {
  title: 'LearnCraft Spanish',
  role: 'Director of Technology · 2022–2026',
  summary:
    'Designed, built, and maintained the production web stack serving ~3,000 monthly active learners. Continuously delivered for four years without significant downtime or relaunch.',
  highlights: [
    'Migrated a plain-JavaScript monolith to strictly typed hexagonal architecture in place, using a strangler-fig pattern—no rewrite, no feature freeze.',
    'Secured user and internal data with server-enforced RBAC, JWT-authoritative auth, and boundary-level Zod validation.',
    'Built a mutation-tested domain core and CI-enforced architectural rules to keep the codebase safer to change as it aged.',
  ],
  closer:
    'The codebase is public. Architecture, tests, CI configuration, and custom tooling are all open for review.',
  href: 'https://github.com/LearnCraft-Spanish/learncraft-spanish',
  linkLabel: 'Inspect the codebase',
} as const;

/** Secondary work — tooling and projects in public. */
export const sideProjects = [
  {
    title: 'eslint-plugin-import-boundaries',
    description:
      'Opinionated ESLint rules that enforce architectural boundaries using pure AST evaluation—no filesystem reads—so imports stay predictable as a codebase grows. Published on npm.',
    href: 'https://www.npmjs.com/package/eslint-plugin-import-boundaries',
    linkLabel: 'Package',
  },
  {
    title: 'Prevail: Ancient Battles',
    description:
      'A pre-gunpowder tactical rules engine: stateless, schema-driven, event-sourced, and replayable. Built for reliability under heavy test and mutation coverage, with hexagonal boundaries enforced by custom lint rules.',
    href: 'https://github.com/ClassicalMoser/prevail-rules',
    linkLabel: 'Repository',
  },
] as const;

export const focusSection = {
  title: 'How I work',
  body: [
    'I default to domain modeling, hexagonal boundaries, and tests that catch real regressions, including mutation testing where it earns its keep. Documentation and lint rules are part of the product: they steer both humans and automation toward the same invariants.',
    'Comfortable across the stack—React and Solid on the client, Node and PostgreSQL on the server—with Auth0, Zod, and REST in production. I enjoy the polish of UI work, but the spine of a system is where I spend the deepest time.',
  ],
  /** Light-touch stack hint; expand or trim freely. */
  stackHint:
    'TypeScript · Node · React · Solid · Vite · PostgreSQL · Zod · TanStack Query · Vitest · Stryker',
} as const;

export const connectCopy = {
  blurb:
    'Email is best for substantive conversations—collaborations, architecture discussions, or pointing me at a problem worth digging into.',
} as const;

/** Social rows use icons from `SocialIconSprite`; omit entries you do not use. */
export const socialLinks = [
  { href: person.githubUrl, label: 'GitHub', iconId: 'github-icon' as const },
] as const;
