# Asher Javaid Portfolio

An employer-facing product and analytics portfolio built for Purdue MIS 58710 IA 3. The application presents selected work as evidence-led case studies and is designed for deployment to Google Cloud Run.

## Current status

The local application, responsive experience, contact pipeline, and production build are implemented and tested. Container execution, real contact delivery, private GitHub-triggered Cloud Run deployment, Lighthouse/accessibility completion, and public HTTPS verification remain pending. See [the rubric audit](docs/rubric-audit.md) for the current evidence status.

## Stack

- Next.js 16 App Router and React 19
- strict TypeScript
- custom responsive CSS and original inline SVG visuals
- Zod validation shared by the contact UI/API
- Vitest and Testing Library
- standalone Next.js runtime and multi-stage Dockerfile
- GitHub Actions quality checks

## Local setup

Requirements: Node.js `22.16.0` or another compatible Node version accepted by the package engine.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

The form fails honestly until a delivery provider is configured. Do not place real secrets in `.env.example` or source control.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint with zero warnings allowed |
| `npm run typecheck` | Run strict TypeScript checking without emit |
| `npm test` | Run unit, content, interaction, and API tests |
| `npm run build` | Build and stage self-contained standalone output |
| `npm start` | Run the standalone production server on `PORT` |
| `npm run check` | Run lint, typecheck, tests, and build |

## Architecture

- `src/app/` contains routes, metadata, global styles, health/contact handlers, favicon, and not-found experience.
- `src/components/` contains the small client interaction boundary and reusable visuals/form UI.
- `src/data/portfolio.ts` keeps portfolio claims typed and auditable.
- `src/lib/contact.ts` owns shared validation and response types.
- `scripts/prepare-standalone.mjs` stages static assets into the standalone runtime.
- `docs/` records plans, prompts, tests, rubric status, rule evolution, and deployment work.

Server components are the default. Client JavaScript is limited to the mobile navigation and contact form state. Project visuals are original illustrations and are explicitly not presented as product screenshots.

## Quality commands

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Observed results and limitations belong in [docs/testing.md](docs/testing.md); a checklist alone is not considered evidence.

## Documentation

- [Original plan](docs/plans/01-original-plan.md)
- [Prompt-strategy revision](docs/plans/02-prompt-strategy-and-rubric-control.md)
- [Prompt log](docs/prompt-log.md)
- [Testing evidence](docs/testing.md)
- [Excellent-level rubric audit](docs/rubric-audit.md)
- [Deployment guide](docs/deployment.md)
- [Rules evolution](docs/rules-evolution.md)

## Privacy and source documents

Assignment source documents, resumes, and transcripts are intentionally outside this repository. No credential values should be committed. Phone number is omitted from the public UI; public email and LinkedIn details still require final student confirmation.

## Reflection

The student's assignment reflection is intentionally out of scope and is not created or edited by this project.
