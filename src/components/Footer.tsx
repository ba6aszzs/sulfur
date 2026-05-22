export default function Footer() {
  return (
    <footer className="border-t py-8 sm:py-10" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-lg font-black tracking-tight uppercase" style={{ color: "var(--accent)" }}>SULFUR</span>
          <p className="text-[11px]" style={{ color: "var(--muted)" }}>&copy; 2025 SULFUR &middot; Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
