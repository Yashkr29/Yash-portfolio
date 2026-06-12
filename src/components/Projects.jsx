import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, ExternalLink, GitBranch, Target } from 'lucide-react'
import { projects } from '../data/projects.js'
import { handleProjectLink } from '../utils/navigation.js'

function ProjectRow({ project, index, featured = false }) {
  return (
    <article className={`editorial-row py-8 ${featured ? 'lg:py-12' : ''}`}>
      <div className="grid gap-8 lg:grid-cols-[0.13fr_0.47fr_0.4fr]">
        <div className="flex items-start justify-between gap-4 lg:block">
          <span className="kicker">{String(index + 1).padStart(2, '0')}</span>
          <ArrowUpRight className="text-[#E6BEAE] lg:mt-8" size={24} />
        </div>

        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="meta-pill">{project.category}</span>
            <span className="meta-pill">{project.status}</span>
          </div>
          <h3 className={`${featured ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl'} font-black uppercase tracking-[-0.06em] text-[#F5F1EA]`}>
            {project.name}
          </h3>
          <p className="mt-4 max-w-2xl text-lg font-semibold text-[#E6BEAE]">{project.tagline}</p>
          <p className="mt-6 max-w-2xl leading-7 text-[#A8A29E]">{project.description}</p>
        </div>

        <div className="grid content-start gap-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="meta-pill">
                {tech}
              </span>
            ))}
          </div>

          <ul className="grid gap-3 text-sm text-[#A8A29E]">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#B2967D]" size={17} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="border-l border-[#E6BEAE] pl-4 text-sm leading-6 text-[#A8A29E]">
            <span className="mb-1 flex items-center gap-2 font-bold uppercase tracking-[0.08em] text-[#F5F1EA]">
              <Target size={16} /> Impact
            </span>
            {project.impact}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => handleProjectLink(project.github)}
              className="outline-btn"
              aria-label={`Open GitHub repository for ${project.name}`}
            >
              <GitBranch size={17} /> GitHub
            </button>
            <button
              type="button"
              onClick={() => handleProjectLink(project.demo)}
              className="solid-btn"
              aria-label={`Open live demo for ${project.name}`}
            >
              <ExternalLink size={17} /> Live Demo
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="section-pad section-line scroll-mt-24">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="kicker mb-5">Featured Work</p>
            <h2 className="section-title">Selected Projects</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#A8A29E]">
            Clean, product-focused builds across AI analytics, finance, productivity, and assessment tools.
          </p>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectRow key={project.name} project={project} index={index} featured={index === 0} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
