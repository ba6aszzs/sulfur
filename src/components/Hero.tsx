import { motion } from "framer-motion"

function Hexagon({ className, size = "80px", color = "#F26500" }: { className?: string; size?: string; color?: string }) {
  const w = parseInt(size)
  const h = w * 0.866
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} width={w} height={h} fill="none" stroke={color} strokeWidth="1.5" opacity={0.12}>
      <polygon points={`${w / 2},2 ${w - 2},${h / 3} ${w - 2},${(2 * h) / 3} ${w / 2},${h - 2} 2,${(2 * h) / 3} 2,${h / 3}`} />
    </svg>
  )
}

function Triangle({ className, color = "#F26500" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" opacity={0.15}>
      <polygon points="12,2 22,22 2,22" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[#0d0e0d]">
      {/* Hexagonal pattern background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 58,16 58,44 30,52 2,44 2,16' fill='none' stroke='%23F26500' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 52px",
      }} />

      {/* Decorativos flutuantes */}
      <Hexagon className="pointer-events-none absolute top-20 left-[8%] size-16 sm:size-20" />
      <Hexagon className="pointer-events-none absolute bottom-32 right-[12%] size-12 sm:size-16" color="#F26500" />
      <Hexagon className="pointer-events-none absolute top-1/3 right-[5%] size-8 sm:size-10" color="#F26500" />
      <Triangle className="pointer-events-none absolute bottom-40 left-[15%] size-8 sm:size-10" />
      <Triangle className="pointer-events-none absolute top-1/4 left-[55%] size-6 sm:size-8" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#F26500]" />
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#F26500]" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#F26500]">Logística Integrada</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#F26500]" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
            <span className="h-0.5 w-8 bg-[#F26500]" />
          </div>
          <h1 className="font-display text-[clamp(3rem,13vw,6rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase text-white">
            SULFUR
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed sm:text-base text-white/50">
            Galpões condominiais, operação 3PL e armazéns alfandegados. Soluções logísticas completas para sua empresa crescer sem gargalos.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#servicos" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#F26500] px-8 text-xs font-bold tracking-[0.12em] uppercase text-white transition-all hover:bg-[#D95400] sm:min-h-0 sm:py-3.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white"><polygon points="12,2 22,22 2,22" /></svg>
              VER SERVIÇOS
            </a>
            <a href="https://wa.me/5547XXXXXXXX" className="inline-flex min-h-12 items-center justify-center border-2 px-8 text-xs font-bold tracking-[0.12em] uppercase transition-all sm:min-h-0 sm:py-3.5" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}>
              SOLICITAR ORÇAMENTO
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hexagonal divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <svg viewBox="0 0 120 24" className="h-6 w-30 text-[#F26500]/20" fill="currentColor">
          <polygon points="12,0 22,8 22,20 12,24 2,20 2,8" />
          <polygon points="42,0 52,8 52,20 42,24 32,20 32,8" />
          <polygon points="72,0 82,8 82,20 72,24 62,20 62,8" />
          <polygon points="102,0 112,8 112,20 102,24 92,20 92,8" />
        </svg>
      </div>
    </section>
  )
}
