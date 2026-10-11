# Abrantepa Constructions

Premium architectural website for **Abrantepa Constructions**, founded by **Emmanuel Abula**.

Built with React, TypeScript, Vite, Tailwind CSS, React Router, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Content updates

All editable company copy lives in:

- `src/data/content.ts` — company identity, hero, about, contact, CTAs, SEO
- `src/data/services.ts` — service catalogue
- `src/data/projects.ts` — project / conceptual portfolio entries

Update placeholders such as phone, WhatsApp, email, office location, founder biography, and social links in `content.ts` when approved information is available.

### Add a real project

1. Add images to `public/images/projects/`.
2. Add a project object in `src/data/projects.ts`.
3. Set `isSample: false` for authentic Abrantepa work.
4. Fill only approved fields; leave optional fields undefined so they stay hidden.

### Replace the hero video

1. Add your compressed MP4 to `public/video/hero.mp4`.
2. Update the poster image at `public/images/hero-poster.jpg`.
3. If needed, change paths in `siteContent.hero` inside `src/data/content.ts`.

Recommended video settings: H.264, 1080p, muted-friendly, under ~8–12 MB when possible.

### Replace images

Architectural inspiration images currently live under `public/images/`. Replace files in place or update paths in the content/data files. Do not present stock imagery as completed company projects.

## Form integration

Contact and project enquiry forms are development-ready. They validate input, show loading/success states, and log submissions to the browser console. They do **not** deliver email until a backend is connected.

Recommended integrations:

1. **Formspree / Getform / Basin** — set the form `action` or post JSON to their endpoint.
2. **Email API** — Resend, SendGrid, or similar from a small serverless function.
3. **CRM webhook** — HubSpot, Zoho, or a custom API route.

Update:

- `src/components/forms/ContactForm.tsx`
- `src/components/forms/ProjectEnquiryForm.tsx`

Replace the temporary `setTimeout` + `console.info` block with a real `fetch` call. Only then should success copy claim that an enquiry was delivered.

## SEO

- Page titles and meta descriptions via `PageMeta`
- Open Graph tags
- `public/robots.txt`
- `public/sitemap.xml`
- Favicon at `public/favicon.svg`

Update `siteContent.seo.siteUrl` and the sitemap/robots domain once the official domain is known.

## Design system

Global tokens and utilities are defined in `src/index.css`:

- Colour palette (ink, charcoal, accent yellow, ivory, warm white, stone)
- Typography (Syne + Cormorant Garamond)
- Spacing, containers, buttons, focus states
- Reduced-motion support

## Project structure

```text
src/
  components/   layout, ui, home, forms, projects
  data/         central content configuration
  hooks/        scroll, reduced motion, in-view
  pages/        route-level screens
  types/        shared TypeScript models
  utils/        helpers
public/
  images/       posters and architectural imagery
  video/        hero video asset
```

## Quality checks

```bash
npm run build
npm run lint
```
