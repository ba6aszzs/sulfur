import { motion } from "framer-motion"

function Hexagon({ className, size = "80px", color = "#F26500", style }: { className?: string; size?: string; color?: string; style?: React.CSSProperties }) {
  const w = parseInt(size)
  const h = w * 0.866
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} width={w} height={h} style={style} fill="none" stroke={color} strokeWidth="1.5" opacity={1}>
      <polygon points={`${3*w/4},0 ${w},${h/2} ${3*w/4},${h} ${w/4},${h} 0,${h/2} ${w/4},0`} />
    </svg>
  )
}

function Triangle({ className, color = "#F26500", style }: { className?: string; color?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke={color} strokeWidth="2" opacity={1}>
      <polygon points="12,2 22,22 2,22" />
    </svg>
  )
}

const floats = [
  { id: 1, top: "12%", left: "6%", size: { base: 48, sm: 80 }, type: "hexagon", driftX: 12, driftY: 8, duration: 7, delay: 0 },
  { id: 2, top: "65%", right: "10%", size: { base: 40, sm: 64 }, type: "hexagon", driftX: -10, driftY: 6, duration: 9, delay: 1.5 },
  { id: 3, top: "35%", right: "4%", size: { base: 32, sm: 48 }, type: "hexagon", driftX: -8, driftY: 10, duration: 6, delay: 0.8 },
  { id: 4, top: "72%", left: "12%", size: { base: 28, sm: 44 }, type: "triangle", driftX: 10, driftY: -6, duration: 8, delay: 2 },
  { id: 5, top: "22%", left: "52%", size: { base: 24, sm: 36 }, type: "triangle", driftX: -6, driftY: 8, duration: 5, delay: 1 },
  { id: 6, top: "82%", left: "45%", size: { base: 36, sm: 56 }, type: "hexagon", driftX: 8, driftY: -8, duration: 10, delay: 0.5 },
  { id: 7, top: "48%", left: "38%", size: { base: 20, sm: 28 }, type: "triangle", driftX: -12, driftY: 4, duration: 6, delay: 2.5 },
  { id: 8, top: "8%", right: "35%", size: { base: 24, sm: 32 }, type: "hexagon", driftX: 6, driftY: -10, duration: 7, delay: 3 },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[#0d0e0d]">
      {/* Background image — mountain road */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Serra_do_Rio_do_Rastro_%28SC-390%29.jpg/1280px-Serra_do_Rio_do_Rastro_%28SC-390%29.jpg"
          alt="Serra do Rio do Rastro"
          className="h-full w-full object-cover"
          style={{ filter: "blur(4px) brightness(0.35)" }}
          loading="eager"
        />
      </div>

      {/* Hexagonal pattern overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='45,0 60,26 45,52 15,52 0,26 15,0' fill='none' stroke='%23F26500' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 52px",
      }} />

      {/* Floating hexagons and triangles */}
      <div className="pointer-events-none absolute inset-0 z-[2] hidden sm:block">
        {floats.map((f) => {
          const style: React.CSSProperties = {
            position: "absolute",
            top: f.top,
            left: f.left,
            right: f.right,
          }

          return (
            <motion.div
              key={f.id}
              style={style}
              initial={{ x: 0, y: 0, rotate: 0 }}
              animate={{
                x: [0, f.driftX, 0, -f.driftX * 0.6, 0],
                y: [0, f.driftY, -f.driftY * 0.5, f.driftY * 0.7, 0],
                rotate: [0, 3, -2, 4, 0],
              }}
              transition={{
                duration: f.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: f.delay,
              }}
            >
              {f.type === "hexagon" ? (
                <Hexagon size={f.size.sm} color="#F26500" style={{ opacity: 0.07 }} />
              ) : (
                <Triangle color="#F26500" style={{ width: f.size.sm, height: f.size.sm * 0.866, opacity: 0.07 }} />
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          className="max-w-2xl">
          <div className="mb-4 flex items-center gap-2 sm:mb-6 sm:gap-3">
            <span className="h-0.5 w-5 bg-[#F26500] sm:w-8" />
            <svg viewBox="0 0 24 24" className="hidden h-4 w-4 text-[#F26500] sm:block" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#F26500] sm:text-[10px]">Logística Integrada</span>
            <svg viewBox="0 0 24 24" className="hidden h-4 w-4 text-[#F26500] sm:block" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
            <span className="h-0.5 w-5 bg-[#F26500] sm:w-8" />
          </div>
          <h1 className="font-display text-[clamp(3rem,13vw,6rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase text-white">
            SULFUR
          </h1>
          <p className="mt-3 max-w-xl text-xs leading-relaxed sm:mt-5 sm:text-base text-white/50">
            Galpões condominiais, operação 3PL e armazéns alfandegados. Soluções logísticas completas para sua empresa crescer sem gargalos.
          </p>
          <div className="mt-6 flex flex-col sm:mt-10 sm:flex-row sm:gap-3">
            <a href="#servicos" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#F26500] px-8 text-xs font-bold tracking-[0.12em] uppercase text-white transition-all hover:bg-[#D95400] sm:min-h-0 sm:py-3.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white"><polygon points="12,2 22,22 2,22" /></svg>
              VER SERVIÇOS
            </a>
            <a href="https://wa.me/5547XXXXXXXX" className="inline-flex min-h-12 items-center justify-center px-8 text-xs font-bold tracking-[0.12em] uppercase transition-all sm:min-h-0 sm:py-3.5" style={{ border: "1px solid rgba(242,101,0,0.3)", color: "rgba(255,255,255,0.6)" }}>
              SOLICITAR ORÇAMENTO
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hexagonal divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center gap-3">
        {[0, 1, 2, 3].map(i => (
          <svg key={i} viewBox="0 0 28 24" className="h-6 w-7 text-[#F26500]/20" fill="currentColor">
            <polygon points="21,0 28,12 21,24 7,24 0,12 7,0" />
          </svg>
        ))}
      </div>
    </section>
  )
}
