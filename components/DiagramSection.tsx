import Container from "@/components/Container";
import DiagramGate from "@/components/DiagramGate";

export default function DiagramSection() {
  return (
    <section
      id="diagram"
      className="scroll-mt-24 border-t border-slate-200 bg-gradient-to-b from-[#f3f4f6] via-white to-[#e6f7fa] py-16 sm:py-20"
    >
      <Container>
        <DiagramGate mode="inline" />
      </Container>
    </section>
  );
}
