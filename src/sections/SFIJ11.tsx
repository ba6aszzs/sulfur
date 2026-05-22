import Section from "@/components/Section"

const metrics = [
  { value: "12,5%", label: "Dividend Yield (12M)", icon: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" },
  { value: "R$ 1,2 bi", label: "Patrimônio Líquido", icon: "M3 3h18v18H3zM12 8v8M8 12h8" },
  { value: "280 mil m²", label: "ABL Total", icon: "rect" },
  { value: "98%", label: "Taxa de Ocupação", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
]

const properties = [
  { name: "Galpão SULFUR Cajamar", city: "Cajamar — SP", area: "45.000 m²", type: "Condominial" },
  { name: "Galpão SULFUR Extrema", city: "Extrema — MG", area: "32.000 m²", type: "Logístico 3PL" },
  { name: "Galpão SULFUR Jundiaí", city: "Jundiaí — SP", area: "28.000 m²", type: "Alfandegado" },
  { name: "Galpão SULFUR Fazenda Rio Grande", city: "Fazenda Rio Grande — PR", area: "22.000 m²", type: "Condominial" },
  { name: "Galpão SULFUR São José", city: "São José — SC", area: "18.000 m²", type: "Cross-docking" },
  { name: "Galpão SULFUR Gravataí", city: "Gravataí — RS", area: "15.000 m²", type: "3PL" },
]

export default function SFIJ11() {
  return (
    <Section className="py-16 sm:py-20" id="sfij11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-1.5 inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#F26500]">Fundo Imobiliário</span>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-[#0d0e0d]">
            <span className="text-[#F26500">SFIJ11</span>
          </h2>
          <p className="mt-2 text-sm text-[#0d0e0d]/50">Fundo de Investimento Imobiliário — Galpões Logísticos</p>
        </div>

        <div className="mx-auto mb-12 max-w-3xl border bg-white/60 p-6 text-center sm:p-10" style={{ borderColor: "var(--line)" }}>
          <p className="text-sm leading-relaxed text-[#0d0e0d]/60 sm:text-base">
            O <strong className="text-[#F26500]">SFIJ11</strong> é um fundo de investimento imobiliário focado em galpões 
            logísticos de alto padrão, gerido pela <strong className="text-[#F26500]">SULFUR Asset Management</strong>. 
            O portfólio é composto por imóveis localizados nos principais corredores logísticos do Brasil, 
            com contratos atípicos (indexados ao IPCA + spread) e locatários de primeira linha.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#0d0e0d]/40">
            <span className="inline-block border px-3 py-1 text-[10px] font-bold tracking-[0.12em] uppercase" style={{ borderColor: "var(--line)" }}>Código: SFIJ11</span>
            <span className="inline-block border px-3 py-1 text-[10px] font-bold tracking-[0.12em] uppercase" style={{ borderColor: "var(--line)" }}>Segmento: Logística</span>
            <span className="inline-block border px-3 py-1 text-[10px] font-bold tracking-[0.12em] uppercase" style={{ borderColor: "var(--line)" }}>Prazo: Indeterminado</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="border bg-white/60 px-5 py-6 text-center" style={{ borderColor: "var(--line)" }}>
              <svg viewBox="0 0 24 24" className="mx-auto mb-3 h-6 w-6 text-[#F26500]" fill="none" stroke="currentColor" strokeWidth="1.5">
                {m.icon === "rect" ? (
                  <><rect x="4" y="8" width="16" height="12" rx="1" /><path d="M8 8V6a4 4 0 018 0v2" /></>
                ) : (
                  <path d={m.icon} />
                )}
              </svg>
              <div className="font-display text-2xl font-black text-[#F26500] sm:text-3xl">{m.value}</div>
              <p className="mt-0.5 text-[10px] font-bold tracking-[0.08em] uppercase text-[#0d0e0d]/40">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Properties table */}
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-4 text-center text-xs font-bold tracking-[0.2em] uppercase text-[#0d0e0d]/40">Propriedades do Portfólio</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: "var(--line)" }}>
                  <th className="py-3 pr-4 font-display text-[10px] font-black uppercase tracking-[0.15em] text-[#F26500]">Imóvel</th>
                  <th className="py-3 pr-4 font-display text-[10px] font-black uppercase tracking-[0.15em] text-[#F26500]">Localização</th>
                  <th className="py-3 pr-4 font-display text-[10px] font-black uppercase tracking-[0.15em] text-[#F26500]">Área</th>
                  <th className="py-3 font-display text-[10px] font-black uppercase tracking-[0.15em] text-[#F26500]">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((p) => (
                  <tr key={p.name} className="border-b" style={{ borderColor: "var(--line)" }}>
                    <td className="py-3 pr-4 font-medium text-[#0d0e0d]">{p.name}</td>
                    <td className="py-3 pr-4 text-[#0d0e0d]/50">{p.city}</td>
                    <td className="py-3 pr-4 font-semibold text-[#F26500]">{p.area}</td>
                    <td className="py-3 text-[#0d0e0d]/50">{p.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-[#F26500] transition-colors hover:text-[#D95400]">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
              BAIXAR APRESENTAÇÃO DO FUNDO
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
