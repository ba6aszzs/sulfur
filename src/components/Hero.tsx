import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[#F3F4F6]">
      {/* Linhas de estrada */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, #F59E0B 40px, #F59E0B 42px)` }} />
      
      {/* Containers decorativos */}
      {[
        { w: "180px", h: "100px", top: "15%", right: "10%" },
        { w: "140px", h: "80px", top: "45%", right: "25%" },
        { w: "120px", h: "70px", top: "70%", right: "5%" },
      ].map((c, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          className="absolute border-2 opacity-[0.04]"
          style={{ width: c.w, height: c.h, top: c.top, right: c.right, borderColor: "#F59E0B", backgroundColor: "#F59E0B" }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-0.5 w-6 bg-[#F59E0B]" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#F59E0B]">Logística</span>
            <span className="h-0.5 w-6 bg-[#F59E0B]" />
          </div>
          <h1 className="font-display text-[clamp(3rem,13vw,6rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase text-[#0d0e0d]">
            SULFUR
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed sm:text-base text-[#0d0e0d]/40">
            Carga pesada, entrega leve. Transporte, armazenagem e logística integrada para todo o Brasil.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#pilares" className="flex min-h-12 items-center justify-center bg-[#F59E0B] px-8 text-xs font-bold tracking-[0.12em] uppercase text-white transition-all hover:bg-[#D97706] sm:min-h-0 sm:py-3.5">CONHECER</a>
            <a href="https://wa.me/5547XXXXXXXX" className="flex min-h-12 items-center justify-center border-2 px-8 text-xs font-bold tracking-[0.12em] uppercase transition-all sm:min-h-0 sm:py-3.5" style={{ borderColor: "rgba(0,0,0,0.08)", color: "rgba(0,0,0,0.4)" }}>SOLICITAR ORÇAMENTO</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
