import { motion } from 'framer-motion'
import { BrainCircuit, Database, Layout, Server, Wrench } from 'lucide-react'
import { skills } from '../data/skills.js'
import GradientText from './ui/GradientText.jsx'
import SpotlightCard from './ui/SpotlightCard.jsx'

const iconMap = {
  layout: Layout,
  server: Server,
  database: Database,
  wrench: Wrench,
  brain: BrainCircuit,
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-emerald-200">Skills</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            <GradientText>Skills & Technologies</GradientText>
          </h2>
          <p className="theme-muted mt-4 text-base leading-7 text-slate-400">
            Frontend polish, backend fundamentals, real databases, and AI integrations for
            internship, freelance, and startup workflows.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = iconMap[group.icon]
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
              >
                <SpotlightCard className={`h-full bg-gradient-to-br ${group.color} p-6`}>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-cyan-100">
                      <Icon size={22} />
                    </span>
                    <h3 className="theme-heading text-xl font-semibold text-white">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/10 bg-white/6 px-3 py-2 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/8 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
