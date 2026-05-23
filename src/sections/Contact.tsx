import { Mail, MapPin, Phone, Clock } from "lucide-react"

const channels = [
  { icon: Phone, label: "Telefone", value: "(47) 9XXXX-XXXX", href: "tel:+55479XXXXXXXX" },
  { icon: Mail, label: "E-mail", value: "contato@sulfurlogistica.com.br", href: "mailto:contato@sulfurlogistica.com.br" },
  { icon: MapPin, label: "Endereço", value: "Santa Catarina — Brasil" },
  { icon: Clock, label: "Atendimento", value: "Seg–Sex, 8h–18h" },
]

export default function Contact() {
  return (
    <section className="relative overflow-hidden border-y py-16 sm:py-20" id="contato" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }}>
      {/* BG decor */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexgrid" width="56" height="49" patternUnits="userSpaceOnUse">
              <polygon points="28,0 56,14 56,35 28,49 0,35 0,14" fill="none" stroke="#F26500" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexgrid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-1.5 inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#F26500]">Contato</span>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-white">
            Vamos <span className="text-[#F26500]">conversar</span>
          </h2>
          <p className="mt-2 text-sm text-white/50">Entre em contato e descubra como podemos transformar sua logística</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Left — info cards */}
          <div className="grid gap-4">
            {channels.map((ch) => (
              <div
                key={ch.label}
                className="group flex items-center gap-4 border bg-white/5 px-5 py-4 transition-all hover:-translate-y-0.5"
                style={{ borderColor: "var(--line)" }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center border-2"
                  style={{ borderColor: "rgba(242,101,0,0.2)", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                >
                  <ch.icon className="h-5 w-5 text-[#F26500]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/40">{ch.label}</p>
                  {ch.href ? (
                    <a href={ch.href} className="text-sm font-medium text-white transition-colors hover:text-[#F26500]">{ch.value}</a>
                  ) : (
                    <p className="text-sm text-white/70">{ch.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right — CTA + social proof */}
          <div className="flex flex-col justify-center border bg-white/5 px-8 py-10 text-center" style={{ borderColor: "var(--line)" }}>
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center border-2" style={{ borderColor: "#F26500", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#F26500]" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
            </div>
            <h3 className="font-display text-lg font-black uppercase text-white">Resposta rápida</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              Nossa equipe comercial retorna em até <strong className="text-[#F26500]">2 horas</strong> em dias úteis. 
              Solicite uma proposta personalizada para sua operação.
            </p>
            <a
              href="https://wa.me/5547XXXXXXXX"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#F26500] px-8 py-3.5 text-xs font-bold tracking-[0.12em] uppercase text-white transition-all hover:bg-[#D95400]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white"><polygon points="12,2 22,22 2,22" /></svg>
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
