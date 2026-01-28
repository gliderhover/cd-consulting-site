import Link from "next/link";

export default function DecisionAcceleratorPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full bg-slate-900" />
            Short-term engagement • 1H 2026
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            The Decision Accelerator
          </h1>

          <p className="text-base leading-relaxed text-slate-600">
            A 3-step methodology for building the foundational, AI-ready data asset that models the
            reality and possibilities of your portfolio. We do not replace your tech stack. We make
            your existing investments decision-ready.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Talk to us
            </Link>
            <a
              href="#how-it-works"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
            >
              How it works
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 text-sm">
            <Stat label="Method" value="3 steps" sub="Diagnose • Deploy • Deliver" />
            <Stat label="Focus" value="Meaning" sub="not more dashboards" />
            <Stat label="Output" value="AI Factory" sub="reusable analytics" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Typical outcomes</h2>
          <div className="mt-4 grid gap-3">
            <Bullet>Common Data Model aligned to your decisions</Bullet>
            <Bullet>CRE ontology (semantic layer) and governed definitions</Bullet>
            <Bullet>Reusable logic for key metrics (e.g., Total Cost of Occupancy)</Bullet>
            <Bullet>Decision-ready analytics interface for Finance, Ops, Strategy</Bullet>
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            <div className="font-medium text-slate-900">What changes</div>
            <div className="mt-1">
              You stop building one-off reports and start operating a scalable decision engine.
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mt-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                How it works
              </h2>
              <p className="mt-2 text-slate-600">
                Your IT team can build the lakehouse. We bring the meaning. We act as strategic
                translators so the infrastructure supports operational reality, not just technical
                specs.
              </p>
            </div>
            <div className="text-sm text-slate-600">
              Typical timeline: <span className="font-medium text-slate-900">8–12 weeks</span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Step
              step="01"
              title="Diagnose"
              body="Map your decision questions to the data architecture. Identify the systems, grains, and definitions that must align for Finance-grade answers."
              deliverables={[
                "Decision map and data inventory",
                "Current-state grain and semantics assessment",
                "Priority use cases and success metrics",
              ]}
            />
            <Step
              step="02"
              title="Deploy"
              body="Implement a Common Data Model that enforces consistency. Solve the grain problem so you do not aggregate too early and lose fidelity needed for deep financial analysis."
              deliverables={[
                "Common Data Model in your environment",
                "Canonical entities and relationships",
                "Governed definitions and transformation rules",
              ]}
            />
            <Step
              step="03"
              title="Deliver"
              body="Architect an AI Factory: reusable analytics logic instead of one-off reports. Once we map key logic (e.g., Total Cost of Occupancy), it serves Finance, Ops, and Strategy simultaneously."
              deliverables={[
                "Reusable analytics components",
                "First decision-ready outputs (dashboards, narratives, APIs)",
                "Handoff playbook and governance model",
              ]}
            />
          </div>

          <div className="mt-8 rounded-xl bg-slate-50 p-5">
            <div className="text-sm font-medium text-slate-900">What we do not do</div>
            <div className="mt-2 grid gap-2 text-sm text-slate-700 md:grid-cols-3">
              <span>• No “dashboard factory” point solutions</span>
              <span>• No multi-year cleanup pitch</span>
              <span>• No forced rip-and-replace software</span>
            </div>
          </div>
        </div>
      </section>

      {/* What you provide / what you get */}
      <section className="mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          <Panel
            title="What we need from you"
            items={[
              "Access to existing data sources (read-only is fine)",
              "Decision owners for 2–3 priority questions",
              "A technical partner (IT / data engineer) for deployment coordination",
              "Agreement on definitions: headcount, seats, sites, costs, hierarchies",
            ]}
          />
          <Panel
            title="What you get"
            items={[
              "A decision-grade common model (not just a lake)",
              "Governed ontology and definitions (semantic layer)",
              "Reusable analytics logic and outputs",
              "A foundation for deterministic AI and reliable narratives",
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Want to run the Decision Accelerator on your portfolio?
              </h3>
              <p className="mt-1 text-slate-600">
                We can start with one decision question and build the foundation that scales.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
              >
                Talk to us
              </Link>
              <Link
                href="/outcomes"
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
              >
                See outcomes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- small UI helpers ---------- */

function Stat(props: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-xs text-slate-500">{props.label}</div>
      <div className="mt-1 text-xl font-semibold text-slate-900">{props.value}</div>
      <div className="mt-1 text-xs text-slate-600">{props.sub}</div>
    </div>
  );
}

function Bullet(props: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 text-sm text-slate-700">
      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
      <span className="leading-relaxed">{props.children}</span>
    </div>
  );
}

function Step(props: {
  step: string;
  title: string;
  body: string;
  deliverables: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-xs font-medium text-slate-500">{props.step}</div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{props.body}</div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <div className="text-xs font-medium text-slate-900">Deliverables</div>
        <ul className="mt-2 space-y-2 text-sm text-slate-700">
          {props.deliverables.map((d) => (
            <li key={d} className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Panel(props: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8">
      <h3 className="text-lg font-semibold text-slate-900">{props.title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-700">
        {props.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
