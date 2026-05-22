import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import WhatsApp from "@/components/WhatsApp"
import Footer from "@/components/Footer"
import Values from "@/sections/Values"
import About from "@/sections/About"
import Differentials from "@/sections/Differentials"
import Contact from "@/sections/Contact"

export default function App() {
  return (
    <div>
      <Navbar c2={"#0d0e0d"} display="SULFUR" />
      <Hero c1={"#F59E0B"} c2={"#0d0e0d"} display="SULFUR" segment="Logística" motto="Carga pesada, entrega leve" />
      <Stats c2={"#0d0e0d"} />
      <Values c2={"#0d0e0d"} />
      <About c2={"#0d0e0d"} display="SULFUR" />
      <Differentials c2={"#0d0e0d"} />
      <Contact c2={"#0d0e0d"} />
      <Footer />
      <WhatsApp />
    </div>
  )
}
