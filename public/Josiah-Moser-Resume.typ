// ============================================================
// RESUME — Cinzel display, Pagella body, two-page layout
// ============================================================

// --- Fonts ---
#let display-font = "Cinzel"
#let body-font = "TeX Gyre Pagella"

// --- Colors ---
#let col-ink     = rgb("#3c3c3c")
#let col-mid     = rgb("#808080")
#let col-light   = rgb("#808080")
#let col-accent  = rgb("#8f3c3c")

// --- Layout ---
#let left-width  = 28%
#let gutter      = 5%
#let right-width = 67%

// ============================================================
// PAGE SETUP
// ============================================================
#set page(
  paper: "us-letter",
  margin: (x: 0.75in, y: 0.5in),
)

#set text(
  font: body-font,
  size: 9.5pt,
  fill: col-ink,
)

// ============================================================
// COMPONENTS
// ============================================================
// Bare hostnames → https for PDF link targets; visible label unchanged.
#let url-href(label) = {
  if (
    label.starts-with("https://")
      or label.starts-with("http://")
      or label.starts-with("mailto:")
  ) {
    label
  } else {
    "https://" + label
  }
}

#let url-link(label) = link(url-href(label))[#label]

#let resume-name(name) = text(
  font: display-font,
  size: 26pt,
  weight: "regular",
  tracking: 2pt,
  fill: col-accent,
)[#name]

#let resume-title(title) = text(
  font: display-font,
  size: 10pt,
  weight: "regular",
  tracking: 1pt,
  fill: col-ink,
)[#upper(title)]

#let contact-row(items) = {
  text(size: 8pt, fill: col-mid)[
    #items.join([  ·  ])
  ]
}

#let section-header(title, size: 10pt) = {
  text(
    font: display-font,
    size: size,
    weight: "regular",
    tracking: 1pt,
    fill: col-accent,
  )[#upper(title)]
}

#let left-header(title)  = {
  line(length: 100%, stroke: 0.5pt + col-light)
  v(-4pt)
  text(section-header(title, size: 9.5pt))
  v(-4pt)
  line(length: 100%, stroke: 0.5pt + col-light)
  v(3pt)
}

#let right-header(title) = [
  #align(center, section-header(title, size: 12pt))
  #v(4pt)
  //#align(center, line(length: 100%, stroke: 0.5pt + col-light))
]

