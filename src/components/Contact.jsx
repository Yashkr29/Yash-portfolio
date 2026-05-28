import { motion } from 'framer-motion'
import { GitBranch, Mail, Network, Send } from 'lucide-react'
import GradientText from './ui/GradientText.jsx'
import SpotlightCard from './ui/SpotlightCard.jsx'
import { links, openEmail, openExternalLink } from '../utils/navigation.js'

const contacts = [
  { label: 'Email Me', value: links.email, action: openEmail, icon: Mail },
  { label: 'GitHub', value: 'github.com/Yashkr29', action: () => openExternalLink(links.github), icon: GitBranch },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yash-kumar-0813ab307',
    action: () => openExternalLink(links.linkedin),
    icon: Network,
  },
]

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Thanks for reaching out! I will get back to you soon.')
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-cyan-200">Contact</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            <GradientText>Let&apos;s Build Something Practical</GradientText>
          </h2>
          <p className="theme-muted mt-4 text-base leading-7 text-slate-400">
            I am open to remote internships, freelance projects, startup collaborations, and
            full-stack development opportunities.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {contacts.map((contact) => {
              const Icon = contact.icon
              return (
                <button
                  type="button"
                  key={contact.label}
                  onClick={contact.action}
                  className="spotlight-card flex items-center gap-4 p-5 text-left transition hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-cyan-300/12 text-cyan-100">
                    <Icon size={22} />
                  </span>
                  <span>
                    <span className="theme-muted block text-sm text-slate-400">{contact.label}</span>
                    <span className="theme-heading block break-all font-semibold text-white">{contact.value}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <SpotlightCard as="form" onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-200">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="min-h-12 rounded-md border border-white/10 bg-white/8 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-200">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="min-h-12 rounded-md border border-white/10 bg-white/8 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-200">Message</span>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="resize-none rounded-md border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                  placeholder="Tell me about your project or opportunity"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-200"
              >
                Send Message <Send size={18} />
              </button>
            </div>
          </SpotlightCard>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
