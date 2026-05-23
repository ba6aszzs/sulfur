export default function Footer() {
  const columns = [
    {
      title: "Serviços",
      links: ["Galpões Condominiais", "Operador 3PL", "Armazéns Alfandegados", "Distribuição Nacional", "Gestão de Estoques"],
    },
    {
      title: "A SULFUR",
      links: ["Quem Somos", "Missão & Visão", "Cases de Sucesso", "Certificações", "Trabalhe Conosco"],
    },
    {
      title: "Contato",
      links: ["Fale Conosco", "SAC", "Comercial", "Suporte Técnico", "Privacidade"],
    },
  ]

  return (
    <footer className="bg-[#0d0e0d] text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-10">
          <img src="/favicon.svg" alt="SULFUR" className="h-10 w-auto" />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-bold tracking-[0.15em] uppercase text-[#F26500]/60">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="cursor-default text-sm transition-colors hover:text-white">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              {[
                { name: "Instagram", path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 010 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" },
                { name: "LinkedIn", path: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2M8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75M19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" },
                { name: "YouTube", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
              ].map((s) => (
                <a key={s.name} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#F26500]/30" title={s.name}>
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white/70" xmlns="http://www.w3.org/2000/svg">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-white/40">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#F26500]" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
              <span>comercial@sulfurlogistica.com.br</span>
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#F26500]" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
              <span>(47) 9XXXX-XXXX</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 pt-6 text-xs text-white/30 sm:flex-row sm:justify-between">
            <p>&copy; 2025 SULFUR Logística &middot; Todos os direitos reservados</p>
            <div className="flex gap-4">
              <span className="cursor-default transition-colors hover:text-white/60">Privacidade</span>
              <span className="cursor-default transition-colors hover:text-white/60">Termos de Uso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
