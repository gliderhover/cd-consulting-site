"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "diagram_unlocked";
const COOKIE_NAME = "diagram_unlocked";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

type FormState = {
  email: string;
  name: string;
  company: string;
  phone: string;
  message: string;
};

export default function DiagramViewerPage() {
  const [hasAccess, setHasAccess] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
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
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) === "true";
    const cookieHit = document.cookie.includes(`${COOKIE_NAME}=1`);
    if (stored || cookieHit) {
      setHasAccess(true);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const handleFullscreenChange = () => {
      const doc = document as Document & {
        webkitFullscreenElement?: Element | null;
      };
      setIsFullscreen(Boolean(doc.fullscreenElement || doc.webkitFullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!viewportRef.current) return;
    const doc = document as Document & {
      webkitExitFullscreen?: () => Promise<void> | void;
      webkitFullscreenElement?: Element | null;
    };
    const element = viewportRef.current as HTMLDivElement & {
      webkitRequestFullscreen?: () => Promise<void> | void;
    };

    if (doc.fullscreenElement || doc.webkitFullscreenElement) {
      if (doc.exitFullscreen) {
        void doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      }
      return;
    }

    if (element.requestFullscreen) {
      void element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
  };

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
          source: "diagram_viewer",
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
      setHasAccess(true);
      setSuccess("Access unlocked. Loading the diagram...");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to unlock.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isReady || !hasAccess) {
    return (
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-2xl px-5 py-10">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="px-6 py-5">
              <h1 className="text-2xl font-semibold text-slate-900">An AI Native Solution</h1>
              <p className="mt-2 text-sm text-slate-600">
                Request access to view the interactive diagram.
              </p>
            </div>
            <div className="border-t border-slate-200 px-6 py-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <img
                  src="/diagram-preview.png"
                  alt="Diagram preview"
                  className="min-h-[420px] w-full object-cover blur-md"
                />
              </div>
              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
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
                    value={form.name}
                    onChange={onChange("name")}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm text-slate-700">
                  Company
                  <input
                    type="text"
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
                <label className="text-sm text-slate-700">
                  Message (optional)
                  <textarea
                    value={form.message}
                    onChange={onChange("message")}
                    className="mt-1 min-h-[120px] w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                    placeholder="What are you trying to decide?"
                  />
                </label>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Unlocking..." : "Unlock diagram"}
                </button>
                {success ? <p className="text-sm text-emerald-600">{success}</p> : null}
                {error ? <p className="text-sm text-rose-600">{error}</p> : null}
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const headerHeight = 52;
  return (
    <main
      className="flex min-h-screen flex-col bg-slate-950 text-white"
      style={{ minHeight: "100svh" }}
    >
      <header
        className="flex items-center justify-between border-b border-white/10 px-4 py-3"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <Link
          href="/#diagram"
          className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 hover:bg-white/10"
        >
          Back to Home
        </Link>
        <button
          type="button"
          onClick={toggleFullscreen}
          className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 hover:bg-white/10"
        >
          {isFullscreen ? "Exit Full Screen" : "Full Screen"}
        </button>
      </header>
      <div
        ref={viewportRef}
        className="diagram-fs"
        style={{
          height: `calc(100svh - ${headerHeight}px)`,
          minHeight: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <iframe
          title="Interactive diagram"
          src="/Diagram/diagram_complete_v2.html"
          className="h-full w-full"
          loading="lazy"
          allowFullScreen
          scrolling="yes"
        />
      </div>
    </main>
  );
}
