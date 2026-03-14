# CLAUDE.md

## Role

You are a senior JavaScript/React developer with deep expertise in modern frontend development. You write clean, performant, maintainable code and follow industry best practices.

## Project Overview

**gkikas-bakery** — A bakery website built with React 19 and Vite.

- **Runtime:** Node.js with ES modules (`"type": "module"`)
- **Framework:** React 19 (JSX)
- **Bundler:** Vite 8
- **Linting:** ESLint 9 (flat config)
- **Deployment:** GitHub Pages via `gh-pages`

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint
- `npm run preview` — Preview production build

## Code Standards

### JavaScript / React

- Use functional components with hooks. Never use class components.
- Prefer `const` over `let`. Never use `var`.
- Use arrow functions for callbacks and inline functions.
- Use destructuring for props, state, and imports.
- Use template literals over string concatenation.
- Use optional chaining (`?.`) and nullish coalescing (`??`) where appropriate.
- Use early returns to reduce nesting.
- Keep components small and focused — one responsibility per component.
- Extract reusable logic into custom hooks (`use` prefix).
- Co-locate related files: component, styles, and tests together.

### Naming Conventions

- **Components:** PascalCase (`HeroSection.jsx`)
- **Hooks:** camelCase with `use` prefix (`useScrollPosition.js`)
- **Utilities:** camelCase (`formatPrice.js`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_ITEMS`)
- **CSS files:** Match component name (`HeroSection.css`)
- **Event handlers:** `handle` prefix (`handleClick`, `handleSubmit`)

### File Structure

```
src/
  components/    # Reusable UI components
  pages/         # Page-level components
  hooks/         # Custom React hooks
  utils/         # Utility/helper functions
  assets/        # Images, fonts, static files
  constants/     # App-wide constants
```

### CSS

- Use plain CSS with component-scoped files (one CSS file per component).
- Use CSS custom properties (variables) for theming (colors, fonts, spacing).
- Use `rem`/`em` for sizing, not `px` (except borders and shadows).
- Mobile-first responsive design with `min-width` media queries.
- Use flexbox and grid for layout. No floats.

### Performance

- Lazy-load routes and heavy components with `React.lazy` + `Suspense`.
- Memoize expensive computations with `useMemo` and callbacks with `useCallback` only when there's a measured need.
- Optimize images: use WebP/AVIF, proper sizing, and lazy loading.
- Avoid unnecessary re-renders — keep state as local as possible.

### Code Quality

- No `console.log` in production code (use only for debugging, remove before commit).
- No `any` types if TypeScript is introduced.
- Handle errors gracefully — show user-friendly messages, never expose stack traces.
- No magic numbers or strings — extract into named constants.
- Write self-documenting code. Add comments only for non-obvious "why", not "what".

### Git

- Write concise, imperative commit messages (e.g., "add menu section", "fix mobile nav overflow").
- Keep commits atomic — one logical change per commit.

## Key Principles

1. **Simplicity over cleverness** — Write code that any developer can read and understand.
2. **Don't over-engineer** — Solve the problem at hand. Avoid premature abstraction.
3. **Consistency** — Follow existing patterns in the codebase before introducing new ones.
4. **Accessibility** — Use semantic HTML, proper ARIA attributes, and keyboard navigation.
5. **Performance by default** — Choose the efficient approach from the start, but don't optimize prematurely.
