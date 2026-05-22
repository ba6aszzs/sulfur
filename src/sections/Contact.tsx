import { Mail, MapPin } from "lucide-react"

export default function Contact({ c2 }: { c2: string }) {
  return (
    <section className="mx-4 mb-12 border rounded-md sm:mx-6 sm:mb-16 lg:mx-auto lg:max-w-7xl lg:px-6" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }}>
      <div className="px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="mb-1.5 text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: c2 }}>Contato</div>
        <h2 className="font-display text-xl font-black uppercase tracking-[-0.02em] sm:text-2xl md:text-3xl">Vamos<br /><span style={{ color: c2 }}>conversar</span></h2>
        <p className="mx-auto mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm" style={{ color: "var(--muted)" }}>
          <Mail className="size-3" /> contato@empresa.com
        </p>
        <p className="flex items-center justify-center gap-2 text-xs sm:text-sm" style={{ color: "var(--muted)" }}>
          <MapPin className="size-3" /> Brasil
        </p>
        <a href="https://wa.me/5547XXXXXXXX" className="mt-6 inline-flex min-h-12 items-center justify-center px-7 text-xs font-bold tracking-[0.1em] uppercase text-white transition-all sm:min-h-0 sm:py-3.5 sm:px-8 rounded-md" style={{ backgroundColor: c2 }}>
          FALAR NO WHATSAPP
        </a>
      </div>
    </section>
  )
}
