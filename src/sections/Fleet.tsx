import { motion } from "framer-motion"
import Section from "@/components/Section"

const trucks = [
  {
    type: "Carga Seca",
    desc: "Veículos baú para cargas gerais com capacidade de 15 a 30 toneladas. Ideal para manufaturados, eletrônicos e insumos industriais.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop&auto=format",
  },
  {
    type: "Refrigerado",
    desc: "Caminhões com controle de temperatura (-5°C a +10°C) para cargas perecíveis, fármacos e alimentos que exigem cadeia fria.",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop&auto=format",
  },
  {
    type: "Carga Perigosa",
    desc: "Frota certificada MOP para transporte de produtos químicos e inflamáveis. Equipamentos com rastreamento em tempo real e sensores de pressão/temperatura.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop&auto=format",
  },
  {
    type: "Última Milha",
    desc: "Vans e caminhões leves para entregas urbanas e regionais com janela de agendamento. Roteirização inteligente para máxima eficiência.",
    img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=600&fit=crop&auto=format",
  },
  {
    type: "Bitrem / Carreta",
    desc: "Combinações de veículos de carga (CVC) para grandes volumes. Capacidade de até 40 toneladas com otimização de frete por eixo.",
    img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=800&h=600&fit=crop&auto=format",
  },
  {
    type: "Carga Frigorificada",
    desc: "Câmaras frigoríficas móveis com monitoramento IoT e geradores próprios. Ideal para cadeias logísticas complexas e longas distâncias.",
    img: "https://images.unsplash.com/photo-1605030753481-bb38b08c384a?w=800&h=600&fit=crop&auto=format",
  },
]

export default function Fleet() {
  return (
    <Section className="overflow-hidden border-y py-16 sm:py-20" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }} id="frota">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-1.5 inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#F26500]">Frota</span>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-white">
            Nossos <span className="text-[#F26500]">veículos</span>
          </h2>
          <p className="mt-2 text-sm text-white/50">+120 caminhões próprios em operação nacional</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trucks.map((t, i) => (
            <motion.div
              key={t.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group bg-white/5 border transition-all hover:-translate-y-1" style={{ borderColor: "var(--line)" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={t.img} alt={t.type} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="flex items-start gap-2 border-t px-5 py-4" style={{ borderColor: "var(--line)" }}>
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F26500]" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,22 2,22" /></svg>
                <div>
                  <h3 className="font-display text-sm font-black uppercase text-white">{t.type}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/50">{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
