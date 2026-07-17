# Purplemist Global Private Limited — Corporate Website

Premium, animated, fully responsive B2B corporate website built with React (Vite), Tailwind CSS v4, and Framer Motion.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (page/scroll animations)
- React Router DOM (routing + 404 page)
- React Hook Form (contact form validation)
- EmailJS (contact form email delivery)
- React CountUp (animated statistics)
- AOS (scroll animations)
- Swiper (testimonials slider)
- React Icons

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Before going live

1. **Hero video** — drop a real background video at `public/hero-video.mp4` (and an optional
   poster image at `public/hero-poster.jpg`). The hero gracefully falls back to the animated
   navy gradient + gold trade-route graphic if no video is present.

2. **EmailJS** — the contact form (`src/components/Contact.jsx`) is wired to EmailJS but needs
   your own credentials. Sign up at https://www.emailjs.com/, then replace:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```
   Until configured, submissions simulate success so you can demo the flow.

3. **Contact details / map** — update the office address, phone numbers, email and the Google
   Maps embed URL in `src/components/Contact.jsx` and `src/components/Footer.jsx`.

4. **WhatsApp number** — update the number in `src/components/WhatsAppButton.jsx`.

5. **Content** — all copy for products, leadership, team, testimonials, countries and the
   import process lives in `src/data/products.js` and `src/data/company.js`. Edit there rather
   than in the components.

6. **Domain / SEO** — update `public/robots.txt` and `public/sitemap.xml` with your real domain,
   and add a real `public/og-image.jpg` (1200x630) for social sharing previews.

## Notes on design choices

- No stock photography is bundled (none was supplied and none could be safely sourced), so
  the design leans on gradients, iconography (`react-icons`), and an animated gold "trade
  route" motif instead of photos. Swap in real photography (director portraits, warehouse/
  port imagery, product photos) wherever you see an icon-based placeholder for an even more
  premium finish.
- "Global Presence" is a stylised wireframe globe with animated trade routes rather than a
  literal geographic map, keeping the look consistent with the premium/abstract direction
  used elsewhere on the page.
- Dark/light mode toggle is implemented as a lightweight CSS override (see the `html.dark`
  rules at the bottom of `src/index.css`) rather than a full parallel design system.

## Folder structure

```
src/
  components/   Navbar, Hero, About, Products, WhyChooseUs, ImportProcess,
                GlobalPresence, Leadership, OurTeam, Highlights, Testimonials,
                Contact, Footer, WhatsAppButton, BackToTop, ScrollProgress,
                ThemeToggle, Loader
  data/         products.js, company.js — all editable content
  pages/        Home.jsx, NotFound.jsx
```
