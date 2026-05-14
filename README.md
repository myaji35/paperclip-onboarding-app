# Onboarding App

A boring hello-world that serves as the engineering foundation: lint, typecheck, test, CI on every PR, and auto-deploy on `main`.

## Stack

- **Node 22** (`.nvmrc`)
- **TypeScript** in strict mode
- **Vite** for build/dev (static site)
- **Vitest** for tests
- **ESLint** + `typescript-eslint` for lint
- **GitHub Actions** for CI and deploy
- **GitHub Pages** for the live URL

These were picked as boring defaults — zero infra cost, real URL, every check is the project-standard command.

## Run locally

```sh
nvm use            # or install Node 22 some other way
npm ci
npm run dev        # http://localhost:5173
```

## Checks

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

CI runs all of the above on every pull request (`.github/workflows/ci.yml`).

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the static site and publishes it to GitHub Pages.

The live URL is the GitHub Pages URL for this repo:

**https://myaji35.github.io/paperclip-onboarding-app/**

The same URL is printed in the Actions run summary under the `deploy` job, so future renames of the repo or owner update automatically there.

> First-time setup (already done for this repo): in repo Settings → Pages, set **Source = GitHub Actions**. After that, deploys are automatic.

## Layout

```
.
├── .github/workflows/   # CI + deploy
├── src/
│   ├── greeting.ts      # tiny example module
│   ├── greeting.test.ts # vitest example
│   └── main.ts          # mounts hello-world into #app
├── index.html
├── eslint.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```
