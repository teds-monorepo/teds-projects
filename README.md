# Ted's Projects

Listing page for standalone static pages — built with Next.js (App Router) and Tailwind CSS. Split out of `teds-tools`.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:4506.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.

## Project structure

```
app/
  layout.js        root layout, renders the header + page content
  page.js          `/` lists public/static_pages
components/
  Header.js          top bar (logo only)
  Sidebar.js         ContentPane (scrollable padded content wrapper)
  ItemRow.js         shared empty state
lib/
  staticPages.js     scans public/static_pages (server-only)
public/
  static_pages/      standalone HTML pages, one folder or .html file each
```

## Adding a page

Drop a folder containing an `index.html` (or a loose `.html` file) into
`public/static_pages/` — `/` lists it at `/static_pages/<name>/index.html`
with no code change.
