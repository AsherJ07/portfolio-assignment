import { contactSchema, toFieldErrors, type ContactResponse } from "@/lib/contact";

export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MINIMUM_COMPLETION_MS = 1_500;

type RateLimitRecord = { count: number; resetAt: number };
const requestCounts = new Map<string, RateLimitRecord>();

function json(body: ContactResponse, status: number) {
  return Response.json(body, { status });
}

function getClientAddress(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(address: string, now: number) {
  const current = requestCounts.get(address);

  if (!current || current.resetAt <= now) {
    requestCounts.set(address, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function getDeliveryConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) return null;
  return { apiKey, from, to };
}

export async function POST(request: Request) {
  const now = Date.now();
  const address = getClientAddress(request);

  if (isRateLimited(address, now)) {
    return json(
      {
        message:
          "Too many messages were submitted from this connection. Please wait 15 minutes or email me directly.",
      },
      429,
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ message: "The form data could not be read. Please try again." }, 400);
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return json(
      {
        message: "Please correct the highlighted fields and try again.",
        fieldErrors: toFieldErrors(parsed.error.issues),
      },
      400,
    );
  }

  if (now - parsed.data.formStartedAt < MINIMUM_COMPLETION_MS) {
    return json(
      { message: "The form was submitted too quickly. Please review your message and try again." },
      400,
    );
  }

  const delivery = getDeliveryConfig();
  if (!delivery) {
    return json(
      {
        message:
          "Form delivery is not configured yet. Please use the email link beside this form.",
      },
      503,
    );
  }

  let providerResponse: Response;
  try {
    providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${delivery.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: delivery.from,
        to: [delivery.to],
        reply_to: parsed.data.email,
        subject: `Portfolio message from ${parsed.data.name}`,
        text: [
          `Name: ${parsed.data.name}`,
          `Email: ${parsed.data.email}`,
          "",
          parsed.data.message,
        ].join("\n"),
      }),
    });
  } catch {
    return json(
      {
        message:
          "The delivery service could not be reached. Please email me directly instead.",
      },
      502,
    );
  }

  if (!providerResponse.ok) {
    return json(
      {
        message:
          "The delivery service could not send your message. Please email me directly instead.",
      },
      502,
    );
  }

  return json(
    { message: "Your message was sent successfully. Thank you—I’ll be in touch." },
    200,
  );
}
