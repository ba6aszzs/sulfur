import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Section from "@/components/Section"

const galpoes = [
  // Sul (12)
  { id: 1, name: "Galpão SULFUR Florianópolis I", city: "Florianópolis", state: "SC", area: "12.000 m²", type: "Condominial" },
  { id: 2, name: "Galpão SULFUR Florianópolis II", city: "Florianópolis", state: "SC", area: "8.500 m²", type: "3PL" },
  { id: 3, name: "Galpão SULFUR Florianópolis III", city: "Florianópolis", state: "SC", area: "6.200 m²", type: "Cross-docking" },
  { id: 4, name: "Galpão SULFUR Curitiba I", city: "Curitiba", state: "PR", area: "15.000 m²", type: "Condominial" },
  { id: 5, name: "Galpão SULFUR Curitiba II", city: "Curitiba", state: "PR", area: "10.000 m²", type: "Alfandegado" },
  { id: 6, name: "Galpão SULFUR Curitiba III", city: "Curitiba", state: "PR", area: "7.500 m²", type: "3PL" },
  { id: 7, name: "Galpão SULFUR Porto Alegre I", city: "Porto Alegre", state: "RS", area: "14.000 m²", type: "Condominial" },
  { id: 8, name: "Galpão SULFUR Porto Alegre II", city: "Porto Alegre", state: "RS", area: "9.000 m²", type: "3PL" },
  { id: 9, name: "Galpão SULFUR Joinville", city: "Joinville", state: "SC", area: "5.800 m²", type: "Cross-docking" },
  { id: 10, name: "Galpão SULFUR Blumenau", city: "Blumenau", state: "SC", area: "4.200 m²", type: "3PL" },
  { id: 11, name: "Galpão SULFUR São José dos Pinhais I", city: "São José dos Pinhais", state: "PR", area: "11.000 m²", type: "Condominial" },
  { id: 12, name: "Galpão SULFUR São José dos Pinhais II", city: "São José dos Pinhais", state: "PR", area: "6.000 m²", type: "Alfandegado" },
  // Sudeste (18)
  { id: 13, name: "Galpão SULFUR São Paulo I", city: "São Paulo", state: "SP", area: "22.000 m²", type: "Condominial" },
  { id: 14, name: "Galpão SULFUR São Paulo II", city: "São Paulo", state: "SP", area: "18.000 m²", type: "3PL" },
  { id: 15, name: "Galpão SULFUR São Paulo III", city: "São Paulo", state: "SP", area: "15.000 m²", type: "Condominial" },
  { id: 16, name: "Galpão SULFUR São Paulo IV", city: "São Paulo", state: "SP", area: "12.000 m²", type: "Alfandegado" },
  { id: 17, name: "Galpão SULFUR Rio de Janeiro I", city: "Rio de Janeiro", state: "RJ", area: "16.000 m²", type: "Condominial" },
  { id: 18, name: "Galpão SULFUR Rio de Janeiro II", city: "Rio de Janeiro", state: "RJ", area: "10.000 m²", type: "3PL" },
  { id: 19, name: "Galpão SULFUR Belo Horizonte I", city: "Belo Horizonte", state: "MG", area: "14.000 m²", type: "Condominial" },
  { id: 20, name: "Galpão SULFUR Belo Horizonte II", city: "Belo Horizonte", state: "MG", area: "8.000 m²", type: "3PL" },
  { id: 21, name: "Galpão SULFUR Campinas I", city: "Campinas", state: "SP", area: "20.000 m²", type: "Condominial" },
  { id: 22, name: "Galpão SULFUR Campinas II", city: "Campinas", state: "SP", area: "11.000 m²", type: "Alfandegado" },
  { id: 23, name: "Galpão SULFUR Guarulhos", city: "Guarulhos", state: "SP", area: "9.000 m²", type: "3PL" },
  { id: 24, name: "Galpão SULFUR Ribeirão Preto I", city: "Ribeirão Preto", state: "SP", area: "10.000 m²", type: "Condominial" },
  { id: 25, name: "Galpão SULFUR Ribeirão Preto II", city: "Ribeirão Preto", state: "SP", area: "6.500 m²", type: "3PL" },
  { id: 26, name: "Galpão SULFUR São José dos Campos", city: "São José dos Campos", state: "SP", area: "7.000 m²", type: "Cross-docking" },
  { id: 27, name: "Galpão SULFUR Santos I", city: "Santos", state: "SP", area: "8.500 m²", type: "Alfandegado" },
  { id: 28, name: "Galpão SULFUR Santos II", city: "Santos", state: "SP", area: "5.000 m²", type: "Portuário" },
  { id: 29, name: "Galpão SULFUR Uberlândia", city: "Uberlândia", state: "MG", area: "12.000 m²", type: "Condominial" },
  { id: 30, name: "Galpão SULFUR Contagem", city: "Contagem", state: "MG", area: "7.000 m²", type: "3PL" },
  // Centro-Oeste (5)
  { id: 31, name: "Galpão SULFUR Brasília I", city: "Brasília", state: "DF", area: "10.000 m²", type: "Condominial" },
  { id: 32, name: "Galpão SULFUR Brasília II", city: "Brasília", state: "DF", area: "6.000 m²", type: "3PL" },
  { id: 33, name: "Galpão SULFUR Goiânia", city: "Goiânia", state: "GO", area: "8.000 m²", type: "Condominial" },
  { id: 34, name: "Galpão SULFUR Cuiabá", city: "Cuiabá", state: "MT", area: "5.500 m²", type: "Cross-docking" },
  { id: 35, name: "Galpão SULFUR Campo Grande", city: "Campo Grande", state: "MS", area: "7.000 m²", type: "3PL" },
  // Nordeste (8)
  { id: 36, name: "Galpão SULFUR Salvador I", city: "Salvador", state: "BA", area: "9.000 m²", type: "Condominial" },
  { id: 37, name: "Galpão SULFUR Salvador II", city: "Salvador", state: "BA", area: "5.000 m²", type: "3PL" },
  { id: 38, name: "Galpão SULFUR Recife", city: "Recife", state: "PE", area: "7.500 m²", type: "Condominial" },
  { id: 39, name: "Galpão SULFUR Fortaleza", city: "Fortaleza", state: "CE", area: "6.000 m²", type: "3PL" },
  { id: 40, name: "Galpão SULFUR São Luís", city: "São Luís", state: "MA", area: "4.500 m²", type: "Portuário" },
  { id: 41, name: "Galpão SULFUR Natal", city: "Natal", state: "RN", area: "4.000 m²", type: "Cross-docking" },
  { id: 42, name: "Galpão SULFUR Maceió", city: "Maceió", state: "AL", area: "3.500 m²", type: "3PL" },
  { id: 43, name: "Galpão SULFUR João Pessoa", city: "João Pessoa", state: "PB", area: "3.000 m²", type: "Cross-docking" },
  // Norte (3)
  { id: 44, name: "Galpão SULFUR Manaus", city: "Manaus", state: "AM", area: "15.000 m²", type: "Alfandegado" },
  { id: 45, name: "Galpão SULFUR Belém", city: "Belém", state: "PA", area: "8.000 m²", type: "Condominial" },
  { id: 46, name: "Galpão SULFUR Porto Velho", city: "Porto Velho", state: "RO", area: "4.000 m²", type: "Cross-docking" },
]

