export default function Home() {
  const nav = [
    { label: "C&D Consulting TEST", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Decision Accelerator", href: "#accelerator" },
    { label: "Outcomes", href: "#outcomes" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const differentiators = [
    {
      title: "Neutral by design",
      desc: "Agnostic to your service providers and software. We normalize data across HR, Finance, and CRE systems so strategy stays in your control.",
    },
    {
      title: "10× faster data engineering",
      desc: "We automate the data engineering work so you get value in months, not multi-year internal “data lake” cycles.",
    },
    {
      title: "Deterministic AI foundation",
      desc: "We structure data for precision. AI that calculates with governance and repeatability, rather than guessing with probability.",
    },
  ];

  const problemCards = [
    {
      title: "Systems of record cannot forecast",
      desc: "IWMS, ERPs, and workflow tools are great at tracking what happened. They struggle to connect decisions to future P&L, risk, ESG, and employee outcomes.",
    },
    {
      title: "The 80/20 data trap",
      desc: "Teams spend most of their time stitching data across disconnected systems, leaving too little time for portfolio strategy.",
    },
    {
      title: "Service-provider bias",
      desc: "Provider data models are optimized for provider delivery, not for the occupier’s strategic decision making.",
    },
  ];

  const acceleratorSteps = [
    {
      title: "Diagnose",
      desc: "Your IT team builds the house. We bring the meaning—acting as strategic translators so infrastructure supports operational reality, not just technical specs.",
    },
    {
      title: "Deploy",
      desc: "Implement a Common Data Model that enforces consistency and solves the grain problem so you do not lose decision-level fidelity (for example, GL transactional detail).",
    },
    {
      title: "Deliver",
      desc: "Stop the cycle of one-off reports. Architect an AI Factory—a reusable foundation where logic like Total Cost of Occupancy serves Finance, Operations, and Strategy at once.",
    },
  ];

  const outcomes = [
    {
      title: "Unlock strategic capacity (the 80/20 flip)",
      desc: "Automate “data janitor” work so the team spends less time prepping and more time managing the portfolio.",
    },
    {
      title: "Eradicate indecision",
      desc: "Replace manual reporting cycles with automated analytics to compress the time between a market signal and a strategic move.",
    },
    {
      title: "Executive narrative control",
      desc: "Reduce the recurring fire-drill of meeting prep with auditable, executive-ready narratives on demand.",
    },
    {
      title: "Restore organizational trust",
      desc: "Replace best-guess estimates and Excel wars with governed logic and repeatable answers when Finance asks, “Are you sure?”",
    },
    {
      title: "Unified governance",
      desc: "Create a portfolio “Rosetta Stone” so HR, Finance, and CRE agree on one version of truth.",
    },
  ];

  const exampleTracks = [
    {
      title: "Track 1: Strategy architect",
      desc: "When a major lease expires, generate scenarios that calculate true P&L impact, exit friction, capacity and constraints, and capital reality—without weeks of spreadsheet stitching.",
      bullets: [
        "Business case scenarios on demand",
        "True P&L impacts beyond cash flow",
        "Exit friction and decommissioning logic",
      ],
    },
    {
      title: "Track 2: Operational mechanic",
      desc: "For monthly reviews, budgets, and accruals, solve data readiness upstream so BI teams stop cleaning data and start delivering insight.",
      bullets: [
        "Curated, platform-agnostic lakehouse access",
        "Semantic model usable in Excel/Power BI",
        "Data scientists use preferred tooling",
      ],
    },
  ];

  const stats = [
    { value: "34+ yrs", label: "combined CRE + data experience" },
    { value: "40+", label: "enterprise clients served" },
    { value: "28", label: "countries delivered in" },
    { value: "$120M", label: "annual savings led" },
    { value: "2M sq ft", label: "portfolio reduction program" },
    { value: "60", label: "person global team led" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-slate-900" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">C&amp;D Consulting</div>
              <div className="text-xs text-slate-600">CRE Data + Strategy Intelligence</div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Talk to us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm text-slate-600">
            Moving from <span className="font-medium text-slate-900">Systems of Record</span> to a{" "}
            <span className="font-medium text-slate-900">System of Intelligence</span>
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            A semantic layer for corporate real estate strategy.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            We deploy a Common Data Model and CRE ontology that keeps your strategic data neutral,
            connects HR–Finance–CRE, and enables deterministic analytics and AI for portfolio decisions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Book a discovery call
            </a>
            <a
              href="#accelerator"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              See the Decision Accelerator
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold">{d.title}</div>
                <div className="mt-2 text-sm text-slate-600">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">The problem inside the problem</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            CRE decisions require dozens of stakeholders and confidential business context. But most tooling
            was built to capture reality—not forecast it—so strategy becomes manual, slow, and fragile.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {problemCards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50">
                <div className="font-semibold">{c.title}</div>
                <div className="mt-2 text-sm text-slate-600">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Our solution</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            A proprietary Common Data Model built for the corporate occupier—paired with a CRE ontology
            that functions as a semantic layer for strategy and AI.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold">Common Data Model</div>
              <p className="mt-2 text-sm text-slate-600">
                Normalize data across CRE, Finance, HR, and providers while retaining decision-level grain.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold">CRE Ontology (Semantic Layer)</div>
              <p className="mt-2 text-sm text-slate-600">
                Add meaning and relationships so your data becomes an active strategic asset, not static records.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold">Invisible AI</div>
              <p className="mt-2 text-sm text-slate-600">
                The heavy lifting algorithms that drive performance—predict utilization, find cost drivers, and
                model trade-offs with precision.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold">We are not deploying another software.</div>
            <p className="mt-2 text-sm text-slate-600">
              We enhance your existing investments while building the AI-ready data foundation that powers
              operational and strategic capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Accelerator */}
      <section id="accelerator" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">The Decision Accelerator</h2>
              <p className="mt-2 max-w-3xl text-slate-600">
                A 3-step methodology to build the foundational, AI-ready data asset that models the reality
                and possibilities of your portfolio.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex w-fit rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Ask for a sample engagement plan
            </a>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {acceleratorSteps.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 p-6">
                <div className="text-sm font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Value delivered</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            The result is not a new tool. It is a new way of working—faster decisions, stronger governance,
            and durable trust across stakeholders.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {outcomes.map((o) => (
              <div key={o.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="font-semibold">{o.title}</div>
                <div className="mt-2 text-sm text-slate-600">{o.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {exampleTracks.map((t) => (
              <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="font-semibold">{t.title}</div>
                <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
                <ul className="mt-4 list-disc pl-5 text-sm text-slate-600">
                  {t.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Who we are</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            CRE-native data experts—seasoned real estate professionals first, technologists second.
            Independent and provider-agnostic. Built to innovate with speed, autonomy, and precision.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-200 p-6">
                <div className="text-2xl font-semibold">{s.value}</div>
                <div className="mt-1 text-sm text-slate-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Tell us what decision you are trying to enable (lease, exit, growth, budget cycle), what systems are in scope,
            and your timeline. We will respond with a short plan.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@cdconsulting.com?subject=C%26D%20Consulting%20-%20Discovery%20Call"
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Email hello@cdconsulting.com
            </a>
            <a
              href="#"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Add Calendly link
            </a>
          </div>

          <div className="mt-10 text-xs text-slate-500">
            CONFIDENTIAL. © {new Date().getFullYear()} C&amp;D Consulting. For intended recipient only. Do not distribute.
          </div>
        </div>
      </section>
    </main>
  );
}
