# CLAUDE.md

Guidance for Claude (or any AI assistant) working in this repository.

## What this project is

Ted's Projects — a listing page for standalone static pages/projects dropped
into `public/static_pages`. Next.js 14 (App Router), React, Tailwind CSS.
No backend, no stored data. Split out of `teds-tools` (its old `/statics`
section); design tokens are shared with tools — see its `docs/DESIGN.md`
(`accent3` is this app's accent).

## Commands

```bash
pnpm install
pnpm dev
pnpm build
```

`pnpm dev` serves http://localhost:4506; `pnpm build` is the production
build — run it before considering a UI change done. `lint`, `typecheck`
and `test` are no-op stubs in this JS project.

## Project structure

```
app/
  layout.js        root layout — renders <Header/> + content
  page.js          `/` — server component, scans public/static_pages
components/
  Header.js          top bar — logo only (single-page app)
  Sidebar.js         ContentPane (scrollable padded content wrapper)
  ItemRow.js         EmptyState
lib/
  staticPages.js     server-only scan of public/static_pages (uses node:fs)
public/
  static_pages/      standalone HTML pages: a folder with index.html, or a loose .html
```

## Rules for changes in this repo

1. **Adding a static page needs no code change** — drop a folder containing
   an `index.html` (or a loose `.html` file) into `public/static_pages/` and
   `/` lists it at `/static_pages/<name>/index.html`. The list is built when
   the page renders, so a running dev server picks new files up on refresh;
   a deployed build needs a redeploy.
2. **Follow the Tailwind tokens** (`bg-panel`, `bg-panel2`, `border-border`,
   `text-muted`, `accent3`, `rounded-card`) defined in `tailwind.config.js`,
   whose `content` globs only cover `app/` and `components/`.
3. `lib/staticPages.js` uses `node:fs` — import it only from server
   components.