#let exp-entry(
  org: "",
  location: "",
  role: "",
  period: "",
  bullets: (),
  tech: "",
  url: none,
) = {
  grid(
    columns: (1fr, auto),
    text(weight: "bold")[#org],
    text(fill: col-mid, size: 8.5pt)[#location],
  )
  grid(
    columns: (1fr, auto),
    text(style: "italic", size: 9pt)[#role],
    text(fill: col-mid, size: 8.5pt)[#period],
  )
  if url != none {
    v(1pt)
    text(size: 8pt, fill: col-mid)[
      #url-link(url)
    ]
  }
  v(2pt)
  for b in bullets [
    #list(marker: [·], tight: true, spacing: 3pt)[#b]
  ]
  if tech != "" {
    v(1pt)
    text(size: 8pt, fill: col-mid)[
      *Stack:* #text(style: "italic")[#tech]
    ]
  }
  v(4pt)
}

#let project-entry(
  name: "",
  desc: "",
  link: ""
) = {
  text(weight: "bold", size: 8.5pt)[#name]
  linebreak()
  text(size: 8pt, fill: col-mid)[#desc]
  if link != "" {
    text(size: 7.5pt, fill: col-light)[
      #v(-2pt)
      #url-link(link)
    ]
  }
  v(5pt)
}

#let skill-row(label: "", value: "") = {
  text(size: 8pt)[
    #text(weight: "bold")[#label] \
    #text(fill: col-mid)[#value]
  ]
  v(4pt)
}

// Page-two continuation header
#let page-two-header(name) = {
  grid(
    columns: (1fr, auto),
    align: (left, right),
    text(
      font: display-font,
      size: 12pt,
      tracking: 1pt,
      fill: col-accent,
    )[#name],
    text(size: 8pt, fill: col-mid, style: "italic")[page 2],
  )
  v(18pt)
}

// ============================================================
// HEADER — centered
// ============================================================
#set align(center)

#resume-name("Josiah Moser")

#resume-title("SENIOR FULL-STACK ENGINEER · TYPESCRIPT / REACT / NODE")

#contact-row((
  "Tulsa, OK, USA",
  link("mailto:josiah@classicalmoser.dev")[Josiah\@ClassicalMoser.dev],
  link("https://github.com/ClassicalMoser")[GitHub.com/ClassicalMoser],
))

#v(2pt)
#line(length: 100%, stroke: 1pt + col-accent)
#v(8pt)

// ============================================================
// PROFILE — full width, left-aligned
// ============================================================
#text(size: 11pt, style: "italic")[
  Senior full-stack engineer who builds production systems that last. Sole engineer on a platform serving thousands of users for over four years without rewrites or downtime.
]

#v(10pt)

// ============================================================
// TWO-COLUMN BODY — PAGE ONE
// ============================================================
#set align(left)

#grid(
  columns: (left-width, gutter, right-width),

  // ── LEFT COLUMN ──────────────────────────────────────────
  [
    #left-header("Skills")

    #skill-row(
      label: "Languages",
      value: "TypeScript, JavaScript, SQL, some Rust"
    )

    #skill-row(
      label: "Frontend",
      value: "React, TypeScript, Vite, TanStack Query, Next.js, Tailwind, Sass"
    )

    #skill-row(
      label: "Backend",
      value: "Node.js, Express, PostgreSQL, Auth0, Zod, REST, Supabase"
    )

    #skill-row(
      label: "Architecture",
      value: "TDD, Domain Modeling, Hexagonal Architecture, Schema Discrimination, Event Sourcing, Immutability"
    )

    #left-header("Projects")

    #project-entry(
      name: "ESLint Plugin: Import Boundaries",
      desc: "Opinionated ESLint plugin to enforce codebase boundaries with deterministic import pattern. No file I/O, pure AST evaluation. Personal tool, Alpha published on npm.",
      link: "npmjs.com/package/eslint-plugin-import-boundaries"
    )

    #project-entry(
      name: "Prevail: Ancient Battles",
      desc: "Pre-gunpowder tactical wargame rules engine. Stateless, schema-enforced, event-sourced, replayable, version-controllable architecture. Over 1500 tests passing, ~86% mutation score.",
      link: "github.com/ClassicalMoser/prevail-rules"
    )

    #project-entry(
      name: "PortableNote",
      desc: "Open PKM format spec and sample implementation (in-progress). Spec definition with compliance test suite 80% complete. Hexagonal Rust core, Tauri bridge, SolidJS client ongoing.",
      link: "github.com/ClassicalMoser/portablenote"
    )
  ],

  // ── GUTTER ───────────────────────────────────────────────
  [],

  // ── RIGHT COLUMN ─────────────────────────────────────────
  [    
    #right-header("Experience")

    #exp-entry(
      org: "LearnCraft Spanish",
      location: "Tulsa, OK",
      role: "Senior Engineer / Director of Technology",
      period: "2022 – 2026",
      bullets: (
        "Represented Engineering in all leadership meetings, translating technical constraints, tradeoffs, opportunities, and setbacks into non-technical language to support durable long-term goal-setting and prevent bottlenecks.",
        "Revitalized coaching business model with proprietary grammar-based quizzing and student record-keeping platforms. Designed, built, deployed, secured, and maintained full web stack serving approximately 3,000 monthly active learners. Continuously delivered without significant downtime or relaunch for over four years.",
        "Secured student and internal data with strong separation between frontend and backend, server-enforced Role-Based Access Control, JWT-authoritative protection for personally identifying information, and boundary-level Zod validation with fast and explicit rejection.",
        "Eliminated maintenance and new feature bottlenecks by rearchitecting the codebase in place. Accomplished without downtime, rewrite, or feature freeze by using a strangler-fig pattern to migrate codebase from plain JS monolith components and implicit vendor coupling to strictly enforced TypeScript standards, hexagonal ports and adapters, and shared domain definitions across the entire stack.",
        "Automated quality control and behavioral reliability while minimizing developer test- and mock-writing time. Implemented composable test factory pattern using Zod-generated Faker mock data. Default happy-path behavior with optional overrides, applied consistently through the refactored layer, and checked for meaningful assertion daily via scheduled Stryker.js mutation runs.",
        "Developed engineering team standards, led recruiting and interviews with founder, onboarded the first direct hire, and developed collaboration standards for a team designed to scale.",
        "Completed exit strategy from rate-limited no-code data platform that prevented building crucial features. Designed target normalization schema, planned and began trickle migration to owned PostgreSQL, documented and delegated so that migration continues cleanly post-departure.",
        "Established long-term guards against code quality degradation. Documented patterns, boundaries, and architectural decisions rigorously, linked to agentic workflows including automated CI-breaking reviews, and further enforced through custom ESLint rules.",
      ),
      tech: "TypeScript, Node, Zod, React.js, Express.js, Auth0, Vite, Vitest, Stryker.js, TanStack Query",
      url: "github.com/LearnCraft-Spanish/learncraft-spanish",
    )
  ]
)

