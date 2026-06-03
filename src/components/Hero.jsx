import { motion } from 'framer-motion'
import { ArrowRight, FileDown, GitBranch, Mail, Network } from 'lucide-react'
import { links, openEmail, openExternalLink, scrollToSection } from '../utils/navigation.js'

function Hero() {
  return (
    <section id="home" className="hero-section scroll-mt-24">
      <div className="section-shell">
        <motion.div
          className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="mb-7 text-base font-black uppercase tracking-[0.18em] text-[#F5F1EA] sm:text-lg">
              &#123;HEY, I&apos;M YASH&#125;
            </p>
            <h1 className="editorial-title">
  <span className="block">
    FULL-<span className="font-serif italic normal-case tracking-[-0.04em] text-[#E6BEAE]">Stack</span>
  </span>
  <span className="block">Developer</span>
</h1>
          </div>

          <div className="max-w-xl lg:pb-3">
            <p className="text-lg leading-8 text-[#A8A29E]">
              I build scalable web apps, dashboards, and AI-powered products using React, Spring
              Boot, Firebase, Supabase, REST APIs, and modern backend systems.
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <button type="button" onClick={() => scrollToSection('projects')} className="solid-btn">
                View Work <ArrowRight size={17} />
              </button>
              <button type="button" onClick={() => scrollToSection('contact')} className="outline-btn">
                Let&apos;s Discuss
              </button>
              <a href={links.resume} target="_blank" rel="noreferrer" className="outline-btn">
                Download Resume <FileDown size={17} />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm font-bold uppercase tracking-[0.12em]">
              <button type="button" onClick={() => openExternalLink(links.github)} className="text-[#A8A29E] transition hover:text-[#E6BEAE]">
                <GitBranch className="mr-2 inline" size={15} /> GitHub
              </button>
              <button type="button" onClick={() => openExternalLink(links.linkedin)} className="text-[#A8A29E] transition hover:text-[#E6BEAE]">
                <Network className="mr-2 inline" size={15} /> LinkedIn
              </button>
              <button type="button" onClick={openEmail} className="text-[#A8A29E] transition hover:text-[#E6BEAE]">
                <Mail className="mr-2 inline" size={15} /> Email
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
