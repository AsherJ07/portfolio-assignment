# Cloud Build Source-of-Truth Plan

**Created:** 2026-11-08 19:12 EST  
**Status:** Proposed before implementation

## Scope

- Restore push-triggered deployment from the current GitHub `main` branch.
- Ensure Cloud Build uses the committed multi-stage Dockerfile rather than buildpacks or a stale image.
- Keep the existing Cloud Run service, public URL, runtime environment variables, and traffic model intact.
- Record only non-sensitive deployment evidence.

## Assumptions

- The existing Cloud Build trigger remains connected to `AsherJ07/portfolio-assignment`, branch `main`, region `us-central1`, and repository config path `/cloudbuild.yaml`.
- The existing Artifact Registry path and Cloud Run service are valid because the current healthy revision already uses them.
- The build service account retains the permissions that previously allowed successful builds and Cloud Run deployments.

## User decisions needed

- The student must review and merge the deployment pull request.
- The student must rotate the Resend credential that was displayed in plaintext by the Cloud Run environment-variable panel and should migrate it to Secret Manager.
- Any IAM expansion required by a failed build remains a student-approved cloud change.

## Architecture

1. Cloud Build checks out the triggering Git commit.
2. Docker builds the root multi-stage `Dockerfile` and tags the image with `$COMMIT_SHA`.
3. Cloud Build pushes that immutable commit tag to the existing Artifact Registry path.
4. `gcloud run deploy` updates the existing `portfolio` service in `us-central1` to that image while preserving unspecified service configuration.

## Data and content needs

- No portfolio content changes.
- No credentials, private inboxes, or secret values in the build configuration or documentation.

## Implementation phases

1. Add a root `cloudbuild.yaml` using Google’s documented build, push, and deploy pattern.
2. Add safe substitutions for region, service, repository path, and image path.
3. Validate YAML structure and repository quality checks.
4. Update deployment and testing documentation with observed non-sensitive evidence and the remaining trigger verification.
5. Push a separate branch and open a professional review pull request.

## Risks

- The trigger service account may lack Artifact Registry Writer, Cloud Run Admin/Developer, Service Account User, or log-writing permissions.
- A failed build must not be described as a successful deployment.
- Explicit deployment flags could unintentionally overwrite working service configuration, so the deploy step will set only image, service, region, platform, and quiet mode.
- The plaintext provider key visible in Cloud Run must be rotated independently of this pipeline repair.

## Tests

- Parse `cloudbuild.yaml` as YAML.
- Run `npm run lint`, `npm run typecheck`, `npm test -- --run`, and `npm run build`.
- Inspect the generated image path and deploy target for exact project/service alignment.
- After merge: observe a successful trigger for the merge commit, verify the Cloud Run source commit and image digest, and test the public site and `/api/health`.

## Deployment work

- Target service: `portfolio`.
- Target region: `us-central1`.
- Target Artifact Registry path: the existing `cloud-run-source-deploy/asherj07-portfolio-assignment/portfolio` image path.
- The trigger remains branch-scoped to `main` and should use `/cloudbuild.yaml` from the repository.

## Rubric acceptance criteria

- Pushes to `main` build the committed Dockerfile and deploy the exact triggering commit.
- The repository documents a reproducible, hand-tuned container pipeline rather than relying on undocumented defaults.
- Public service verification records the commit, revision, image, URL, health, and known limitations without secrets.
- No claim of completion until the trigger and public revision are observed.
