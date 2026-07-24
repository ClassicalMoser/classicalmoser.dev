// ============================================================
// SHARED LIBRARY — components + fixed content
// ============================================================

#let display-font = "Cinzel"
#let body-font = "TeX Gyre Pagella"

#let col-ink     = rgb("#3c3c3c")
#let col-mid     = rgb("#808080")
#let col-light   = rgb("#808080")
#let col-accent  = rgb("#8f3c3c")

#let left-width  = 28%
#let gutter      = 5%

#let right-width = 67%

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
]

#let exp-entry(
  org: "",
  location: "",
  tenure: none,
  role: "",
  period: "",
  bullets: (),
  tech: "",
  url: none,
) = {
  grid(
    columns: (1fr, auto),
    {
      text(weight: "bold")[#org]
      if tenure != none {
        text(fill: col-mid, size: 8.5pt)[  ·  #tenure]
      }
    },
    text(fill: col-mid, size: 8.5pt)[#location],
  )
  grid(
    columns: (1fr, auto),
    text(style: "italic", size: 9pt)[#role],
    text(fill: col-mid, size: 8.5pt)[#period],
  )
  if url != none {
    let urls = if type(url) == array { url } else { (url,) }
    v(1pt)
    for u in urls {
      text(size: 8pt, fill: col-mid)[#url-link(u)]
      linebreak()
    }
  }
  v(2pt)
  for b in bullets [
    #list(marker: [·], tight: true, spacing: 4pt)[#b]
  ]
  if tech != "" {
    v(1pt)
    text(size: 8pt, fill: col-mid)[
      *Stack:* #text(style: "italic")[#tech]
    ]
  }
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
  v(3pt)
}

#let skill-row(label: "", value: "") = {
  text(size: 8pt)[
    #text(weight: "bold")[#label] \
    #text(fill: col-mid)[#value]
  ]
  v(3pt)
}

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
// SOFTWARE ENGINEER RESUME — authoritative
// All copy lives in this file. lib.typ holds components only.
// ============================================================

#set page(paper: "us-letter", margin: (x: 0.75in, y: 0.5in))
#set text(font: body-font, size: 9.8pt, fill: col-ink, hyphenate: false)

// ---------- Header ----------

#align(center)[
  #resume-name("Josiah Moser")
  #v(2pt)
  #resume-title("Senior Software Engineer · Full-Stack TypeScript · React · Node")
  #v(3pt)
  #contact-row((
    [Tulsa, OK],
    link("mailto:josiah@classicalmoser.dev")[Josiah\@ClassicalMoser.dev],
    link("https://classicalmoser.dev")[ClassicalMoser.dev],
    link("https://github.com/ClassicalMoser")[GitHub.com/ClassicalMoser],
    link("https://www.linkedin.com/in/josiah-moser/")[LinkedIn.com/in/Josiah-Moser],
  ))
  #v(6pt)
  #line(length: 100%, stroke: 1pt + col-accent)
]

#v(12pt)

// ---------- Summary ----------

#pad(x: 6%, text(size: 11.5pt, style: "italic")[
  Senior full-stack engineer. Built and owned a production platform for five
  years at an online language school, serving \~3,000 monthly learners with no
  rewrite, relaunch, or significant downtime. Made AI-assisted development safe
  to ship by enforcing correctness in tooling, then documented it so the work
  continued after I left.
])

#v(10pt)

// ---------- Page one ----------

