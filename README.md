# Dr. Nature Holistic Panchkarma

A responsive website for an Ayurvedic Panchkarma wellness centre — home page, about, therapies,
wellness packages, consultation booking, and contact, built as a static single-page application.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and production bundler
- **React Router** (`react-router-dom`) — client-side routing
- **CSS Modules** — component-scoped styles, no CSS-in-JS
- **Plain CSS custom properties** — shared design tokens (colors, radii, shadows, fonts), no
  Tailwind/Bootstrap/UI framework
- **react-icons** — all icons (Feather and Font Awesome sets)

No state-management library, animation library, or component framework is used — everything is
hand-built React + CSS.

## Getting Started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # type-check (tsc -b) + production build to dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## Project Structure

```
dnwpanchkarma-react/
├── public/
│   ├── favicon.png
│   └── _redirects          # Netlify SPA fallback (all routes → index.html)
├── src/
│   ├── assets/              # images used across pages (hero, clinic, herbs, shirodhara, logo, decorative SVG)
│   ├── components/
│   │   ├── layout/          # SiteHeader, SiteFooter, WhatsAppButton — appear on every page (rendered in App.tsx)
│   │   ├── PageHero/         # reusable page-title banner (title + subtitle + breadcrumb) used by every inner page
│   │   ├── SectionHeading/   # reusable "eyebrow + title + description" heading used inside page sections
│   │   ├── FeatureCard/      # icon + title + description card (used on Home's 4 benefit cards)
│   │   ├── TherapyCard/      # icon + name + description card (used on Home preview grid and Therapies page)
│   │   ├── CTASection/       # full-width image-background call-to-action band (Home + could be reused elsewhere)
│   │   └── SEO/               # <SEO title description /> — sets document.title and meta tags per page (see below)
│   ├── data/
│   │   ├── site.ts           # ALL brand/contact/nav configuration — the one file to edit for brand-wide changes
│   │   ├── therapies.ts      # therapy categories + descriptions, shown on the Therapies page
│   │   └── wellnessPackages.ts  # wellness package names, intro copy, and disclaimer text
│   ├── pages/                 # one folder per route, each with a .tsx and a co-located .module.css
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Therapies/
│   │   ├── WellnessPackages/
│   │   ├── Consultation/
│   │   ├── Contact/
│   │   ├── Location/
│   │   ├── ComingSoon/        # generic "content coming soon" page, reused by Treatments and Testimonials
│   │   └── NotFound/          # 404 page
│   ├── styles/
│   │   ├── tokens.css         # all CSS custom properties: colors (oklch), radii, shadows, fonts
│   │   └── global.css         # reset, base element styles, .container/.section/.btn/.card utility classes
│   ├── App.tsx                # route table (React Router) + persistent layout (header/footer/WhatsApp button)
│   ├── main.tsx                # React root, wraps App in <BrowserRouter>
│   └── vite-env.d.ts
├── index.html                 # page shell — title/meta tags here are the *default* fallback; SEO.tsx overrides per page
├── vite.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── eslint.config.js
```

## How Routing Works

`src/App.tsx` defines every route with React Router's `<Routes>`/`<Route>`. `SiteHeader` and
`SiteFooter` are rendered once, outside `<Routes>`, so they persist across page navigation. There
is no server — Netlify (or any static host) must be configured to redirect all paths to
`index.html` so React Router can take over client-side; that's what `public/_redirects` does.

| Route | Page component | Status |
|---|---|---|
| `/` | `Home` | Full content |
| `/about` | `About` | Full content |
| `/therapies` | `Therapies` | Full content, data-driven from `data/therapies.ts` |
| `/wellness-packages` | `WellnessPackages` | Full content, data-driven from `data/wellnessPackages.ts` |
| `/consultation` | `Consultation` | Full content (call / WhatsApp / contact-form options) |
| `/contact` | `Contact` | Full content — form + live embedded map |
| `/location` | `Location` | Full content — address, hours, directions link, embedded map |
| `/treatments` | `ComingSoon` | Placeholder — no source content was supplied for this page yet |
| `/testimonials` | `ComingSoon` | Placeholder — no real testimonials were supplied |
| any other path | `NotFound` | 404 page |

Nav links themselves live in `navLinks` in `src/data/site.ts`, separate from the route table in
`App.tsx` — adding a link there does not create a route, and adding a route in `App.tsx` does not
add it to the nav. Both must be updated together when adding a page.

## Page-by-Page Content Notes

- **Home** (`pages/Home`): hero banner, 4 feature cards, an "Ayurvedic Detox & Healing" intro
  section, "About Panchkarma" and "Healing Through Ayurveda" prose sections, an 8-item therapy
  preview grid linking to `/therapies`, and a closing CTA band linking to `/contact`.
- **About** (`pages/About`): centre story, 6 key-feature cards, "Our Vision"/"Our Mission" (two
  columns), and a closing full-width "Sanctuary of Natural Healing" band.
