import { motion } from 'framer-motion'
import {
  AppWindow,
  BarChart3,
  Boxes,
  FileCode2,
  Gauge,
  Globe,
  Plug,
  ShieldCheck,
} from 'lucide-react'
import { services } from '../data/services.js'
import GradientText from './ui/GradientText.jsx'
import SpotlightCard from './ui/SpotlightCard.jsx'

const iconMap = {
  appWindow: AppWindow,
  barChart: BarChart3,
  boxes: Boxes,
  fileCode: FileCode2,
  gauge: Gauge,
  globe: Globe,
  plug: Plug,
  shield: ShieldCheck,
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
      >
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-amber-100">Services</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              <GradientText>What I Can Build</GradientText>
            </h2>
          </div>
          <p className="text-base leading-7 text-slate-400">
            Practical web solutions for startups, students, businesses, and early-stage products.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04, duration: 0.5 }}
              >
                <SpotlightCard className="h-full p-5 transition hover:-translate-y-1">
                  <Icon className="mb-5 text-cyan-200" size={24} />
                  <h3 className="text-base font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
                </SpotlightCard>
              </motion.article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Services
