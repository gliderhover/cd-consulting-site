"use client";

import { useEffect, useMemo, useState } from "react";

type DiagramGateProps = {
  mode: "inline" | "page";
  embedSrc?: string;
  title?: string;
  subtitle?: string;
};

type FormState = {
  email: string;
  name: string;
  company: string;
  phone: string;
  message: string;
};

const STORAGE_KEY = "diagram_unlocked";
const COOKIE_NAME = "diagram_unlocked";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

export default function DiagramGate({
  mode,
  embedSrc = "/Diagram/diagram_complete_v2.html",
  title = "Interactive Diagram",
  subtitle = "A visual map of the data foundation and how the pieces connect.",
}: DiagramGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({
    email: "",
    name: "",
    company: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) === "1";
    const cookieHit = document.cookie.includes(`${COOKIE_NAME}=1`);
    if (stored || cookieHit) {
      setIsUnlocked(true);
    }
  }, []);

  const onChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    const email = form.email.trim();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/diagram-ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          company: form.company,
          phone: form.phone,
          message: form.message,
          source: "diagram_gate",
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.error ?? "Unable to submit. Please try again.");
      }

      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, "true");
        document.cookie = `${COOKIE_NAME}=1; max-age=${COOKIE_MAX_AGE}; path=/; samesite=lax`;
      }
      setIsUnlocked(true);
      setSuccess("Access unlocked. Loading the diagram...");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to unlock.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-2 max-w-3xl text-base text-slate-600 sm:text-lg">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/diagram"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 hover:border-slate-400 hover:text-slate-900"
          >
            Open full screen
          </a>
        </div>
      </div>

      {isUnlocked ? (
        <div className="overflow-hidden rounded-b-2xl">
          <div className="aspect-[16/9] w-full">
            <iframe
              title="Interactive diagram"
              src={embedSrc}
              className="h-full w-full"
              loading="lazy"
              scrolling="yes"
            />
          </div>
        </div>
      ) : (
        <div className="px-6 py-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <button
              type="submit"
              className="relative block w-full text-left"
              aria-label="Request access to view the interactive diagram"
            >
              <img
                src="/diagram-preview.png"
                alt="Diagram preview"
                className="h-[220px] w-full object-cover blur-md sm:h-[280px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/35">
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm">
                  Request access to view the interactive diagram
                </span>
              </div>
            </button>
          </div>

          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
              <span>See how the data foundation connects to decisions.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
              <span>Explore the semantic model and its key layers.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
              <span>Use the map to align stakeholders quickly.</span>
            </li>
          </ul>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
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
                Name
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange("name")}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                  placeholder="Your name"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-700">
                Company
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={onChange("company")}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                  placeholder="Company"
                />
              </label>
              <label className="text-sm text-slate-700">
                Phone (optional)
                <input
                  type="text"
                  value={form.phone}
                  onChange={onChange("phone")}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                  placeholder="Phone"
                />
              </label>
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
        </div>
      )}
    </div>
  );
}
