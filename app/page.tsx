import Container from "@/components/Container";
import DiagramGate from "@/components/DiagramGate";
import homeContent from "@/content/home.json";
import solutionContent from "@/content/solution.json";
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
  heroBodyPrimary?: string;
  heroBodySecondary?: string;
  heroFooter?: string;
  heroCtaPrimary?: LinkItem;
  heroCtaSecondary?: LinkItem;
  differentiators?: { title?: string; desc?: string }[];
  technicalTeaser?: {
    title?: string;
    body?: string;
    cta?: { label?: string; href?: string };
  };
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
  heroParagraphs?: string[];
  graphicPlaceholder?: string;
  cta?: {
    title?: string;
    body?: string;
    bulletsTitle?: string;
    bullets?: string[];
    primary?: CtaLink;
  };
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
  cta?: { label?: string; href?: string };
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
  emails?: string[];
  calendar?: { label?: string; href?: string };
  secondaryButton?: { label?: string; href?: string };
  sections?: { heading?: string; body?: string; bullets?: string[] }[];
  cta?: { label?: string; href?: string };
};

const home = homeContent as Partial<HomeContent>;
const solution = solutionContent as Partial<SolutionContent>;
const outcomes = outcomesContent as Partial<GenericSectionContent>;
const about = aboutContent as Partial<AboutContent>;
const contact = contactContent as Partial<ContactContent>;

