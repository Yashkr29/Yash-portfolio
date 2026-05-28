import { motion } from 'framer-motion'
import { CheckCircle2, ExternalLink, GitBranch, Sparkles, Target } from 'lucide-react'
import { projects } from '../data/projects.js'
import GradientText from './ui/GradientText.jsx'
import SpotlightCard from './ui/SpotlightCard.jsx'
import { openExternalLink } from '../utils/navigation.js'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay: index * 0.06, duration: 0.58 }}
    >
      <SpotlightCard className="group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-2">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold text-cyan-100">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-purple-300/20 bg-purple-300/10 px-2.5 py-1 text-xs font-semibold text-purple-100">
              <Sparkles size={13} /> {project.status}
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
        <p className="mt-3 text-sm font-semibold text-cyan-100">{project.tagline}</p>
        <p className="mt-5 text-sm leading-7 text-slate-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-md bg-white/8 px-3 py-1.5 text-xs font-medium text-slate-200">
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-6 grid gap-3 text-sm text-slate-300">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={17} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-md border border-emerald-300/15 bg-emerald-300/8 p-4 text-sm leading-6 text-emerald-50">
          <span className="mb-1 flex items-center gap-2 font-semibold text-emerald-200">
            <Target size={16} /> Impact
          </span>
          {project.impact}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <button
            type="button"
            onClick={() => openExternalLink(project.github)}
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/12 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/8"
          >
            <GitBranch size={17} /> GitHub
          </button>
          <button
            type="button"
            onClick={() => openExternalLink(project.demo)}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            <ExternalLink size={17} /> Live Demo
          </button>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="section-shell">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase text-cyan-200">Projects</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            <GradientText>Featured Projects</GradientText>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Data-driven project cards with deployable product thinking: auth, dashboards, APIs,
            analytics, and AI recommendations.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
