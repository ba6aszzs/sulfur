import Section from "@/components/Section"

const diffs = [
  {
    title: "Segurança Patrimonial",
    desc: "Monitoramento 24h em todas as unidades com CFTV, controle de acesso biométrico, alarmes perimetrais e rastreamento veicular integrado.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#F26500" strokeWidth="1.5">
        <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Cobertura Nacional",
    desc: "Presença nos principais hubs logísticos do Sul ao Nordeste, com rotas dedicadas e malha própria de distribuição para entregas urgentes ou programadas.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#F26500" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 010 20" />
        <path d="M12 2a15 15 0 00-10 10" />
        <path d="M12 22a15 15 0 0010-10" />
        <path d="M12 22a15 15 0 00-10-10" />
      </svg>
    ),
  },
  {
    title: "Tecnologia WMS",
    desc: "Sistema de gestão de armazéns integrado com ERP, picking por radiofrequência, inventário cíclico automatizado e painéis de desempenho em tempo real.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#F26500" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Redução de Custos",
    desc: "Modelo de custo variável com pagamento por uso — sem investimento em ativos fixos. Compartilhamento de infraestrutura, equipe e tecnologia reduz sua despesa operacional em até 35%.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#F26500" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10" />
        <path d="M7 12h10" />
      </svg>
    ),
  },
]

export default function Differentials() {
  return (
    <Section className="py-16 sm:py-20" id="diferenciais">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-1.5 inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#F26500]">Diferenciais</span>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-white">
            Por que <span className="text-[#F26500]">SULFUR</span>
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {diffs.map((d) => (
            <div key={d.title} className="group border bg-white/5 px-5 py-8 text-center transition-all hover:-translate-y-0.5 sm:px-6 sm:py-10" style={{ borderColor: "var(--line)" }}>
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center border-2 border-[#F26500]/10" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                  {d.icon}
                </div>
              </div>
              <h3 className="font-display text-base font-black uppercase text-white">{d.title}</h3>
              <p className="mt-2 text-xs leading-relaxed sm:text-sm text-white/50">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
