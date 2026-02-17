import Container from "@/components/Container";
import DiagramSection from "@/components/DiagramSection";
import homeContent from "@/content/home.json";
import solutionContent from "@/content/solution.json";
import decisionAcceleratorContent from "@/content/decision-accelerator.json";
import outcomesContent from "@/content/outcomes.json";
import aboutContent from "@/content/about.json";
import contactContent from "@/content/contact.json";

type LinkItem = {
  label?: string;
  href?: string;
  variant?: string;
};

type HomeContent = {
  heroBadge?: {
    prefix?: string;
    emphasisPrimary?: string;
    infix?: string;
    emphasisSecondary?: string;
  };
  heroTitle?: string;
  heroSubtitle?: string;
  heroCtaPrimary?: LinkItem;
  heroCtaSecondary?: LinkItem;
  differentiators?: { title?: string; desc?: string }[];
};

type CtaLink = {
  label?: string;
  href?: string;
};

type EmphasisBullet = {
  prefix?: string;
  emphasis?: string;
  suffix?: string;
};

type SolutionContent = {
  heroBadge?: string;
  heroTitle?: string;
  heroTitleAccent?: string;
  heroBody?: string;
  heroCtaPrimary?: CtaLink;
  heroCtaSecondary?: CtaLink;
  stats?: { label?: string; value?: string; sub?: string }[];
  deliverCard?: {
    title?: string;
    bullets?: EmphasisBullet[];
    outcomeLabel?: string;
    outcomeBody?: string;
  };
  problem?: {
    title?: string;
    body?: string;
    cards?: { title?: string; body?: string }[];
  };
  solutionCore?: {
    title?: string;
    body?: string;
    features?: { title?: string; body?: string }[];
  };
  orgChange?: {
    title?: string;
    cards?: { title?: string; body?: string }[];
    cta?: CtaLink;
  };
  valueDelivered?: {
    title?: string;
    body?: string;
    items?: { title?: string; body?: string }[];
  };
  cta?: {
    title?: string;
    body?: string;
    primary?: CtaLink;
    secondary?: CtaLink;
  };
};

type DecisionAcceleratorContent = {
  heroBadge?: string;
  title?: string;
  subtitle?: string;
  ctaPrimary?: CtaLink;
  ctaSecondary?: CtaLink;
  stats?: { label?: string; value?: string; sub?: string }[];
  outcomesTitle?: string;
  outcomes?: string[];
  outcomesCalloutTitle?: string;
  outcomesCalloutBody?: string;
  howTitle?: string;
  howSubtitle?: string;
  timelineLabel?: string;
  timeline?: string;
  steps?: { step?: string; title?: string; body?: string; deliverables?: string[] }[];
  deliverablesTitle?: string;
  doNotDoTitle?: string;
  doNotDoItems?: string[];
  panelLeftTitle?: string;
  panelLeft?: string[];
  panelRightTitle?: string;
  panelRight?: string[];
  ctaTitle?: string;
  ctaBody?: string;
  ctaBottomPrimary?: CtaLink;
  ctaBottomSecondary?: CtaLink;
};

type GenericSectionContent = {
  title?: string;
  subtitle?: string;
  sections?: { heading?: string; body?: string; bullets?: string[] }[];
  cta?: { label?: string; href?: string };
};

type AboutContent = {
  kicker?: string;
  title?: string;
  body?: string;
  foundersTitle?: string;
  founders?: {
    name?: string;
    role?: string;
    bio?: string;
    linkedinUrl?: string;
  }[];
  highlightsTitle?: string;
  highlights?: string[];
};

type ContactContent = {
  title?: string;
  subtitle?: string;
  body?: string;
  email?: string;
  calendar?: { label?: string; href?: string };
  secondaryButton?: { label?: string; href?: string };
  sections?: { heading?: string; body?: string; bullets?: string[] }[];
  cta?: { label?: string; href?: string };
};

