/**
 * LearnCraft Spanish case study. Expand sections in place as the story grows.
 * Long prose uses `paragraphs` so copy can soft-wrap in source.
 */

import { paragraphs } from './paragraphs';

export const learncraftSpanishPath = '/work/learncraft-spanish' as const;

export const learncraftSpanishMeta = {
  title: 'LearnCraft Spanish · Josiah Moser',
  description:
    'Four years serving ~3,000 monthly learners: how a live strangler-fig migration to typed hexagonal architecture happened under traffic, and the verification layer that made it safe.',
} as const;

export const learncraftSpanish = {
  eyebrow: 'Featured work',
  title: 'LearnCraft Spanish Quizzing App',
  lead: paragraphs`
    I didn't come from an engineering background. In 2017, I had the opportunity to help my
    brother Timothy Moser get his fledgling premium Spanish coaching business off the ground, establishing
    the systems, tools, workflows, structures, and automations that allowed it to scale from six to
    seven figures in annual revenue.
    
    As the business grew, we realized more and more that the technology was holding us back,
    not only for our internal processes, but for the learning experience itself.
    Starting in 2021, I taught myself how to code in order to build out the features we needed to
    support the uniquely rigorous learning experience that our students had come to expect from us.

    Over the course of five years, this platform grew from a small and scrappy internal
    tool to a full, robust, scalable and agent-equipped production platform with over 3,000 monthly active users,
    scoring a 78% PMF score (Sean Ellis's Product-Market-Fit metric) and an NPS score over 70. We managed to adapt
    and mature the codebase without a single ground-up rewrite or lights-out migration. Every architectural
    shift happened underneath live traffic, one vertical slice at a time, while the product kept shipping.
  `,
  sections: [
    {
      title: 'Background',
      body: paragraphs`
        LearnCraft Spanish is a premium Spanish coaching business focused on genuine
        fluency for adult learners. It has always been unapologetically grammar-focused,
        targeting motivated English speakers who want to do the hard work it takes to 
        be able to connect meaningfully with the native Spanish speakers in their daily lives.

        Since the company was established in 2014, I had helped out part-time with early messaging,
        brand differentiation, and design work. I was brought on full-time in 2017 as head of business
        so that Timothy could focus on creative and pedagogical improvements. Over the next four years,
        I built out the record-keeping systems, established SOPs and quality control measures, hired and
        onboarded staff, organized the leadership and middle management layers, and increasingly, leaned
        on proprietary no-code software solutions to handle the growing volume of data and workflows.
      `,
      links: [
        {
          href: 'https://www.learncraftspanish.com',
          label: 'LearnCraft Spanish',
        },
      ],
    },
    {
      title: 'Early Quizzing App',
      body: paragraphs`
        The company's ideas kept outrunning its tools. Timothy had long envisioned a quizzing tool
        that would allow us to save a bank of sentence examples in English and Spanish, tagged by
        their specific vocabulary and grammatical concepts. Originally the intent was to assist our
        native-speaking coaches in their one-on-one sessions, but we quickly realized that students
        would benefit as well if they could use it directly.

        We were able to use our existing no-code data platform to prototype a structure for tagging
        sentence examples, but none of our tools could filter, collect, or display them in a way that
        would be useful for our coaches or students.

        Around 2021, I started teaching myself how to code, both to support, extend, and integrate our
        existing tools and to develop the capacity to build any new ones we would need. One of our
        students helped rig up a simple React app that could pull the data from the API and filter
        the examples with JavaScript. It was a single component, but already enough to be useful, and
        from there we were hooked.

        I took the proof of concept and began building it out. We created a full stack with a strong
        separation between frontend and backend, used Auth0 for authentication with role-based access
        control, and deployed it to a custom domain. Eventually, our students were able to search our
        examples by specific vocabulary words, add them to a personal collection, and review them with
        a spaced repetition system that would increase or decrease the review interval based on their
        self-reported difficulty rating. We also added curated sets for each published lesson, and soon
        created audio-first reviews as well.

        (The video below is actually from February of 2025, so it shows more functionality than we had
        at this point.)
      `,
      videos: [
        {
          href: 'https://www.youtube.com/watch?v=J_9ASvrqBYw',
          title: 'Main App Walkthrough, Feb 2025',
        },
      ],
    },
    {
      title: 'Bottlenecks',
      body: paragraphs`
        With every new feature we added, the cracks in our system showed more and more clearly. It
        turns out that building a public-facing product on top of a rate-limited API that can only
        join tables via lookup and summary fields isn't a good long-term data strategy. Our data
        platform was able to express the relationships we needed, but it wasn't designed to query
        across multiple tables at once. My workaround solution had been to pull large data sets and
        cross-reference records by ID directly in the browser.

        I also noticed more and more bugs and repetition creeping into the codebase.
        Originally I had built very quickly, using plain JavaScript and React, and most of the logic
        was written directly inside the monolithic components. This meant a lot of duplication, more
        places to check when a new feature was added, and more surface area for bugs to creep in.

        In the meantime, student records, which were increasingly being reviewed and updated through
        the admin side of the same app, sat in a completely separate database from the
        vocabulary and example data, so integrating the student's quizzing data with their coaching
        sessions was completely impossible. As the user base grew, we became increasingly concerned
        about the vendor's uptime and the API rate limit. We knew we needed to migrate to a proper
        database solution.

        The deeper challenge was that I had been building everything more tightly coupled to the existing
        data platform than I realized, and even if we could have migrated the data, the queries scattered
        throughout the codebase, the proprietary syntax, and other vendor-specific details would have
        prevented us from using it.

        I had to either accept the limitations and compounding technical debt, rewrite the entire app
        from scratch (freezing all features until the whole migration was completed), or find a way to
        change the code and the data dependencies incrementally under live traffic.        
      `,
    },
    {
      title: 'Expanding the team',
      body: paragraphs`
        It was clear that the path ahead of us would require more than just my full-time effort. Even
        if we could find a way to mature the codebase and migrate the data without blocking features,
        there was no way I would have time to pursue both new feature development and migration.

        We started recruiting for a full-time engineer to help me with the work, and in late 2024,
        we were able to find a great fit in Blake Willis, a graduate of the Atlas School program.
        
        Adjusting the workflows and coding practices for collaboration was another exciting challenge
        for me, since I had been working solo for so long. We quickly realized that we needed clearer
        quality control and monitoring practices to hold our work to a high standard.

        All of these factors converged in some very deep and thoughtful technical discussions between
        the two of us and the company leadership, and we ended up with all of the quality and observability
        metrics we needed, plus a new strategic plan.
      `,
    },
    {
      title: 'The rebuild, in place',
      body: paragraphs`
        I had started rolling out TypeScript in early 2024, the first move in what became a much longer plan.
        My intention was to complete the rearchitecture-in-place with the lights on the full time, and to get it
        done the right way so that it would never have to be done again.

        Early on, the process started in one direction and then had to double back when the result either
        wasn't rigorous enough for long-term maintainability, or ended up adding more indirection than value.

        In the end, we accomplished the following:
      `,
      steps: [
        'TypeScript across the entire codebase',
        'Explicit domain modeling',
        'Isolation of business logic from infrastructure and UI',
        'A shared domain package for types, schemas, and cross-cutting functions like filters and mappers',
        'Ports and adapters at every boundary',
        'Zod validation on everything crossing the wire',
        'Composable test fixtures',
        'Unit tests backed by mock factories (from the same zod schemas)',
        'Mutation testing, to measure whether test assertions are meaningful',
        'Documentation of boundary rules and dependency directions, and linter rules to enforce them',
      ],
    },
    {
      title: 'Potential unlocked',
      body: paragraphs`
        As the core chunks of business logic were isolated and extracted, we found that we could
        recombine some of our existing logic to unlock specific functionalities that had been intended
        since early in the project, but were previously impossible due to both the data handling we had
        formerly implemented and the poor codebase isolation.

        After reworking the core filtering and quizzing logic, we were able to implement a completely
        customized quizzing interface that allows students to quiz any arbitrary vocabulary words, parts
        of speech, verb conjugations, and more, with the certainty that all the vocabulary will be
        fully within what they have already learned. Due to the shared domain logic, this could be done
        in both flashcard and audio quizzing modes.

        Data handling had been moved entirely to the backend, and queries could be shuffled with a seed
        for server-side pagination while preserving the same randomized order. A server-side cache was
        also implemented to reduce the rate-limit impact while the data was preparing for migration.
      `,
      videos: [
        {
          href: 'https://www.youtube.com/watch?v=A1MgjOCPQlQ',
          title: 'Powerful New Features, Oct 2025',
        },
      ],
    },
    {
      title: 'The handoff',
      body: paragraphs`
        At the end of 2025, I determined that I was ready to move on from LearnCraft Spanish. A new
        opportunity had presented itself, and I was ready to take the next step in my career.

        My final months were spent preparing the codebase for long-term continuation by Blake and any
        future engineers, as well as for the increasing impact of AI tools on the codebase. One
        positive outcome of the restructuring was that the codebase patterns and practices were
        clear enough that AI tools imitating their surroundings would naturally follow our best
        practices, and we were able to leverage them more and more effectively through 2025 and beyond.

        To prevent drift or further regressions, I completed a thorough documentation of the specific
        architectural decisions and testing patterns that we had developed, as well as the full PR review
        process and completion checklist. Boundaries and dependency directions were documented in clearer
        detail and brought up to current practice, and the linter rules were updated to enforce them.
        I also wrote a CI workflow for Claude Code to run a PR audit against a specific checklist and hard
        block merges on failing reviews.

        The frontend repository has always been kept public, so feel free to see for yourself:
      `,
      links: [
        {
          href: 'https://github.com/LearnCraft-Spanish/learncraft-spanish',
          label: 'Frontend repository',
        },
      ],
    },
    {
      title: 'Where it stands',
      body: paragraphs`
        The slow-moving migrations have finished their course in the time since I left, and the
        data is finally safe in an owned PostgreSQL database. The team continues to ship new features
        and improve the product, and public-facing functionality is completely in the new architecture.

        The app has also significantly increased the lifetime value of the LearnCraft Spanish customers.
        In a survey of 205 users, 78% said they would be “very disappointed” to
        lose the product (the traditional Sean Ellis PMF benchmark is 40%), and it is regularly
        mentioned directly in student reviews and surveys.

        While most of the functionality is available only through the coaching program, the
        quizzes for the public courses are available to use for free:
      `,
      links: [
        {
          href: 'https://app.learncraftspanish.com',
          label: 'Live app',
        },
      ],
    },
  ],
} as const;
