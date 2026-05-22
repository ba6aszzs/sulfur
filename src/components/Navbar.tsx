import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F3F4F6]/90 backdrop-blur-lg border-b border-black/5">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.svg" alt="SULFUR" className="h-8 w-auto" />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#servicos" className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40 transition-colors hover:text-[#F26500]">Serviços</a>
          <a href="#frota" className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40 transition-colors hover:text-[#F26500]">Frota</a>
          <a href="#rastreio" className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40 transition-colors hover:text-[#F26500]">Rastreio</a>
          <a href="#cobertura" className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40 transition-colors hover:text-[#F26500]">Cobertura</a>
          <a href="#delivery" className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40 transition-colors hover:text-[#F26500]">Delivery</a>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#F26500]/30" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3z"/></svg>
          <a href="https://wa.me/5547XXXXXXXX" className="bg-[#F26500] px-5 py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase text-white transition-all hover:bg-[#D95400]">COTAR</a>
        </div>
        <button className="relative z-50 flex size-11 items-center justify-center md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex flex-col gap-1">
            <motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-[#F26500]" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 w-5 bg-[#F26500]" />
            <motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-[#F26500]" />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t bg-[#F3F4F6]" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              <a href="#servicos" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40">Serviços</a>
              <a href="#frota" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40">Frota</a>
              <a href="#rastreio" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40">Rastreio</a>
              <a href="#cobertura" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40">Cobertura</a>
              <a href="#delivery" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40">Delivery</a>
              <a href="https://wa.me/5547XXXXXXXX" className="mt-2 flex min-h-11 items-center justify-center bg-[#F26500] px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-white">COTAR</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
