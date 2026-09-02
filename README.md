# Portfolio

Personal site — Reactor, CardCompanion, and PSA Scraper, framed for product,
operations, and product support roles.

**Stack:** React 19, Vite 8, Tailwind v4, TypeScript.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build → dist/
npm run preview  # serve the production build
```

## Editing content

All copy lives in [`src/data/projects.ts`](src/data/projects.ts) — adding a
project means adding an object to the `projects` array, not touching markup.
Optional fields (`metrics`, `constraint`, `log`) render only when present, so
each project shows the sections it actually has: Reactor gets scale metrics,
CardCompanion gets the eBay bot-check constraint, PSA Scraper gets a
maintenance log.

## Theming

Colors are CSS variables in [`src/index.css`](src/index.css), mapped into
Tailwind via `@theme inline` so a theme swap repaints without a rebuild. Three
states are handled: `:root` (light), `prefers-color-scheme: dark` for viewers
on system default, and `.dark` / `.light` classes for an explicit choice. The
choice is stored in `localStorage` and applied by an inline script in
`index.html` before first paint, so there is no flash of the wrong theme.

## Deploying

Static build — any host that serves a SPA directory works.

**Railway:** set root directory to this folder, build command `npm run build`,
and variable `RAILPACK_SPA_OUTPUT_DIR=dist` (same pattern as the CardCompanion
client).

**Vercel / Netlify:** framework preset Vite, output directory `dist`.
