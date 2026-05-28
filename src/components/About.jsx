import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-cyan-200">About Me</p>
            <div className="about-callout rounded-xl p-[1px]">
              <div className="about-callout-inner rounded-[11px] p-5 sm:p-6">
                <h2 className="theme-heading text-3xl font-bold text-white sm:text-4xl">
                  Building practical products with a startup mindset.
                </h2>
              </div>
            </div>
          </div>

          <div className="about-callout rounded-xl p-[1px]">
            <div className="about-callout-inner rounded-[11px] p-6 sm:p-8">
              <div className="theme-body space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
                <p>
                  I am a Computer Science Engineering student and full-stack developer focused on
                  building real-world web applications, dashboards, and AI-integrated platforms. I
                  work with React, Java Spring Boot, Firebase, SQL, and modern deployment tools to
                  create scalable and practical solutions.
                </p>
                <p>
                  I am currently looking for remote internships, freelance projects, and startup
                  collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-callout mt-12 rounded-xl p-[1px]">
          <div className="about-callout-inner rounded-[11px] p-6 sm:p-8">
            <p className="theme-body max-w-4xl text-base leading-8 text-slate-300">
              My current focus is turning ideas into clean, testable, and deployable products: a
              strong interface, a sensible backend, clear data flow, and practical features that
              recruiters, founders, and users can understand quickly.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
