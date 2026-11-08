import { afterEach, describe, expect, it, vi } from "vitest";
import { POST } from "./route";

const validPayload = {
  name: "Jordan Lee",
  email: "jordan@example.com",
  message: "I would like to discuss a product analytics opportunity.",
  website: "",
  formStartedAt: Date.now() - 5_000,
};

function request(payload: unknown, address: string) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": address,
    },
    body: JSON.stringify(payload),
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_FROM_EMAIL;
  delete process.env.CONTACT_TO_EMAIL;
});

describe("POST /api/contact", () => {
  it("returns field errors for an invalid payload", async () => {
    const response = await POST(
      request({ ...validPayload, name: "", email: "invalid", message: "short" }, "test-1"),
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.fieldErrors).toMatchObject({
      name: expect.any(String),
      email: expect.any(String),
      message: expect.any(String),
    });
  });

  it("returns an honest error when delivery is not configured", async () => {
    const response = await POST(request(validPayload, "test-2"));
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body.message).toContain("not configured");
  });

  it("reports provider failure without claiming the message was sent", async () => {
    process.env.RESEND_API_KEY = "test-key";
    process.env.CONTACT_FROM_EMAIL = "portfolio@example.com";
    process.env.CONTACT_TO_EMAIL = "owner@example.com";
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 500 })));

    const response = await POST(request(validPayload, "test-3"));
    const body = await response.json();

    expect(response.status).toBe(502);
    expect(body.message).toContain("could not send");
  });

  it("returns success only after the provider accepts the message", async () => {
    process.env.RESEND_API_KEY = "test-key";
    process.env.CONTACT_FROM_EMAIL = "portfolio@example.com";
    process.env.CONTACT_TO_EMAIL = "owner@example.com";
    const provider = vi.fn().mockResolvedValue(new Response(null, { status: 200 }));
    vi.stubGlobal("fetch", provider);

    const response = await POST(request(validPayload, "test-4"));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.message).toContain("sent successfully");
    expect(provider).toHaveBeenCalledOnce();
  });
});
