"use client";

import { useState } from "react";

type View = "market" | "value";
type LayoutVariant =
  | "current"
  | "micro-grid"
  | "tabs-compact"
  | "tabs-compact-side-lower"
  | "tabs-compact-side-final";
type StyleVariant = "light" | "dark";

export default function HowWeCompare({
  layoutVariant,
  setLayoutVariant,
  styleVariant = "light",
}: {
  layoutVariant: LayoutVariant;
  setLayoutVariant: (variant: LayoutVariant) => void;
  styleVariant?: StyleVariant;
}) {
  const isDark = styleVariant === "dark";
  const [activeView, setActiveView] = useState<View>("market");
  const showTabs = layoutVariant === "current" || layoutVariant === "tabs-compact";

  // Dark mode styling
  const marketCardClass = isDark
    ? "rounded-lg border border-white/10 bg-white/5 p-3"
    : "rounded-lg border border-slate-200 bg-white p-3";
  const valueCardClass = isDark
    ? "rounded-lg border border-white/10 bg-white/5 p-3"
    : "rounded-lg border border-[#A2AB99]/30 bg-white p-3";
  const titleTextClass = isDark ? "text-white" : "text-slate-700";
  const descTextClass = isDark ? "text-white/70" : "text-slate-600";

  const microGridRows = [
    {
      label: "Reality",
      market: "Messy portfolio data; noisy signal.",
      value: "Same data, unified as a live dataset.",
    },
    {
      label: "Systems of Record",
      market: "Silos log tickets, invoices, headcount, leases.",
      value: "Tools become sensors feeding a shared model.",
    },
    {
      label: "Dashboards / Data Foundation",
      market: "Static reports by site, rent, headcount.",
      value: "CRE-native model connects leases, people, costs.",
    },
    {
      label: "Descriptors",
      market: "-",
      value: "Metrics align Finance, HR, Workplace, Tax.",
    },
    {
      label: "Manual Downloads / Analytical",
      market: "Exports + spreadsheets rebuild models.",
      value: "Reusable analytics answer \"What if\" fast.",
    },
    {
      label: "Decision",
      market: "-",
      value: "Scenario compare with P&L, tax, ESG.",
    },
    {
      label: "Non-Optimal / Outcome",
      market: "Partial data drives big bets.",
      value: "Lower cost, happier teams, owned playbook.",
    },
  ];

  const microCards = [
    { badge: "Market", title: "Reality", text: "Messy portfolio data; noisy signal." },
    { badge: "Value", title: "Reality", text: "Unified live dataset for decisions." },
    {
      badge: "Market",
      title: "Systems of Record",
      text: "Silos log tickets, invoices, headcount, leases.",
    },
    {
      badge: "Value",
      title: "Systems of Record",
      text: "Tools become sensors feeding a shared model.",
    },
    { badge: "Market", title: "Dashboards", text: "Static reports by site and headcount." },
    {
      badge: "Value",
      title: "Data Foundation",
      text: "CRE-native model connects leases, people, costs.",
    },
    { badge: "Market", title: "Manual Downloads", text: "Exports + spreadsheets rebuild models." },
    { badge: "Value", title: "Analytical", text: "Reusable analytics answer \"What if\" fast." },
    { badge: "Value", title: "Descriptors", text: "Metrics align Finance, HR, Workplace, Tax." },
    { badge: "Value", title: "Decision", text: "Scenario compare with P&L, tax, ESG." },
    { badge: "Market", title: "Non-Optimal", text: "Partial data drives big bets." },
    { badge: "Value", title: "Outcome", text: "Lower cost, happier teams, owned playbook." },
  ];

  const compactMarketCards = [
    { title: "Reality", line: "Messy portfolio data - noisy signal." },
    { title: "Systems of Record", line: "Silos log tickets, invoices, headcount, leases." },
    { title: "Dashboards", line: "Static reports by site, rent, and headcount." },
    { title: "Manual Downloads", line: "Exports + spreadsheets rebuild models." },
    { title: "Point-Solution Fatigue", line: "A cycle of 'Frankenstein' patches and shelf-ware. Teams stay reactive, buried in technical debt." },
  ];

  const compactValueCards = [
    { title: "Reality", line: "Same data, unified as a live dataset." },
    { title: "Systems of Record", line: "Tools become sensors feeding a shared model." },
    { title: "Data Foundation", line: "CRE-native model connects leases, people, costs." },
    { title: "Descriptors", line: "Metrics align Finance, HR, Workplace, Tax." },
    { title: "Analytical", line: "Reusable analytics answer \"What if\" fast." },
    { title: "Decision", line: "Scenario compare with P&L, tax, ESG." },
    { title: "Outcome", line: "Lower cost, happier teams, owned playbook." },
  ];

  const compactSideRows = [
    {
      shared: true,
      title: "Reality",
      line: "Messy daily life: leases, people, costs, carbon, and risk changing across a global portfolio. Reality is noisy. Systems don't always capture true grain.",
    },
    {
      shared: true,
      title: "Systems of Record",
      line: "IWMS, ERP, HR, and FM tools log history in silos: tickets, invoices, headcount, and lease data. Great for \"what happened,\" not designed for \"what should we do?\"",
    },
    {
      market: null,
      value: { title: "Data Foundation", line: "CRE-native model connects leases, people, costs." },
    },
    {
      market: { title: "Dashboards", line: "Static reports by site, rent, and headcount." },
      value: { title: "Descriptors", line: "Metrics align Finance, HR, Workplace, Tax." },
    },
    {
      market: { title: "Manual Downloads", line: "Exports + spreadsheets rebuild models." },
      value: { title: "Analytical", line: "Reusable analytics answer \"What if\" fast." },
    },
    {
      market: null,
      value: { title: "Decision", line: "Scenario compare with P&L, tax, ESG." },
    },
    {
      market: { title: "Point-Solution Fatigue", line: "Teams stay reactive, buried in technical debt." },
      value: { title: "Outcome", line: "Lower cost, happier teams, owned playbook." },
    },
  ];

  return (
    <div className={`w-full ${isDark ? "text-white" : "text-slate-900"}`}>
      {/* Header */}
      <div className="mb-10 w-full text-center">
        {layoutVariant !== "tabs-compact-side-lower" && layoutVariant !== "tabs-compact-side-final" && (
          <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">
            How We Compare
          </h2>
        )}

        {showTabs ? (
          <div className={`relative inline-flex rounded-full border p-1 shadow-sm ${
            isDark
              ? "border-white/20 bg-white/10 backdrop-blur"
              : "border-slate-200 bg-white"
          }`}>
            <button
              onClick={() => setActiveView("market")}
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ease-out sm:px-8 ${
                activeView === "market"
                  ? isDark
                    ? "bg-white/20 text-white"
                    : "bg-[#333333] text-[#FAF6F1]"
                  : isDark
                  ? "bg-transparent text-white/70 hover:text-white"
                  : "bg-transparent text-[#5E5E5E] hover:text-[#333333]"
              }`}
            >
              The Current Market
            </button>
            <button
              onClick={() => setActiveView("value")}
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ease-out sm:px-8 ${
                activeView === "value"
                  ? isDark
                    ? "bg-white/20 text-white"
                    : "bg-[#333333] text-[#FAF6F1]"
                  : isDark
                  ? "bg-transparent text-white/70 hover:text-white"
                  : "bg-transparent text-[#5E5E5E] hover:text-[#333333]"
              }`}
            >
              Our Value Prop
            </button>
          </div>
        ) : null}
      </div>

      {/* Main Content Container */}
      <div className={`relative mx-auto w-full max-w-2xl pb-6 ${
        isDark ? "text-white" : ""
      }`}>
        {layoutVariant === "micro-grid" ? (
          <div className={`rounded-xl p-4 shadow-sm ${
            isDark
              ? "border border-white/10 bg-white/10"
              : "border border-slate-200 bg-white"
          }`}>
            <div className="grid grid-cols-[1fr_1.2fr_1.2fr] gap-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              <div />
              <div>The Current Market</div>
              <div>Our Value Prop</div>
            </div>
            <div className="mt-4 space-y-3">
              {microGridRows.map((row) => (
                <div key={row.label} className="grid grid-cols-[1fr_1.2fr_1.2fr] gap-3">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-600">
                    {row.label}
                  </div>
                  <div className="text-xs text-slate-600">{row.market}</div>
                  <div className="text-xs text-slate-700">{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {layoutVariant === "tabs-compact" ? (
          <div
            className={`w-full transition-opacity duration-400 ${
              activeView === "market" ? "block animate-fade-in" : "hidden"
            }`}
          >
            <div className="space-y-3">
              {compactMarketCards.map((card) => (
                <div key={card.title} className={marketCardClass}>
                  <div className={`text-[11px] font-semibold uppercase tracking-widest ${titleTextClass}`}>
                    {card.title}
                  </div>
                  <div className={`mt-1 text-xs ${descTextClass}`}>{card.line}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {layoutVariant === "tabs-compact" ? (
          <div
            className={`w-full transition-opacity duration-400 ${
              activeView === "value" ? "block animate-fade-in" : "hidden"
            }`}
          >
            <div className="space-y-3">
              {compactValueCards.map((card) => (
                <div
                  key={card.title}
                  className={valueCardClass}
                >
                  <div className={`text-[11px] font-semibold uppercase tracking-widest ${titleTextClass}`}>
                    {card.title}
                  </div>
                  <div className={`mt-1 text-xs ${descTextClass}`}>{card.line}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {layoutVariant === "tabs-compact-side-lower" ? (
          <div className="space-y-3">
            {/* Column headers at the top */}
            <div className="mb-3 grid gap-3 text-[11px] font-semibold uppercase tracking-widest text-white lg:grid-cols-2">
              <div>The Current Market</div>
              <div>Our Value Prop</div>
            </div>
            {compactSideRows.map((row, index) => {
              // Render shared cards (Reality, Systems of Record) as full-width without headers
              if (row.shared) {
                return (
                  <div key={`${row.title}-${index}`}>
                    <div className={`rounded-lg border p-3 ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}>
                      <div className={`text-[11px] font-semibold uppercase tracking-widest ${titleTextClass}`}>
                        {row.title}
                      </div>
                      <div className={`mt-1 text-xs ${descTextClass}`}>{row.line}</div>
                    </div>
                  </div>
                );
              }
              // After shared cards, insert the row with split layout
              if (index === 2 && row.value) {
                return (
                  <div key={`split-row-${index}`}>
                    {/* Render the current row after headers */}
                    <div className="grid gap-3 lg:grid-cols-2">
                      <div>
                        <div className={`flex items-center rounded-lg border p-3 ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"}`}>
                          <div className={`text-[11px] font-semibold uppercase tracking-widest ${isDark ? "text-white/50" : "text-slate-400"}`}>
                            Data Foundation is Skipped
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className={valueCardClass}>
                          <div className={`text-[11px] font-semibold uppercase tracking-widest ${titleTextClass}`}>
                            {row.value.title}
                          </div>
                          <div className={`mt-1 text-xs ${descTextClass}`}>{row.value.line}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              // For non-shared rows where market is null with special text, show grayed placeholder
              if (!row.market && row.value && row.value.title === "Decision") {
                return (
                  <div key={`${row.value.title}-${index}`}>
                    <div className="grid gap-3 lg:grid-cols-2">
                      <div>
                        <div className={`flex items-center rounded-lg border p-3 ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"}`}>
                          <div className={`text-[11px] font-semibold uppercase tracking-widest ${isDark ? "text-white/50" : "text-slate-400"}`}>
                            Siloed Decision Making
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className={valueCardClass}>
                          <div className={`text-[11px] font-semibold uppercase tracking-widest ${titleTextClass}`}>
                            {row.value.title}
                          </div>
                          <div className={`mt-1 text-xs ${descTextClass}`}>{row.value.line}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              // For regular paired rows, show both side-by-side
              if (row.market) {
                return (
                  <div key={`${row.market.title}-${row.value.title}-${index}`}>
                    <div className="grid gap-3 lg:grid-cols-2">
                      <div>
                        <div className={marketCardClass}>
                          <div className={`text-[11px] font-semibold uppercase tracking-widest ${titleTextClass}`}>
                            {row.market.title}
                          </div>
                          <div className={`mt-1 text-xs ${descTextClass}`}>{row.market.line}</div>
                        </div>
                      </div>
                      <div>
                        <div className={valueCardClass}>
                          <div className={`text-[11px] font-semibold uppercase tracking-widest ${titleTextClass}`}>
                            {row.value.title}
                          </div>
                          <div className={`mt-1 text-xs ${descTextClass}`}>{row.value.line}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ) : null}

        {layoutVariant === "tabs-compact-side-final" ? (
          <div className="space-y-3">
            {/* Column headers at the top - larger font */}
            <div className="mb-4 grid gap-3 text-sm font-semibold uppercase tracking-widest text-white lg:grid-cols-2">
              <div>The Current Market</div>
              <div>Our Value Prop</div>
            </div>
            {compactSideRows.map((row, index) => {
              // Render shared cards (Reality, Systems of Record) as full-width without headers
              if (row.shared) {
                let customLine = row.line;
                if (row.title === "Reality") {
                  customLine = "Messy daily life: leases, people, costs, carbon, and risk. Systems don't always capture true grain.";
                } else if (row.title === "Systems of Record") {
                  customLine = "IWMS, ERP and HR tools built to log history in silos. Not designed for \"what should we do?\"";
                }
                return (
                  <div key={`${row.title}-${index}`}>
                    <div className={`rounded-lg border p-3 ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}>
                      <div className={`text-[11px] font-semibold uppercase tracking-widest ${titleTextClass}`}>
                        {row.title}
                      </div>
                      <div className={`mt-1 text-xs ${descTextClass}`}>{customLine}</div>
                    </div>
                  </div>
                );
              }
              // After shared cards, insert the row with split layout
              if (index === 2 && row.value) {
                return (
                  <div key={`split-row-${index}`}>
                    <div className="grid gap-3 lg:grid-cols-2">
                      <div>
                        <div className={`flex items-center rounded-lg border p-3 ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"}`}>
                          <div className={`text-[11px] font-semibold uppercase tracking-widest ${isDark ? "text-white/50" : "text-slate-400"}`}>
                            Data Foundation is Skipped
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className={`rounded-lg border p-3 ${isDark ? "border-white/50 bg-white/5" : "border-[#A2AB99]/50 bg-white"}`}>
                          <div className={`text-[11px] font-semibold uppercase tracking-widest ${titleTextClass}`}>
                            {row.value.title}
                          </div>
                          <div className={`mt-1 text-xs ${descTextClass}`}>CRE-native model connecting all dimensions.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              // For non-shared rows where market is null with special text, show grayed placeholder
              if (!row.market && row.value && row.value.title === "Decision") {
                return (
                  <div key={`${row.value.title}-${index}`}>
                    <div className="grid gap-3 lg:grid-cols-2">
                      <div>
                        <div className={`flex items-center rounded-lg border p-3 ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"}`}>
                          <div className={`text-[11px] font-semibold uppercase tracking-widest ${isDark ? "text-white/50" : "text-slate-400"}`}>
                            Siloed Decision Making
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className={`rounded-lg border p-3 ${isDark ? "border-white/50 bg-white/5" : "border-[#A2AB99]/50 bg-white"}`}>
                          <div className={`text-[11px] font-semibold uppercase tracking-widest ${titleTextClass}`}>
                            {row.value.title}
                          </div>
                          <div className={`mt-1 text-xs ${descTextClass}`}>{row.value.line}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              // For regular paired rows, show both side-by-side
              if (row.market) {
                return (
                  <div key={`${row.market.title}-${row.value.title}-${index}`}>
                    <div className="grid gap-3 lg:grid-cols-2">
                      <div>
                        <div className={marketCardClass}>
                          <div className={`text-[11px] font-semibold uppercase tracking-widest ${titleTextClass}`}>
                            {row.market.title}
                          </div>
                          <div className={`mt-1 text-xs ${descTextClass}`}>{row.market.line}</div>
                        </div>
                      </div>
                      <div>
                        <div className={`rounded-lg border p-3 ${isDark ? "border-white/50 bg-white/5" : "border-[#A2AB99]/50 bg-white"}`}>
                          <div className={`text-[11px] font-semibold uppercase tracking-widest ${titleTextClass}`}>
                            {row.value.title}
                          </div>
                          <div className={`mt-1 text-xs ${descTextClass}`}>{row.value.line}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ) : null}

        {layoutVariant === "current" ? (
          <>
            <div
              className={`w-full transition-opacity duration-400 ${
                activeView === "market" ? "block animate-fade-in" : "hidden"
              }`}
            >
              {/* Card 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#333333] sm:text-xs">
                  Reality
                </h3>
                <div className="text-sm leading-snug text-[#5E5E5E]">
                  Messy daily life across leases, people, costs, carbon, and risk.
                  <span className="mt-2 block rounded-r-md border-l-4 border-[#E2E2E2] bg-[#E2E2E2]/20 py-1 pl-3 text-xs font-semibold text-gray-500">
                    Reality is noisy. Systems don&apos;t always capture true grain.
                  </span>
                </div>
              </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#333333] sm:text-xs">
              Systems of Record
            </h3>
            <div className="text-sm leading-snug text-[#5E5E5E]">
              IWMS, ERP, HR, and FM tools log history across tickets, invoices, headcount, and leases.
              <span className="mt-2 block rounded-r-md border-l-4 border-[#E2E2E2] bg-[#E2E2E2]/20 py-1 pl-3 text-xs font-semibold text-gray-500">
                Great for &quot;what happened,&quot; not designed for &quot;what should we do?&quot;
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#333333] sm:text-xs">
              Dashboards
            </h3>
            <div className="text-sm leading-snug text-[#5E5E5E]">
              Static reports of square feet, rent per site, and headcount by location.
              <span className="mt-2 block rounded-r-md border-l-4 border-[#E2E2E2] bg-[#E2E2E2]/20 py-1 pl-3 text-xs font-semibold text-gray-500">
                Surface-level stats. No real story.
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#333333] sm:text-xs">
              Manual Downloads & Excel Wars
            </h3>
            <div className="text-sm leading-snug text-[#5E5E5E]">
              Teams export data, stitch spreadsheets, and rebuild models every quarter.
              <span className="mt-2 block rounded-r-md border-l-4 border-[#E2E2E2] bg-[#E2E2E2]/20 py-1 pl-3 text-xs font-semibold text-gray-500">
                Data hell: 80% cleaning, 20% thinking.
              </span>
            </div>
          </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#333333] sm:text-xs">
                  Non-Optimal Results
                </h3>
                <div className="text-sm leading-snug text-[#5E5E5E]">
                  Big portfolio bets rely on partial data, gut feel, and limited metrics.
                  <span className="mt-2 block rounded-r-md border-l-4 border-[#E2E2E2] bg-[#E2E2E2]/20 py-1 pl-3 text-xs font-semibold text-gray-500">
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
              <div className="rounded-xl border-2 border-[#A2AB99]/20 bg-white p-4 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-5">
                <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#333333] sm:text-xs">
                  Reality
                </h3>
                <div className="text-sm leading-snug text-[#333333]">
                  Messy daily life across leases, people, costs, carbon, and risk.
                  <span className="mt-2 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-3 text-xs font-semibold text-[#5A6349]">
                    Reality is noisy. Systems don&apos;t always capture true grain.
                  </span>
                </div>
              </div>

          <div className="mt-4 rounded-xl border-2 border-[#A2AB99]/20 bg-white p-4 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-5">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#333333] sm:text-xs">
              Systems of Record
            </h3>
            <div className="text-sm leading-snug text-[#333333]">
              IWMS, ERP, HR, and FM tools log history across tickets, invoices, headcount, and leases.
              <span className="mt-2 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-3 text-xs font-semibold text-[#5A6349]">
                Great for &quot;what happened,&quot; not designed for &quot;what should we do?&quot;
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-xl border-2 border-[#A2AB99]/20 bg-white p-4 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-5">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#333333] sm:text-xs">
              Data Foundation
            </h3>
            <div className="text-sm leading-snug text-[#333333]">
              A CRE-native data model connects leases, people, costs, and carbon.
              <span className="mt-2 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-3 text-xs font-semibold text-[#5A6349]">
                The kitchen is finally clean and automated.
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-xl border-2 border-[#A2AB99]/20 bg-white p-4 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-5">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#333333] sm:text-xs">
              Descriptors
            </h3>
            <div className="text-sm leading-snug text-[#333333]">
              Connected metrics align Finance, HR, Workplace, Tax, and Sustainability.
              <span className="mt-2 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-3 text-xs font-semibold text-[#5A6349]">
                Every number knows how it ties to P&amp;L and risk.
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-xl border-2 border-[#A2AB99]/20 bg-white p-4 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-5">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#333333] sm:text-xs">
              Analytical
            </h3>
            <div className="text-sm leading-snug text-[#333333]">
              Reusable analytical blocks answer &quot;What if we exit, resize, or re-stack?&quot;
              <span className="mt-2 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-3 text-xs font-semibold text-[#5A6349]">
                From one-off Excel models to plug-and-play analysis.
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-xl border-2 border-[#A2AB99]/20 bg-white p-4 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-5">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#333333] sm:text-xs">
              Decision
            </h3>
            <div className="text-sm leading-snug text-[#333333]">
              Leaders compare scenarios and see P&amp;L, headcount, tax, and ESG impact.
              <span className="mt-2 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-3 text-xs font-semibold text-[#5A6349]">
                Decisions shift from &quot;best guess&quot; to &quot;best option.&quot;
              </span>
            </div>
          </div>

              <div className="mt-4 rounded-xl border-2 border-[#A2AB99]/20 bg-white p-4 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(90,99,73,0.1),0_8px_10px_-6px_rgba(90,99,73,0.1)] sm:p-5">
                <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#333333] sm:text-xs">
                  Outcome
                </h3>
                <div className="text-sm leading-snug text-[#333333]">
                  Cheaper footprint, happier teams, lower carbon, and a playbook you own.
                  <span className="mt-2 block rounded-r-md border-l-4 border-[#5A6349] bg-[#A2AB99]/10 py-2 pl-3 text-xs font-semibold text-[#5A6349]">
                    Strategic control instead of vendor-driven chaos.
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}