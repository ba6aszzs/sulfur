import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: "+50", label: "Clientes" },
  { value: "+10", label: "Anos" },
  { value: "+5K", label: "Projetos" },
  { value: "100%", label: "Satisfação" },
]

export default function Stats({ c2 }: { c2: string }) {
  return (
    <section className="border-y py-8 sm:py-10" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:flex sm:justify-center sm:gap-0">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center sm:border-r sm:px-10 sm:[&:last-child]:border-r-0" style={{ borderColor: "var(--line)" }}>
              <div className="font-display text-2xl font-black sm:text-3xl md:text-4xl" style={{ color: c2 }}>{s.value}</div>
              <div className="mt-0.5 text-[10px] font-bold tracking-[0.12em] uppercase" style={{ color: "var(--muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
