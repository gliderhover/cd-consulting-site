"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type FormState = {
  email: string;
  name: string;
  company: string;
  message: string;
  website: string;
};

export default function GateForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    email: "",
    name: "",
    company: "",
    message: "",
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.error ?? "Unable to submit. Please try again.");
      }

      setSuccess("Access unlocked. Loading the diagram...");
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-slate-700">
          Email
          <input
            type="email"
            required
            value={form.email}
            onChange={onChange("email")}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
            placeholder="you@company.com"
          />
        </label>
        <label className="text-sm text-slate-700">
          Name (optional)
          <input
            type="text"
            value={form.name}
            onChange={onChange("name")}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
            placeholder="Your name"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-slate-700">
          Company (optional)
          <input
            type="text"
            value={form.company}
            onChange={onChange("company")}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
            placeholder="Company"
          />
        </label>
        <div className="sr-only" aria-hidden="true">
          <label>
            Website
            <input type="text" value={form.website} onChange={onChange("website")} />
          </label>
        </div>
      </div>

      <label className="text-sm text-slate-700">
        Message (optional)
        <textarea
          value={form.message}
          onChange={onChange("message")}
          className="mt-1 min-h-[120px] w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
          placeholder="What are you trying to decide?"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Unlocking..." : "Unlock diagram"}
        </button>
        <a
          href="https://outlook.office.com/book/Demo@consultcd.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
        >
          Book a demo
        </a>
      </div>

      {success ? <p className="text-sm text-emerald-600">{success}</p> : null}
      {error ? <p className="text-sm text-rose-600">{error}</p> : null}
    </form>
  );
}
