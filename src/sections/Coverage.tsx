import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Section from "@/components/Section"

const regions = [
  { name: "Sul", cities: "Florianópolis, Curitiba, Porto Alegre, Joinville, Blumenau, Caxias do Sul, São José dos Pinhais", count: 12, active: true, color: "#F26500" },
  { name: "Sudeste", cities: "São Paulo, Rio de Janeiro, Belo Horizonte, Campinas, Guarulhos, Ribeirão Preto, São José dos Campos, Santos, Uberlândia, Contagem", count: 18, active: true, color: "#F26500" },
  { name: "Centro-Oeste", cities: "Brasília, Goiânia, Cuiabá, Campo Grande, Anápolis", count: 5, active: true, color: "#F26500" },
  { name: "Nordeste", cities: "Salvador, Recife, Fortaleza, São Luís, Natal, Maceió, João Pessoa, Aracaju", count: 8, active: true, color: "#F26500" },
  { name: "Norte", cities: "Manaus, Belém, Porto Velho, Macapá, Palmas", count: 3, active: false, color: "#6B7280" },
]

const totalUnits = regions.reduce((acc, r) => acc + r.count, 0)

const pins = [
  { x: 195, y: 84, label: "Manaus", region: "Norte" },
  { x: 353, y: 64, label: "Belém", region: "Norte" },
  { x: 406, y: 79, label: "São Luís", region: "Nordeste" },
  { x: 479, y: 92, label: "Fortaleza", region: "Nordeste" },
  { x: 525, y: 112, label: "Natal", region: "Nordeste" },
  { x: 525, y: 134, label: "Recife", region: "Nordeste" },
  { x: 479, y: 183, label: "Salvador", region: "Nordeste" },
  { x: 355, y: 210, label: "Brasília", region: "Centro-Oeste" },
  { x: 336, y: 219, label: "Goiânia", region: "Centro-Oeste" },
  { x: 247, y: 208, label: "Cuiabá", region: "Centro-Oeste" },
  { x: 266, y: 257, label: "Campo Grande", region: "Centro-Oeste" },
  { x: 356, y: 264, label: "Ribeirão Preto", region: "Sudeste" },
  { x: 372, y: 287, label: "São Paulo", region: "Sudeste" },
  { x: 366, y: 282, label: "Campinas", region: "Sudeste" },
  { x: 417, y: 281, label: "Rio de Janeiro", region: "Sudeste" },
  { x: 376, y: 291, label: "Santos", region: "Sudeste" },
  { x: 336, y: 305, label: "Curitiba", region: "Sul" },
  { x: 343, y: 314, label: "Joinville", region: "Sul" },
  { x: 347, y: 327, label: "Florianópolis", region: "Sul" },
  { x: 311, y: 351, label: "Porto Alegre", region: "Sul" },
]

const unitsByCity: Record<string, string> = {
  Manaus: "3 unidades",
  Belém: "2 unidades (1 em implantação)",
  "São Luís": "1 unidade",
  Fortaleza: "2 unidades",
  Natal: "1 unidade",
  Recife: "2 unidades",
  Salvador: "2 unidades",
  Brasília: "3 unidades",
  Goiânia: "1 unidade",
  Cuiabá: "1 unidade",
  "Campo Grande": "1 unidade",
  "Ribeirão Preto": "2 unidades",
  "São Paulo": "6 unidades",
  Campinas: "3 unidades",
  "Rio de Janeiro": "4 unidades",
  Santos: "2 unidades",
  Curitiba: "4 unidades",
  Joinville: "1 unidade",
  Florianópolis: "4 unidades",
  "Porto Alegre": "3 unidades",
}

