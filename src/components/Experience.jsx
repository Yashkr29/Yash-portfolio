import { motion } from 'framer-motion'
import { BriefcaseBusiness, Check, MapPin, Rocket } from 'lucide-react'

const openTo = [
  'Remote internships',
  'Freelance web projects',
  'Startup collaborations',
  'Full-stack development roles',
]

const tags = ['React', 'Backend APIs', 'AI Products', 'Dashboards']

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
      >
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-emerald-200">Experience</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Internship experience and active availability.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass-panel rounded-lg p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-cyan-300/12 text-cyan-100">
                  <BriefcaseBusiness size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Full Stack Developer Intern</h3>
                <p className="mt-2 flex items-center gap-2 text-slate-300">
                  <MapPin size={17} className="text-emerald-200" />
                  AIValytics
                </p>
              </div>
              <span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm font-semibold text-emerald-100">
                Selected
              </span>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Selected as a Full Stack Developer Intern to contribute to AI-driven web solutions,
              backend systems, dashboards, and scalable product features.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-md bg-white/8 px-3 py-2 text-sm text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="gradient-border rounded-lg p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-amber-300/12 text-amber-100">
                <Rocket size={23} />
              </div>
              <h3 className="text-2xl font-bold text-white">Open to</h3>
            </div>
            <div className="grid gap-3">
              {openTo.map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-200">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-300/14 text-emerald-200">
                    <Check size={15} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
