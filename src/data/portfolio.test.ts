import { describe, expect, it } from "vitest";
import { featuredProjects, skillGroups } from "./portfolio";

describe("portfolio content", () => {
  it("includes at least three complete case studies", () => {
    expect(featuredProjects.length).toBeGreaterThanOrEqual(3);

    for (const project of featuredProjects) {
      expect(project.problem.trim()).not.toBe("");
      expect(project.contribution.trim()).not.toBe("");
      expect(project.result.trim()).not.toBe("");
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.evidence.length).toBeGreaterThan(0);
    }
  });

  it("describes proficiency with human-readable context", () => {
    for (const group of skillGroups) {
      for (const item of group.items) {
        expect(item.context.trim().length).toBeGreaterThan(10);
        expect(item.context).not.toMatch(/\b\d{1,3}%\b/);
      }
    }
  });
});
