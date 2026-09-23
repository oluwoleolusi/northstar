# Northstar Creative

A portfolio concept website for a fictional independent creative/design
agency. Frontend-only — no backend, CMS, or database. The contact form is a
validated demo flow that doesn't send anything anywhere.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (typically `http://localhost:5173`).

## Building for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploying

Static site, pre-configured for **Netlify**:

1. Push to a Git repository.
2. Netlify → "Add new site" → import the repo.
3. Build command `npm run build`, publish directory `dist` (already set in
   `netlify.toml`).
4. Deploy.

`public/_redirects` + `netlify.toml` both handle the SPA fallback
(`/*` → `/index.html`) that client-side routes like `/work/aura` need so a
direct link or refresh doesn't 404. Replicate that same rewrite rule on any
other static host.

## Project structure

```
src/
  components/
    layout/       Header (transparent-over-hero, solidifies on scroll), Footer, ScrollToTop
    home/          Homepage sections (Hero, SelectedWork, ServicesTeaser, StudioTeaser)
    work/          ProjectRow (4 layout variants), CategoryFilter, CaseStudyHero, NextProject
    services/      ServiceList (expandable)
    contact/       ContactForm
  data/
    projects.ts     The 6 case studies — edit here to add/change work
    services.ts      The 5 service disciplines
    philosophy.ts     Studio principles + quick facts
    site.ts           Nav links, contact details, form option lists
  pages/           One file per route
  types/             Shared TypeScript types
public/
  images/            Placeholder imagery (see below)
  _redirects         Netlify SPA fallback
```

## Replacing the placeholder images

Every image is a generated, text-free abstract composition — no fake logos,
headlines or captions baked in, so nothing needs erasing. Drop in real
photography or artwork using the **same filenames** and nothing else needs
to change (aspect ratios are locked via CSS `object-cover`):

| File(s)                                  | Used for                                  |
| ------------------------------------------ | -------------------------------------------- |
| `northstar-hero.jpg`                       | Homepage hero                                |
| `northstar-studio-01.jpg`, `northstar-studio-02.jpg` | Studio page                         |
| `northstar-services.jpg`                   | Services page                                |
| `work-aura-01/02/03.jpg`                   | AURA case study (hero + 2 detail sections)   |
| `work-mota-01/02/03.jpg`                   | MOTA case study                              |
| `work-fieldnotes-01/02/03.jpg`             | FIELD NOTES case study                       |
| `work-noma-01/02/03.jpg`                   | NOMA HOUSE case study                        |
| `work-orbit-01/02/03.jpg`                  | ORBIT case study                             |
| `work-sona-01/02/03.jpg`                   | SONA case study                              |

Each project's `-01` image is also its cover image on the Home and Work
index pages.

## Content that's easy to find and edit

- **Case studies** (title, category, year, description, challenge, approach,
  outcome, services, images, index-page layout style) → `src/data/projects.ts`.
  The `layout` field (`featured` / `wide` / `standard` / `text-led`) controls
  which of the four visual treatments a project gets on the Work index and
  homepage — reassign it to reshuffle the page's rhythm.
- **Service descriptions** → `src/data/services.ts`
- **Studio principles and facts** → `src/data/philosophy.ts`
- **Nav, email, location, social links, form option lists** → `src/data/site.ts`

## How the demo interactions work

- **Header**: transparent over the full-bleed hero on the homepage and each
  case study, and switches to a solid background on scroll or on any other
  page. Mobile menu is a full-screen overlay (Escape key and a visible Close
  control both dismiss it).
- **Work filtering**: category tabs filter by each project's `services`
  array — entirely client-side, no page reload.
- **Contact form**: validates name, email format, and project type (company
  and budget are optional), shows a loading state, then a confirmation
  screen that says plainly nothing was actually sent.

Wiring the contact form to a real inbox would mean replacing the
`setTimeout` in `ContactForm.tsx` with an actual request (e.g. to Formspree,
or a serverless function) — the surrounding validation and UI state is
already structured to support that swap.
