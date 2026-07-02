/**
 * Portfolio copy and links — editorial, not a 1:1 export of the CV.
 * Update `src/content/site.ts` when your story or featured work changes.
 */

export const person = {
  name: 'Josiah Moser',
  location: 'Tulsa, OK',
  email: 'josiah@classicalmoser.dev',
  githubUrl: 'https://github.com/ClassicalMoser',
} as const;

export const site = {
  siteName: 'classicalmoser.dev',
  url: 'https://classicalmoser.dev',
  title: 'Josiah Moser · Software & systems',
  description:
    'Portfolio of Josiah Moser—architecture, production web systems, and open tooling. Featured work: LearnCraft Spanish (~3k MAU). Tulsa, OK.',
} as const;

/** Served from `public/` — same paths at build time (SSG) and runtime. */
export const profileImage = {
  src: '/Josiah_Profile_800.png',
  srcSet: '/Josiah_Profile_512.png 512w, /Josiah_Profile_800.png 800w',
  sizes: '(min-width: 640px) 260px, 220px',
  width: 260,
  height: 260,
} as const;

export const hero = {
  eyebrow: 'Software & systems',
  headline: 'Architecture that stays trustworthy under change.',
  lead: [
    'I care most about correctness, clear boundaries, and code that is safer to change over time. That matters doubly now: agents amplify whatever structure and discipline they inherit.',
    'Most recently I led engineering at a coaching company—shipping a subscription learning platform for thousands of learners, tightening security and validation, and refactoring in place with strangler-style migrations instead of big-bang rewrites.',
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
    'The platform was subscription-gated and company-owned—I no longer have full access. Engineering was open-sourced while I led the team; unlisted feature walkthroughs may be available on request for serious reviewers.',
  links: [
    {
      href: 'https://github.com/LearnCraft-Spanish/learncraft-spanish',
      label: 'Public repository',
      variant: 'outline' as const,
    },
    {
      href: 'https://www.learncraftspanish.com/',
      label: 'Company site',
      variant: 'ghost' as const,
    },
  ],
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
    'Email is best for substantive conversations—collaborations, architecture discussions, or a LearnCraft walkthrough if you are evaluating the production work.',
} as const;

/** Social rows use icons from `SocialIconSprite`; omit entries you do not use. */
export const socialLinks = [
  { href: person.githubUrl, label: 'GitHub', iconId: 'github-icon' as const },
] as const;
