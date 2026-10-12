# BolajiBuzz Website

Marketing website for **BolajiBuzz**, a boutique digital strategy and infrastructure agency that helps growing businesses turn scattered websites, marketing, technology and workflows into one connected digital system.

> Clarity first. Structure before tactics. Technology with a purpose.

## Features

- Multi-page site built with the Next.js App Router: Home, How We Think, What We Do, Work, Insights, About and Contact
- Animated hero, flip cards, connected-system diagram and scroll-reveal sections, with reduced-motion support
- Case study pages and an article reader that turns plain text into structured, readable articles
- Qualification-led contact form that emails enquiries via Gmail (Nodemailer), with an optional webhook for n8n or a CRM
- Floating WhatsApp button, brand-coloured social icons and a full footer on every page
- SEO and AEO foundations: per-page metadata, sitemap, robots file, JSON-LD organisation data and semantic HTML
- Event tracking pushed to `window.dataLayer` (page views, CTA clicks, WhatsApp clicks, form submissions)
- Mobile-first, accessible (skip link, keyboard-friendly controls, sufficient contrast)

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) and React 18
- Plain CSS (`app/globals.css`), no UI framework
- Nodemailer for contact-form email
- Fonts: Bricolage Grotesque and Public Sans (Google Fonts)

## Getting started

Requires Node.js 18.17 or newer.

```bash
git clone <your-repo-url>
cd bolajibuzz-website
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |

## Environment variables

Create `.env.local` in the project root. This file is ignored by Git and must never be committed.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes (production) | Your real domain, used by the sitemap, metadata and JSON-LD |
| `GMAIL_USER` | Yes (for the form) | Gmail address that sends the enquiry emails |
| `GMAIL_APP_PASSWORD` | Yes (for the form) | A Gmail [app password](https://support.google.com/accounts/answer/185833), not your normal password |
| `LEAD_WEBHOOK_URL` | No | Also forwards each enquiry to an n8n webhook or CRM |

Enquiries are delivered to the address set in `app/api/lead/route.js`.

## Project structure

```
app/                  Routes (pages), layout, sitemap, robots, API route
  api/lead/           Contact form endpoint (sends the email)
  insights/[slug]/    Individual article pages
  work/[id]/          Individual case study pages
components/           Reusable UI (Header, Footer, Hero, Hub, Cards, Socials, ...)
content/site.js       All editable content: copy, pillars, case studies, articles, links
lib/                  Helpers (analytics tracking, article parser)
public/images/        Your images (see below)
SITE-MAP.md           Which page and section lives in which file
```

## Editing content

Most changes need no code changes beyond `content/site.js`:

- **Articles:** edit `POSTS` (title, summary, body)
- **Case studies:** edit `CASES` (title, tag, details, optional live URL)
- **Social links:** paste profile URLs into `SOCIALS`
- **WhatsApp number and message:** `WA_NUMBER`, `WA_TEXT`
- **Navigation, capabilities, process steps:** `NAV`, `PILLARS`, `STEPS`

See `SITE-MAP.md` for a section-by-section map of every page.

## Images

Place files in `public/images/` using these names (or change the paths in the `IMG` block of `content/site.js`):

| File | Used on |
|---|---|
| `band.jpg` | Home page, wide picture band |
| `work-1.jpg`, `work-2.jpg`, `work-3.jpg` | Case study cards and pages |
| `about.jpg` | About page portrait |

Missing images show a branded placeholder automatically.

## Brand

| Colour | Hex |
|---|---|
| Purple | `#602E9E` |
| Orange | `#F28221` |
| Cream | `#E1E0D1` |

## Deployment

Recommended: [Vercel](https://vercel.com/).

1. Import the GitHub repository
2. Add the environment variables above in the project settings
3. Deploy, then set `NEXT_PUBLIC_SITE_URL` to your live domain and redeploy

## Analytics

Events are pushed to `window.dataLayer`. Add Google Tag Manager or GA4 in `app/layout.js` to collect them.

## License

All rights reserved. Copyright BolajiBuzz.