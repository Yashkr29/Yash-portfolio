import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import LightRays from './components/effects/LightRays.jsx'

function App() {
  return (
    <div className="app-shell">
      <div className="site-rays" aria-hidden="true">
        <LightRays
          raysOrigin="top-center"
          raysColor="#E6BEAE"
          raysSpeed={0.5}
          lightSpread={0.78}
          rayLength={1.25}
          fadeDistance={0.95}
          saturation={0.82}
          followMouse
          mouseInfluence={0.05}
          noiseAmount={0.02}
          distortion={0.02}
        />
      </div>

      <div className="site-content">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
