# AGENTS.md

Drop-in operating instructions for coding agents. Read this file before every task.

**Working code only. Finish the job. Plausibility is not correctness.**

Follows the [AGENTS.md](https://agents.md) open standard. To support other tools:

```bash
ln -s AGENTS.md CLAUDE.md
ln -s AGENTS.md GEMINI.md
```

---

## 0. Non-negotiables

Override everything else when in conflict:

1. **No flattery, no filler.** Skip "Great question", "I'd be happy to". Start with the answer or the action.
2. **Disagree when you disagree.** Say so before doing the work.
3. **Never fabricate.** Not file paths, not API names, not test results. Read the file, run the command, or say "I don't know, let me check."
4. **Stop when confused.** Two plausible interpretations → ask. Do not pick silently.
5. **Touch only what you must.** Every changed line traces to the user's request. No drive-by refactors.
6. **No typecasts. Never use `as`.** Fix the type at the source. If the type is wrong, fix the definition — not the call site.

---

## 1. Before writing code

- State your plan in one or two sentences before editing.
- Read files you will touch AND the files that call them.
- Match existing patterns. If the project uses pattern X, use X.
- Surface assumptions: "I'm assuming X. If wrong, say so."
- **Read `DESIGN.md` before touching any UI file.** See section 8.
- **Read `CASE.md` before starting any feature.** The full specification lives there.

---

## 2. Writing code: simplicity first

- No features beyond what was asked.
- No abstractions for single-use code.
- No error handling for impossible scenarios.
- If it runs 200 lines and could be 50, rewrite it first.
- Bias toward deleting code over adding.

The test: would a senior engineer call this overcomplicated? If yes, simplify.

---

## 3. Surgical changes

- Do not "improve" adjacent code, formatting, or imports not part of the task.
- Do not refactor working code just because you are in the file.
- Do clean up orphans your own edit created (unused imports, dead variables).
- Match the project's style exactly: indentation, quotes, naming, file layout.

The test: every changed line traces to the user's request. If a line fails that test, revert it.

---

## 4. Goal-driven execution

Rewrite vague asks into verifiable goals before starting:

- "Add validation" → "Write tests for invalid inputs, then make them pass."
- "Fix the bug" → "Write a failing test that reproduces it, then make it pass."
- "Refactor X" → "Test suite passes before and after, no public API changes."

For every task:
1. State success criteria before writing code.
2. Write the verification (test, script, screenshot diff).
3. Run it. Read the output. Never claim success without checking.
4. If it fails, fix the cause — not the test.

---

## 5. Tool use and verification

- Run code instead of guessing. Test suite exists → run it. Linter exists → run it.
- Never report "done" based on a plausible-looking diff. Plausibility is not correctness.
- For UI changes: screenshot before, screenshot after, describe the diff.
- When reading logs or stack traces, read the whole thing. Half-read traces produce wrong fixes.

---

## 6. Session hygiene

- After two failed corrections on the same issue, stop. Summarize what you learned and ask to reset.
- Use subagents for exploration so the main context stays clean.
- Commit messages: subject under 72 chars, body explains the why. No "fix bug" or "update file" commits.

---

## 7. Communication style

- Direct, not diplomatic. "This won't work because X" beats "have you considered...".
- Two or three short paragraphs unless asked for depth.
- Clear answer → give it. No answer → say so, give tradeoffs.

---

## 8. DESIGN.md — required for all UI work

`DESIGN.md` is the single source of truth for visual decisions. **Read it before touching any UI file.**

It defines:
- Color palette and CSS variable names
- Typography: font families, scale, weights
- Spacing system and breakpoints (375 / 768 / 1024 / 1440px)
- Component patterns: cards, buttons, forms, modals, badges, tabs, accordions
- Dark/light theme tokens
- Icon set and usage rules
- Motion: allowed durations, easing, animation guidelines (Framer Motion)
- Aesthetic direction: modern corporate IT, dark or light theme

**Rules:**
- Never hardcode colors, font sizes, or spacing. Use the CSS variables / Tailwind tokens defined in `DESIGN.md`.
- If `DESIGN.md` does not cover the component you're building, extend it first — add the spec, then implement.
- When the user says "update the design", update `DESIGN.md` first, then propagate to code.
- `DESIGN.md` and the actual UI must stay in sync. Drift is a bug.

---

## 9. CASE.md — full product specification

The complete technical specification for this project lives in `CASE.md`.

Read it before implementing any page, section, component, or feature. It contains:
- All pages and their block-by-block structure (sections 3–8)
- All copy, pricing data, FAQ content, portfolio projects, testimonials
- Calculator logic with exact pricing rules (section 10.3)
- Form fields and validation requirements (section 10.1)
- SEO requirements per page (section 13)
- Adaptive breakpoints: 375 / 768 / 1024 / 1440px (section 10.4)
- Acceptance criteria (section 15)
- Optional enhancement features (section 16)

When in doubt about what a feature should do — check `CASE.md` first before asking.

---

## 10. Project architecture

### Overview

Multi-page marketing and portfolio site for an IT outsourcing company. Six public routes plus per-case sub-routes, a pricing calculator, contact forms with validation. No real backend in the base version — form submissions are handled client-side with a success state. All content lives in typed local data files.

### Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript — `strict: true`, zero `as` casts |
| Styling | Tailwind CSS with custom design tokens (see `DESIGN.md`) |
| Animation | Framer Motion — scroll reveals, hover states, page transitions |
| Forms | React Hook Form + Zod |
| Package manager | pnpm |
| Deployment | Vercel |

### Repository layout

```
/
├── AGENTS.md                        # This file
├── DESIGN.md                        # Visual source of truth — read before any UI work
├── CASE.md                          # Full product specification — read before any feature
├── README.md                        # Setup, run, deploy
│
├── public/
│   ├── images/
│   │   ├── portfolio/               # Project screenshots (one subfolder per case slug)
│   │   └── team/                    # Team member photos
│   ├── icons/                       # SVG icons used outside components
│   ├── sitemap.xml
│   └── robots.txt
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # Root layout: fonts, theme provider, Header, Footer
│   │   ├── page.tsx                 # / — Home (long-scroll, all section previews)
│   │   ├── services/
│   │   │   └── page.tsx             # /services — Full services listing
│   │   ├── pricing/
│   │   │   └── page.tsx             # /pricing — Packages + price table + calculator
│   │   ├── portfolio/
│   │   │   ├── page.tsx             # /portfolio — Grid with category filter
│   │   │   └── [slug]/
│   │   │       └── page.tsx         # /portfolio/:slug — Individual case page
│   │   ├── about/
│   │   │   └── page.tsx             # /about — Company, team, values, stats
│   │   ├── contacts/
│   │   │   └── page.tsx             # /contacts — Form, map placeholder, details
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts         # POST /api/contact — optional email handler
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Sticky nav, mobile burger menu, CTA button
│   │   │   └── Footer.tsx           # Links, contacts, socials, copyright
│   │   │
│   │   ├── ui/                      # Primitives — no business logic, no data imports
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── Accordion.tsx        # Used for FAQ section
│   │   │   ├── Tag.tsx              # Technology tags on portfolio cards
│   │   │   └── SectionTitle.tsx
│   │   │
│   │   └── sections/                # Page-level sections, composed from ui/ primitives
│   │       ├── home/
│   │       │   ├── Hero.tsx
│   │       │   ├── AboutPreview.tsx
│   │       │   ├── ServicesPreview.tsx
│   │       │   ├── Packages.tsx
│   │       │   ├── PriceTable.tsx
│   │       │   ├── HowWeWork.tsx
│   │       │   ├── PortfolioPreview.tsx
│   │       │   ├── WhyUs.tsx
│   │       │   ├── TechStack.tsx
│   │       │   ├── Testimonials.tsx
│   │       │   ├── FAQ.tsx
│   │       │   └── ContactForm.tsx
│   │       ├── services/
│   │       │   └── ServiceDetail.tsx
│   │       ├── pricing/
│   │       │   └── Calculator.tsx   # Pure view — all logic in useCalculator hook
│   │       ├── portfolio/
│   │       │   ├── PortfolioGrid.tsx
│   │       │   ├── CategoryFilter.tsx
│   │       │   └── CaseDetail.tsx
│   │       └── about/
│   │           ├── TeamGrid.tsx
│   │           └── Stats.tsx
│   │
│   ├── data/                        # All content — no hardcoded strings in components
│   │   ├── services.ts              # 20 services with descriptions, prices, inclusions
│   │   ├── packages.ts              # 4 pricing packages
│   │   ├── portfolio.ts             # 6+ projects with slugs, tags, screenshots, case text
│   │   ├── testimonials.ts          # 3–5 client reviews
│   │   ├── faq.ts                   # 10 FAQ entries
│   │   ├── team.ts                  # Team members
│   │   ├── techStack.ts             # Technologies grouped by category
│   │   └── calculator.ts            # Base prices and add-on costs
│   │
│   ├── lib/
│   │   ├── schemas/
│   │   │   └── contact.ts           # Zod schema for contact form
│   │   └── utils.ts                 # cn(), formatPrice(), slugify() — pure functions only
│   │
│   ├── hooks/
│   │   ├── useScrollReveal.ts       # Framer Motion scroll-triggered reveal hook
│   │   ├── useCalculator.ts         # Options → computed price; all calculator logic here
│   │   └── usePortfolioFilter.ts    # Active category → filtered projects list
│   │
│   └── types/
│       ├── service.ts
│       ├── portfolio.ts
│       ├── package.ts
│       └── contact.ts
│
├── tailwind.config.ts               # Extends default theme with tokens from DESIGN.md
├── next.config.ts
├── tsconfig.json                    # strict: true — do not weaken
└── package.json
```

### Data flow rules

These are architectural invariants. Do not break them:

- **Content never lives in components.** All copy, prices, descriptions come from `src/data/`. Components receive typed props and render.
- **Calculator logic lives in `useCalculator.ts` only.** `Calculator.tsx` is a pure view — it calls the hook and renders.
- **Portfolio filtering lives in `usePortfolioFilter.ts` only.** `CategoryFilter.tsx` and `PortfolioGrid.tsx` are pure views.
- **All Zod schemas live in `src/lib/schemas/`.** Never inline validation schemas inside components or hooks.
- **Hooks own all state and side effects.** Components do not call `fetch` directly.
- **No inline styles.** Tailwind utility classes or CSS variables from `DESIGN.md` only.

### Pages and their data sources

| Route | Data sources |
|-------|-------------|
| `/` | All data files (preview / summary mode) |
| `/services` | `services.ts` |
| `/pricing` | `packages.ts`, `services.ts`, `calculator.ts` |
| `/portfolio` | `portfolio.ts` (all projects) |
| `/portfolio/[slug]` | `portfolio.ts` (single project by slug) |
| `/about` | `team.ts` |
| `/contacts` | — |

### SEO

Every page exports `generateMetadata()`. Required fields: `title`, `description`, `openGraph.title`, `openGraph.description`, `openGraph.url`. Every `<Image>` and `<img>` has a meaningful `alt`. URLs follow the slug pattern in `CASE.md` section 13.

### Routing conventions

```
/                          Home
/services                  All services
/pricing                   Packages, price table, calculator
/portfolio                 Project grid with filter
/portfolio/[slug]          Individual case study
/about                     Company page
/contacts                  Contact page
```

---

## 11. Code standards

- **Never typecast. Never use `as`.** If the type is wrong, fix the definition.
- `strict: true` in `tsconfig.json`. Do not weaken it.
- Prefer `unknown` over `any`. Narrow with type guards, not casts.
- Zod for all runtime validation: form schemas, API response parsing, dynamic route params.
- All async functions that can fail must handle the failure path explicitly. No silent swallows.
- No `console.log` in committed code. Remove before commit.
- Components are pure where possible: props in, JSX out, no side effects inside render.
- `// @ts-ignore` and `// @ts-expect-error` require a documented reason in the same comment.

---

## 12. Commands

```bash
pnpm install       # Install dependencies
pnpm dev           # Start dev server → http://localhost:3000
pnpm build         # Production build
pnpm start         # Run production build locally
pnpm lint          # ESLint
pnpm typecheck     # tsc --noEmit
```

Run `pnpm typecheck` and `pnpm lint` after every non-trivial change. Do not commit if either fails.

---

## 13. Forbidden

- `as` casts anywhere in TypeScript
- `any` without an explicit comment explaining why it cannot be avoided
- Hardcoded colors, font sizes, or spacing in components — use tokens from `DESIGN.md`
- Hardcoded copy strings in components — all content comes from `src/data/`
- `Lorem ipsum` anywhere — the spec (`CASE.md` section 14) requires realistic commercial copy
- Business logic inside JSX — extract to hooks or utils
- Direct `fetch` calls inside components — encapsulate in hooks

---

## 14. When to ask, when to proceed

**Ask before proceeding when:**
- The request has two plausible interpretations and the choice materially affects output.
- A change touches the data schema (adding or renaming fields affects every consumer).
- You need a credential or env variable you don't have.
- The user's stated goal and the literal request appear to conflict.

**Proceed without asking when:**
- The task is trivial and reversible.
- Ambiguity resolves by reading `CASE.md`, `DESIGN.md`, or the existing code.
- The user already answered the question in this session.

---

## 15. Project Learnings

Agent maintains this section. Append one concrete rule per correction. Write it as "Always use X for Y", never "be careful with Y". Remove lines when the underlying issue goes away.

- (empty)
