export default function Delivery() {
  return (
    <section className="relative overflow-hidden border-y" style={{ borderColor: "var(--line)" }} id="delivery">
      <div className="flex min-h-[70vh] flex-col-reverse lg:flex-row">
        {/* Left — dark */}
        <div className="flex w-full items-center justify-center bg-[#0d0e0d] px-8 py-16 lg:w-1/2 lg:py-0">
          <div className="max-w-lg">
            <div className="mb-8 flex items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
              <span>Home</span>
              <span className="text-[#F26500]">Info</span>
              <span>Service</span>
              <span className="ml-auto flex items-center gap-1">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                Buscar
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.2rem,6vw,3.8rem)] font-black leading-[0.95] tracking-[-0.03em] text-white">
              DELIVERY<br />SERVICE
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/50">
              Soluções completas de entrega para sua empresa. Da última milha à distribuição 
              regional, nossa frota inteligente garante que seus produtos cheguem ao destino 
              com rapidez, segurança e rastreamento em tempo real.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#F26500] to-[#FBBF24] px-9 text-xs font-bold tracking-[0.12em] uppercase text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 sm:min-h-0 sm:py-3.5"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="relative flex w-full items-center justify-center overflow-hidden bg-[#F26500] lg:w-1/2">
          {/* Slope divider */}
          <div className="pointer-events-none absolute -left-20 top-0 bottom-0 z-10 hidden w-20 lg:block">
            <svg viewBox="0 0 80 1000" className="h-full w-full" preserveAspectRatio="none">
              <path d="M80 0 L0 0 L80 1000 L80 0Z" fill="#0d0e0d" />
            </svg>
          </div>
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&h=700&fit=crop&auto=format"
            alt="Entrega SULFUR"
            className="h-full w-full object-cover opacity-90 mix-blend-overlay"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
