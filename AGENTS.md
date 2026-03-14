# AGENTS.md - Gkikas Bakery

## Project Overview
A bakery website built with React 19 + Vite 8, deployed to GitHub Pages at `https://nikosgkikas13.github.io/gkikas-bakery`.

## Tech Stack
- **Framework:** React 19 (JSX, functional components, hooks)
- **Build Tool:** Vite 8 with `@vitejs/plugin-react`
- **Styling:** Vanilla CSS with CSS custom properties (no CSS framework)
- **Linting:** ESLint 9 flat config with react-hooks and react-refresh plugins
- **Deployment:** GitHub Pages via `gh-pages`

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure
```
src/
  main.jsx        # Entry point
  App.jsx         # Root component
  App.css         # Component styles
  index.css       # Global styles + CSS variables
  assets/         # Images (hero.png, react.svg, vite.svg)
public/
  favicon.svg
  icons.svg       # SVG sprite for icons
```

## Developer Profile
You are assisting a **senior JavaScript developer** who also builds creative, beautiful, and responsive designs. Adjust your behavior accordingly:

### Code Expectations
- Write modern, idiomatic ES2020+ JavaScript - no unnecessary explanations of basic concepts
- Use functional components with hooks exclusively - no class components
- Prefer concise, expressive code over verbose patterns
- Leverage modern CSS features: nesting, custom properties, `clamp()`, container queries, `has()`, logical properties (`inline`, `block`)
- Trust the developer to understand advanced patterns - skip beginner-level context

### Design & UI Standards
- **Creative and distinctive** - avoid generic, cookie-cutter layouts. Every component should feel intentional and crafted
- **Responsive by default** - mobile-first approach, use fluid typography (`clamp()`), flexible layouts (grid/flexbox), and logical breakpoints
- **Micro-interactions matter** - use CSS transitions/animations for hover states, page transitions, and loading states. Subtle motion adds polish
- **Typography is design** - pay attention to font sizing, letter-spacing, line-height, and visual hierarchy
- **Whitespace is intentional** - use generous, consistent spacing. Let the design breathe
- **Dark mode support** - the project uses `prefers-color-scheme`. Maintain both light and dark palettes via CSS custom properties
- **Accessibility first** - semantic HTML, proper ARIA attributes, focus-visible styles, sufficient color contrast

### CSS Conventions (from existing code)
- CSS custom properties defined on `:root` for theming (light/dark)
- CSS nesting (native) used throughout - continue this pattern
- Responsive breakpoint at `1024px` for tablet/mobile
- No CSS-in-JS, no utility frameworks - keep it vanilla CSS
- Component styles in dedicated `.css` files, global styles in `index.css`

### Code Style
- Single quotes for imports, double quotes in JSX attributes (matches existing eslint config)
- No semicolons in imports, semicolons in statements (match existing patterns)
- `console.log` calls are acceptable during development
- Keep components in single files unless they exceed ~150 lines
- SVG icons via `<use href>` referencing the sprite in `public/icons.svg`

### When Building New Features
- Propose component structure and styling approach before writing code for large features
- Prioritize visual polish - shadows, border-radius, transitions, gradients where appropriate
- Think about the bakery brand: warm, inviting, artisanal feel
- Images should be optimized and placed in `src/assets/`
- Vite base path is `/gkikas-bakery/` - account for this in asset references

### What NOT to Do
- Don't install CSS frameworks (Tailwind, Bootstrap, etc.) unless explicitly asked
- Don't add TypeScript unless explicitly asked (project uses JSX, not TSX)
- Don't over-abstract - a bakery site should be simple and elegant, not enterprise-architected
- Don't strip existing CSS custom properties or the dark mode setup
- Don't add routing libraries for simple page structures - use sections and smooth scrolling
