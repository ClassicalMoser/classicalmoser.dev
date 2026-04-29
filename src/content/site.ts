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
  headline: 'Architecture that stays trustworthy as tools—and teammates—change.',
  lead: [
    'I care most about correctness, clear boundaries, and code that is safer to change over time. That matters doubly now: agents amplify whatever structure and discipline they inherit.',
    'Most recently I led engineering at a coaching company—shipping a full web stack for thousands of learners, tightening security and validation, and refactoring in place with strangler-style migrations instead of big-bang rewrites.',
  ],
} as const;

/** Featured work — short blurbs; detail lives in repos and packages. */
export const featuredProjects = [
  {
    title: 'eslint-plugin-import-boundaries',
    description:
      'Opinionated ESLint rules that enforce architectural boundaries using pure AST work—no filesystem reads—so imports stay predictable in larger codebases.',
    href: 'https://www.npmjs.com/package/eslint-plugin-import-boundaries',
    linkLabel: 'Package',
  },
  {
    title: 'Prevail: Ancient Battles',
    description:
      'A pre-gunpowder tactical rules engine: stateless, schema-driven, event-sourced, and replayable—built for reliability under heavy test and mutation coverage.',
    href: 'https://github.com/ClassicalMoser/prevail-rules',
    linkLabel: 'Repository',
  },
  {
    title: 'PortableNote',
    description:
      'An open PKM format spec with a compliance-oriented test suite and a polyglot implementation path—Rust core, Tauri bridge, Solid client—in progress.',
    href: 'https://github.com/ClassicalMoser/portablenote',
    linkLabel: 'Repository',
  },
] as const;

export const focusSection = {
  title: 'How I work',
  body: [
    'I default to domain modeling, hexagonal boundaries, and tests that catch real regressions—including mutation testing where it earns its keep. Documentation and lint rules are part of the product: they steer both humans and automation toward the same invariants.',
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
