import Section from "@/components/Section"

const services = [
  {
    title: "Galpões Condominiais",
    desc: "Estruturas modulares prontas em localizações estratégicas com segurança patrimonial 24h, controle de acesso, PPCI e infraestrutura compartilhada. Ideal para empresas que buscam flexibilidade operacional sem investimento em ativos.",
    tag: "Multiusuário",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="#F26500" strokeWidth="1.5">
        <rect x="8" y="16" width="32" height="26" rx="2" />
        <path d="M8 20 L24 8 L40 20" strokeWidth="2" />
        <rect x="26" y="30" width="8" height="12" rx="1" />
        <rect x="14" y="28" width="8" height="8" rx="1" />
        <line x1="14" y1="36" x2="14" y2="36" strokeWidth="2" />
        <line x1="18" y1="36" x2="18" y2="36" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Operador Logístico 3PL",
    desc: "Gestão completa da cadeia de suprimentos: armazenagem, separação (picking), embalagem (packing), gestão de estoque em tempo real e distribuição. Reduza custos operacionais enquanto aumenta a eficiência da sua operação.",
    tag: "3PL",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="#F26500" strokeWidth="1.5">
        <rect x="6" y="14" width="18" height="22" rx="1" />
        <rect x="28" y="14" width="14" height="22" rx="1" />
        <path d="M15 36 L15 42 L33 42 L33 36" />
        <line x1="10" y1="20" x2="20" y2="20" />
        <line x1="10" y1="26" x2="20" y2="26" />
        <line x1="32" y1="20" x2="38" y2="20" />
        <line x1="32" y1="26" x2="38" y2="26" />
        <circle cx="15" cy="32" r="2" fill="#F26500" stroke="none" />
        <circle cx="35" cy="32" r="2" fill="#F26500" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Armazéns Alfandegados",
    desc: "Recinto alfandegado para armazenagem de mercadorias estrangeiras com suspensão de impostos até a comercialização. Certificação AEO, integração com Siscomex e suporte completo para processos de importação e exportação.",
    tag: "Comex",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="#F26500" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 6 L24 42" />
        <path d="M6 24 L42 24" />
        <path d="M16 10 C16 10 12 24 24 24 C36 24 32 10 32 10" />
        <path d="M16 38 C16 38 12 24 24 24 C36 24 32 38 32 38" />
        <path d="M10 16 C10 16 24 12 24 24 C24 36 10 20 10 20" />
        <path d="M38 16 C38 16 24 12 24 24 C24 36 38 20 38 20" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <Section className="py-16 sm:py-20" id="servicos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-1.5 text-[10px] font-bold tracking-[0.3em] uppercase text-[#F26500]">Serviços</div>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-white">
            Soluções completas<br /><span className="text-[#F26500]">para sua logística</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden border bg-white/5 px-6 py-8 text-center transition-all sm:px-8 sm:py-10" style={{ borderColor: "var(--line)" }}>
              {/* Hexagonal background decor */}
              <svg viewBox="0 0 80 70" className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 text-[#F26500]/5" fill="currentColor">
                <polygon points="40,2 78,18 78,52 40,68 2,52 2,18" />
              </svg>

              <div className="mb-5 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center border-2 border-[#F26500]/20" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                  {s.icon}
                </div>
              </div>

              <span className="mb-2 inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#F26500]/60">{s.tag}</span>
              <h3 className="font-display text-lg font-black uppercase text-white">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed sm:text-sm text-white/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
