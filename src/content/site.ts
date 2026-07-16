/**
 * Portfolio copy and links. Update `src/content/site.ts` when the story or
 * featured work changes.
 */

import { learncraftSpanishPath } from './learncraft-spanish';
import { paragraphs } from './paragraphs';

export const person = {
  name: 'Josiah Moser',
  location: 'Tulsa, OK',
  email: 'josiah@classicalmoser.dev',
  githubUrl: 'https://github.com/ClassicalMoser',
  linkedinUrl: 'https://www.linkedin.com/in/josiah-moser',
} as const;

/** Served from `public/` — same paths at build time (SSG) and runtime. */
export const resume = {
  pdfHref: '/Josiah-Moser-Resume.pdf',
  typstHref: '/Josiah-Moser-Resume.typ',
} as const;

export const site = {
  siteName: 'classicalmoser.dev',
  url: 'https://classicalmoser.dev',
  title: 'Josiah Moser · Senior Software Engineer · Systems architecture',
  description:
    'Josiah Moser is a senior software engineer in Tulsa, OK. He built and ran the LearnCraft Spanish platform (~3,000 monthly learners) for five years and maintains open-source tooling for architectural boundaries.',
} as const;

/** Served from `public/` — same paths at build time (SSG) and runtime. */
export const profileImage = {
  src: '/Josiah_Profile_512.png',
  width: 260,
  height: 260,
} as const;

export const hero = {
  eyebrow: 'Senior Software Engineer · Systems architecture',
  lead: paragraphs`
    For the last four years I was Director of Technology at LearnCraft Spanish, where I designed, built,
    and matured a learning platform used by over 3,000 monthly learners. I started as the only engineer,
    made the first hire in 2024, and left behind a codebase my successor now runs on his own.

    Every part of that platform was built to outlast me. The intent lives in explicit types, schemas, and
    enforced boundaries rather than in my head, which is what made it easy to hand off and safe for AI tools
    to work in. I'm currently seeking further opportunities to build durable systems, whether full-time
    or contract.
  `,
} as const;

/** The production credibility artifact — given visual weight on the page. */
export const featuredWork = {
  title: 'LearnCraft Spanish',
  role: 'Director of Technology · 2022–2026',
  summary: paragraphs`
    A grammar-based quizzing and student record platform for a language coaching company. I designed
    and built the web stack, ran it in production for four years, and rearchitected it under live traffic
    without a ground-up rewrite or downtime.
  `,
  highlights: [
    'Strangler-fig migration from an untyped JavaScript monolith to strict TypeScript with hexagonal boundaries, while feature work continued uninterrupted.',
    'Student data locked down with server-enforced roles, JWT-authoritative auth, and Zod validation on everything crossing the wire.',
    'Built to outlast its builder: a mutation-tested domain core, architecture rules that fail CI when violated, and patterns clear enough that both my successor and AI tools follow them by default.',
  ],
  stats: [
    { value: '~3,000', label: 'monthly active learners' },
    { value: '4 years', label: 'of continuous delivery, no rewrite or relaunch' },
    { value: '78%', label: 'of surveyed users would be “very disappointed” to lose it (n = 205)' },
  ],
  caseStudy: {
    href: learncraftSpanishPath,
    label: 'Read the case study',
  },
} as const;

/** Secondary work — tooling and projects in public. */
export const sideProjects = [
  {
    title: 'eslint-plugin-import-boundaries',
    description:
      'ESLint rules that keep imports honest as a codebase grows: architectural boundaries enforced through pure AST evaluation, no filesystem reads. Published on npm and used in all my projects.',
    href: 'https://www.npmjs.com/package/eslint-plugin-import-boundaries',
    linkLabel: 'Package',
  },
  {
    title: 'Prevail: Ancient Battles',
    description:
      'The rules engine for a tabletop-style ancient warfare game I’m designing. Stateless, event-sourced, fully and headlessly replayable, with 1,500+ tests and a ~86% mutation score.',
    href: 'https://github.com/ClassicalMoser/prevail-rules',
    linkLabel: 'Repository',
  },
  {
    title: 'PortableNote',
    description:
      'An open spec for portable personal notes: a compliance test suite, a hexagonal Rust core, and a SolidJS client over a Tauri bridge.',
    href: 'https://github.com/ClassicalMoser/portablenote',
    linkLabel: 'Repository',
  },
] as const;

export const focusSection = {
  title: 'How I work',
  body: paragraphs`
    As a lifelong lover of classical music, art, and architecture, I build for continuity and longevity
    over rapid sprawl. That means encoding human intent clearly in the code itself: explicit types and
    schemas, enforced boundaries and dependency directions, and strict tooling enforcement. What has always
    been good for human collaboration is especially important for AI agents, and documentation and tools still
    cannot do the work that imitation of sound patterns does.

    I learned this by paying for the alternative. I built LearnCraft fast and untyped, then spent years
    migrating it in place under live traffic to undo the bottlenecks I had inadvertently introduced.
    The success of this work has enabled my successor to manage the platform on his own; sound architecture
    outlasts its builders.

    My typical stack is TypeScript end to end: React or Solid on the client, Node and PostgreSQL on the
    server, Zod at the boundaries. I care about UI and accessibility, but architecture and systems design
    are where I do my deepest work.
  `,
  stackCardTitle: 'Stack & tooling',
  stackCardDescription: 'The tools I reach for most.',
  stackHint:
    'TypeScript · Node · React · Solid · Vite · PostgreSQL · Zod · TanStack Query · Vitest · Stryker · GitHub Actions · Netlify · Cloudflare · Auth0',
} as const;

export const connectCopy = {
  blurb: `If you're hiring, looking for a contractor, or just curious about the LearnCraft work, send me an email. I'm available immediately and happy to share what I've learned.`,
  resumeNote: {
    lead: 'typeset in ',
    typstLabel: 'Typst',
    typstUrl: 'https://typst.app/',
    sourceLabel: 'view the source',
  },
} as const;

/** Social rows use icons from `SocialIconSprite`; omit entries you do not use. */
export const socialLinks = [
  { href: person.githubUrl, label: 'GitHub', iconId: 'github-icon' as const },
  { href: person.linkedinUrl, label: 'LinkedIn', iconId: 'linkedin-icon' as const },
] as const;
