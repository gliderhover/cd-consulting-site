"use client";

import { useState } from "react";

export default function DiagramSection() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="diagram" className="scroll-mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Interactive Diagram</h2>
              <p className="mt-2 max-w-3xl text-slate-600">
                A visual map of the data foundation and how the pieces connect.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="/Diagram/diagram_complete_v2.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 hover:border-slate-400 hover:text-slate-900"
              >
                Open diagram
              </a>
            </div>
          </div>

          {!loaded ? (
            <div className="px-6 py-4 text-sm text-slate-500">
              Loading diagram…
              <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                <div className="h-2 w-1/3 rounded-full bg-slate-200" />
              </div>
            </div>
          ) : null}

          <div className="overflow-hidden rounded-b-2xl">
            <iframe
              title="Interactive diagram"
              src="/Diagram/diagram_complete_v2.html"
              className="h-[620px] w-full sm:h-[700px] lg:h-[860px]"
              loading="lazy"
              scrolling="yes"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
