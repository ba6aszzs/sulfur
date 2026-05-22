import Section from "@/components/Section"

export default function About() {
  return (
    <Section className="relative overflow-hidden border-y py-16 sm:py-20" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }} id="sobre">
      {/* Hexagonal decor */}
      <div className="pointer-events-none absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 opacity-[0.04]">
        <svg viewBox="0 0 100 87" className="h-full w-full text-[#F26500]" fill="currentColor">
          <polygon points="50,2 98,24 98,63 50,85 2,63 2,24" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-1.5 inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#F26500]">Sobre</span>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-[#0d0e0d]">
            A <span className="text-[#F26500]">SULFUR</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed sm:text-base text-[#0d0e0d]/50">
            Somos uma operadora logística especializada em soluções integradas para cadeias de suprimento. 
            Atuamos com galpões condominiais de alto padrão, operação 3PL completa e armazenagem alfandegada 
            para importação e exportação.
          </p>
          <p className="mt-3 text-sm leading-relaxed sm:text-base text-[#0d0e0d]/50">
            Nossa estrutura está posicionada nos principais corredores logísticos do país, 
            com sistemas WMS integrados e equipe especializada para garantir que sua carga 
            chegue ao destino certo, na hora certa — do picking ao despacho.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#0d0e0d]/40">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#F26500]" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
            <span>WMS integrado · Gestão de estoque · Picking & Packing · Distribuição nacional</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#F26500]" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
          </div>
        </div>
      </div>
    </Section>
  )
}
