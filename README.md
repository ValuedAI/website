# Valued AI - Marketing Website

Marketing site for [Valued AI](https://www.valued-ai.info) - AI-powered supply chain automation for manufacturing companies.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **UI Components**: Magic UI + shadcn/ui
- **Hosting**: Vercel
- **Form backend**: Google Sheets (via Apps Script)

## Getting Started

```bash
# Install dependencies
npm install

# Copy env file and fill in values
cp .env.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` | Google Apps Script URL for the Book Demo form |

## Project Structure

```
src/
  app/           # Next.js app router (layout, page, globals.css)
  components/    # Page sections (Navbar, Hero, Problem, Features, etc.)
  components/ui/ # Magic UI + shadcn components
  lib/           # Utilities and brand constants
```

## Color System

Brand colors are centralized so the entire scheme can be changed from two files:

1. `src/app/globals.css` - CSS vars in `:root` (mapped to Tailwind via `@theme inline`)
2. `src/lib/brand.ts` - Hex constants for JS component props
