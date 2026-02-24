"use client";

import { useState } from "react";

type View = "market" | "value";

export default function HowWeCompare() {
  const [activeView, setActiveView] = useState<View>("market");

  return (
    <div className="w-full text-slate-900">
      {/* Header & Toggle */}
      <div className="mb-12 w-full text-center">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">How We Compare</h2>

        {/* Tab Switcher */}
        <div className="relative inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
          <button
            onClick={() => setActiveView("market")}
            className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ease-out sm:px-8 ${
              activeView === "market"
                ? "bg-[#333333] text-[#FAF6F1]"
                : "bg-transparent text-[#5E5E5E] hover:text-[#333333]"
            }`}
          >
            The Current Market
          </button>
          <button
            onClick={() => setActiveView("value")}
            className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ease-out sm:px-8 ${
              activeView === "value"
                ? "bg-[#333333] text-[#FAF6F1]"
                : "bg-transparent text-[#5E5E5E] hover:text-[#333333]"
            }`}
          >
            Our Value Prop
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative mx-auto w-full max-w-2xl pb-20">
        {/* VIEW A: THE CURRENT MARKET */}
        <div
          className={`w-full transition-opacity duration-400 ${
            activeView === "market" ? "block animate-fade-in" : "hidden"
          }`}
        >
          {/* Card 1 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#333333] sm:text-sm">
              1. Reality
            </h3>
            <div className="text-base leading-relaxed text-[#5E5E5E]">
              Messy daily life: leases, people, costs, carbon, and risk changing across a global
              portfolio.
              <span className="mt-4 block rounded-r-md border-l-4 border-[#E2E2E2] bg-[#E2E2E2]/20 py-1 pl-4 font-semibold text-gray-500">
                Reality is noisy. Systems look away.
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-2">
            <svg
              className="h-8 w-6 text-[#E2E2E2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#333333] sm:text-sm">
              2. Systems of Record
            </h3>
            <div className="text-base leading-relaxed text-[#5E5E5E]">
              IWMS, ERP, HR, and FM tools log history in silos: tickets, invoices, headcount, and
              lease data.
              <span className="mt-4 block rounded-r-md border-l-4 border-[#E2E2E2] bg-[#E2E2E2]/20 py-1 pl-4 font-semibold text-gray-500">
                Great for &quot;what happened,&quot; useless for &quot;what should we do?&quot;
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-2">
            <svg
              className="h-8 w-6 text-[#E2E2E2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#333333] sm:text-sm">
              3. Descriptors
            </h3>
            <div className="text-base leading-relaxed text-[#5E5E5E]">
              Static reports: square feet, rent per site, headcount per location, pulled monthly or
              quarterly.
              <span className="mt-4 block rounded-r-md border-l-4 border-[#E2E2E2] bg-[#E2E2E2]/20 py-1 pl-4 font-semibold text-gray-500">
                Surface-level stats. No real story.
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-2">
            <svg
              className="h-8 w-6 text-[#E2E2E2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#333333] sm:text-sm">
              4. Manual Downloads & Excel Wars
            </h3>
            <div className="text-base leading-relaxed text-[#5E5E5E]">
              Teams rip data out of systems, patch it in spreadsheets, argue about versions, and
              rebuild the same model every quarter.
              <span className="mt-4 block rounded-r-md border-l-4 border-[#E2E2E2] bg-[#E2E2E2]/20 py-1 pl-4 font-semibold text-gray-500">
                Data hell: 80% cleaning, 20% thinking.
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-2">
            <svg
              className="h-8 w-6 text-[#E2E2E2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>

          {/* Card 5 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#333333] sm:text-sm">
              5. Non-Optimal Results
            </h3>
            <div className="text-base leading-relaxed text-[#5E5E5E]">
              Big real estate bets made on partial data, gut feel, and the few metrics that were
              easiest to calculate.
              <span className="mt-4 block rounded-r-md border-l-4 border-[#E2E2E2] bg-[#E2E2E2]/20 py-1 pl-4 font-semibold text-gray-500">
                You own the outcome, but not the tools that drive it.
              </span>
            </div>
          </div>
        </div>

        {/* VIEW B: OUR VALUE PROP */}
        <div
          className={`w-full transition-opacity duration-400 ${
            activeView === "value" ? "block animate-fade-in" : "hidden"
          }`}
        >
          {/* Card 1 */}
          <div className="rounded-xl border-2 border-[#A2AB99]/20 bg-white p-6 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#333333] sm:text-sm">
              1. Reality
            </h3>
            <div className="text-base leading-relaxed text-[#333333]">
              Same messy portfolio, treated as a live dataset instead of a pile of disconnected
              reports.
              <span className="mt-4 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-4 font-semibold text-[#5A6349]">
                We start from ground truth, not system limits.
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-2">
            <svg
              className="h-8 w-6 text-[#A2AB99]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border-2 border-[#A2AB99]/20 bg-white p-6 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#333333] sm:text-sm">
              2. Systems of Record
            </h3>
            <div className="text-base leading-relaxed text-[#333333]">
              Existing tools become &quot;sensors&quot; that continuously feed data into a central brain
              instead of trapping it.
              <span className="mt-4 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-4 font-semibold text-[#5A6349]">
                System-agnostic: tools record, the model decides.
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-2">
            <svg
              className="h-8 w-6 text-[#A2AB99]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border-2 border-[#A2AB99]/20 bg-white p-6 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#333333] sm:text-sm">
              3. Data Foundation
            </h3>
            <div className="text-base leading-relaxed text-[#333333]">
              A CRE-native data model stitches leases, people, costs, and carbon into one clean,
              reusable foundation.
              <span className="mt-4 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-4 font-semibold text-[#5A6349]">
                The kitchen is finally clean and automated.
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-2">
            <svg
              className="h-8 w-6 text-[#A2AB99]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl border-2 border-[#A2AB99]/20 bg-white p-6 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#333333] sm:text-sm">
              4. Descriptors
            </h3>
            <div className="text-base leading-relaxed text-[#333333]">
              Connected metrics that line up Finance, HR, Workplace, Tax, and Sustainability on one
              consistent view of the portfolio.
              <span className="mt-4 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-4 font-semibold text-[#5A6349]">
                Every number knows how it ties to P&amp;L and risk.
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-2">
            <svg
              className="h-8 w-6 text-[#A2AB99]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>

          {/* Card 5 */}
          <div className="rounded-xl border-2 border-[#A2AB99]/20 bg-white p-6 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#333333] sm:text-sm">
              5. Analytical
            </h3>
            <div className="text-base leading-relaxed text-[#333333]">
              Reusable analytical blocks that instantly answer &quot;What if we exit, resize, or
              re-stack this location?&quot;
              <span className="mt-4 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-4 font-semibold text-[#5A6349]">
                From one-off Excel models to plug-and-play analysis.
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-2">
            <svg
              className="h-8 w-6 text-[#A2AB99]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>

          {/* Card 6 */}
          <div className="rounded-xl border-2 border-[#A2AB99]/20 bg-white p-6 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#333333] sm:text-sm">
              6. Decision
            </h3>
            <div className="text-base leading-relaxed text-[#333333]">
              Leaders compare scenarios side by side and see full P&amp;L, headcount, tax, and ESG
              impact before they move.
              <span className="mt-4 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-4 font-semibold text-[#5A6349]">
                Decisions shift from &quot;best guess&quot; to &quot;best option.&quot;
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-2">
            <svg
              className="h-8 w-6 text-[#A2AB99]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>

          {/* Card 7 */}
          <div className="rounded-xl border-2 border-[#A2AB99]/20 bg-white p-6 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#333333] sm:text-sm">
              7. Outcome
            </h3>
            <div className="text-base leading-relaxed text-[#333333]">
              Cheaper footprint, happier teams, lower carbon, and a playbook you own instead of
              renting from vendors.
              <span className="mt-4 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-4 font-semibold text-[#5A6349]">
                Strategic control instead of vendor-driven chaos.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
