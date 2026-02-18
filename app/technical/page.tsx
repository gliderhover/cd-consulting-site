import Container from "@/components/Container";
import technicalContent from "@/content/technical.json";

type TechnicalContent = {
  title?: string;
  subtitle?: string;
  sectionTitle?: string;
  sectionBody?: string;
  cards?: { title?: string; body?: string }[];
};

const technical = technicalContent as Partial<TechnicalContent>;

export default function TechnicalPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {technical.title ?? ""}
            </h1>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              {technical.subtitle ?? ""}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {technical.sectionTitle ?? ""}
              </h2>
              <p className="text-slate-600 sm:text-lg">{technical.sectionBody ?? ""}</p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(technical.cards ?? []).map((card, index) => (
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
    </main>
  );
}