export default function Home() {
  const heroBadge = home.heroBadge ?? {};
  const technicalTeaser = home.technicalTeaser ?? {};

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#051c2c] via-[#0f344d] to-[#051c2c] py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 text-white lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm text-white/70">
                {heroBadge.prefix ?? ""}
                <span className="font-medium text-white">
                  {heroBadge.emphasisPrimary ?? ""}
                </span>
                {heroBadge.infix ?? ""}
                <span className="font-medium text-white">
                  {heroBadge.emphasisSecondary ?? ""}
                </span>
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {home.heroTitle ?? ""}
              </h1>
              <p className="mt-5 text-base text-white/80 sm:text-lg">
                {home.heroSubtitle ?? ""}
              </p>
              {home.heroBodyPrimary ? (
                <p className="mt-5 text-base text-white/80 sm:text-lg">
                  {home.heroBodyPrimary}
                </p>
              ) : null}
              {home.heroBodySecondary ? (
                <p className="mt-4 text-base text-white/80 sm:text-lg">
                  {home.heroBodySecondary}
                </p>
              ) : null}
              {home.heroFooter ? (
                <p className="mt-4 text-sm font-semibold text-white/80">
                  {home.heroFooter}
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={home.heroCtaPrimary?.href ?? ""}
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100"
                >
                  {home.heroCtaPrimary?.label ?? ""}
                </a>
                <a
                  href={home.heroCtaSecondary?.href ?? ""}
                  className="rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  {home.heroCtaSecondary?.label ?? ""}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-16 right-6 h-56 w-56 rounded-full bg-gradient-to-br from-[#2563eb] via-[#00b8d4] to-[#eaf2ff] blur-3xl opacity-70" />
              <div className="absolute -bottom-12 left-6 h-48 w-48 rounded-full bg-gradient-to-br from-[#0f344d] via-[#2563eb] to-[#00b8d4] blur-3xl opacity-60" />
              <div className="relative rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur">
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
                      Unified Data Layer
                    </div>
                    <div className="mt-2 text-sm text-white/80">
                      Normalize HR, Finance, and CRE signals into a single decision-ready model.
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
                        AI-Ready
                      </div>
                      <div className="mt-2 text-sm text-white/80">
                        High-fidelity data designed for deterministic analytics.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
                        Portfolio Intelligence
                      </div>
                      <div className="mt-2 text-sm text-white/80">
                        Forecast outcomes with confidence, not just reports.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-gradient-to-r from-[#00b8d4] to-[#2563eb] p-[1px]">
                    <div className="rounded-2xl bg-[#051c2c]/70 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
                        Decision Engine
                      </div>
                      <div className="mt-2 text-sm text-white/80">
                        Turn your data foundation into measurable action.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3 text-xs text-white/60">
                  <span className="h-2 w-2 rounded-full bg-teal-300" />
                  Live model readiness indicator
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution */}
      <section
        id="solution"
        className="scroll-mt-24 border-t border-slate-200 bg-gradient-to-b from-[#eaf2ff] via-white to-[#f3f4f6] py-16 sm:py-20"
      >
        <Container>
          <section className="space-y-8">
            <div className="max-w-4xl space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                <span className="h-2 w-2 rounded-full bg-slate-900" />
                {solution.heroBadge ?? ""}
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {solution.heroTitle ?? ""}
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {(solution.heroParagraphs ?? []).map((paragraph, index) => (
                  <p key={`${paragraph.slice(0, 16)}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="max-w-4xl">
              <div className="h-px w-full bg-slate-200/70" />
            </div>

            <div
              id="diagram"
              className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <DiagramGate mode="inline" />
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="max-w-3xl space-y-3">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  {technicalTeaser.title ?? ""}
                </h3>
                <p className="text-slate-600 sm:text-lg">{technicalTeaser.body ?? ""}</p>
              </div>

              {technicalTeaser.cta?.label && technicalTeaser.cta?.href ? (
                <div className="mt-6">
                  <a
                    href={technicalTeaser.cta.href}
                    className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                  >
                    {technicalTeaser.cta.label}
                  </a>
                </div>
              ) : null}
            </div>
          </section>

        </Container>
      </section>

      <GenericSection
        id="outcomes"
        content={outcomes}
        className="border-t border-slate-200 bg-gradient-to-b from-[#f3f4f6] via-white to-[#e6f7fa]"
      />
      <section className="border-t border-slate-200 bg-gradient-to-b from-[#051c2c] via-[#0f344d] to-[#051c2c] py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-lg backdrop-blur">
            <div className="flex flex-col gap-6 text-white lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {solution.cta?.title ?? ""}
                </h3>
                {solution.cta?.body ? (
                  <p className="text-white/80 sm:text-lg">
                    {boldPhrase(solution.cta.body, "Portfolio Data Audit")}
                  </p>
                ) : null}
                {solution.cta?.bulletsTitle ? (
                  <div className="text-sm font-semibold text-white">
                    {solution.cta.bulletsTitle}
                  </div>
                ) : null}
                {(solution.cta?.bullets ?? []).length > 0 ? (
                  <ul className="space-y-2 text-sm text-white/80">
                    {(solution.cta?.bullets ?? []).map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 flex-none rounded-full bg-teal-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              {solution.cta?.primary?.label && solution.cta?.primary?.href ? (
                <a
                  href={solution.cta.primary.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-100"
                >
                  {solution.cta.primary.label}
                </a>
              ) : null}
            </div>
          </div>
        </Container>
      </section>


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


function GenericSection(props: {
  id: string;
  content: Partial<GenericSectionContent>;
  className?: string;
}) {
  const isOutcomes = props.id === "outcomes";
  const className = ["scroll-mt-24", "py-16", "sm:py-20", props.className]
    .filter(Boolean)
    .join(" ");
  return (
    <section id={props.id} className={className}>
      <Container>
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {props.content.title ?? ""}
        </h2>
        {props.content.subtitle ? (
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {props.content.subtitle}
          </p>
        ) : null}

        <div className={`mt-10 grid gap-8 ${isOutcomes ? "lg:grid-cols-3" : ""}`}>
          {(props.content.sections ?? []).map((section, index) => (
            <section
              key={`${section.heading ?? ""}-${index}`}
              className={
                isOutcomes
                  ? "rounded-3xl border border-white/15 bg-white/70 p-6 shadow-lg backdrop-blur"
                  : ""
              }
            >
              <div className={isOutcomes ? "space-y-4" : ""}>
                <h3 className="text-xl font-semibold text-slate-900">
                  {section.heading ?? ""}
                </h3>
                {section.body ? (
                  <p className="mt-3 text-slate-600 sm:text-lg">{section.body}</p>
                ) : null}
                {(section.bullets ?? []).length > 0 && (
                  <ul
                    className={
                      isOutcomes
                        ? "space-y-3 text-sm text-slate-700"
                        : "mt-4 list-disc pl-5 text-slate-600"
                    }
                  >
                    {(section.bullets ?? []).map((bullet) => {
                      if (!isOutcomes) {
                        return <li key={bullet}>{bullet}</li>;
                      }

                      const [label, rest] = splitOutcomeBullet(bullet);
                      return (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-900" />
                          <span>
                            <span className="font-semibold text-slate-900">{label}</span>
                            {rest}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
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

function splitOutcomeBullet(bullet: string): [string, string] {
  const index = bullet.indexOf(":");
  if (index === -1) {
    return [bullet, ""];
  }
  const label = bullet.slice(0, index + 1);
  const rest = bullet.slice(index + 1);
  return [label, rest];
}

function boldPhrase(text: string, phrase: string) {
  const index = text.indexOf(phrase);
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <span className="font-semibold text-white">{phrase}</span>
      {text.slice(index + phrase.length)}
    </>
  );
}

function ContactSection(props: { content: Partial<ContactContent> }) {
  const description = props.content.body ?? props.content.subtitle ?? "";
  const emails = props.content.emails ?? [];
  const emailFallback = props.content.email ?? "";

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-200 bg-gradient-to-b from-[#eaf2ff] via-white to-[#f3f4f6] py-16 sm:py-20"
    >
      <Container>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
          {props.content.title ?? ""}
        </h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          {description}
        </p>

        {emails.length > 0 ? (
          <div className="mt-6 text-sm text-slate-600">
            <span className="font-medium text-slate-900">Email:</span>{" "}
            {emails.map((email, index) => (
              <span key={email}>
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-slate-900 hover:text-slate-700"
                >
                  {email}
                </a>
                {index < emails.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        ) : emailFallback ? (
          <div className="mt-6 text-sm text-slate-600">
            <span className="font-medium text-slate-900">Email:</span>{" "}
            <a
              href={`mailto:${emailFallback}`}
              className="font-medium text-slate-900 hover:text-slate-700"
            >
              {emailFallback}
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
          {about.cta?.href ? (
            <a
              href={about.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-200"
            >
              {about.cta.label ?? "Read our story"}
            </a>
          ) : null}
        </div>

      </Container>
    </section>
  );
}