export default function Coverage() {
  const [activePin, setActivePin] = useState<string | null>(null)
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  return (
    <Section className="overflow-hidden border-y py-16 sm:py-20" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }} id="cobertura">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-1.5 inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#F26500]">Cobertura</span>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-white">
            <span className="text-[#F26500]">{totalUnits}</span> unidades em todo o Brasil
          </h2>
          <p className="mt-2 text-sm text-white/50">Clique nos pins para detalhes — passe o mouse nas regiões</p>
        </div>

        {/* Interactive map */}
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="relative aspect-[4/3] w-full border bg-[#1a1a1a] p-4 sm:p-8" style={{ borderColor: "var(--line)" }}>
            <svg viewBox="0 0 600 450" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Brazil outline */}
              <path d="M300 20 L340 25 L360 40 L370 35 L390 45 L400 55 L410 50 L430 65 L440 70 L435 80 L450 85 L460 95 L455 105 L465 110 L480 130 L490 140 L485 150 L495 160 L490 170 L500 180 L510 190 L515 200 L520 210 L525 220 L520 230 L510 235 L500 245 L490 255 L480 260 L470 270 L460 275 L450 280 L440 285 L430 290 L420 295 L410 300 L400 305 L390 310 L380 315 L370 320 L360 325 L350 330 L340 335 L330 340 L320 345 L310 350 L300 355 L290 350 L280 345 L270 340 L260 335 L250 330 L240 325 L230 320 L220 315 L210 310 L200 305 L190 300 L180 295 L170 290 L160 285 L150 280 L140 275 L130 270 L120 265 L110 260 L100 250 L90 240 L80 230 L70 220 L65 210 L60 200 L55 190 L50 180 L45 170 L40 160 L35 150 L30 140 L25 130 L20 120 L15 110 L10 100 L12 90 L15 80 L20 70 L25 60 L30 50 L35 40 L40 35 L45 30 L50 25 L55 20 L60 15 L65 12 L70 10 L80 8 L90 6 L100 5 L110 6 L120 8 L130 10 L140 12 L150 15 L160 18 L170 20 L180 22 L190 25 L200 28 L210 30 L220 28 L230 25 L240 22 L250 20 L260 18 L270 16 L280 18 L290 19 L300 20Z"
                stroke="#F26500" strokeWidth="1" fill="rgba(242,101,0,0.08)" />

              {/* Pins */}
              {pins.map((pin) => {
                const isActivePin = activePin === pin.label
                const isRegionMatch = !activeRegion || activeRegion === pin.region || activePin === pin.label
                const dim = activeRegion && !isRegionMatch
                const region = regions.find(r => r.name === pin.region)
                const activeColor = region?.active ? "#F26500" : "#6B7280"

                return (
                  <g key={pin.label}>
                    {/* Ripple */}
                    {!dim && (
                      <motion.circle
                        cx={pin.x} cy={pin.y}
                        r={4}
                        fill={activeColor}
                        opacity={0.15}
                        animate={isActivePin ? { r: [4, 12, 4], opacity: [0.2, 0.03, 0.2] } : { r: [4, 8, 4], opacity: [0.15, 0.04, 0.15] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                    {/* Pin body with bounce */}
                    <motion.g
                      animate={dim ? { opacity: 0.15 } : { opacity: 1, y: [0, -2, 0] }}
                      transition={dim ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActivePin(isActivePin ? null : pin.label)}
                    >
                      <path
                        d="M0-12C-5-12-9-8-9-3c0 5 9 15 9 15s9-10 9-15c0-5-4-9-9-9zm0 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
                        fill={isActivePin ? "#FBBF24" : activeColor}
                        transform={`translate(${pin.x}, ${pin.y})`}
                      />
                    </motion.g>
                    {/* Label */}
                    <text
                      x={pin.x + 11} y={pin.y - 3}
                      fontSize="6" fill={dim ? "#555" : (isActivePin ? "#FBBF24" : "#f5f5f5")}
                      opacity={dim ? 0.3 : 0.7}
                      fontFamily="sans-serif"
                      fontWeight={isActivePin ? "bold" : "normal"}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActivePin(isActivePin ? null : pin.label)}
                    >{pin.label}</text>
                    {/* Tooltip on active pin */}
                    {isActivePin && (
                      <g>
                        <rect
                          x={pin.x - 40} y={pin.y - 38}
                          width={80} height={28}
                          rx={3}
                          fill="#0d0e0d"
                          stroke="#F26500"
                          strokeWidth="0.5"
                          opacity={0.95}
                        />
                        <text x={pin.x} y={pin.y - 27} fontSize="7" fill="#F26500" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">{pin.label}</text>
                        <text x={pin.x} y={pin.y - 17} fontSize="6" fill="#f5f5f5" textAnchor="middle" opacity={0.7} fontFamily="sans-serif">{unitsByCity[pin.label] || "—"}</text>
                        <text x={pin.x} y={pin.y - 10} fontSize="5" fill="#f5f5f5" textAnchor="middle" opacity={0.4} fontFamily="sans-serif">{pin.region}</text>
                      </g>
                    )}
                  </g>
                )
              })}
            </svg>

            <div className="absolute bottom-2 right-3 flex items-center gap-2 text-[9px] text-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F26500]" />
              <span>{totalUnits} unidades em operação</span>
            </div>
          </div>
        </div>

        {/* Region cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {regions.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              onMouseEnter={() => setActiveRegion(r.name)}
              onMouseLeave={() => setActiveRegion(null)}
              onClick={() => setActiveRegion(activeRegion === r.name ? null : r.name)}
              className={`border px-5 py-6 text-center transition-all cursor-pointer ${
                activeRegion === r.name ? "bg-[#F26500]/10" : "bg-white/5"
              } hover:-translate-y-0.5`}
              style={{ borderColor: activeRegion === r.name ? "#F26500" : "var(--line)" }}
            >
              <div className="mb-2 flex items-center justify-center gap-2">
                <span className={`h-2 w-2 rounded-full ${r.active ? "bg-[#22C55E] animate-pulse" : "bg-[#9CA3AF]"}`} />
                <h3 className="font-display text-base font-black uppercase text-white">{r.name}</h3>
              </div>
              <div className="font-display text-3xl font-black text-[#F26500]">{r.count}</div>
              <p className="mt-0.5 text-[10px] font-bold tracking-[0.12em] uppercase text-white/40">Unidades</p>
              <p className="mt-2 text-[10px] leading-relaxed text-white/40 line-clamp-2">{r.cities}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#F26500]/60">
            <svg viewBox="0 0 24 24" className="mr-1 inline-block h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
            NOVA UNIDADE EM IMPLANTAÇÃO: BELÉM (PA) — PREVISÃO 2026
            <svg viewBox="0 0 24 24" className="ml-1 inline-block h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
          </p>
        </div>
      </div>
    </Section>
  )
}
