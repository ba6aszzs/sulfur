import Section from "@/components/Section"

const values = [
  { title: "Missão", desc: "Oferecer soluções que transformam realidades" },
  { title: "Visão", desc: "Ser referência no segmento até 2030" },
  { title: "Valores", desc: "Ética, inovação e compromisso com o cliente" },
]

export default function Values({ c2 }: { c2: string }) {
  return (
    <Section className="py-16 sm:py-20" id="pilares">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-1.5 text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: c2 }}>Pilares</div>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl">Nossos<br /><span style={{ color: c2 }}>pilares</span></h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="border px-6 py-8 text-center transition-all sm:px-8 sm:py-10 rounded-md" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }}>
              <h3 className="font-display text-base font-black sm:text-lg">{v.title}</h3>
              <p className="mt-2 text-xs leading-relaxed sm:text-sm" style={{ color: "var(--muted)" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
