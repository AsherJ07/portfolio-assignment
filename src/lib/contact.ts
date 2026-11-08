import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Please keep your name under 80 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Please keep your email under 254 characters."),
  message: z
    .string()
    .trim()
    .min(20, "Please share at least 20 characters so I have enough context.")
    .max(2_000, "Please keep your message under 2,000 characters."),
  website: z.string().max(0, "Spam check failed."),
  formStartedAt: z.coerce.number().int().positive(),
});

export type ContactPayload = z.infer<typeof contactSchema>;

export type ContactField = "name" | "email" | "message";

export type ContactResponse = {
  message: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
};

export function toFieldErrors(
  issues: readonly z.core.$ZodIssue[],
): Partial<Record<ContactField, string>> {
  const errors: Partial<Record<ContactField, string>> = {};

  for (const issue of issues) {
    const field = issue.path[0];
    if ((field === "name" || field === "email" || field === "message") && !errors[field]) {
      errors[field] = issue.message;
    }
  }

  return errors;
}
