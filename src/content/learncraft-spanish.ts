/**
 * LearnCraft Spanish case study. Expand sections in place as the story grows.
 */

export const learncraftSpanishPath = '/work/learncraft-spanish' as const;

export const learncraftSpanishMeta = {
  title: 'LearnCraft Spanish · Josiah Moser',
  description:
    'How I built and ran the LearnCraft Spanish quizzing platform: four years of continuous delivery, a strangler-fig migration to typed hexagonal architecture, and a handoff clean enough that my successor runs it solo.',
} as const;

export const learncraftSpanish = {
  eyebrow: 'Featured work',
  title: 'Building the LearnCraft Spanish Quizzing App',
  role: 'Director of Technology · 2022–2026',
  lead: 'I built the first version of this app while running operations for the company, taught myself to code along the way, and spent four years as Director of Technology shipping it to about 3,000 monthly learners. This page tells that story, with walkthrough videos and the public repo.',
  sections: [
    {
      title: 'Background',
      body: [
        'I joined LearnCraft Spanish long before I was an engineer: first as a creative consultant in the founding years, then running business operations from 2017 to 2021. I built the SOPs, hired and trained staff, designed the record-keeping, and set up the systems that let a small language school grow past its founder’s bandwidth — revenue grew from six figures to seven in that stretch.',
        'The company’s ideas kept outrunning its tools. The founder wanted a quizzing system that could target specific grammar skills per student, and nothing in our no-code stack could express it. So I learned to code, because that was the only way to build it.',
      ],
    },
    {
      title: 'The first version',
      body: [
        'The first version let students collect flashcards and drill them with spaced repetition, using exponential backoff adjusted by self-reported difficulty. Visual and audio flashcards were generated from the same dataset, and example sentences were tailored per lesson. An advanced search by grammatical item existed first for coaches, who used it to target specific skills in one-on-one sessions before it ever reached students directly.',
        'From day one the app used Auth0 for authentication and kept frontend and backend in separate repositories with a strict boundary between them. I made that call before I fully understood why it mattered, and it shaped everything that came after.',
      ],
      videos: [
        {
          href: 'https://www.youtube.com/watch?v=J_9ASvrqBYw',
          title: 'Main App Walkthrough, Feb 2025',
        },
      ],
    },
    {
      title: 'Where it broke down',
      body: [
        'The early version was mine too, no-code stopgaps and all. It worked well enough to show exactly where it would break next.',
        'The data lived in Quickbase, a no-code database that isn’t really relational and can’t summarize a lookup. Student records sat in a completely separate database from the vocabulary and example data, so the frontend pulled everything in and did the joins itself. That meant monolithic components wired together with useEffect, no TypeScript to catch the resulting runtime errors, and almost no tests to catch anything else. Past a certain point, the features the founder wanted were structurally impossible on that foundation.',
        'Quickbase was also rate-limited and had outages of its own. Our stack never went down on its own account in four years, but there were midnight hours when the vendor’s downtime made the app effectively unusable. Owning our data became the obvious next step, and the architecture had to be ready for it.',
      ],
    },
    {
      title: 'The rebuild',
      body: [
        'I rearchitected the system in place, without stopping feature delivery, in roughly this sequence:',
      ],
      steps: [
        'TypeScript across the entire codebase, in about two months',
        'Isolation of business logic from infrastructure and UI',
        'Explicit domain modeling',
        'Ports and adapters at every boundary',
        'Test fixtures',
        'A shared domain package for types, schemas, and cross-cutting functions like filters and mappers',
        'Unit tests backed by mock factories',
        'Zod validation on everything crossing the wire',
        'A full hexagonal architecture, arrived at through a strangler-fig migration rather than a rewrite',
        'Mutation testing, to measure whether the test suite actually meant anything',
      ],
      afterList: ['The full commit history is public.'],
      links: [
        {
          href: 'https://github.com/LearnCraft-Spanish/learncraft-spanish',
          label: 'Frontend repository',
        },
      ],
    },
    {
      title: 'Running it as a team',
      body: [
        'Once the architecture held, the discipline could be written down and enforced. Test coverage standards and PR checklists. Boundary rules in the linter, so violations fail CI instead of waiting for review. Architecture decision records for the choices that needed a paper trail. Conventional commits, branch protections, and markdown documentation thorough enough that agentic tooling now works against the codebase directly.',
        'In 2024 I ran recruiting alongside the founder and onboarded our first engineering hire. The same documentation that onboarded him is what let me leave cleanly: he runs the platform on his own today, and the migration from Quickbase to our own PostgreSQL continues on the plan I documented before departing.',
      ],
      videos: [
        {
          href: 'https://www.youtube.com/watch?v=A1MgjOCPQlQ',
          title: 'Powerful New Features, Oct 2025',
        },
      ],
    },
    {
      title: 'Where it stands',
      body: [
        'In a survey of 205 users, 78% said they would be “very disappointed” to lose the product. (The common product-market-fit benchmark for that question is 40%.) The platform has run for four years without a rewrite or a relaunch, and every architectural shift happened underneath live traffic, one boundary at a time, while the product kept shipping.',
        'The UI shows its age in places. The investment went into the parts that made the product dependable for students and easy to hand off, and I would make the same trade again.',
      ],
      links: [
        {
          href: 'https://app.learncraftspanish.com',
          label: 'Live site',
        },
      ],
    },
  ],
} as const;
