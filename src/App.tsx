import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import WhatsApp from "@/components/WhatsApp"
import Footer from "@/components/Footer"
import Services from "@/sections/Services"
import About from "@/sections/About"
import Differentials from "@/sections/Differentials"
import Contact from "@/sections/Contact"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Differentials />
      <Contact />
      <Footer />
      <WhatsApp />
    </div>
  )
}
