import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import AnimatedGridBackground from './components/ui/AnimatedGridBackground.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080b12] text-slate-100">
      <AnimatedGridBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
