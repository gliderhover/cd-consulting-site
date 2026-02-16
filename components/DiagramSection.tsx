import DiagramGate from "@/components/DiagramGate";

export default function DiagramSection() {
  return (
    <section id="diagram" className="scroll-mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <DiagramGate mode="inline" />
      </div>
    </section>
  );
}
