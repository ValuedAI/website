# Valued AI — Marketing Website

## About
- **Product**: Valued AI — AI-powered supply chain automation for manufacturing companies
- **Purpose**: Simple marketing site to advertise the product and capture demo bookings
- **Repo**: https://github.com/ValuedAI/website
- **Deployment**: Vercel (free tier) — auto-deploys from GitHub

## Tech Stack
- Next.js 16 (App Router, TypeScript, `src/` directory)
- Tailwind CSS v4
- **UI library**: Magic UI (via shadcn/ui registry) — add components with `npx shadcn@latest add "https://magicui.design/r/<component-name>"`
- **Base UI**: shadcn/ui — for standard components (buttons, inputs, cards, etc.) — add with `npx shadcn@latest add <component-name>`
- Components live in `src/components/ui/` (library) and `src/components/` (custom/page sections)

## MCP Servers
- **Next.js DevTools** — When starting work on this Next.js project, ALWAYS call the `init` tool from next-devtools-mcp FIRST.
- **Context7** — For up-to-date library docs, append "use context7" to prompts.
- **Playwright** — For browser testing.

## Design Rules
1. **Reuse over rebuild** — Always check if a component can be abstracted and reused before building. Follow DRY principles.
2. **Use a UI library** — Do NOT build custom UI components (buttons, modals, cards, inputs, etc.) if a library provides them. Only build custom components with explicit approval.
3. **Consult before custom** — If you need a custom component that doesn't exist in the chosen library, ask before building it.
4. **Keep it simple** — This is a marketing site, not an app. No complex state, no auth, no database.
5. **User-friendly UX** — Smooth animations/transitions, intuitive navigation, responsive (mobile-first). It should feel polished.
6. **Clean code** — Small, focused components. Consistent naming. No dead code. Proper TypeScript types.
7. **Performance** — Static where possible. Optimize images. Minimal JS bundle.
8. **No em dashes in copy** — Never use `—` (em dash) in user-facing text. It reads as AI-generated. Use commas, periods, or rewrite the sentence instead.

## Brand
- **Name**: Valued AI
- **Primary color**: Deep Blue (#2563EB) — use `brand` Tailwind classes (e.g., `bg-brand`, `text-brand`)
- **Accent color**: Warm Orange (#F97316) — use `cta` Tailwind classes (e.g., `bg-cta`, `hover:bg-cta-hover`)
- **Tone**: Startup-casual, confident, not corporate
- **Key message**: Human stays in the loop. AI handles busywork, people make decisions.
- **Target audience**: Manufacturing supply chain teams (not technical people)

## Color System
Colors are centralized in two places. Update BOTH when changing the color scheme:
1. **`src/app/globals.css`** — `:root` block defines CSS vars (`--brand`, `--cta`, etc.), `@theme inline` maps them to Tailwind utilities via `var()`. **Never put raw hex values in `@theme inline`** — they won't work. Always use the `var()` pattern.
2. **`src/lib/brand.ts`** — Hex constants for JS props (Magic UI shimmerColor, particles color, ShineBorder, etc.)

Available Tailwind classes:
- `brand`, `brand-dark`, `brand-light`, `brand-50`, `brand-100`, `brand-200`, `brand-400`
- `cta`, `cta-hover`, `cta-light`, `cta-50`

## Site Structure
Single-page landing with sections: Navbar → Hero → Problem → Features → How It Works → Book Demo → Footer

### Components (`src/components/`)
- `Navbar.tsx` — Sticky nav, scroll-based bg transition, logo, nav links, CTA
- `Hero.tsx` — Particles bg, AnimatedShinyText badge, headline, ShimmerButton CTA
- `Problem.tsx` — 3 pain point cards, NumberTicker stats
- `Features.tsx` — BentoGrid with 4 feature cards (Email Pipeline, Order Tracking, Auto-Draft, Task Engine)
- `HowItWorks.tsx` — 3 alternating steps with connector line, BlurFade animations
- `BookDemo.tsx` — ShineBorder form card, ShimmerButton submit, success state
- `Footer.tsx` — Logo, tagline, email, copyright

### UI Components in use (`src/components/ui/`)
animated-shiny-text, bento-grid, blur-fade, button, number-ticker, particles, shimmer-button, shine-border

## Session Log
### Session 1 — 2026-02-28
- Initialized Next.js 16 project with TypeScript, Tailwind CSS v4, App Router, src/ directory
- Repo cloned at `procurement-ai/website/`
- Established design rules and coding guidelines
- Picked Magic UI (via shadcn/ui registry) as the UI component library
- Installed shadcn/ui base + Magic UI components
- Built all 7 landing page sections (Navbar, Hero, Problem, Features, HowItWorks, BookDemo, Footer)
- Fixed import issues: Magic UI uses named exports not default exports
- Fixed ShineBorder usage: it's an absolute overlay, not a wrapper
- Fixed BentoCard: `Icon` prop expects a component, not JSX
- Removed unused components (marquee, animated-beam) and dead CSS (marquee animations, dark mode vars)
- Added MCP servers config (`.claude/settings.json`): next-devtools, context7, playwright
- Production build passes clean — static page, no errors

### Session 2 — 2026-02-28
- Added design rule: no em dashes in copy (reads as AI-generated)
- Updated all messaging to emphasize "human in the loop" positioning
- Changed color scheme from emerald/green to Deep Blue + Warm Orange
- Replaced "procurement" with "supply chain" across all site copy and metadata
- Centralized color config: brand colors defined in `:root` (globals.css) + mapped in `@theme inline` + `src/lib/brand.ts`
  - Components use `brand-*` and `cta-*` Tailwind classes instead of hardcoded `blue-600`, `orange-500`
  - JS hex values imported from `brand.ts` for Magic UI component props
  - **Gotcha**: `@theme inline` requires `var()` references, not direct hex values. Define values in `:root`, reference with `var(--brand)` in `@theme inline`
- To change the color scheme: update `:root` vars in globals.css + `src/lib/brand.ts`, all components update automatically
- Next: Push to GitHub, visual testing, iterate on design
