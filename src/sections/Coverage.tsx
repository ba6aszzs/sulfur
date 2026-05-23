import { useState } from "react"
import { motion } from "framer-motion"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import Section from "@/components/Section"

const sulfurIcon = L.divIcon({
  className: "",
  html: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L8 10l-6 2 6 2 2 6 2-6 6-2-6-2-2-8z" fill="#F26500"/><circle cx="12" cy="10" r="2.5" fill="white"/></svg>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
})

const activeIcon = L.divIcon({
  className: "",
  html: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L8 10l-6 2 6 2 2 6 2-6 6-2-6-2-2-8z" fill="#FBBF24"/><circle cx="12" cy="10" r="2.5" fill="white"/></svg>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
})

const cities = [
  { name: "Manaus", pos: [-3.1190, -60.0217] as [number, number], region: "Norte", units: "3 unidades" },
  { name: "Belém", pos: [-1.4558, -48.5031] as [number, number], region: "Norte", units: "2 unidades (1 em implantação)" },
  { name: "São Luís", pos: [-2.5385, -44.2828] as [number, number], region: "Nordeste", units: "1 unidade" },
  { name: "Fortaleza", pos: [-3.7172, -38.5433] as [number, number], region: "Nordeste", units: "2 unidades" },
  { name: "Natal", pos: [-5.7793, -35.2009] as [number, number], region: "Nordeste", units: "1 unidade" },
  { name: "Recife", pos: [-8.0476, -34.8770] as [number, number], region: "Nordeste", units: "2 unidades" },
  { name: "Salvador", pos: [-12.9777, -38.5016] as [number, number], region: "Nordeste", units: "2 unidades" },
  { name: "Brasília", pos: [-15.7801, -47.9292] as [number, number], region: "Centro-Oeste", units: "3 unidades" },
  { name: "Goiânia", pos: [-16.6799, -49.2550] as [number, number], region: "Centro-Oeste", units: "1 unidade" },
  { name: "Cuiabá", pos: [-15.6014, -56.0979] as [number, number], region: "Centro-Oeste", units: "1 unidade" },
  { name: "Campo Grande", pos: [-20.4697, -54.6201] as [number, number], region: "Centro-Oeste", units: "1 unidade" },
  { name: "Ribeirão Preto", pos: [-21.1699, -47.8101] as [number, number], region: "Sudeste", units: "2 unidades" },
  { name: "São Paulo", pos: [-23.5505, -46.6333] as [number, number], region: "Sudeste", units: "6 unidades" },
  { name: "Campinas", pos: [-22.9068, -47.0618] as [number, number], region: "Sudeste", units: "3 unidades" },
  { name: "Rio de Janeiro", pos: [-22.9068, -43.1729] as [number, number], region: "Sudeste", units: "4 unidades" },
  { name: "Santos", pos: [-23.9618, -46.3322] as [number, number], region: "Sudeste", units: "2 unidades" },
  { name: "Curitiba", pos: [-25.4290, -49.2671] as [number, number], region: "Sul", units: "4 unidades" },
  { name: "Joinville", pos: [-26.3044, -48.8486] as [number, number], region: "Sul", units: "1 unidade" },
  { name: "Florianópolis", pos: [-27.5945, -48.5589] as [number, number], region: "Sul", units: "4 unidades" },
  { name: "Porto Alegre", pos: [-30.0346, -51.2177] as [number, number], region: "Sul", units: "3 unidades" },
]

const regions = [
  { name: "Sul", cities: "Florianópolis, Curitiba, Porto Alegre, Joinville, Blumenau, Caxias do Sul, São José dos Pinhais", count: 12, active: true },
  { name: "Sudeste", cities: "São Paulo, Rio de Janeiro, Belo Horizonte, Campinas, Guarulhos, Ribeirão Preto, São José dos Campos, Santos, Uberlândia, Contagem", count: 18, active: true },
  { name: "Centro-Oeste", cities: "Brasília, Goiânia, Cuiabá, Campo Grande, Anápolis", count: 5, active: true },
  { name: "Nordeste", cities: "Salvador, Recife, Fortaleza, São Luís, Natal, Maceió, João Pessoa, Aracaju", count: 8, active: true },
  { name: "Norte", cities: "Manaus, Belém, Porto Velho, Macapá, Palmas", count: 3, active: false },
]

const totalUnits = regions.reduce((acc, r) => acc + r.count, 0)

export default function Coverage() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  return (
    <Section className="overflow-hidden py-16 sm:py-20" style={{ backgroundColor: "var(--bg)" }} id="cobertura">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-1.5 inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#F26500]">Cobertura</span>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-white">
            <span className="text-[#F26500]">{totalUnits}</span> unidades em todo o Brasil
          </h2>
          <p className="mt-2 text-sm text-white/50">Clique nos pins para detalhes — passe o mouse nas regiões</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left — Leaflet Map */}
          <div className="flex-[2]">
            <div className="relative h-[350px] w-full overflow-hidden rounded border sm:h-[550px]" style={{ borderColor: "var(--line)" }}>
              <MapContainer
                center={[-15, -50]}
                zoom={4.2}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%", background: "#0d0e0d" }}
                zoomControl={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                {cities.map((city) => {
                  const isDimmed = activeRegion && city.region !== activeRegion
                  return (
                    <Marker
                      key={city.name}
                      position={city.pos}
                      icon={isDimmed ? L.divIcon({
                        className: "",
                        html: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2"><path d="M12 2L8 10l-6 2 6 2 2 6 2-6 6-2-6-2-2-8z" fill="#6B7280"/><circle cx="12" cy="10" r="2.5" fill="white"/></svg>`,
                        iconSize: [20, 20],
                        iconAnchor: [10, 10],
                      }) : sulfurIcon}
                    >
                      <Popup>
                        <div style={{ fontFamily: "sans-serif", lineHeight: 1.4 }}>
                          <strong style={{ color: "#F26500" }}>{city.name}</strong>
                          <br />
                          <span style={{ fontSize: 12, color: "#888" }}>{city.units}</span>
                          <br />
                          <span style={{ fontSize: 10, color: "#666" }}>{city.region}</span>
                        </div>
                      </Popup>
                    </Marker>
                  )
                })}
              </MapContainer>
            </div>
          </div>

          {/* Right — region indicators */}
          <div className="grid flex-1 grid-cols-1 gap-2 self-center sm:gap-4">
            {regions.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                onMouseEnter={() => setActiveRegion(r.name)}
                onMouseLeave={() => setActiveRegion(null)}
                onClick={() => setActiveRegion(activeRegion === r.name ? null : r.name)}
                className={`flex items-center justify-between border px-3 py-3 transition-all cursor-pointer sm:px-5 sm:py-5 ${
                  activeRegion === r.name ? "bg-[#F26500]/10" : "bg-white/5"
                } hover:-translate-y-0.5`}
                style={{ borderColor: activeRegion === r.name ? "#F26500" : "var(--line)" }}
              >
                <div className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${r.active ? "bg-[#22C55E]" : "bg-[#9CA3AF]"}`} />
                  <h3 className="font-display text-base font-black uppercase text-white">{r.name}</h3>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl font-black text-[#F26500]">{r.count}</div>
                  <p className="text-[9px] font-bold tracking-[0.12em] uppercase text-white/40">Unidades</p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </Section>
  )
}
