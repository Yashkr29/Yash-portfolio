import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Generative AI Intern',
    company: 'Prodigy Infotech',
    description:
      'Worked on Generative AI mini-projects involving text generation, image generation, prompt engineering, chatbot workflows, and model experimentation.',
    tags: ['Generative AI', 'Prompt Engineering', 'Transformers', 'Chatbots'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'AIValytics',
    description:
      'Selected as a Full Stack Developer Intern to contribute to AI-driven web solutions, backend systems, dashboards, and scalable product features.',
    tags: ['React', 'Backend APIs', 'AI Products', 'Dashboards'],
  },
]

function Experience() {
  return (
    <section id="experience" className="section-pad section-line scroll-mt-24">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="kicker mb-5">Experience</p>
            <h2 className="section-title">Professional Snapshots</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#A8A29E]">
            Focused internship work across AI workflows, backend systems, dashboards, and product features.
          </p>
        </div>

        <div className="grid">
          {experiences.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="editorial-row grid gap-6 py-7 md:grid-cols-[0.34fr_1fr]"
            >
              <div>
                <p className="kicker">{item.company}</p>
                <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.05em] text-[#F5F1EA]">
                  {item.role}
                </h3>
              </div>
              <div>
                <p className="max-w-3xl leading-7 text-[#A8A29E]">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="meta-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
