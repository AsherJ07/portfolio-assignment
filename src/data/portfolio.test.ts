import { describe, expect, it } from "vitest";
import { featuredProjects, skillGroups } from "./portfolio";

describe("portfolio content", () => {
  it("includes at least four complete case studies", () => {
    expect(featuredProjects.length).toBeGreaterThanOrEqual(4);

    for (const project of featuredProjects) {
      expect(project.problem.trim()).not.toBe("");
      expect(project.contribution.trim()).not.toBe("");
      expect(project.result.trim()).not.toBe("");
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.evidence.length).toBeGreaterThan(0);
    }
  });

  it("uses authentic project evidence and only genuine links", () => {
    const creator = featuredProjects.find(
      (project) => project.slug === "creator-intelligence-platform",
    );
    const fashion = featuredProjects.find(
      (project) => project.slug === "ai-fashion-trend-radar",
    );

    expect(creator?.visual.kind).toBe("screenshot");
    expect(creator?.link?.href).toBe(
      "https://github.com/AsherJ07/purdue-youtube-ip-new",
    );
    expect(fashion?.visual.kind).toBe("screenshot");
    expect(fashion?.link).toBeUndefined();
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
