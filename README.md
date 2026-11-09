# Asher Javaid - Product & Analytics Portfolio

An employer-facing portfolio for product management, product analytics, data science, and applied AI work. The site presents selected projects as concise case studies focused on the problem, contribution, evidence, and result.

[View the live portfolio](https://portfolio-1033708826767.us-central1.run.app/)

## Highlights

- Four career-tailored project case studies spanning applied AI, creator intelligence, multilingual fact-checking, and trend analysis
- Context-based skill indicators grounded in production, research, coursework, and delivery experience
- Responsive layouts designed for mobile, tablet, and desktop
- Accessible navigation, visible focus treatment, reduced-motion support, semantic structure, and descriptive image alternatives
- Validated contact form with spam controls, delivery feedback, and direct professional contact links
- Custom metadata, favicon, health endpoint, and polished not-found experience

## Technology

- Next.js 16 App Router and React 19
- strict TypeScript
- custom responsive CSS with documented design tokens
- Zod validation shared by the contact interface and server route
- Vitest, Testing Library, Playwright, and axe-core
- standalone Next.js runtime in a multi-stage Docker image
- GitHub Actions quality checks and commit-traceable Google Cloud Build deployment

## Architecture

- `src/app/` contains routes, metadata, global styles, health/contact handlers, the favicon, and the not-found experience.
- `src/components/` contains the focused client interaction boundary and reusable interface components.
- `src/data/portfolio.ts` keeps portfolio content typed and reviewable.
- `src/lib/contact.ts` owns shared contact validation and response types.
- `scripts/prepare-standalone.mjs` stages static assets for the standalone runtime.
- `cloudbuild.yaml` runs quality gates, builds the committed Dockerfile, publishes a commit-tagged image, and deploys that exact image to Cloud Run.

Server components are the default. Client-side JavaScript is limited to the mobile navigation and contact form state.

## Local development

Requirements: Node.js `22.16.0` or a compatible release accepted by the package engine.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

The contact form requires a Resend API key, a verified sender, and a destination address for delivery. Environment names and safe descriptions are provided in `.env.example`; secret values must remain outside source control.

## Quality commands

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e:run
```

The automated suite covers content integrity, API behavior, form interaction, navigation, responsive overflow, project media, not-found handling, reduced motion, and serious/critical accessibility violations.

## Container and deployment

The production image uses separate dependency, build, and minimal runtime stages, pins the Node runtime, ships only the standalone server output, and runs as an unprivileged user. The server honors Cloud Run's `PORT` contract and exposes `/api/health` for rollout verification.

Pushes to `main` invoke the repository-owned Cloud Build pipeline. Each deployment is tagged and labeled with the triggering commit SHA, providing a direct audit trail from source to the active Cloud Run revision.

## Engineering documentation

- [Deployment architecture and operations](docs/deployment.md)
- [Testing and verification evidence](docs/testing.md)
- [Original and revised implementation plans](docs/plans/)
- [Prompt and iteration history](docs/prompt-log.md)
- [Project rules and their evolution](AGENTS.md)
- [Rubric evidence matrix](docs/rubric-audit.md)

## Privacy and security

Credentials, private keys, local environment files, source resumes, transcripts, and assignment source documents are excluded from the repository and production image. The public portfolio omits the phone number and exposes only the professional contact channels intentionally presented on the site.
