import Container from "@/components/Container";
import aboutUsContent from "@/content/about-us.json";

type AboutUsContent = {
  heroEyebrow?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  noteTitle?: string;
  noteParagraphs?: string[];
  foundersTitle?: string;
  founders?: {
    name?: string;
    role?: string;
    bio?: string;
    linkedinUrl?: string;
  }[];
  bottomCta?: {
    title?: string;
    primary?: { label?: string; href?: string };
    secondary?: { label?: string; href?: string };
  };
};

const aboutUs = aboutUsContent as Partial<AboutUsContent>;

export default function AboutUsPage() {
  const founders = aboutUs.founders ?? [];
  const noteParagraphs = aboutUs.noteParagraphs ?? [];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {aboutUs.heroEyebrow ?? ""}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {aboutUs.heroTitle ?? ""}
            </h1>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              {aboutUs.heroSubtitle ?? ""}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {aboutUs.noteTitle ?? ""}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {(noteParagraphs.length > 0 ? noteParagraphs : [""]).map((paragraph, index) => (
                <p key={`${paragraph.slice(0, 16)}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {aboutUs.foundersTitle ?? ""}
          </h2>
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
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  {aboutUs.bottomCta?.title ?? ""}
                </h3>
              </div>
              <div className="flex gap-3">
                <a
                  href={aboutUs.bottomCta?.primary?.href ?? ""}
                  className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                >
                  {aboutUs.bottomCta?.primary?.label ?? ""}
                </a>
                <a
                  href={aboutUs.bottomCta?.secondary?.href ?? ""}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
                >
                  {aboutUs.bottomCta?.secondary?.label ?? ""}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return `${first}${last}`.toUpperCase();
}
