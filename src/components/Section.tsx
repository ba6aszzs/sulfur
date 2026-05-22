import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

export default function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.section ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }} className={className} id={id}>
      {children}
    </motion.section>
  )
}
