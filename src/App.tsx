import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import WhatsApp from "@/components/WhatsApp"
import Footer from "@/components/Footer"
import Services from "@/sections/Services"
import Fleet from "@/sections/Fleet"
import Tracking from "@/sections/Tracking"
import Delivery from "@/sections/Delivery"
import Coverage from "@/sections/Coverage"
import SFIJ11 from "@/sections/SFIJ11"
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
      <Fleet />
      <Tracking />
      <Delivery />
      <Coverage />
      <SFIJ11 />
      <About />
      <Differentials />
      <Contact />
      <Footer />
      <WhatsApp />
    </div>
  )
}
