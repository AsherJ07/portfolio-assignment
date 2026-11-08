# Deployment Guide

This guide separates implemented repository configuration from student-owned cloud setup and final verification. No cloud deployment is claimed until a GitHub-triggered rollout and the public HTTPS service are directly observed.

## Runtime architecture

The application uses Next.js standalone output and a multi-stage container:

1. `dependencies` installs the exact lockfile with `npm ci`;
2. `builder` produces the Next.js application and stages static/public assets inside standalone output;
3. `runtime` copies only the self-contained server output into a pinned Node.js `22.16.0` Alpine image;
4. the server runs as the unprivileged `nextjs` user on the `PORT` environment variable and binds to `0.0.0.0`;
5. `/api/health` supports local and Cloud Run verification.

The build context excludes repository history, documentation, design guidance, local environments, credentials, caches, tests reports, archives, and source assignment documents.

## Local production server

```bash
npm ci
npm run build
PORT=8080 npm start
curl --fail http://localhost:8080/api/health
```

`npm run build` copies `.next/static` and an optional `public/` directory into `.next/standalone` so the same self-contained runtime layout is used locally and in the container.

## Local container verification

Docker is not installed in the current environment as of 2026-11-08. These commands are required after the student approves and installs Docker Desktop or another compatible runtime:

```bash
docker build --tag asher-javaid-portfolio:local .
docker run --rm --name asher-portfolio-local -p 8080:8080 \
  --env-file .env.local asher-javaid-portfolio:local
curl --fail http://localhost:8080/api/health
```

Also verify `/`, `/api/contact`, a missing route, direct refresh, CSS/assets, runtime logs, and the non-root process before using the image for deployment.

## Proposed Cloud Run settings

These are conservative recommendations for a low-traffic student portfolio. They are proposals until the student confirms the GCP project, region, billing context, and cost tolerance.

| Setting | Proposed value | Rationale and tradeoff |
| --- | --- | --- |
| Region | Student choice; nearest approved US region | Lower latency and simpler course alignment; region affects resource location |
| Authentication | Public/unauthenticated | Required for grading; public exposure means contact abuse controls matter |
| CPU | 1 vCPU | Sufficient for a small Next.js server without overprovisioning |
| Memory | 512 MiB | Conservative starting point for Node/Next; verify after deployment |
| Minimum instances | 0 | Avoids idle instance cost but permits cold starts |
| Maximum instances | 3 | Caps unexpected scaling/cost while supporting grading traffic |
| Concurrency | 40 | Balances a small CPU allocation against lightweight portfolio requests |
| Request timeout | 60 seconds | More than sufficient for page and email-provider requests |
| CPU allocation | Request-based | Minimizes idle cost for a low-traffic service |
| Ingress | All | Required for the public grading URL |
| Port | `8080` | Cloud Run convention; application honors `PORT` |

Do not enable a custom domain, minimum instances above zero, global rate-limit datastore, or other ongoing paid resource without student approval.

## Contact environment and secrets

The deployed service requires:

- `NEXT_PUBLIC_SITE_URL`: canonical public HTTPS URL;
- `CONTACT_FROM_EMAIL`: provider-approved sender identity;
- `CONTACT_TO_EMAIL`: private destination inbox;
- `RESEND_API_KEY`: server-only provider credential.

Never commit values. Prefer Secret Manager for `RESEND_API_KEY`. The sender and destination may be ordinary service environment variables if the student approves, though the private destination should not be printed in public logs or documentation.

## Recommended GitHub-triggered deployment design

The exact workflow remains pending the confirmed private repository, deployment branch, GCP project, region, and course constraints. The recommended design is:

1. GitHub Actions runs the committed quality workflow on pushes and pull requests.
2. Pushes to the confirmed deployment branch run quality gates before deployment.
3. GitHub authenticates to Google Cloud through Workload Identity Federation, avoiding a long-lived service-account key.
4. The workflow builds and pushes the image to Artifact Registry.
5. The workflow deploys the immutable image reference to Cloud Run with deliberate settings.
6. A post-deploy step calls `/api/health` and the public home page over HTTPS.

Pull requests must not deploy. The deploy job should use a protected GitHub environment when available and minimal permissions (`contents: read`, `id-token: write`).

## Required Google Cloud roles

Finalize least privilege against the selected workflow, but the deployment identity typically needs narrowly scoped permissions to:

- push to the selected Artifact Registry repository;
- deploy/update the selected Cloud Run service;
- act as the selected runtime service account;
- read only the specific Secret Manager secret versions injected into the service, when deployment configuration requires it.

Avoid project-wide Owner or Editor roles. Record exact final roles after successful setup.

## Initial setup checklist

- Confirm private GitHub repository and deployment branch.
- Confirm GCP project ID, region, and billing/credit context.
- Confirm Artifact Registry repository name and Cloud Run service name.
- Confirm public access and cost/scaling settings.
- Create a dedicated runtime service account and a separate or appropriately scoped deployment identity.
- Configure Workload Identity Federation for the exact repository and branch.
- Configure secrets/environment values without printing them.
- Add the branch-triggered deployment workflow.
- Observe a successful push-triggered run and Cloud Run revision.
- Test public HTTPS home, direct anchors/routes, 404, health, static assets, form success/failure, and logs.

## Logs and troubleshooting

For a failed rollout, inspect in this order:

1. GitHub Actions quality/build/deploy step logs;
2. Artifact Registry image existence and immutable digest;
3. Cloud Run revision readiness and container startup logs;
4. `PORT`/binding behavior and `/api/health` response;
5. missing Secret Manager access or environment configuration;
6. contact-provider response status without logging message bodies or secrets.

Do not include API keys, private message content, or unnecessary visitor information in logs or screenshots.

## Rollback

If the deployment branch creates a bad revision:

1. stop further merges/pushes to the deployment branch;
2. route traffic back to the last verified healthy Cloud Run revision;
3. inspect the failed GitHub run and Cloud Run logs;
4. fix and verify locally, including the container;
5. push a corrective commit and observe a fresh successful deployment;
6. re-test the public URL before considering the incident resolved.

Do not delete the service or its last healthy revision while grading is active.

## Live verification record

Pending. At deployment time record:

- commit SHA and workflow run;
- image digest;
- Cloud Run revision and final settings;
- public HTTPS URL;
- health, home, direct-route, missing-route, static asset, and contact results;
- timestamp and any known limitation.

Keep the public service running and unchanged until grading is complete.
