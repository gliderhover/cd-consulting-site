import Link from "next/link";
import content from "@/content/decision-accelerator.json";

type CtaLink = {
  label?: string;
  href?: string;
};

type StatItem = {
  label?: string;
  value?: string;
  sub?: string;
};

type StepItem = {
  step?: string;
  title?: string;
  body?: string;
  deliverables?: string[];
};

type Content = {
  heroBadge?: string;
  title?: string;
  subtitle?: string;
  ctaPrimary?: CtaLink;
  ctaSecondary?: CtaLink;
  stats?: StatItem[];
  outcomesTitle?: string;
  outcomes?: string[];
  outcomesCalloutTitle?: string;
  outcomesCalloutBody?: string;
  howTitle?: string;
  howSubtitle?: string;
  timelineLabel?: string;
  timeline?: string;
  steps?: StepItem[];
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

const pageContent = content as Partial<Content>;

export default function DecisionAcceleratorPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full bg-slate-900" />
            {pageContent.heroBadge ?? ""}
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {pageContent.title ?? ""}
          </h1>

          <p className="text-base leading-relaxed text-slate-600">
            {pageContent.subtitle ?? ""}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={pageContent.ctaPrimary?.href ?? ""}
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              {pageContent.ctaPrimary?.label ?? ""}
            </Link>
            <LinkOrAnchor
              href={pageContent.ctaSecondary?.href ?? "#how-it-works"}
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
            >
              {pageContent.ctaSecondary?.label ?? ""}
            </LinkOrAnchor>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 text-sm">
            {(pageContent.stats ?? []).map((stat) => (
              <Stat
                key={`${stat.label ?? ""}-${stat.value ?? ""}`}
                label={stat.label ?? ""}
                value={stat.value ?? ""}
                sub={stat.sub ?? ""}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            {pageContent.outcomesTitle ?? ""}
          </h2>
          <div className="mt-4 grid gap-3">
            {(pageContent.outcomes ?? []).map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            <div className="font-medium text-slate-900">
              {pageContent.outcomesCalloutTitle ?? ""}
            </div>
            <div className="mt-1">{pageContent.outcomesCalloutBody ?? ""}</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mt-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {pageContent.howTitle ?? ""}
              </h2>
              <p className="mt-2 text-slate-600">
                {pageContent.howSubtitle ?? ""}
              </p>
            </div>
            <div className="text-sm text-slate-600">
              {pageContent.timelineLabel ?? ""}{" "}
              <span className="font-medium text-slate-900">
                {pageContent.timeline ?? ""}
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {(pageContent.steps ?? []).map((step) => (
              <Step
                key={`${step.step ?? ""}-${step.title ?? ""}`}
                step={step.step ?? ""}
                title={step.title ?? ""}
                body={step.body ?? ""}
                deliverables={step.deliverables ?? []}
                deliverablesTitle={pageContent.deliverablesTitle ?? ""}
              />
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-slate-50 p-5">
            <div className="text-sm font-medium text-slate-900">
              {pageContent.doNotDoTitle ?? ""}
            </div>
            <div className="mt-2 grid gap-2 text-sm text-slate-700 md:grid-cols-3">
              {(pageContent.doNotDoItems ?? []).map((item) => (
                <span key={item}>• {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you provide / what you get */}
      <section className="mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          <Panel
            title={pageContent.panelLeftTitle ?? ""}
            items={pageContent.panelLeft ?? []}
          />
          <Panel
            title={pageContent.panelRightTitle ?? ""}
            items={pageContent.panelRight ?? []}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                {pageContent.ctaTitle ?? ""}
              </h3>
              <p className="mt-1 text-slate-600">
                {pageContent.ctaBody ?? ""}
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href={pageContent.ctaBottomPrimary?.href ?? ""}
                className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
              >
                {pageContent.ctaBottomPrimary?.label ?? ""}
              </Link>
              <Link
                href={pageContent.ctaBottomSecondary?.href ?? ""}
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
              >
                {pageContent.ctaBottomSecondary?.label ?? ""}
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
            {props.deliverables.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
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

function LinkOrAnchor(props: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  if (props.href.startsWith("#")) {
    return (
      <a href={props.href} className={props.className}>
        {props.children}
      </a>
    );
  }

  return (
    <Link href={props.href} className={props.className}>
      {props.children}
    </Link>
  );
}
