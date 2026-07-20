# Frontend (Vite + React 19)

This project was migrated from Create React App / craco to [Vite](https://vitejs.dev/) — same UI, same components, same behavior. Only the build tooling changed.

## Getting Started

Install dependencies (a `.npmrc` with `legacy-peer-deps=true` is included, since `@studio-freight/react-lenis` hasn't published a React 19 peer range yet):

```bash
npm install
```

Run the dev server (http://localhost:3000):

```bash
npm run dev
```

Build for production (outputs to `build/`, same as the original CRA setup):

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Environment variables

Vite only exposes variables prefixed with `VITE_` to client code (unlike CRA's `REACT_APP_` prefix). Copy `.env.example` to `.env` and set:

```
VITE_BACKEND_URL=http://localhost:8000
```

This replaces the old `REACT_APP_BACKEND_URL` used in `src/pages/Contact.jsx`.

## What changed from the CRA version

- `craco.config.js`, `plugins/health-check/*`, and `jsconfig.json` removed — replaced by `vite.config.js`, which keeps the same `@` → `src` path alias.
- `public/index.html` moved to root `index.html` (Vite convention) with a `<script type="module" src="/src/main.jsx">` tag added; all existing head/body content (fonts, PostHog snippet, emergent script) preserved as-is.
- `src/index.js` → `src/main.jsx`, `src/App.js` → `src/App.jsx` (renamed so the JSX inside is parsed correctly; content unchanged).
- `process.env.REACT_APP_BACKEND_URL` → `import.meta.env.VITE_BACKEND_URL` in `src/pages/Contact.jsx`.
- `postcss.config.js` and `tailwind.config.js` converted from CommonJS to ESM syntax (package.json now has `"type": "module"`).
- `tailwind.config.js` content globs updated to point at root `index.html` instead of `public/index.html`.
- `package.json` scripts now run `vite` / `vite build` / `vite preview` instead of `craco`; CRA-only packages (`react-scripts`, `@craco/craco`, `cra-template`, `@emergentbase/visual-edits`, `dotenv`) removed. All UI dependencies (React 19, Radix UI, Tailwind, shadcn/ui, framer-motion, etc.) are untouched.

No component, page, styling, or UI logic was modified — only the build system.

## Node 21

`npm install` / `npm run build` were tested clean end-to-end (Vite 8, React 19, all deps).

One thing worth knowing: **Vite 8 officially supports Node `^20.19.0 || >=22.12.0`** — it does not list Node 21 in its support matrix, because 21 was a short-lived non-LTS release that reached end-of-life in June 2024. Nothing in this codebase uses a Node-21-only API, so it should run fine, but you may see an `npm warn EBADENGINE` notice on install (harmless — `engines` in `package.json` has been relaxed to `>=18.0.0` so it won't block you). If this is a new setup rather than matching an existing constraint, **Node 22 LTS** is the safer long-term choice.

## SEO

- `index.html` — removed leftover scaffold cruft (Emergent branding, PostHog snippet) and replaced with a real title, meta description, Open Graph/Twitter tags, canonical URL, and Organization JSON-LD.
- `src/components/SEO.jsx` — a small `react-helmet-async` wrapper. Each page (`Home`, `About`, `Products`, `Clients`, `Contact`) now sets its own `<title>`, description, and canonical URL via `<SEO />`; `Login` and `Admin` are marked `noindex`.
- `public/robots.txt` and `public/sitemap.xml` added.
- **Caveat:** this is still a client-rendered SPA. Googlebot executes JS and will pick up the per-page tags, but crawlers/social scrapers that don't run JS will only see the base `index.html` meta tags. If you need guaranteed SEO for non-JS crawlers (or faster first paint), the next step up is prerendering/SSR (e.g. Next.js or a prerender build step) — happy to help with that if it becomes a priority.
- Update the placeholder URLs (`https://www.purplemist.global/...`) and add real `/favicon.png` and `/og-image.jpg` files under `public/` before deploying.

## Enquiry emails (Resend)

The contact form (`src/pages/Contact.jsx`) posts to `${VITE_BACKEND_URL}/api/enquiries`. A minimal backend that handles that route with [Resend](https://resend.com) is included in `server/`:

```bash
cd server
npm install
cp .env.example .env   # fill in RESEND_API_KEY and TO_EMAIL
npm run dev             # http://localhost:5000
```

It validates the payload, emails your inbox (`TO_EMAIL`) with the enquiry details (reply-to set to the enquirer), and sends the enquirer a short acknowledgement. See `server/.env.example` for the required variables — until you verify `purplemist.global` as a sending domain in Resend, use the sandbox sender (`onboarding@resend.dev`), which only delivers to your own Resend account email.

The `Admin` and `Login` pages still use mock/placeholder data (as noted in the original code comments) — they aren't wired to a real backend yet. Out of scope here unless you want that built too.
