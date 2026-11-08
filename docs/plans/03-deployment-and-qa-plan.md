# Deployment and QA Revision Plan

**Created:** 2026-11-08 16:19 EST

**Status:** Active revision after standalone verification and container-runtime discovery

**Relationship to earlier plans:** Preserves `01-original-plan.md` unchanged and supplements the prompt/rubric controls in `02-prompt-strategy-and-rubric-control.md`.

## 1. Scope

Finish local quality assurance, verify the multi-stage image, configure an authorized private-GitHub push trigger, deploy to an approved Google Cloud Run target, and collect direct evidence for every remaining Excellent-level gate. Reflection remains entirely out of scope.

## 2. Assumptions

- The current Next.js application and contact provider adapter remain the deployment baseline unless student feedback changes content or design.
- The standalone runtime is the production process because it minimizes the runtime image and has been verified locally with staged static assets.
- Docker Desktop is the likely local container runtime on this Mac, but installation requires student approval.
- GitHub Actions with Workload Identity Federation is the preferred deployment path unless the course requires a different mechanism.
- Proposed Cloud Run settings remain recommendations, not authorization.

## 3. User decisions needed

1. Approve or decline installation/use of Docker Desktop for local image verification.
2. Confirm the private GitHub repository and deployed branch.
3. Confirm the GCP project ID, approved region, billing/credit context, Artifact Registry repository, and Cloud Run service name.
4. Confirm public unauthenticated access and proposed CPU/memory/scaling/cost settings.
5. Approve Resend or choose another contact provider, sender identity, and private destination.
6. Confirm public email/LinkedIn, target-role priority, case-study wording, and any project links/screenshots.

## 4. Architecture

- Next.js standalone server on Node.js `22.16.0`, binding `0.0.0.0:$PORT`.
- Multi-stage image: locked dependencies, build/staging, minimal non-root runtime.
- `/api/health` for image and rollout checks.
- Contact API with shared validation, spam controls, Resend adapter, and server-only secrets.
- GitHub quality workflow on pushes/pull requests; future deploy workflow restricted to the confirmed branch and never pull requests.
- Recommended WIF authentication, Artifact Registry image, and Cloud Run immutable revision.

## 5. Data and content needs

- Student approval of public contact details and resume-derived case-study claims.
- Verified project repository/demo links where available.
- Real screenshots only if supplied and approved; otherwise retain explicitly labeled original illustrations.
- Canonical public URL after deployment for metadata and submission.
- No resumes, transcript, assignment source documents, secrets, or private contact-form messages in repository artifacts.

## 6. Implementation phases

### Phase 1 - Local QA completion

- Run automated accessibility tooling and manual keyboard/focus/zoom/reduced-motion pass.
- Validate contrast, link text, landmarks, labels, errors, and target sizes.
- Crawl internal/external links and images; proofread all copy.
- Inspect browser/server console output and production runtime routes.
- Run Lighthouse or document a concrete tooling limitation.

### Phase 2 - Container verification

**Blocked on container-runtime approval/availability.**

- Build the committed Dockerfile without cache masking failures.
- Run on an alternate local port with a controlled environment file.
- Verify non-root UID, `PORT`, health, home, static assets, missing route, contact validation, provider failure, logs, and clean shutdown.
- Scan image/dependencies where tooling is available and record size/digest.

### Phase 3 - Content and delivery approval

**Blocked on student decisions.**

- Apply student design/content feedback and save another plan only if the approach materially changes.
- Configure provider secrets outside source control.
- Test real delivery to the approved inbox and a controlled provider failure.

### Phase 4 - Authorized GitHub/GCP setup

**Blocked on external-resource authorization.**

- Confirm repository privacy and branch.
- Configure least-privilege WIF and service accounts.
- Add branch-only deploy workflow and protected environment if available.
- Build/push immutable image and deploy deliberate Cloud Run settings.
- Make the service public only after the student confirms the target/impact.

### Phase 5 - Public verification and archive

- Observe push-triggered workflow, Cloud Run revision, logs, and health.
- Verify public HTTPS home, direct navigation/refresh, 404, assets, form delivery, and console.
- Collect Lighthouse results against production.
- Record URL, revision, image digest, settings, rollback, and timestamp.
- Produce a clean repository archive excluding dependencies, caches, output, credentials, source documents, and local environments.

## 7. Risks

| Risk | Mitigation |
| --- | --- |
| Docker unavailable | Ask before installation; do not claim image verification from static review |
| Standalone CSS/assets missing | Keep the tested staging script and verify assets in both local server and image |
| Deployment credentials over-scoped | Use WIF and resource-scoped roles; avoid static service-account keys |
| Unbounded Cloud Run cost | Min instances 0, capped max instances, request-based CPU, student approval |
| Broken grading service | Health check, branch quality gate, rollback procedure, keep last healthy revision |
| Contact secret or messages leak | Secret Manager/environment injection; no values/body content in source/logs |
| Rubric evidence drifts from reality | Update testing and rubric audit only from observed commands/results |

## 8. Tests

Required evidence remains:

- lint, strict typecheck, unit/component/API tests, production build, production dependency audit;
- automated accessibility plus manual keyboard/focus/zoom/contrast/reduced-motion pass;
- required and breakpoint-adjacent viewport matrix;
- link/image/metadata/spelling/console checks;
- Lighthouse 90+ targets or documented environment limitation;
- standalone and container health/routes/non-root/form states;
- GitHub trigger, Cloud Run revision/logs, public HTTPS, direct refresh, 404, and real contact delivery.

## 9. Deployment work

Use the settings and setup/rollback guidance in `docs/deployment.md`. Finalize exact branch, project, region, service, registry, identities, roles, secrets, and scaling only after student confirmation. Record the actual final values and tradeoffs, not merely recommendations.

## 10. Excellent-level acceptance criteria

All original acceptance criteria remain binding. This revision emphasizes that the following are still mandatory before completion:

- local container image build/run and non-root health evidence;
- real, approved contact success and failure testing;
- student-reviewed content and a genuine follow-up design/content prompt;
- automated/manual accessibility and production Lighthouse evidence;
- private GitHub push-triggered Cloud Run deployment with deliberate documented settings;
- verified public HTTPS URL and direct-route/404/form behavior;
- complete prompt evolution, plans, rules ledger, testing/deployment documentation, and clean archive.

