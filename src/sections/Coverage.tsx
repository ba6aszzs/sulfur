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
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-white">
            <span className="text-[#F26500]">{totalUnits}</span> unidades em todo o Brasil
          </h2>
          <p className="mt-2 text-sm text-white/50">Galpões condominiais e armazéns estrategicamente posicionados</p>
        </div>

        {/* Visual map - Brazil outline with dots */}
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="relative aspect-[4/3] w-full border bg-[#1a1a1a] p-4 sm:p-8" style={{ borderColor: "var(--line)" }}>
            {/* Simplified Brazil map */}
            <svg viewBox="0 0 600 450" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Brazil outline */}
              <path d="M300 20 L340 25 L360 40 L370 35 L390 45 L400 55 L410 50 L430 65 L440 70 L435 80 L450 85 L460 95 L455 105 L465 110 L480 130 L490 140 L485 150 L495 160 L490 170 L500 180 L510 190 L515 200 L520 210 L525 220 L520 230 L510 235 L500 245 L490 255 L480 260 L470 270 L460 275 L450 280 L440 285 L430 290 L420 295 L410 300 L400 305 L390 310 L380 315 L370 320 L360 325 L350 330 L340 335 L330 340 L320 345 L310 350 L300 355 L290 350 L280 345 L270 340 L260 335 L250 330 L240 325 L230 320 L220 315 L210 310 L200 305 L190 300 L180 295 L170 290 L160 285 L150 280 L140 275 L130 270 L120 265 L110 260 L100 250 L90 240 L80 230 L70 220 L65 210 L60 200 L55 190 L50 180 L45 170 L40 160 L35 150 L30 140 L25 130 L20 120 L15 110 L10 100 L12 90 L15 80 L20 70 L25 60 L30 50 L35 40 L40 35 L45 30 L50 25 L55 20 L60 15 L65 12 L70 10 L80 8 L90 6 L100 5 L110 6 L120 8 L130 10 L140 12 L150 15 L160 18 L170 20 L180 22 L190 25 L200 28 L210 30 L220 28 L230 25 L240 22 L250 20 L260 18 L270 16 L280 18 L290 19 L300 20Z"
                stroke="#F26500" strokeWidth="1" fill="rgba(242,101,0,0.08)" />

              {/* Location pins */}
              {[
                { x: 310, y: 80, label: "Manaus" },
                { x: 150, y: 100, label: "Belém" },
                { x: 260, y: 120, label: "São Luís" },
                { x: 210, y: 150, label: "Fortaleza" },
                { x: 160, y: 170, label: "Natal" },
                { x: 180, y: 190, label: "Recife" },
                { x: 200, y: 210, label: "Salvador" },
                { x: 240, y: 240, label: "Brasília" },
                { x: 290, y: 250, label: "Goiânia" },
                { x: 310, y: 260, label: "Cuiabá" },
                { x: 350, y: 270, label: "Campo Grande" },
                { x: 340, y: 290, label: "Ribeirão Preto" },
                { x: 370, y: 300, label: "São Paulo" },
                { x: 390, y: 310, label: "Campinas" },
                { x: 420, y: 305, label: "Rio de Janeiro" },
                { x: 410, y: 320, label: "Santos" },
                { x: 380, y: 330, label: "Curitiba" },
                { x: 350, y: 360, label: "Florianópolis" },
                { x: 320, y: 380, label: "Porto Alegre" },
                { x: 340, y: 340, label: "Joinville" },
              ].map((pin) => (
                <g key={pin.label}>
                  <motion.path
                    d="M0-12C-5-12-9-8-9-3c0 5 9 15 9 15s9-10 9-15c0-5-4-9-9-9zm0 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
                    fill="#F26500"
                    transform={`translate(${pin.x}, ${pin.y})`}
                    animate={{ y: pin.y - 3 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                  />
                  <motion.circle
                    cx={pin.x} cy={pin.y}
                    r={4}
                    fill="#F26500"
                    opacity={0.15}
                    animate={{ r: [4, 7, 4], opacity: [0.15, 0.05, 0.15] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <text x={pin.x + 11} y={pin.y - 3} fontSize="6" fill="#f5f5f5" opacity={0.5} fontFamily="sans-serif">{pin.label}</text>
                </g>
              ))}
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
              className="border bg-white/5 px-5 py-6 text-center transition-all hover:-translate-y-0.5" style={{ borderColor: "var(--line)" }}
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
