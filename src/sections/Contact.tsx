import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section className="mx-4 mb-12 border sm:mx-6 sm:mb-16 lg:mx-auto lg:max-w-7xl lg:px-6" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }}>
      <div className="px-6 py-12 text-center sm:px-12 sm:py-16">
        <span className="mb-1.5 inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#F26500]">Contato</span>
        <h2 className="font-display text-xl font-black uppercase tracking-[-0.02em] sm:text-2xl md:text-3xl text-white">
          Vamos<br /><span className="text-[#F26500]">conversar</span>
        </h2>
        <div className="mt-5 flex flex-col items-center gap-2 text-xs sm:text-sm text-white/50">
          <p className="flex items-center gap-2">
            <Mail className="size-3.5 text-[#F26500]" /> contato@sulfurlogistica.com.br
          </p>
          <p className="flex items-center gap-2">
            <Phone className="size-3.5 text-[#F26500]" /> (47) 9XXXX-XXXX
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="size-3.5 text-[#F26500]" /> Santa Catarina — Brasil
          </p>
        </div>
        <a href="https://wa.me/5547XXXXXXXX" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 bg-[#F26500] px-7 text-xs font-bold tracking-[0.1em] uppercase text-white transition-all hover:bg-[#D95400] sm:min-h-0 sm:py-3.5 sm:px-8">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white"><polygon points="12,2 22,22 2,22" /></svg>
          FALAR NO WHATSAPP
        </a>
      </div>
    </section>
  )
}
