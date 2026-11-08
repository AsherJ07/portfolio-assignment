import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const projectRoot = process.cwd();
const standaloneRoot = join(projectRoot, ".next", "standalone");

if (!existsSync(standaloneRoot)) {
  throw new Error("Standalone output is missing. Run `next build` before staging assets.");
}

const staticSource = join(projectRoot, ".next", "static");
const staticTarget = join(standaloneRoot, ".next", "static");
mkdirSync(staticTarget, { recursive: true });
cpSync(staticSource, staticTarget, { recursive: true });

const publicSource = join(projectRoot, "public");
if (existsSync(publicSource)) {
  cpSync(publicSource, join(standaloneRoot, "public"), { recursive: true });
}

console.log("Staged static assets for the standalone runtime.");