const home = homeContent as Partial<HomeContent>;
const solution = solutionContent as Partial<SolutionContent>;
const decisionAccelerator = decisionAcceleratorContent as Partial<DecisionAcceleratorContent>;
const outcomes = outcomesContent as Partial<GenericSectionContent>;
const about = aboutContent as Partial<AboutContent>;
const contact = contactContent as Partial<ContactContent>;

export default function Home() {
  const heroBadge = home.heroBadge ?? {};
  const deliverCard = solution.deliverCard ?? {};
  const problem = solution.problem ?? {};
  const solutionCore = solution.solutionCore ?? {};
  const orgChange = solution.orgChange ?? {};
  const valueDelivered = solution.valueDelivered ?? {};
  const solutionCta = solution.cta ?? {};

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
          <p className="text-sm text-slate-600">
            {heroBadge.prefix ?? ""}
            <span className="font-medium text-slate-900">{heroBadge.emphasisPrimary ?? ""}</span>
            {heroBadge.infix ?? ""}
            <span className="font-medium text-slate-900">{heroBadge.emphasisSecondary ?? ""}</span>
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {home.heroTitle ?? ""}
          </h1>
          <p className="mt-5 text-base text-slate-600 sm:text-lg">{home.heroSubtitle ?? ""}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={home.heroCtaPrimary?.href ?? ""}
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              {home.heroCtaPrimary?.label ?? ""}
            </a>
            <a
              href={home.heroCtaSecondary?.href ?? ""}
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              {home.heroCtaSecondary?.label ?? ""}
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(home.differentiators ?? []).map((item) => (
              <div
                key={`${item.title ?? ""}-${item.desc ?? ""}`}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <div className="text-sm font-semibold">{item.title ?? ""}</div>
                <div className="mt-2 text-sm text-slate-600">{item.desc ?? ""}</div>
              </div>
            ))}
          </div>
          </div>
        </Container>
      </section>

      {/* Solution */}
      <section id="solution" className="scroll-mt-24 border-t border-slate-200 bg-slate-50">
        <Container className="py-16">
          <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                <span className="h-2 w-2 rounded-full bg-slate-900" />
                {solution.heroBadge ?? ""}
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {solution.heroTitle ?? ""}
                <span className="block text-slate-600">{solution.heroTitleAccent ?? ""}</span>
              </h2>

              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {solution.heroBody ?? ""}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={solution.heroCtaPrimary?.href ?? ""}
                  className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                >
                  {solution.heroCtaPrimary?.label ?? ""}
                </a>
                <a
                  href={solution.heroCtaSecondary?.href ?? ""}
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
                >
                  {solution.heroCtaSecondary?.label ?? ""}
                </a>
              </div>

              <div className="grid gap-6 pt-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
                {(solution.stats ?? []).map((stat) => (
                  <SolutionStat
                    key={`${stat.label ?? ""}-${stat.value ?? ""}`}
                    label={stat.label ?? ""}
                    value={stat.value ?? ""}
                    sub={stat.sub ?? ""}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {deliverCard.title ?? ""}
                </h3>

                <ul className="space-y-3 text-sm text-slate-700">
                  {(deliverCard.bullets ?? []).map((bullet, index) => (
                    <SolutionBullet key={`${bullet.emphasis ?? ""}-${index}`}>
                      {bullet.prefix ?? ""}
                      {bullet.emphasis ? (
                        <span className="font-medium">{bullet.emphasis}</span>
                      ) : null}
                      {bullet.suffix ?? ""}
                    </SolutionBullet>
                  ))}
                </ul>

                <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="font-medium text-slate-900">
                    {deliverCard.outcomeLabel ?? ""}
                  </div>
                  <div className="mt-1">{deliverCard.outcomeBody ?? ""}</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="max-w-3xl space-y-3">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  {problem.title ?? ""}
                </h3>
                <p className="text-slate-600 sm:text-lg">{problem.body ?? ""}</p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {(problem.cards ?? []).map((card) => (
                  <SolutionCard
                    key={`${card.title ?? ""}-${card.body ?? ""}`}
                    title={card.title ?? ""}
                    body={card.body ?? ""}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  {solutionCore.title ?? ""}
                </h3>
                <p className="mt-3 text-slate-600 sm:text-lg">{solutionCore.body ?? ""}</p>

                <div className="mt-6 space-y-4">
                  {(solutionCore.features ?? []).map((feature) => (
                    <SolutionFeature
                      key={`${feature.title ?? ""}-${feature.body ?? ""}`}
                      title={feature.title ?? ""}
                      body={feature.body ?? ""}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white">
                <h3 className="text-xl font-semibold sm:text-2xl">{orgChange.title ?? ""}</h3>

                <div className="mt-5 grid gap-4">
                  {(orgChange.cards ?? []).map((card) => (
                    <SolutionDarkCard
                      key={`${card.title ?? ""}-${card.body ?? ""}`}
                      title={card.title ?? ""}
                      body={card.body ?? ""}
                    />
                  ))}
                </div>

                <a
                  href={orgChange.cta?.href ?? ""}
                  className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100"
                >
                  {orgChange.cta?.label ?? ""}
                </a>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {valueDelivered.title ?? ""}
              </h3>
              <p className="mt-2 max-w-3xl text-slate-600 sm:text-lg">
                {valueDelivered.body ?? ""}
              </p>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                {(valueDelivered.items ?? []).map((item) => (
                  <SolutionValue
                    key={`${item.title ?? ""}-${item.body ?? ""}`}
                    title={item.title ?? ""}
                    body={item.body ?? ""}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                    {solutionCta.title ?? ""}
                  </h3>
                  <p className="mt-1 text-slate-600 sm:text-lg">{solutionCta.body ?? ""}</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={solutionCta.primary?.href ?? ""}
                    className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                  >
                    {solutionCta.primary?.label ?? ""}
                  </a>
                  <a
                    href={solutionCta.secondary?.href ?? ""}
                    className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
                  >
                    {solutionCta.secondary?.label ?? ""}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </section>

      {/* Decision Accelerator */}
      <section
        id="decision-accelerator"
        className="scroll-mt-24 border-t border-slate-200"
      >
        <Container className="py-16">
          <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                <span className="h-2 w-2 rounded-full bg-slate-900" />
                {decisionAccelerator.heroBadge ?? ""}
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {decisionAccelerator.title ?? ""}
              </h2>

              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {decisionAccelerator.subtitle ?? ""}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={decisionAccelerator.ctaPrimary?.href ?? ""}
                  className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                >
                  {decisionAccelerator.ctaPrimary?.label ?? ""}
                </a>
                <a
                  href={decisionAccelerator.ctaSecondary?.href ?? "#how-it-works"}
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
                >
                  {decisionAccelerator.ctaSecondary?.label ?? ""}
                </a>
              </div>

              <div className="grid gap-6 pt-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
                {(decisionAccelerator.stats ?? []).map((stat) => (
                  <DecisionStat
                    key={`${stat.label ?? ""}-${stat.value ?? ""}`}
                    label={stat.label ?? ""}
                    value={stat.value ?? ""}
                    sub={stat.sub ?? ""}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                {decisionAccelerator.outcomesTitle ?? ""}
              </h3>
              <div className="mt-4 grid gap-3">
                {(decisionAccelerator.outcomes ?? []).map((item) => (
                  <DecisionBullet key={item}>{item}</DecisionBullet>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-medium text-slate-900">
                  {decisionAccelerator.outcomesCalloutTitle ?? ""}
                </div>
                <div className="mt-1">{decisionAccelerator.outcomesCalloutBody ?? ""}</div>
              </div>
            </div>
          </section>

          <section id="how-it-works" className="mt-16 scroll-mt-24">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    {decisionAccelerator.howTitle ?? ""}
                  </h3>
                  <p className="mt-2 text-slate-600 sm:text-lg">
                    {decisionAccelerator.howSubtitle ?? ""}
                  </p>
                </div>
                <div className="text-sm text-slate-600">
                  {decisionAccelerator.timelineLabel ?? ""}{" "}
                  <span className="font-medium text-slate-900">
                    {decisionAccelerator.timeline ?? ""}
                  </span>
                </div>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {(decisionAccelerator.steps ?? []).map((step) => (
                  <DecisionStep
                    key={`${step.step ?? ""}-${step.title ?? ""}`}
                    step={step.step ?? ""}
                    title={step.title ?? ""}
                    body={step.body ?? ""}
                    deliverables={step.deliverables ?? []}
                    deliverablesTitle={decisionAccelerator.deliverablesTitle ?? ""}
                  />
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-slate-50 p-5">
                <div className="text-sm font-medium text-slate-900">
                  {decisionAccelerator.doNotDoTitle ?? ""}
                </div>
                <div className="mt-2 grid gap-2 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
                  {(decisionAccelerator.doNotDoItems ?? []).map((item) => (
                    <span key={item}>• {item}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <DecisionPanel
                title={decisionAccelerator.panelLeftTitle ?? ""}
                items={decisionAccelerator.panelLeft ?? []}
              />
              <DecisionPanel
                title={decisionAccelerator.panelRightTitle ?? ""}
                items={decisionAccelerator.panelRight ?? []}
              />
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                    {decisionAccelerator.ctaTitle ?? ""}
                  </h3>
                  <p className="mt-1 text-slate-600 sm:text-lg">
                    {decisionAccelerator.ctaBody ?? ""}
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={decisionAccelerator.ctaBottomPrimary?.href ?? ""}
                    className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                  >
                    {decisionAccelerator.ctaBottomPrimary?.label ?? ""}
                  </a>
                  <a
                    href={decisionAccelerator.ctaBottomSecondary?.href ?? ""}
                    className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
                  >
                    {decisionAccelerator.ctaBottomSecondary?.label ?? ""}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </section>

      <DiagramSection />

      <GenericSection
        id="outcomes"
        content={outcomes}
        className="border-t border-slate-200 bg-slate-50"
      />
      <AboutSection content={about} />
      <ContactSection content={contact} />
    </main>
  );
}

/* ---------- section helpers ---------- */

function SolutionStat(props: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-xs text-slate-500">{props.label}</div>
      <div className="mt-1 text-xl font-semibold text-slate-900">{props.value}</div>
      <div className="mt-1 text-xs text-slate-600">{props.sub}</div>
    </div>
  );
}

function SolutionCard(props: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{props.body}</div>
    </div>
  );
}

function SolutionFeature(props: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-1 text-sm leading-relaxed text-slate-600">{props.body}</div>
    </div>
  );
}

function SolutionDarkCard(props: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
      <div className="text-sm font-semibold text-white">{props.title}</div>
      <div className="mt-1 text-sm leading-relaxed text-white/80">{props.body}</div>
    </div>
  );
}

function SolutionValue(props: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{props.body}</div>
    </div>
  );
}

function SolutionBullet(props: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
      <span className="leading-relaxed">{props.children}</span>
    </li>
  );
}

function DecisionStat(props: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-xs text-slate-500">{props.label}</div>
      <div className="mt-1 text-xl font-semibold text-slate-900">{props.value}</div>
      <div className="mt-1 text-xs text-slate-600">{props.sub}</div>
    </div>
  );
}

function DecisionBullet(props: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 text-sm text-slate-700">
      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
      <span className="leading-relaxed">{props.children}</span>
    </div>
  );
}

function DecisionStep(props: {
  step: string;
  title: string;
  body: string;
  deliverables: string[];
  deliverablesTitle: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-xs font-medium text-slate-500">{props.step}</div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{props.body}</div>

      {(props.deliverablesTitle || props.deliverables.length > 0) && (
        <div className="mt-4 rounded-xl bg-slate-50 p-4">
          <div className="text-xs font-medium text-slate-900">{props.deliverablesTitle}</div>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            {props.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function DecisionPanel(props: { title: string; items: string[] }) {
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

function GenericSection(props: {
  id: string;
  content: Partial<GenericSectionContent>;
  className?: string;
}) {
  const className = ["scroll-mt-24", props.className].filter(Boolean).join(" ");
  return (
    <section id={props.id} className={className}>
      <Container className="py-16">
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {props.content.title ?? ""}
        </h2>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          {props.content.subtitle ?? ""}
        </p>

        <div className="mt-10 grid gap-8">
          {(props.content.sections ?? []).map((section, index) => (
            <section key={`${section.heading ?? ""}-${index}`}>
              <h3 className="text-xl font-semibold">{section.heading ?? ""}</h3>
              <p className="mt-3 text-slate-600 sm:text-lg">{section.body ?? ""}</p>
              {(section.bullets ?? []).length > 0 && (
                <ul className="mt-4 list-disc pl-5 text-slate-600">
                  {(section.bullets ?? []).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {props.content.cta?.label && props.content.cta?.href ? (
          <div className="mt-10">
            <a
              href={props.content.cta.href ?? ""}
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              {props.content.cta.label ?? ""}
            </a>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function AboutSection(props: { content: Partial<AboutContent> }) {
  const founders = props.content.founders ?? [];
  const highlights = props.content.highlights ?? [];

  return (
    <section id="about" className="scroll-mt-24 border-t border-slate-200">
      <Container className="py-16">
        {props.content.kicker ? (
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {props.content.kicker}
          </p>
        ) : null}
        <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
          {props.content.title ?? ""}
        </h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          {props.content.body ?? ""}
        </p>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-slate-900">
            {props.content.foundersTitle ?? ""}
          </h3>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            {founders.map((founder, index) => (
              <div
                key={`${founder.name ?? ""}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {getInitials(founder.name ?? "")}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-900">
                      {founder.name ?? ""}
                    </div>
                    <div className="text-sm text-slate-600">{founder.role ?? ""}</div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {founder.bio ?? ""}
                </p>

                {founder.linkedinUrl ? (
                  <a
                    href={founder.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 hover:border-slate-400 hover:text-slate-900"
                  >
                    LinkedIn
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {highlights.length > 0 ? (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              {props.content.highlightsTitle ?? ""}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function ContactSection(props: { content: Partial<ContactContent> }) {
  const description = props.content.body ?? props.content.subtitle ?? "";
  const email = props.content.email ?? "";

  return (
    <section id="contact" className="scroll-mt-24 border-t border-slate-200 bg-slate-50">
      <Container className="py-16">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
          {props.content.title ?? ""}
        </h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          {description}
        </p>

        {email ? (
          <div className="mt-6 text-sm text-slate-600">
            <span className="font-medium text-slate-900">Email:</span>{" "}
            <a
              href={`mailto:${email}`}
              className="font-medium text-slate-900 hover:text-slate-700"
            >
              {email}
            </a>
          </div>
        ) : null}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {props.content.calendar?.href ? (
            <a
              href={props.content.calendar.href}
              target="_blank"
              rel="noreferrer"
              aria-label={props.content.calendar.label ?? "Book a demo"}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              {props.content.calendar.label ?? "Book a demo"}
            </a>
          ) : null}
          {props.content.secondaryButton?.href ? (
            <a
              href={props.content.secondaryButton.href}
              aria-label={props.content.secondaryButton.label ?? "Email us"}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
            >
              {props.content.secondaryButton.label ?? "Email us"}
            </a>
          ) : null}
        </div>

        <div className="mt-4 text-xs text-slate-500">Response time: 1–2 business days.</div>
      </Container>
    </section>
  );
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return `${first}${last}`.toUpperCase();
}
