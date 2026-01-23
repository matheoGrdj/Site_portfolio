# Repository Guidelines

This repository is a Vue 3 + Vite portfolio site with Tailwind CSS, Vue Router, and an EmailJS contact form. Use these notes to keep changes consistent.

## Project Structure & Module Organization
- `src/` contains app code; `src/main.js` bootstraps Vue and `src/App.vue` is the root shell.
- `src/views/` holds route-level pages (e.g., `Home.vue`, `Projects.vue`, `Contact.vue`).
- `src/components/` stores shared UI such as `Navbar.vue` and `Footer.vue`.
- `src/router/index.js` defines client-side routes.
- `src/assets/` contains global styles and images; `public/` is static files copied to `dist/`.
- `index.html`, `vite.config.js`, and `netlify.toml` define the app shell, build, and deploy.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the Vite dev server with HMR.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.

## Coding Style & Naming Conventions
- Vue SFCs are used; keep `<template>`, `<script setup>` or `<script>`, and `<style scoped>` blocks in the same order as the file you edit.
- Component and view file names use PascalCase (e.g., `Navbar.vue`, `Home.vue`).
- Prefer Tailwind utility classes; add global styles in `src/assets/main.css` or `src/assets/base.css`.
- Keep indentation consistent within each file (spaces only, no tabs) and avoid mass reformatting.

## Testing Guidelines
- No automated test runner or `npm test` script is configured.
- Use `npm run build` as a smoke check and `npm run preview` to validate UI changes.
- If you add tests, also add a `test` script in `package.json` and document where tests live.

## Commit & Pull Request Guidelines
- Recent commits are short and descriptive, often in French (e.g., `changements de style`, `modifs`); follow that pattern.
- PRs should include a summary, manual verification steps, and screenshots for UI changes.
- Link related issues or tasks when available.

## Configuration Tips
- EmailJS service/template/public key values are in `src/views/Contact.vue`; treat them as public identifiers and never commit secrets.
- If you move these to env vars, use Vite `VITE_` prefixed variables and update the build docs.
