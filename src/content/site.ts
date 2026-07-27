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
  title: 'Josiah Moser · Senior Software Engineer · Full-Stack TypeScript',
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
  eyebrow: 'Senior Software Engineer · Full-Stack TypeScript',
  stack: 'TypeScript · React / Solid · Node · PostgreSQL',
  availability: 'Available immediately for full-time or contract work',
  lead: paragraphs`
    I spent five years building the LearnCraft Spanish learning platform, the last four of them as
    Director of Technology, and grew it to over 3,000 monthly learners. I started as the only engineer,
    made the first hire in 2024, and left behind a codebase my successor now runs on his own.

    I built that platform to outlast me. The intent lives in explicit types and schemas instead of in my
    head, and the build fails when someone works around them.
  `,
} as const;

/** The production credibility artifact — given visual weight on the page. */
export const featuredWork = {
  title: 'LearnCraft Spanish',
  role: 'Director of Technology · 2022–2026',
  summary: paragraphs`
    A grammar-based quizzing and student record platform for a language coaching company. I designed
    and built the web stack and ran it in production for five years.
  `,
  highlights: [
    'Strangler-fig migration from an untyped JavaScript monolith to strict TypeScript with hexagonal boundaries, carried out under live traffic with no rewrite, relaunch, or downtime.',
    'Student data locked down with server-enforced roles, JWT-authoritative auth, and Zod validation on everything crossing the wire.',
    'Correctness enforced by tooling rather than by review: a mutation-tested domain core, an architecture checklist that hard-blocks any CI merge that violates it, and lint-enforced boundaries. The patterns are clear enough that AI tools follow them by default.',
  ],
  stats: [
    { value: '~3,000', label: 'monthly active learners' },
    { value: '5 years', label: 'of continuous delivery on one codebase' },
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
    over rapid sprawl. That means encoding human intent in the code itself rather than in documentation
    that drifts away from it. Whoever reads the code next, human or otherwise, should be able to infer
    the right pattern by imitation; no amount of prose does the work that a sound pattern does.

    I learned this by paying for the alternative. I built LearnCraft fast and untyped, and then spent
    years undoing the bottlenecks I had inadvertently introduced. Sound architecture outlasts its
    builders, and I would rather pay for it up front than pay for it twice.

    I work in TypeScript end to end. I care about UI and accessibility, but architecture and systems
    design are where I do my deepest work.
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
