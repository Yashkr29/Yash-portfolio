import { motion } from 'framer-motion'

const achievements = [
  'TOP6 - Wepitch Startup Competition',
  'Selected - Smart India Hackathon',
  'Leadership - GeeksforGeeks Student Chapter',
  'University Cricket Team',
]

function Achievements() {
  return (
    <section id="achievements" className="section-pad section-line scroll-mt-24">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-10">
          <p className="kicker mb-5">Highlights</p>
          <h2 className="section-title">Selective Wins</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <article key={item} className="editorial-card p-5">
              <span className="kicker text-[0.68rem]">{String(index + 1).padStart(2, '0')}</span>
              <p className="mt-6 text-xl font-black uppercase tracking-[-0.04em] text-[#F5F1EA]">
              {item}
              </p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Achievements
