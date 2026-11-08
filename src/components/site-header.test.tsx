import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./site-header";

describe("SiteHeader", () => {
  it("opens, closes, and restores focus for the mobile navigation", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: "Open navigation" });
    await user.click(menuButton);

    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    await user.keyboard("{Escape}");

    expect(menuButton).toHaveAccessibleName("Open navigation");
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveFocus();
  });
});