// ============================================================
// PAGE BREAK
// ============================================================
#pagebreak()

// ============================================================
// PAGE TWO
// ============================================================
#page-two-header("Josiah Moser")

#grid(
  columns: (left-width, gutter, right-width),

  // ── LEFT COLUMN (page 2) ─────────────────────────────────
  [
    #left-header("Education")

    #text(size: 8.5pt)[
      *The University of Tulsa* \
      #text(fill: col-mid, size: 8pt)[BA Music] \
      #text(fill: col-mid, size: 8pt)[BA Arts Management] \
      #text(fill: col-mid, size: 8pt)[Minor in Advertising] \
      #text(fill: col-mid, size: 8pt, style: "italic")[2017]
    ]

    #left-header("Additional")

    #text(size: 8pt, fill: col-mid)[
      Internships in nonprofit management and arts administration, including web development and communications (2015–2017)
    ]
  ],

  [],

  // ── RIGHT COLUMN (page 2) ────────────────────────────────
  [
    #right-header("Experience (continued)")

    #exp-entry(
      org: "LearnCraft Spanish",
      location: "Tulsa, OK",
      role: "Integrator (Head of Business Operations)",
      period: "2017 – 2021",
      bullets: (
        "Worked closely with founder to translate vision into executable plans across technical and operational domains.",
        "Championed and led company-wide adoption of EOS/Traction operating model, securing founder buy-in and driving implementation across the leadership team over twelve months.",
        "Scaled a healthy global, remote team from 6 to 25 permanent members while owning internal structure, process, and institutional memory.",
        "Centralized and standardized documentation of core SOPs to reduce institutional fragility and support sustainable growth.",
        "Engineered and managed internal record-keeping processes and tools, including relational databases and virtual collaboration practices.",
        "Created and managed automated systems for payment processing, student onboarding and offboarding, business metric collection and display, and email communications.",
        "Ensured operational consistency to support 40% revenue growth year-over-year during my entire tenure."
      ),
      tech: "Zapier, AirTable, QuickBase, EOS/Traction, WordPress, ConvertKit"
    )

    #exp-entry(
      org: "LearnCraft Spanish",
      location: "Tulsa, OK",
      role: "Creative Consultant",
      period: "2014 – 2017",
      bullets: (
        "Contributed to early brand identity, graphic design, and web presence during the company's founding years.",
      ),
      tech: ""
    )
  ]
)
