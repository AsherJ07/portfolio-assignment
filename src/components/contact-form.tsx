"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import type { ContactField, ContactResponse } from "@/lib/contact";

type SubmissionState =
  | { status: "idle" }
  | { status: "pending" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<ContactField, string>>
  >({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmission({ status: "pending" });
    setFieldErrors({});

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as ContactResponse;

      if (!response.ok) {
        setFieldErrors(data.fieldErrors ?? {});
        setSubmission({ status: "error", message: data.message });
        return;
      }

      formRef.current?.reset();
      setStartedAt(Date.now());
      setSubmission({ status: "success", message: data.message });
    } catch {
      setSubmission({
        status: "error",
        message:
          "The message could not be sent because of a network error. Please email me directly instead.",
      });
    }
  }

  const isPending = submission.status === "pending";

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="contact-form__heading">
        <h3>Send a message</h3>
        <p>Fields marked required must be completed.</p>
      </div>

      <div className="form-row">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          minLength={2}
          maxLength={80}
          required
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
        />
        {fieldErrors.name ? (
          <p className="field-error" id="contact-name-error">
            {fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div className="form-row">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
        />
        {fieldErrors.email ? (
          <p className="field-error" id="contact-email-error">
            {fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div className="form-row">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          minLength={20}
          maxLength={2_000}
          required
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={
            fieldErrors.message
              ? "contact-message-help contact-message-error"
              : "contact-message-help"
          }
        />
        <p className="field-help" id="contact-message-help">
          Please include the role, problem, or idea you would like to discuss.
        </p>
        {fieldErrors.message ? (
          <p className="field-error" id="contact-message-error">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input name="formStartedAt" type="hidden" value={startedAt} readOnly />

      <button className="button button--primary form-submit" type="submit" disabled={isPending}>
        {isPending ? "Sending…" : "Send message"}
      </button>

      <div className="form-status" aria-live="polite" aria-atomic="true">
        {submission.status === "success" || submission.status === "error" ? (
          <p data-status={submission.status}>{submission.message}</p>
        ) : null}
      </div>
    </form>
  );
}
