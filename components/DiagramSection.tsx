import Container from "@/components/Container";
import DiagramGate from "@/components/DiagramGate";

export default function DiagramSection() {
  return (
    <section
      id="diagram"
      className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-16 sm:py-20"
    >
      <Container>
        <DiagramGate mode="inline" />
      </Container>
    </section>
  );
}
