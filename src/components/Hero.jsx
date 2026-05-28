import { motion } from 'framer-motion'
import { ArrowRight, FileDown, GitBranch, Mail, Network, Sparkles } from 'lucide-react'
import BlurText from './ui/BlurText.jsx'
import FloatingTechStack from './ui/FloatingTechStack.jsx'
import GradientText from './ui/GradientText.jsx'
import { links, openExternalLink, scrollToSection } from '../utils/navigation.js'

function Hero() {
  return (
    <section id="home" className="relative min-h-screen scroll-mt-24 overflow-hidden pt-24">
      <motion.div
        className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/18 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.38, 0.7, 0.38] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-shell grid min-h-[calc(100vh-96px)] items-center gap-12 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-sm text-cyan-100">
            <Sparkles size={16} />
            Open to Remote Internships & Freelance Projects
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            <BlurText text="Hey, I'm Yash" />
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-bold leading-9 text-white sm:text-3xl">
            <GradientText>Full-Stack Developer</GradientText> building scalable web apps,
            dashboards, and AI-powered products.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I build practical, deployable, and business-focused web solutions using React, Spring
            Boot, Firebase, REST APIs, and modern deployment tools.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 font-semibold text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-cyan-300/16"
            >
              Download Resume <FileDown size={18} />
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/12 bg-white/8 px-5 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/12"
            >
              Contact Me <Mail size={18} />
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => openExternalLink(links.github)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/12 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-white"
              aria-label="Open GitHub profile"
            >
              <GitBranch size={19} />
            </button>
            <button
              type="button"
              onClick={() => openExternalLink(links.linkedin)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/12 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-white"
              aria-label="Open LinkedIn profile"
            >
              <Network size={19} />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[440px]"
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <FloatingTechStack />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
