# Subhashree Communications — Vite + React

A full refactor of the original single-file site into a modern, component-driven
React app built with Vite.

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build     # production build
npm run preview   # preview the build
```

## What changed

- **React + Vite architecture** — every section is its own component, content
  lives in `src/data/site.js`, and motion/layout are split into focused hooks
  and CSS layers.
- **New warm visual identity** — deep espresso ink, cream, and a confident burnt
  orange (`#ff5a1f`), with an electric lime micro-accent instead of the old
  blue-on-white palette.
- **Richer motion** — pointer-reactive hero lighting and parallax, masked
  headline reveals, a hand-drawn underline, scroll-triggered reveals, animated
  counters, spotlight service cards, marquees, a rotating award stamp, and an
  animated portfolio carousel.
- **Custom India map** — replaced the trial map library with an interactive SVG
  map (`@svg-maps/india`) that highlights active states, marks the Odisha HQ,
  and syncs with the region chips.
- **Rebuilt portfolio** — autoplay carousel with pause/play, keyboard and swipe
  control, thumbnail rail, progress indicator, and a full-screen lightbox.
- **Rebuilt contact form** — posts to a small standalone server that emails the
  enquiry; no email-app fallback.
- **Responsive and accessible** — mobile menu, focus states, reduced-motion
  support, semantic sections, and descriptive alt text.

## Project structure

```text
src/
  components/     # Navbar, Hero, About, Services, Clients, Awards,
                  # Portfolio, Presence, Contact, Footer + shared UI
  data/site.js    # All editable content: services, clients, states, etc.
  hooks/          # Scroll reveal + scroll spy
  styles/         # tokens, base, layout, sections, responsive CSS
public/
  images/         # Optimised portfolio images
  logo.png
```

## Contact form configuration

The form posts to the companion server in `../shucom-api`. The URL lives in one
place — `src/components/Contact.jsx`:

```js
const CONTACT_API = 'https://shucom-back.vercel.app'
```

Override it without touching code by adding `VITE_CONTACT_API_URL` to `.env`
locally or as an Actions variable on GitHub. The deploy workflow passes it
through automatically.

The form always sends through the API — it never opens the visitor's email app.

> `original/` contains the untouched source repository for reference.
