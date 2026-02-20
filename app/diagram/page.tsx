import DiagramGate from "@/components/DiagramGate";

export default function DiagramPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Diagram
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            An AI Native Solution
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

      <div className="mt-8">
        <DiagramGate
          mode="page"
          title="An AI Native Solution"
          subtitle="Explore the interactive decision map in a dedicated full-page view."
        />
      </div>
    </main>
  );
}
