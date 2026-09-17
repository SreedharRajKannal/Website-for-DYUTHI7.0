# Website for DYUTHI 7.0

React + Vite scaffold configured for deployment to GitHub Pages.

## Tech Stack

- **React** — UI library
- **Vite** — build tool & dev server
- **react-router-dom** — client-side routing (HashRouter)
- **gh-pages** — one-command deploy to GitHub Pages
- **ESLint + Prettier** — linting & formatting

## Folder Structure

```
src/
├── assets/        # Static assets (images, fonts, etc.)
├── components/    # Reusable React components
├── pages/         # Route-level page components
└── styles/        # Global and component-level CSS
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (comes with Node.js)

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Opens the dev server at [http://localhost:5173/Website-for-DYUTHI7.0/](http://localhost:5173/Website-for-DYUTHI7.0/).

### Lint & Format

```bash
npm run lint       # ESLint
npm run format     # Prettier
```

## Deployment (GitHub Pages)

The project is pre-configured to deploy to:  
**https://\<username\>.github.io/Website-for-DYUTHI7.0/**

### Deploy in one command

```bash
npm run deploy
```

This will:

1. Build the production bundle (`npm run predeploy` → `vite build`)
2. Push the `dist/` folder to the `gh-pages` branch via the `gh-pages` package

### First-time setup

Make sure the GitHub repo's **Settings → Pages** source is set to the `gh-pages` branch.
