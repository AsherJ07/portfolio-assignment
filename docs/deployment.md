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

## Excellent-level deployment evidence

The repository already implements two forms of work beyond a default framework deployment:

1. The hand-tuned `Dockerfile` uses separate dependency, build, and minimal runtime stages; pins the Node runtime; installs from the lockfile; ships Next.js standalone output; runs as a dedicated non-root user; honors Cloud Run's `PORT`; binds to `0.0.0.0`; and includes a health check.
2. The Cloud Run settings below deliberately address latency, cost control, scaling, public grading access, and request behavior instead of accepting undocumented defaults.

The rubric examples are alternatives, not a requirement to implement every example. A custom domain is therefore optional and should not be added solely for grading, especially when it would introduce DNS work or ongoing cost. To make the existing implementation conclusive grading evidence, replace the proposed values below with the observed deployed values and complete the live verification record after inspecting the service. A sanitized `gcloud run services describe` output or Cloud Run settings screenshot may be referenced as evidence, but it must not expose secrets or private contact data.

This beyond-default container/settings evidence is distinct from the assignment's separate push-triggered redeployment requirement. The latter still requires a successful deployment-branch trigger and observed Cloud Run revision.

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

## Push-triggered deployment design

GitHub Actions continues to run repository quality checks for pushes and pull requests. Deployment is handled separately by the existing Google Cloud Build repository trigger: only a push to `main` invokes the root `cloudbuild.yaml`, builds the committed Dockerfile, publishes an immutable image, and deploys it to Cloud Run. Pull-request events therefore do not deploy.

The Cloud Build service account should be replaced or reduced to the narrowest roles that still allow Artifact Registry upload, Cloud Run deployment, and use of the runtime service account. No long-lived cloud credential belongs in GitHub or this repository.

## Implemented Cloud Build pipeline

The root `cloudbuild.yaml` is the repository-owned source of truth for the existing Cloud Build trigger. On a push to `main`, it:

1. installs the locked dependencies and runs lint, strict TypeScript, tests, and the production build;
2. builds the committed multi-stage `Dockerfile`;
3. tags and pushes the image with Cloud Build's immutable `$COMMIT_SHA` value to the existing Artifact Registry image path;
4. deploys that exact image to the existing `portfolio` service in `us-central1`.

The deploy step intentionally supplies only the service, image, region, traceability labels, platform, and non-interactive flag. Existing runtime environment variables, secrets, resource limits, traffic behavior, and public access remain service configuration rather than values duplicated in source control. The `commit-sha` revision label provides an explicit source-to-revision audit trail even though deployment uses a prebuilt image.

The trigger must remain configured as follows:

- event: push to branch `main`;
- repository: `AsherJ07/portfolio-assignment`;
- configuration: Cloud Build configuration file from the repository;
- path: `/cloudbuild.yaml`;
- region: `us-central1`.

After any pipeline change, confirm the new revision's `commit-sha` label and deployed image tag match the triggering Git commit. A successful build or a “latest” revision label alone is insufficient evidence.

### 2026-11-08 stale-source incident

At 19:12 EST, GitHub `main` was at `fd46458`, but the public Cloud Run revision receiving 100% of traffic reported source commit `f6bfa84`. The connected `main` trigger was configured to read `/cloudbuild.yaml`, which did not exist in that source revision. The public site consequently remained healthy while serving older code. This repository-owned configuration repairs that missing contract; successful production repair remains pending the post-merge trigger and public verification.

The currently observed service allocation was 1 vCPU, 512 MiB memory, concurrency 80, and a 300-second timeout. These observed values should be deliberately reviewed against the recommendations above after the source repair; changing them is a separate cloud action, not part of this pull request.

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

1. Cloud Build trigger and step logs for the expected Git commit;
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

Recommended non-sensitive evidence fields:

| Field | Observed value |
| --- | --- |
| GCP project identifier | Pending student confirmation |
| Service and region | Pending student confirmation |
| Deployment branch | Pending student confirmation |
| Commit SHA / workflow run | Pending |
| Cloud Run revision / image digest | Pending |
| CPU / memory / min-max instances / concurrency / timeout | Pending observed service settings |
| Public HTTPS URL | Pending |
| `/api/health`, home, direct navigation, 404, assets, and contact | Pending production verification |

Keep the public service running and unchanged until grading is complete.
