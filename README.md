# Portfolio (Vite + React + Tailwind)

A modern, responsive portfolio powered by Vite + React + TypeScript + Tailwind. External links (GitHub, LinkedIn, Email, Resume) are controlled via environment variables.

## Local Setup

1. Copy `.env.example` to `.env` and fill in your info:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies and run locally:
   ```bash
   npm install
   npm run dev
   ```

## GitHub Pages Deployment

This repo includes a GitHub Actions workflow that builds and deploys to GitHub Pages on every push to `main`.

1. Push this project to an empty repo named `portfolio-vamsee-krishna` under your owner.
2. The workflow sets the correct base path for Project Pages and deploys automatically.
3. Your site will be available at:
   https://chinnamvamseekrishna.github.io/portfolio-vamsee-krishna/

### Optional: Configure repo variables for build-time values

If you prefer injecting values at build time (instead of `.env`), add variables in:
Settings → Secrets and variables → Actions → Variables → New repository variable

Add any `VITE_*` keys you want to use (e.g., `VITE_NAME`, `VITE_ROLE`, etc.), then export them in the `Build` step or add `env:` at the job level.

## Content

Edit `src/data/resume.ts` to populate About, Experience, Projects, Skills, and Education. The header, socials, and contact sections read from `VITE_*` environment variables.

## Commands

- `npm run dev` — start dev server
- `npm run build` — build production bundle
- `npm run preview` — preview production build locally

## Notes

- Keep your `.env` local and do not commit secrets (these are just URLs/emails here).
- If you want to host your resume file in the repo, add it to `public/resume.pdf` and set `VITE_RESUME_URL=/resume.pdf`.