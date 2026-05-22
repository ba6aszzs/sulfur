import Section from "@/components/Section"

export default function About({ c2, display }: { c2: string; display: string }) {
  return (
    <Section className="py-16 sm:py-20" style={{ backgroundColor: "var(--bg)" }} id="sobre">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-1.5 text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: c2 }}>Sobre</div>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl">A <span style={{ color: c2 }}>{display}</span></h2>
          <p className="mt-4 text-sm leading-relaxed sm:text-base" style={{ color: "var(--muted)" }}>
            Somos uma empresa comprometida com a excelência. Atuamos com responsabilidade e inovação, 
            buscando sempre o melhor para nossos clientes e parceiros. Nossa trajetória é marcada pela 
            dedicação e pela busca constante por resultados que fazem a diferença.
          </p>
        </div>
      </div>
    </Section>
  )
}
