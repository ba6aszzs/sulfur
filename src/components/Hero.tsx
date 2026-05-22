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

const traffic = [
  // Each: y (%), size (px), type, speed (s), startX (% of vw)
  // Lane 1
  { y: "9%", size: 32, type: "hexagon", speed: 12, startX: 10 },
  { y: "9%", size: 20, type: "triangle", speed: 8, startX: 45 },
  { y: "9%", size: 28, type: "hexagon", speed: 14, startX: 75 },
  // Lane 2
  { y: "20%", size: 28, type: "hexagon", speed: 10, startX: 0 },
  { y: "20%", size: 36, type: "hexagon", speed: 15, startX: 38 },
  { y: "20%", size: 22, type: "triangle", speed: 9, startX: 70 },
  // Lane 3
  { y: "32%", size: 24, type: "triangle", speed: 7, startX: 15 },
  { y: "32%", size: 34, type: "hexagon", speed: 13, startX: 50 },
  { y: "32%", size: 26, type: "triangle", speed: 10, startX: 85 },
  // Lane 4
  { y: "44%", size: 38, type: "hexagon", speed: 16, startX: 5 },
  { y: "44%", size: 24, type: "hexagon", speed: 11, startX: 42 },
  { y: "44%", size: 30, type: "triangle", speed: 8, startX: 78 },
  // Lane 5
  { y: "55%", size: 30, type: "hexagon", speed: 12, startX: 20 },
  { y: "55%", size: 22, type: "triangle", speed: 9, startX: 55 },
  { y: "55%", size: 28, type: "triangle", speed: 6, startX: 88 },
  // Lane 6
  { y: "66%", size: 36, type: "hexagon", speed: 14, startX: 8 },
  { y: "66%", size: 24, type: "hexagon", speed: 10, startX: 48 },
  { y: "66%", size: 20, type: "triangle", speed: 7, startX: 82 },
  // Lane 7
  { y: "78%", size: 28, type: "triangle", speed: 11, startX: 12 },
  { y: "78%", size: 34, type: "hexagon", speed: 15, startX: 52 },
  { y: "78%", size: 22, type: "triangle", speed: 8, startX: 90 },
  // Lane 8
  { y: "90%", size: 32, type: "hexagon", speed: 13, startX: 3 },
  { y: "90%", size: 20, type: "triangle", speed: 7, startX: 40 },
  { y: "90%", size: 26, type: "hexagon", speed: 10, startX: 72 },
]

const laneYs = [18, 30, 42, 54, 66, 78, 90]

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[#0d0e0d]">
      {/* Hexagonal pattern background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='45,0 60,26 45,52 15,52 0,26 15,0' fill='none' stroke='%23F26500' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 52px",
      }} />

      {/* Highway traffic animation */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {traffic.map((v, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: v.y }}
            initial={{ x: `${v.startX}vw` }}
            animate={{ x: [`${v.startX}vw`, `-${100 - v.startX}vw`] }}
            transition={{ duration: v.speed, repeat: Infinity, ease: "linear" }}
          >
            {v.type === "hexagon" ? (
              <Hexagon size={v.size} color="#F26500" style={{ opacity: 0.08 }} />
            ) : (
              <Triangle color="#F26500" style={{ width: v.size, height: v.size * 0.866, opacity: 0.08 }} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Lane dividers */}
      {laneYs.map((y) => (
        <div key={y} className="pointer-events-none absolute left-0 right-0 z-10 h-px" style={{ top: `${y}%` }}>
          <div className="mx-auto h-full w-full" style={{
            background: "repeating-linear-gradient(90deg, rgba(242,101,0,0.06) 0px, rgba(242,101,0,0.06) 20px, transparent 20px, transparent 50px)",
            backgroundSize: "50px 1px",
          }} />
        </div>
      ))}

      {/* Road edges */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-px bg-gradient-to-b from-transparent via-[#F26500]/10 to-transparent" />
      <div className="pointer-events-none absolute top-0 bottom-0 right-0 z-10 w-px bg-gradient-to-b from-transparent via-[#F26500]/10 to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6">
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
