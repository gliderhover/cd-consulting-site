type StyleVariant = "light" | "dark";

type CardValue = { title: string; line: string };

type SharedRow = {
  shared: true;
  title: string;
  line: string;
};

type ValueOnlyRow = {
  shared?: false;
  market: null;
  value: CardValue;
};

type PairedRow = {
  shared?: false;
  market: CardValue;
  value: CardValue;
};

type ComparisonRow = SharedRow | ValueOnlyRow | PairedRow;

export type HowWeCompareTuning = {
  headerMarginClass: string;
  headerGapClass: string;
  headerTextClass: string;
  stackGapClass: string;
  rowGapClass: string;
  cardPaddingClass: string;
  titleTextClass: string;
  bodyTextClass: string;
};

const defaultTuning: HowWeCompareTuning = {
  headerMarginClass: "mb-4",
  headerGapClass: "gap-3",
  headerTextClass: "text-[13px]",
  stackGapClass: "space-y-1",
  rowGapClass: "gap-1",
  cardPaddingClass: "p-1",
  titleTextClass: "text-[10px]",
  bodyTextClass: "text-[11px]",
};

const compactSideRows: ComparisonRow[] = [
  {
    shared: true,
    title: "Reality",
    line: "Messy daily life: leases, people, costs, carbon, and risk. Systems don't always capture true grain.",
  },
  {
    shared: true,
    title: "Systems of Record",
    line: 'IWMS, ERP and HR tools built to log history in silos. Not designed for "what should we do?"',
  },
  {
    market: null,
    value: {
      title: "Data Foundation",
      line: "CRE-native model connecting all dimensions.",
    },
  },
  {
    market: {
      title: "Dashboards",
      line: "Static reports by site, rent, and headcount.",
    },
    value: {
      title: "Descriptors",
      line: "Metrics align Finance, HR, Workplace, Tax.",
    },
  },
  {
    market: {
      title: "Manual Downloads",
      line: "Exports + spreadsheets rebuild models.",
    },
    value: {
      title: "Analytical",
      line: 'Reusable analytics answer "What if" fast.',
    },
  },
  {
    market: null,
    value: {
      title: "Decision",
      line: "Scenario compare with P&L, tax, ESG.",
    },
  },
  {
    market: {
      title: "Point-Solution Fatigue",
      line: "Teams stay reactive, buried in technical debt.",
    },
    value: {
      title: "Outcome",
      line: "Lower cost, happier teams, owned playbook.",
    },
  },
];

export default function HowWeCompare({
  styleVariant = "dark",
  tuning,
}: {
  styleVariant?: StyleVariant;
  tuning?: Partial<HowWeCompareTuning>;
}) {
  const isDark = styleVariant === "dark";
  const activeTuning = { ...defaultTuning, ...tuning };
  const titleTextClass = isDark ? "text-white" : "text-slate-700";
  const descTextClass = isDark ? "text-white/70" : "text-slate-600";
  const marketCardClass = isDark
    ? `rounded-lg border border-white/10 bg-white/5 ${activeTuning.cardPaddingClass}`
    : `rounded-lg border border-slate-200 bg-white ${activeTuning.cardPaddingClass}`;
  const valueCardClass = isDark
    ? `rounded-lg border border-white/20 bg-white/5 ${activeTuning.cardPaddingClass}`
    : `rounded-lg border border-[#A2AB99]/50 bg-white ${activeTuning.cardPaddingClass}`;

  return (
    <div className={`w-full ${isDark ? "text-white" : "text-slate-900"}`}>
      <div className={`${activeTuning.headerMarginClass} grid ${activeTuning.headerGapClass} ${activeTuning.headerTextClass} font-semibold uppercase tracking-widest ${isDark ? "text-white" : "text-slate-700"} lg:grid-cols-2`}>
        <div>The Current Market</div>
        <div>Our Value Prop</div>
      </div>

      <div className={activeTuning.stackGapClass}>
        {compactSideRows.map((row, index) => {
          if (row.shared) {
            return (
              <div key={`${row.title}-${index}`}>
                <div className={`rounded-lg border ${activeTuning.cardPaddingClass} ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}>
                  <div className={`${activeTuning.titleTextClass} font-semibold uppercase tracking-widest ${titleTextClass}`}>
                    {row.title}
                  </div>
                  <div className={`mt-1 ${activeTuning.bodyTextClass} ${descTextClass}`}>{row.line}</div>
                </div>
              </div>
            );
          }

          if (index === 2 && row.value) {
            return (
              <div key={`split-row-${index}`}>
                <div className={`grid ${activeTuning.rowGapClass} lg:grid-cols-2`}>
                  <div>
                    <div className={`flex items-center rounded-lg border ${activeTuning.cardPaddingClass} ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"}`}>
                      <div className={`${activeTuning.titleTextClass} font-semibold uppercase tracking-widest ${isDark ? "text-white/50" : "text-slate-400"}`}>
                        Data Foundation is Skipped
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={valueCardClass}>
                      <div className={`${activeTuning.titleTextClass} font-semibold uppercase tracking-widest ${titleTextClass}`}>
                        {row.value.title}
                      </div>
                      <div className={`mt-1 ${activeTuning.bodyTextClass} ${descTextClass}`}>CRE-native model connecting all dimensions.</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          if (row.market === null && row.value.title === "Decision") {
            return (
              <div key={`${row.value.title}-${index}`}>
                <div className={`grid ${activeTuning.rowGapClass} lg:grid-cols-2`}>
                  <div>
                    <div className={`flex items-center rounded-lg border ${activeTuning.cardPaddingClass} ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"}`}>
                      <div className={`${activeTuning.titleTextClass} font-semibold uppercase tracking-widest ${isDark ? "text-white/50" : "text-slate-400"}`}>
                        Siloed Decision Making
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={valueCardClass}>
                      <div className={`${activeTuning.titleTextClass} font-semibold uppercase tracking-widest ${titleTextClass}`}>
                        {row.value.title}
                      </div>
                      <div className={`mt-1 ${activeTuning.bodyTextClass} ${descTextClass}`}>{row.value.line}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          if (row.market) {
            return (
              <div key={`${row.market.title}-${row.value.title}-${index}`}>
                <div className={`grid ${activeTuning.rowGapClass} lg:grid-cols-2`}>
                  <div>
                    <div className={marketCardClass}>
                      <div className={`${activeTuning.titleTextClass} font-semibold uppercase tracking-widest ${titleTextClass}`}>
                        {row.market.title}
                      </div>
                      <div className={`mt-1 ${activeTuning.bodyTextClass} ${descTextClass}`}>{row.market.line}</div>
                    </div>
                  </div>
                  <div>
                    <div className={valueCardClass}>
                      <div className={`${activeTuning.titleTextClass} font-semibold uppercase tracking-widest ${titleTextClass}`}>
                        {row.value.title}
                      </div>
                      <div className={`mt-1 ${activeTuning.bodyTextClass} ${descTextClass}`}>{row.value.line}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
