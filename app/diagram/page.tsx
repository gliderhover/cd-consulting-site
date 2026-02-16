import { cookies } from "next/headers";
import GateForm from "./GateForm";

export default async function DiagramPage() {
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("cd_diag_access")?.value === "true";

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Diagram
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Interactive Diagram
          </h1>
          <p className="mt-3 text-slate-600">
            Explore the interactive decision map in a dedicated view.
          </p>
        </div>
        <a
          href="/"
          className="inline-flex w-fit items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 hover:border-slate-400 hover:text-slate-900"
        >
          Back to Home
        </a>
      </div>

      {hasAccess ? (
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <iframe
            title="Interactive diagram"
            src="/diagram/file"
            className="h-[70vh] w-full sm:h-[75vh] lg:h-[80vh]"
            loading="lazy"
            scrolling="yes"
          />
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Access the interactive decision map
          </h2>
          <p className="mt-3 text-slate-600">
            Share a few details to unlock access instantly.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <div className="relative">
              <img
                src="/diagram-preview.png"
                alt="Diagram preview"
                className="h-[260px] w-full object-cover blur-md sm:h-[320px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/35">
                <div className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm">
                  Request access to view the interactive diagram
                </div>
              </div>
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
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

          <div className="mt-6">
            <GateForm />
          </div>
        </div>
      )}
    </main>
  );
}
