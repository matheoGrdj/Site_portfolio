# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm install          # install dependencies
npm run dev          # Vite dev server with HMR
npm run build        # production build to dist/
npm run preview      # serve production build locally
docker compose up --build  # alternative: Docker + Nginx on port 8080
```

No test runner is configured. Use `npm run build` as a smoke check and `npm run preview` to validate UI changes.

## Tech Stack

- **Vue 3** (Composition API, `<script setup>`) — pure JavaScript, no TypeScript
- **Vite 6** with `@tailwindcss/vite` plugin (Tailwind CSS v4 — no `tailwind.config.js`)
- **Vue Router 4** (HTML5 history mode, 3 routes: `/`, `/projects`, `/contact`)
- **@unhead/vue** for SEO (Open Graph, Twitter Card, JSON-LD)
- **EmailJS** for contact form
- **Deployed on Netlify** (`netlify.toml` handles SPA redirect)

## Architecture

**Routing**: `src/router/index.js` — Home, Projects, Contact. Each view sets its own `<title>` via `useHead`.

**Theme system**: Dark/light toggle stored in `localStorage` (`portfolio-theme` key), applied via `data-theme` attribute on `<html>`. Uses View Transition API with clip-path circle animation, falls back to `.theme-reveal` overlay. Logic in `src/utils/theme.js`.

**Scroll reveal**: `src/utils/reveal.js` — IntersectionObserver watches `[data-reveal]` elements, adds `reveal`/`is-revealed` classes. Re-runs after each route navigation.

**CSS architecture**: Design tokens as CSS custom properties on `:root` in `src/assets/main.css`. Two theme variants (`data-theme="dark"` / `data-theme="light"`). Semantic utility classes (`.btn`, `.chip`, `.glass-effect`, `.card-surface`) defined in `main.css`. Tailwind color classes are overridden to map to `--accent` CSS variable for unified theming.

**Fonts**: Space Grotesk (sans), Fraunces (display), IBM Plex Mono (mono) — Google Fonts.

**Path alias**: `@` → `./src` (configured in both `vite.config.js` and `jsconfig.json`).

## Coding Conventions

- Vue SFC block order: `<template>`, `<script setup>`, `<style scoped>`
- PascalCase file names for components/views (e.g., `Navbar.vue`, `Home.vue`)
- Prefer Tailwind utility classes; global styles go in `src/assets/main.css`
- Spaces only (no tabs), keep indentation consistent, no mass reformatting
- Commits are short and in French (e.g., `changements de style`, `modifs`)

## Key Notes

- EmailJS credentials in `src/views/Contact.vue` are public identifiers — if moving to env vars, use `VITE_` prefix
- Custom `xs:` breakpoint (`max-width: 400px`) is manually defined in scoped styles of `Navbar.vue` and `Footer.vue` (not a Tailwind config breakpoint)
- Add `data-reveal` attribute to any element that should animate in on scroll
