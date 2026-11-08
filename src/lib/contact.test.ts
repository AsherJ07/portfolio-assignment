import { describe, expect, it } from "vitest";
import { contactSchema, toFieldErrors } from "./contact";

describe("contactSchema", () => {
  it("accepts a complete message", () => {
    const result = contactSchema.safeParse({
      name: "Jordan Lee",
      email: "jordan@example.com",
      message: "I would like to discuss a product analytics opportunity.",
      website: "",
      formStartedAt: Date.now() - 5_000,
    });

    expect(result.success).toBe(true);
  });

  it("returns accessible field-level validation messages", () => {
    const result = contactSchema.safeParse({
      name: "",
      email: "not-an-email",
      message: "Too short",
      website: "",
      formStartedAt: Date.now(),
    });

    expect(result.success).toBe(false);
    if (result.success) return;

    expect(toFieldErrors(result.error.issues)).toEqual({
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      message: "Please share at least 20 characters so I have enough context.",
    });
  });
});
