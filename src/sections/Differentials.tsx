import Section from "@/components/Section"

const diffs = [
  { title: "Qualidade", desc: "Padrão de excelência em cada processo" },
  { title: "Inovação", desc: "Soluções modernas para desafios atuais" },
  { title: "Sustentabilidade", desc: "Compromisso com o futuro do planeta" },
  { title: "Suporte", desc: "Atendimento dedicado e personalizado" },
]

export default function Differentials({ c2 }: { c2: string }) {
  return (
    <Section className="py-16 sm:py-20" id="diferenciais">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {diffs.map((d) => (
            <div key={d.title} className="border px-5 py-8 text-center transition-all sm:px-6 sm:py-10 rounded-md" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }}>
              <h3 className="font-display text-base font-black sm:text-lg">{d.title}</h3>
              <p className="mt-2 text-xs leading-relaxed sm:text-sm" style={{ color: "var(--muted)" }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
