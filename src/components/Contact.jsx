import { motion } from 'framer-motion'
import { GitBranch, Mail, MapPin, Network, Send } from 'lucide-react'
import { links, openEmail, openExternalLink } from '../utils/navigation.js'

const contactItems = [
  { label: 'Email', value: links.email, icon: Mail },
  { label: 'GitHub', value: 'github.com/Yashkr29', icon: GitBranch },
  { label: 'LinkedIn', value: 'linkedin.com/in/yash-kumar-0813ab307', icon: Network },
  { label: 'Location', value: 'Pune, India', icon: MapPin },
]

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`
    alert('Thanks for reaching out! Your email app will open so you can send the message.')
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="section-pad section-line scroll-mt-24">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="kicker mb-5">Contact</p>
            <h2 className="section-title">Let&apos;s Build Something Practical</h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#A8A29E]">
              I am open to remote internships, freelance projects, startup collaborations, and full-stack
              development opportunities.
            </p>

            <div className="mt-10 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-4 border-b border-[#F5F1EA]/15 py-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#F5F1EA]/20 text-[#E6BEAE]">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block text-sm text-[#A8A29E]">{item.label}</span>
                      <span className="block break-all font-bold text-[#F5F1EA]">{item.value}</span>
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 grid gap-3 sm:flex">
              <button type="button" onClick={openEmail} className="solid-btn">
                Email Me
              </button>
              <button type="button" onClick={() => openExternalLink(links.github)} className="outline-btn">
                GitHub
              </button>
              <button type="button" onClick={() => openExternalLink(links.linkedin)} className="outline-btn">
                LinkedIn
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="editorial-card p-6 sm:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#F5F1EA]">Name</span>
                <input type="text" name="name" required className="form-field" placeholder="Your name" />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#F5F1EA]">Email</span>
                <input type="email" name="email" required className="form-field" placeholder="you@example.com" />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#F5F1EA]">Message</span>
                <textarea name="message" required className="form-field" placeholder="Tell me about your project or opportunity" />
              </label>

              <button type="submit" className="solid-btn">
                Send Message <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
