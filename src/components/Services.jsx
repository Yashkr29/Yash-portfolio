import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services.js'

function Services() {
  return (
    <section id="services" className="section-pad section-line scroll-mt-24">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="kicker mb-5">Services</p>
            <h2 className="section-title">What I Can Build</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#A8A29E]">
            Practical web solutions for startups, students, businesses, and early-stage products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="editorial-card min-h-[220px] p-6">
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[15rem] text-3xl font-black uppercase tracking-[-0.05em] text-[#F5F1EA]">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="shrink-0 text-[#E6BEAE]" size={22} />
                </div>
                <p className="text-sm leading-6 text-[#A8A29E]">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Services
