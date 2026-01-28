export default function SolutionPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full bg-slate-900" />
            The semantic layer for CRE strategy
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Move from systems of record
            <span className="block text-slate-600">to a system of intelligence.</span>
          </h1>

          <p className="text-base leading-relaxed text-slate-600">
            We deploy a Common Data Model and CRE ontology that makes portfolio decisions
            computable: neutral across vendors, aligned to how your business actually runs,
            and structured for deterministic analytics and enterprise AI.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Talk to us
            </a>
            <a
              href="#decision-accelerator"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
            >
              See the method
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 text-sm">
            <Stat label="Speed" value="10×" sub="faster data engineering" />
            <Stat label="Focus" value="80/20" sub="flip the time spent on strategy" />
            <Stat label="AI" value="Deterministic" sub="math over magic" />
          </div>
        </div>

        {/* Right card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">What we actually deliver</h2>

            <ul className="space-y-3 text-sm text-slate-700">
              <Bullet>
                A CRE-native <span className="font-medium">Common Data Model</span> that normalizes
                HR, Finance, and Real Estate data without forcing you into a new tool.
              </Bullet>
              <Bullet>
                A governed <span className="font-medium">ontology (semantic layer)</span> that
                encodes meaning, relationships, grain, and business logic.
              </Bullet>
              <Bullet>
                An <span className="font-medium">AI-ready foundation</span> that supports reusable
                analytics (e.g., total cost of occupancy) across teams.
              </Bullet>
            </ul>

            <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-medium text-slate-900">Outcome</div>
              <div className="mt-1">
                You stop building one-off dashboards and start operating a scalable decision engine.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mt-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              The issue is not reporting. It is architecture.
            </h2>
            <p className="text-slate-600">
              Most CRE stacks were built to capture reality (payments, work orders, lease abstracts).
              They are great at looking backward. They struggle to forecast and connect decisions to
              P&amp;L, employee experience, ESG goals, and risk. That gap turns teams into manual
              “data janitors.”
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card
              title="The 80/20 trap"
              body="Teams spend most of their time aggregating disconnected data and too little time making decisions."
            />
            <Card
              title="The vendor bias"
              body="Service-provider data models optimize delivery for the vendor, not the occupier’s strategy."
            />
            <Card
              title="The IT bottleneck"
              body="Generalist data projects take years because the CRE semantics and grain are missing."
            />
          </div>
        </div>
      </section>

      {/* SOLUTION CORE */}
      <section className="mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Our solution: a semantic layer for strategy
            </h2>
            <p className="mt-3 text-slate-600">
              We deploy a proprietary Common Data Model designed for the corporate occupier,
              accompanied by a CRE ontology that encodes context and relationships.
            </p>

            <div className="mt-6 space-y-4">
              <Feature
                title="Neutrality"
                body="Agnostic to your service providers and software. Normalize across HR, Finance, and CRE."
              />
              <Feature
                title="Speed"
                body="Automate data engineering and modeling work dramatically faster than generalist approaches."
              />
              <Feature
                title="Future-proofing"
                body="Structure data for deterministic results so enterprise AI can calculate with precision."
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white">
            <h3 className="text-xl font-semibold">What changes inside your org</h3>

            <div className="mt-5 grid gap-4">
              <DarkCard
                title="One version of truth"
                body="HR, Finance, and Real Estate stop reconciling competing numbers and start using shared logic."
              />
              <DarkCard
                title="Reusable decision logic"
                body="Once you model Total Cost of Occupancy, it powers Finance, Ops, and Strategy simultaneously."
              />
              <DarkCard
                title="Faster cycles"
                body="Replace quarterly “Excel wars” with automated, auditable narratives on demand."
              />
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              Get a walkthrough
            </a>
          </div>
        </div>
      </section>

      {/* DECISION ACCELERATOR */}
      <section id="decision-accelerator" className="mt-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                The Decision Accelerator
              </h2>
              <p className="mt-2 text-slate-600">
                A 3-step method to build the foundational, AI-ready data asset that models the
                reality and possibilities of your portfolio.
              </p>
            </div>

            <div className="text-sm text-slate-600">
              Typical engagement: <span className="font-medium text-slate-900">3–6 months</span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Step
              step="01"
              title="Diagnose"
              body="Your IT team builds the lakehouse. We bring meaning: translate CRE reality into the data design so infrastructure supports decisions, not just specs."
            />
            <Step
              step="02"
              title="Deploy"
              body="Implement a Common Data Model that enforces consistency. Solve grain and fidelity issues so you can model real financial outcomes (not oversimplified aggregates)."
            />
            <Step
              step="03"
              title="Deliver"
              body="Stop one-off reporting. Stand up an AI Factory: reusable logic and analytics components that scale across teams and questions."
            />
          </div>

          <div className="mt-8 rounded-xl bg-slate-50 p-5">
            <div className="text-sm font-medium text-slate-900">What you can expect</div>
            <div className="mt-1 grid gap-2 text-sm text-slate-700 md:grid-cols-3">
              <span>• Clean interfaces for BI tools (Power BI / Excel)</span>
              <span>• Governed ontology + business logic</span>
              <span>• Decision-ready metrics and narratives</span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE DELIVERED */}
      <section className="mt-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Value delivered</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            The result is not a new piece of software. It is a new way of working: more strategic
            capacity, faster decisions, and higher trust in the numbers.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Value
              title="Unlock strategic capacity (the 80/20 flip)"
              body="Automate the manual aggregation cycle so your team spends time managing the portfolio, not prepping spreadsheets."
            />
            <Value
              title="Context-aware precision"
              body="Align the model to your grain, hierarchies, and P&L logic so outputs match your organization’s reality."
            />
            <Value
              title="Faster, smarter decisions"
              body="Compress time between market signals and strategic moves by replacing fragile reporting cycles with automated analytics."
            />
            <Value
              title="Deterministic AI foundation"
              body="A governed semantic layer that supports AI that calculates outcomes with precision rather than guessing from messy inputs."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Want to see how this fits your stack?
              </h3>
              <p className="mt-1 text-slate-600">
                We can map your current systems and show the fastest path to a decision-ready model.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/contact"
                className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
              >
                Talk to us
              </a>
              <a
                href="/outcomes"
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
              >
                View outcomes
              </a>
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

function Card(props: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{props.body}</div>
    </div>
  );
}

function Feature(props: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-1 text-sm leading-relaxed text-slate-600">{props.body}</div>
    </div>
  );
}

function DarkCard(props: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
      <div className="text-sm font-semibold text-white">{props.title}</div>
      <div className="mt-1 text-sm leading-relaxed text-white/80">{props.body}</div>
    </div>
  );
}

function Step(props: { step: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-xs font-medium text-slate-500">{props.step}</div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{props.body}</div>
    </div>
  );
}

function Value(props: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{props.body}</div>
    </div>
  );
}

function Bullet(props: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
      <span className="leading-relaxed">{props.children}</span>
    </li>
  );
}
