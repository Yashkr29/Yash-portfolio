import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Globe2, Layers3 } from 'lucide-react'
import SpotlightCard from './ui/SpotlightCard.jsx'

const stats = [
  { label: '4+ Practical Projects', icon: Layers3 },
  { label: 'Full-Stack Development', icon: Code2 },
  { label: 'AI/Product Focused', icon: BrainCircuit },
  { label: 'Remote Ready', icon: Globe2 },
]

function Stats() {
  return (
    <section className="scroll-mt-24 py-8">
      <motion.div
        className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <SpotlightCard key={stat.label} className="p-5">
              <Icon className="mb-4 text-cyan-200" size={24} />
              <p className="text-base font-semibold text-white">{stat.label}</p>
            </SpotlightCard>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Stats