- **Therapies** (`pages/Therapies`): renders `therapyCategories` from `data/therapies.ts` as
  expand/collapse category panels (plain React state, no external accordion library). Therapies
  with a full description render as cards; therapies named only in the source content (no
  individual description available) render as plain name chips under "Also included in this
  category."
- **Wellness Packages** (`pages/WellnessPackages`): renders `wellnessPackages` (a flat list of
  package names) plus the intro/disclaimer text, all from `data/wellnessPackages.ts`. No
  per-package descriptions exist in the source content, so none are invented here.
- **Contact** (`pages/Contact`): 5 info cards (call, email, WhatsApp, address, hours), a booking
  form, and a Google Maps iframe embed built from `siteConfig.address`.
- **Location** (`pages/Location`): address/hours/phone summary, a "Get Directions" link (opens
  Google Maps in a new tab) and a WhatsApp link, plus the same map embed pattern as Contact.
- **Consultation** (`pages/Consultation`): three contact-method cards (call, WhatsApp, contact
  form) — no invented consultation procedures.

## Configuration — `src/data/site.ts`

This is the single source of truth for brand-wide values. Everything else in the app (header,
footer, WhatsApp widget, page titles, contact cards, meta tags) reads from `siteConfig` and
`navLinks` here rather than hardcoding text — change a value once and it updates everywhere.

```ts
siteConfig.name        // full legal/brand name, used in footer, content, and meta tags
siteConfig.tagline
siteConfig.city
siteConfig.description // used as the default meta description
siteConfig.url          // canonical domain
siteConfig.email
siteConfig.phone
siteConfig.whatsapp     // digits only, country code first, no + or spaces (used to build wa.me links)
siteConfig.address
siteConfig.hours.{weekday,sunday}
siteConfig.offer        // scrolling announcement-bar text
siteConfig.social.{facebook,instagram,youtube}

navLinks                // ordered array of { to, label } — drives both desktop and mobile nav
```

Note: the header's logo/brand text block renders `siteConfig.name` directly. If the brand name is
changed to something significantly longer, check the header at 1024–1440px widths (see
"Responsive Behaviour" below) — the header layout was specifically tuned to fit the current name
alongside all 9 nav links without wrapping or overflowing.

## SEO / Per-Page Metadata

There's no server-side rendering, so `<title>` and meta tags are set at runtime by the `SEO`
component (`src/components/SEO/SEO.tsx`). Every page renders `<SEO title="..." description="..." />`
once near the top of its JSX; it uses a `useEffect` to update `document.title` and the
`description`/`og:title`/`og:description`/`twitter:title`/`twitter:description` meta tags in
`document.head`. `index.html`'s own `<title>`/`<meta>` tags are just the fallback shown before
React hydrates (or to crawlers that don't execute JavaScript).

## Design System (`src/styles/`)

- `tokens.css` defines the entire palette as CSS custom properties using `oklch()` colors (sage
  green / cream / terracotta), plus radius, shadow, and font-family tokens. Change the palette by
  editing values here — nothing else needs to change.
- `global.css` imports tokens, applies a base reset, and defines a small set of reusable utility
  classes used across pages: `.container` (max-width content wrapper), `.section` (standard
  vertical padding), `.card`, `.btn`/`.btn-primary`/`.btn-accent`/`.btn-outline`/`.btn-outline-light`,
  and `.eyebrow` (small uppercase label text above section headings).
- Everything else is a CSS Module co-located with its component (`Component.module.css`), scoped
  automatically by Vite — class name collisions between components aren't possible.

## Known Gaps / Things to Do Before a Real Launch

- **Contact form does not send email.** `pages/Contact/Contact.tsx` only shows a client-side
  success message on submit; nothing is transmitted anywhere. Wiring this to a real backend or a
  form service (e.g. Netlify Forms, Formspree, or a custom API) is a follow-up task.
- **No SEO beyond per-page `<title>`/meta tags** — no sitemap.xml, robots.txt, structured data
  (JSON-LD), or Open Graph image is set up yet.
- **No authentication** — there is no login/logout or any user account system in this codebase.
- **`/treatments` and `/testimonials`** are placeholder pages because no real content was supplied
  for them — they show a "content coming soon" message and a link to Contact rather than
  fabricated content.
- **Social links**: Facebook, Instagram, and YouTube are real; there is no Twitter/LinkedIn
  presence, so those icons were intentionally left out rather than linking to placeholder URLs.

## Deployment (Netlify)

This is a static site — build once, host the `dist/` folder anywhere.

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- `public/_redirects` (copied into `dist/` automatically by Vite) tells Netlify to serve
  `index.html` for every path, which is required for React Router's client-side routes to work on
  direct page loads and refreshes.

Quick one-off deploy without connecting GitHub:

```bash
npm run build
npx netlify-cli deploy --dir=dist --prod
```

Or connect the GitHub repo in the Netlify dashboard for auto-deploy on every push, using the same
build command and publish directory above.
