import { motion } from "framer-motion"
import Section from "@/components/Section"

const regions = [
  { name: "Sul", cities: "Florianópolis, Curitiba, Porto Alegre, Joinville, Blumenau, Caxias do Sul, São José dos Pinhais", count: 12, active: true },
  { name: "Sudeste", cities: "São Paulo, Rio de Janeiro, Belo Horizonte, Campinas, Guarulhos, Ribeirão Preto, São José dos Campos, Santos, Uberlândia, Contagem", count: 18, active: true },
  { name: "Centro-Oeste", cities: "Brasília, Goiânia, Cuiabá, Campo Grande, Anápolis", count: 5, active: true },
  { name: "Nordeste", cities: "Salvador, Recife, Fortaleza, São Luís, Natal, Maceió, João Pessoa, Aracaju", count: 8, active: true },
  { name: "Norte", cities: "Manaus, Belém, Porto Velho, Macapá, Palmas", count: 3, active: false },
]

const totalUnits = regions.reduce((acc, r) => acc + r.count, 0)

export default function Coverage() {
  return (
    <Section className="overflow-hidden border-y py-16 sm:py-20" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }} id="cobertura">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-1.5 inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#F26500]">Cobertura</span>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-[#0d0e0d]">
            <span className="text-[#F26500]">{totalUnits}</span> unidades em todo o Brasil
          </h2>
          <p className="mt-2 text-sm text-[#0d0e0d]/50">Galpões condominiais e armazéns estrategicamente posicionados</p>
        </div>

        {/* Visual map - Brazil outline with dots */}
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="relative aspect-[4/3] w-full border bg-white/80 p-4 sm:p-8" style={{ borderColor: "var(--line)" }}>
            {/* Simplified Brazil map */}
            <svg viewBox="0 0 600 450" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Brazil outline */}
              <path d="M300 20 L340 25 L360 40 L370 35 L390 45 L400 55 L410 50 L430 65 L440 70 L435 80 L450 85 L460 95 L455 105 L465 110 L480 130 L490 140 L485 150 L495 160 L490 170 L500 180 L510 190 L515 200 L520 210 L525 220 L520 230 L510 235 L500 245 L490 255 L480 260 L470 270 L460 275 L450 280 L440 285 L430 290 L420 295 L410 300 L400 305 L390 310 L380 315 L370 320 L360 325 L350 330 L340 335 L330 340 L320 345 L310 350 L300 355 L290 350 L280 345 L270 340 L260 335 L250 330 L240 325 L230 320 L220 315 L210 310 L200 305 L190 300 L180 295 L170 290 L160 285 L150 280 L140 275 L130 270 L120 265 L110 260 L100 250 L90 240 L80 230 L70 220 L65 210 L60 200 L55 190 L50 180 L45 170 L40 160 L35 150 L30 140 L25 130 L20 120 L15 110 L10 100 L12 90 L15 80 L20 70 L25 60 L30 50 L35 40 L40 35 L45 30 L50 25 L55 20 L60 15 L65 12 L70 10 L80 8 L90 6 L100 5 L110 6 L120 8 L130 10 L140 12 L150 15 L160 18 L170 20 L180 22 L190 25 L200 28 L210 30 L220 28 L230 25 L240 22 L250 20 L260 18 L270 16 L280 18 L290 19 L300 20Z"
                stroke="#F26500" strokeWidth="1" fill="rgba(242,101,0,0.03)" />

              {/* Location dots with pulsing animation */}
              {[
                { cx: 310, cy: 80, r: 5, label: "Manaus" },
                { cx: 150, cy: 100, r: 4, label: "Belém" },
                { cx: 260, cy: 120, r: 3, label: "São Luís" },
                { cx: 210, cy: 150, r: 5, label: "Fortaleza" },
                { cx: 160, cy: 170, r: 4, label: "Natal" },
                { cx: 180, cy: 190, r: 4, label: "Recife" },
                { cx: 200, cy: 210, r: 4, label: "Salvador" },
                { cx: 240, cy: 240, r: 4, label: "Brasília" },
                { cx: 290, cy: 250, r: 4, label: "Goiânia" },
                { cx: 310, cy: 260, r: 4, label: "Cuiabá" },
                { cx: 350, cy: 270, r: 4, label: "Campo Grande" },
                { cx: 340, cy: 290, r: 3, label: "Ribeirão Preto" },
                { cx: 370, cy: 300, r: 5, label: "São Paulo" },
                { cx: 390, cy: 310, r: 4, label: "Campinas" },
                { cx: 420, cy: 305, r: 4, label: "Rio de Janeiro" },
                { cx: 410, cy: 320, r: 4, label: "Santos" },
                { cx: 380, cy: 330, r: 4, label: "Curitiba" },
                { cx: 350, cy: 360, r: 5, label: "Florianópolis" },
                { cx: 320, cy: 380, r: 4, label: "Porto Alegre" },
                { cx: 340, cy: 340, r: 3, label: "Joinville" },
              ].map((dot) => (
                <g key={dot.label}>
                  <motion.circle
                    cx={dot.cx} cy={dot.cy} r={dot.r}
                    fill="#F26500" opacity={0.7}
                    animate={{ r: [dot.r, dot.r + 3, dot.r], opacity: [0.7, 0.2, 0.7] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <circle cx={dot.cx} cy={dot.cy} r={dot.r - 1} fill="#F26500" />
                  <text x={dot.cx + dot.r + 3} y={dot.cy + 1} fontSize="6" fill="#0d0e0d" opacity={0.5} fontFamily="sans-serif">{dot.label}</text>
                </g>
              ))}
            </svg>

            <div className="absolute bottom-2 right-3 flex items-center gap-2 text-[9px] text-[#0d0e0d]/30">
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
              className="border bg-white/60 px-5 py-6 text-center transition-all hover:-translate-y-0.5" style={{ borderColor: "var(--line)" }}
            >
              <div className="mb-2 flex items-center justify-center gap-2">
                <span className={`h-2 w-2 rounded-full ${r.active ? "bg-[#22C55E] animate-pulse" : "bg-[#9CA3AF]"}`} />
                <h3 className="font-display text-base font-black uppercase text-[#0d0e0d]">{r.name}</h3>
              </div>
              <div className="font-display text-3xl font-black text-[#F26500]">{r.count}</div>
              <p className="mt-0.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40">Unidades</p>
              <p className="mt-2 text-[10px] leading-relaxed text-[#0d0e0d]/40 line-clamp-2">{r.cities}</p>
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
