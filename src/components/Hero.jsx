import { motion } from 'framer-motion'
import { GitBranch, Network } from 'lucide-react'
import { links, openExternalLink } from '../utils/navigation.js'

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden text-[#F5F1EA] scroll-mt-24">
      <div className="sr-only">
        <h1>Yash Kumar</h1>
        <p>Full-Stack Developer Intern @ AIValytics</p>
        <p>React, Spring Boot, Java, REST APIs, MySQL, Supabase, Firebase</p>
        <p>Building full-stack and AI-enabled web applications.</p>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 top-[22%] z-0 flex flex-col items-center justify-center text-center text-[15.5vw] font-black uppercase leading-[0.82] tracking-[-0.07em] text-[#F5F1EA] sm:top-[21%] sm:text-[13vw] lg:text-[11.8vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <span>Full-Stack</span>
        <span>DEVELOPER</span>
      </motion.div>

      <motion.div
        className="absolute inset-x-0 bottom-0 z-20 flex justify-center"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <img
          src="/images/yash-cutout.png"
          alt="Yash Kumar"
          className="h-[70vh] w-auto max-w-none object-contain object-bottom grayscale contrast-125 brightness-95 sm:h-[84vh] lg:h-[90vh]"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-5 right-5 z-30 max-w-2xl sm:bottom-28 sm:left-10 sm:right-auto lg:left-16"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
      >
        <p
          className="text-lg leading-8 text-[#A8A29E] sm:text-xl"
          style={{ textShadow: '0 2px 24px rgba(0,0,0,0.8)' }}
        >
          Hey, I&apos;m Yash...<br/> I build scalable web apps, dashboards, and <br/> AI-powered products 
          using React, Spring Boot,<br/> Firebase, Supabase, REST APIs, and modern <br/> backend systems.
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-5 z-30 flex flex-wrap gap-5 text-sm font-bold uppercase tracking-[0.12em] sm:left-10 lg:left-16"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        <button
          type="button"
          onClick={() => openExternalLink(links.github)}
          className="text-[#A8A29E] transition hover:text-[#E6BEAE]"
          aria-label="Open Yash Kumar GitHub profile"
        >
          <GitBranch className="mr-2 inline" size={15} /> GitHub
        </button>
        <button
          type="button"
          onClick={() => openExternalLink(links.linkedin)}
          className="text-[#A8A29E] transition hover:text-[#E6BEAE]"
          aria-label="Open Yash Kumar LinkedIn profile"
        >
          <Network className="mr-2 inline" size={15} /> LinkedIn
        </button>
        
      </motion.div>
    </section>
  )
}

export default Hero