export default function Galpoes() {
  const [page, setPage] = useState(0)
  const perPage = 5
  const totalPages = Math.ceil(galpoes.length / perPage)
  const visible = galpoes.slice(page * perPage, page * perPage + perPage)

  useEffect(() => {
    const timer = setInterval(() => setPage(p => (p + 1) % totalPages), 4000)
    return () => clearInterval(timer)
  }, [totalPages])

  return (
    <Section className="overflow-hidden border-y py-16 sm:py-20" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }} id="galpoes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-1.5 inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#F26500]">Galpões</span>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-white">
            Nossos <span className="text-[#F26500]">{galpoes.length}</span> galpões
          </h2>
          <p className="mt-2 text-sm text-white/50">Estruturas modulares distribuídas estrategicamente pelo Brasil</p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            >
              {visible.map((g) => (
                <div
                  key={g.id}
                  className="border bg-white/5 px-4 py-5 transition-all hover:-translate-y-0.5"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0 text-[#F26500]" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="4" y="8" width="16" height="12" rx="1" />
                      <path d="M8 8V6a4 4 0 018 0v2" />
                    </svg>
                    <h3 className="font-display text-xs font-black uppercase leading-tight text-white">{g.name}</h3>
                  </div>
                  <div className="space-y-1 text-[10px]">
                    <p className="flex justify-between text-white/40">
                      <span>Localização</span>
                      <span className="font-semibold text-white/70">{g.city}, {g.state}</span>
                    </p>
                    <p className="flex justify-between text-white/40">
                      <span>Área</span>
                      <span className="font-semibold text-[#F26500]">{g.area}</span>
                    </p>
                    <p className="flex justify-between text-white/40">
                      <span>Tipo</span>
                      <span className="rounded border border-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/50">{g.type}</span>
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all ${i === page ? "w-6 bg-[#F26500]" : "w-1.5 bg-white/20"}`}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
