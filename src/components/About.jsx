import { motion } from 'framer-motion'

const stats = ['4+ Practical Projects', 'Full-Stack Development', 'AI/Product Focused', 'Remote Ready']

function About() {
  return (
    <section id="about" className="section-pad section-line scroll-mt-24">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            
            <h2 className="section-title">
              Practical products with a startup mindset.
            </h2>
          </div>

          <div className="grid gap-6">
            <div className="editorial-card p-6 sm:p-8">
              <p className="text-xl font-black uppercase tracking-[-0.03em] text-[#F5F1EA] sm:text-3xl">
                About Me
              </p>
              <div className="mt-6 space-y-5 text-base leading-8 text-[#A8A29E] sm:text-lg">
                <p>
                  I am a Computer Science Engineering student and full-stack developer focused on
                  building real-world web applications, dashboards, and AI-integrated platforms. I work
                  with React, Java Spring Boot, Firebase, Supabase, SQL, REST APIs, and modern
                  deployment tools to create scalable and practical solutions.
                </p>
                <p>
                  I am currently looking for remote internships, freelance projects, and startup
                  collaboration opportunities.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat} className="editorial-card p-5">
                  <span className="kicker text-[0.68rem]">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="editorial-card mt-16 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr] lg:items-center">
            <p className="kicker">Current Focus</p>
            <div className="space-y-4 text-lg leading-8 text-[#A8A29E]">
              <p>
                Turning ideas into clean, testable, and deployable products: strong interfaces,
                reliable APIs, useful dashboards, and practical AI integrations.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
