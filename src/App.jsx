import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ribbon from './components/Ribbon'
import About from './components/About'
import Studio from './components/Studio'
import Services from './components/Services'
import Clients from './components/Clients'
import Digital from './components/Digital'
import Interlude from './components/Interlude'
import Awards from './components/Awards'
import Portfolio from './components/Portfolio'
import Presence from './components/Presence'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

export default function App() {
  useRevealOnScroll()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Ribbon />
        <About />
        <Studio />
        <Services />
        <Clients />
        <Digital />
        <Interlude />
        <Awards />
        <Portfolio />
        <Presence />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