#grid(
  columns: (left-width, gutter, right-width),
  [
    #left-header("Skills")
    #skill-row(label: "Languages", value: "TypeScript, JavaScript, SQL")
    #skill-row(label: "Frontend", value: "React, Vite, TanStack Query, Next.js, Tailwind, shadcn/ui")
    #skill-row(label: "Backend", value: "Node.js, Express, PostgreSQL, REST APIs, Zod, Auth0, Supabase")
    #skill-row(label: "Architecture", value: "Domain Modeling, Hexagonal Architecture, TDD, Event Sourcing")
    #skill-row(label: "Testing & CI", value: "Vitest, Stryker.js mutation testing, custom ESLint rules, GitHub Actions")
    #skill-row(label: "Platform & Observability", value: "Heroku, Google Cloud Functions, Amazon S3, Cloudflare R2, Sentry")
    #skill-row(label: "AI Workflow", value: "Claude Code, agent-guided PR review, spec-driven development")

    #left-header("Projects")
    #project-entry(
      name: "ESLint Plugin: Import Boundaries",
      desc: "Opinionated ESLint plugin enforcing codebase boundaries with deterministic import patterns. Pure AST evaluation, no file I/O. Published on npm.",
      link: "npmjs.com/package/eslint-plugin-import-boundaries",
    )
    #project-entry(
      name: "Prevail: Ancient Battles",
      desc: "Pre-gunpowder tactical wargame rules engine. Stateless, schema-enforced, event-sourced, replayable. 1,500+ tests, ~86% mutation score.",
      link: "github.com/ClassicalMoser/prevail-rules",
    )
  ],
  [],
  [
    #right-header("Experience")
    #exp-entry(
      org: "LearnCraft Spanish",
      location: "Tulsa, OK",
      tenure: "2017 – 2026",
      role: "Director of Technology",
      period: "2022 – 2026",
      url: (
        "classicalmoser.dev/work/learncraft-spanish",
        "github.com/LearnCraft-Spanish/learncraft-spanish",
      ),
      tech: "TypeScript, Node, Zod, React.js, Express.js, Auth0, Vite, Vitest, Stryker.js, TanStack Query",
      bullets: (
        "Owned the full-stack quizzing and student record platform through its growth to ~3,000 monthly active learners, as sole on-call for production. Continuous delivery with no rewrite, relaunch, or significant downtime. 78% of 205 surveyed users would be very disappointed to lose it, against a 40% benchmark.",
        "Rearchitected in place instead of rewriting. Strangler-fig migration from an untyped JS monolith with implicit vendor coupling to strict TypeScript, hexagonal ports and adapters, and shared domain definitions across the stack. No downtime, no feature freeze.",
        "Moved correctness into tooling so AI-assisted development was safe to ship. Custom ESLint rules on architectural boundaries, a Claude Code CI workflow that hard-blocks merges failing an architecture checklist, scheduled Stryker.js mutation runs, and test factories generated from the Zod schemas that validate at runtime.",
        "Served as the sole engineering voice in company leadership, translating technical tradeoffs into business terms and turning business constraints into architectural decisions.",
        "Led recruiting and interviews with the founder, onboarded the first engineering hire, and wrote the decision records and review checklists that let one engineer finish the migration cleanly after my departure.",
        "Exited a rate-limited no-code data platform that blocked crucial features. Designed the normalization schema and a trickle migration to owned PostgreSQL that ran without interrupting delivery.",
        "Secured student and internal data with strong frontend and backend separation, server-enforced role-based access control, JWT-authoritative protection for personally identifying information, and boundary-level Zod validation.",
      ),
    )
  ],
)

#pagebreak()

// ---------- Page two ----------

#page-two-header("Josiah Moser")

#grid(
  columns: (left-width, gutter, right-width),
  [
    #left-header("Projects (cont.)")
    #project-entry(
      name: "PortableNote",
      desc: "Open PKM format spec with compliance test suite. Hexagonal Rust core, Tauri bridge, SolidJS client.",
      link: "github.com/ClassicalMoser/portablenote",
    )

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
      Internships in nonprofit management and arts administration, including web
      development and communications (2015–2017)
    ]
  ],
  [],
  [
    #right-header("Experience (continued)")
    #exp-entry(
      org: "LearnCraft Spanish",
      location: "Tulsa, OK",
      role: "Integrator (Head of Business Operations)",
      period: "2017 – 2021",
      tech: "Zapier, AirTable, QuickBase, EOS/Traction, WordPress, ConvertKit",
      bullets: (
        "Scaled a fully remote team from 6 to 25 across ten countries and three continents while owning internal structure, process, and institutional memory.",
        "Built out the leadership and middle management layers the company needed to keep delivering as headcount quadrupled.",
        "Led company-wide adoption of the EOS/Traction operating model, securing founder buy-in and driving implementation across the leadership team over twelve months.",
        "Hired, onboarded, and trained staff, and established the quality control measures that held delivery consistent as the team grew.",
        "Centralized and standardized documentation of core SOPs to reduce institutional fragility.",
        "Built the record-keeping, payment processing, onboarding, and business metrics automation the company ran on, and designed the relational data structures underneath it.",
        "Hit the ceiling of no-code tooling, taught myself to code, and shipped the first production version of the quizzing platform.",
        "Supported organic growth from six to seven figures at 40% year over year.",
      ),
    )
  ],
)
