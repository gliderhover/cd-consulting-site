import Container from "@/components/Container";
import technicalContent from "@/content/technical.json";

type TechnicalContent = {
  heroEyebrow?: string;
  heroTitle?: string;
  heroBody?: string;
  heroCtaPrimary?: { label?: string; href?: string };
  heroCtaSecondary?: { label?: string; href?: string };
  heroCards?: { title?: string; body?: string }[];
  detailsTitle?: string;
  detailsBody?: string;
  issueTitle?: string;
  issueBody?: string;
  issueCards?: { title?: string; body?: string }[];
  solutionCore?: {
    title?: string;
    body?: string;
    features?: { title?: string; body?: string }[];
  };
  orgChange?: {
    title?: string;
    cards?: { title?: string; body?: string }[];
  };
  bottomCta?: {
    title?: string;
    body?: string;
    primary?: { label?: string; href?: string };
    secondary?: { label?: string; href?: string };
  };
};

const technical = technicalContent as Partial<TechnicalContent>;

export default function TechnicalPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-[#051c2c] via-[#0f344d] to-[#051c2c] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 text-white lg:grid-cols-2 lg:items-start">
            <div className="max-w-xl">
              <p className="text-sm text-white/70">{technical.heroEyebrow ?? ""}</p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {technical.heroTitle ?? ""}
              </h1>
              <p className="mt-5 text-base text-white/80 sm:text-lg">
                {technical.heroBody ?? ""}
              </p>

              {technical.heroCtaPrimary?.href ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={technical.heroCtaPrimary.href}
                    className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:outline-none focus-visible:ring-0"
                  >
                    {technical.heroCtaPrimary?.label ?? ""}
                  </a>
                </div>
              ) : null}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {(technical.heroCards ?? []).map((card, index) => (
                <div
                  key={`${card.title ?? ""}-${index}`}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5"
                >
                  <div className="text-sm font-semibold text-white">{card.title ?? ""}</div>
                  <div className="mt-2 text-sm text-white/80">{card.body ?? ""}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-b from-[#f3f4f6] via-white to-[#e6f7fa] py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {technical.issueTitle ?? ""}
              </h2>
              <p className="text-slate-600 sm:text-lg">{technical.issueBody ?? ""}</p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(technical.issueCards ?? []).map((card, index) => (
                <div
                  key={`${card.title ?? ""}-${index}`}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="text-sm font-semibold text-slate-900">
                    {card.title ?? ""}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">
                    {card.body ?? ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-b from-white via-[#eaf2ff] to-[#f3f4f6] py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {technical.solutionCore?.title ?? ""}
              </h3>
              <p className="mt-3 text-slate-600 sm:text-lg">
                {technical.solutionCore?.body ?? ""}
              </p>

              <div className="mt-6 space-y-4">
                {(technical.solutionCore?.features ?? []).map((feature, index) => (
                  <div
                    key={`${feature.title ?? ""}-${index}`}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {feature.title ?? ""}
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-slate-600">
                      {feature.body ?? ""}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white">
              <h3 className="text-xl font-semibold sm:text-2xl">
                {technical.orgChange?.title ?? ""}
              </h3>

              <div className="mt-5 grid gap-4">
                {(technical.orgChange?.cards ?? []).map((card, index) => (
                  <div
                    key={`${card.title ?? ""}-${index}`}
                    className="rounded-2xl border border-white/15 bg-white/5 p-5"
                  >
                    <div className="text-sm font-semibold text-white">
                      {card.title ?? ""}
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-white/80">
                      {card.body ?? ""}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-b from-[#051c2c] via-[#0f344d] to-[#051c2c] py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {technical.bottomCta?.title ?? ""}
                </h3>
                <p className="mt-1 text-white/80 sm:text-lg">
                  {technical.bottomCta?.body ?? ""}
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href={technical.bottomCta?.primary?.href ?? ""}
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100"
                >
                  {technical.bottomCta?.primary?.label ?? ""}
                </a>
                <a
                  href={technical.bottomCta?.secondary?.href ?? ""}
                  className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
                >
                  {technical.bottomCta?.secondary?.label ?? ""}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
