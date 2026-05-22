const stats = [
  { value: "+50", label: "Clientes" },
  { value: "+12", label: "Anos" },
  { value: "+5K", label: "Entregas/mês" },
  { value: "98%", label: "Satisfação" },
]

export default function Stats() {
  return (
    <section className="border-y py-8 sm:py-10" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:flex sm:justify-center sm:gap-0">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center sm:border-r sm:px-10 sm:[&:last-child]:border-r-0" style={{ borderColor: "var(--line)" }}>
              <div className="font-display text-2xl font-black sm:text-3xl md:text-4xl text-[#F26500]">{s.value}</div>
              <div className="mt-0.5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
