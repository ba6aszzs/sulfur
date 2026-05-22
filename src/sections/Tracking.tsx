import Section from "@/components/Section"

const steps = [
  {
    label: "Coleta",
    desc: "Agendamento e coleta no local do embarcador com janela de 2h. Motorista confirma via app com foto e documento.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#F26500" strokeWidth="1.5">
        <rect x="3" y="6" width="18" height="15" rx="2" />
        <path d="M9 6V4h6v2" />
        <path d="M7 10h10" />
      </svg>
    ),
  },
  {
    label: "Rastreio",
    desc: "GPS veicular com atualização a cada 30 segundos. Acompanhe a rota em tempo real pelo portal do cliente com ETA dinâmico.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#F26500" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" fill="#F26500" stroke="none" />
        <path d="M12 3v2" />
        <path d="M12 19v2" />
        <path d="M3 12h2" />
        <path d="M19 12h2" />
      </svg>
    ),
  },
  {
    label: "Entrega",
    desc: "Confirmação eletrônica com foto, assinatura digital e documento fiscal. Notificação automática ao destinatário via SMS e e-mail.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#F26500" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
]

export default function Tracking() {
  return (
    <Section className="py-16 sm:py-20" id="rastreio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-1.5 inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#F26500]">Rastreio</span>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-white">
            Sua carga <span className="text-[#F26500]">na palma da mão</span>
          </h2>
          <p className="mt-2 text-sm text-white/50">Acompanhe cada etapa com rastreamento em tempo real</p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Mock tracking interface */}
          <div className="border bg-white/5 p-6 sm:p-10" style={{ borderColor: "var(--line)" }}>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#F26500]/60">Código de Rastreio</p>
                <p className="font-display text-lg font-black tracking-wider text-white">SUL-2025-04837</p>
              </div>
              <div className="flex items-center gap-2 border px-4 py-2" style={{ borderColor: "var(--line)" }}>
                <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#22C55E]">Em trânsito</span>
              </div>
            </div>

            <div className="relative mb-8">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-[#F26500]/10" />
              {steps.map((s, i) => (
                <div key={s.label} className="relative flex gap-5 pb-8 last:pb-0">
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center border-2 bg-white" style={{ borderColor: "#F26500" }}>
                    {s.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#F26500]/40">ETAPA {i + 1}</span>
                      <svg viewBox="0 0 24 24" className="h-3 w-3 text-[#F26500]/30" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
                      <h4 className="text-xs font-black uppercase text-white">{s.label}</h4>
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/50">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-5 text-center" style={{ borderColor: "var(--line)" }}>
              <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-[#F26500] transition-colors hover:text-[#D95400]">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
                ACESSAR PORTAL DE RASTREIO
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
