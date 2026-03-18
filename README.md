# Gkikas Bakery

Website for **Gkikas Bakery** — a local artisan bakery serving fresh breads, pastries, and sweets.

Live: [nikosgkikas13.github.io/gkikas-bakery](https://nikosgkikas13.github.io/gkikas-bakery)

## Tech Stack

- **React 19** — functional components, hooks
- **Vite 8** — dev server and production build
- **Vanilla CSS** — custom properties, nesting, `clamp()`, dark mode via `prefers-color-scheme`
- **Google Fonts** — Cormorant Garamond + Lato (Greek support)
- **Elfsight** — embedded Google Reviews widget
- **gh-pages** — deployment to GitHub Pages

## Features

- Bilingual (Greek / English) with a language switcher
- Responsive, mobile-first layout
- Dark mode support
- Sections: Hero, About, Signature Bakes, Testimonials, Contact
- Google Reviews via Elfsight widget
- Smooth scroll navigation with active section tracking

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
npm run deploy    # Deploy to GitHub Pages
```

## Project Structure

```
src/
  components/     # Navbar, Hero, About, Products, Testimonials, Contact, Footer
  context/        # LanguageContext (i18n)
  css/            # Per-component CSS files
  data/           # nav.js, products.js
  assets/         # Images
  translations.js # Greek / English strings
  App.jsx
  main.jsx
public/
  nav_logo.png
  icons.svg       # SVG sprite
```
