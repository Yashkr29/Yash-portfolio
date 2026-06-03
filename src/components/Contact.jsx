import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { GitBranch, Mail, MapPin, Network, Send } from 'lucide-react'
import { links, openEmail, openExternalLink } from '../utils/navigation.js'

const contactItems = [
  { label: 'Email', value: links.email, icon: Mail },
  { label: 'GitHub', value: 'github.com/Yashkr29', icon: GitBranch },
  { label: 'LinkedIn', value: 'linkedin.com/in/yash-kumar-0813ab307', icon: Network },
  { label: 'Location', value: 'Pune, India', icon: MapPin },
]

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const getValidationMessage = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.name.trim()) return 'Please enter your name.'
    if (!emailPattern.test(formData.email.trim())) return 'Please enter a valid email address.'
    if (!formData.subject.trim()) return 'Please add a subject.'
    if (formData.message.trim().length < 10) return 'Please write a message of at least 10 characters.'

    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationMessage = getValidationMessage()

    if (validationMessage) {
      setStatus({ type: 'error', message: validationMessage })
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured yet. Please email me directly.',
      })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          to_email: 'yashkr7970@gmail.com',
        },
        PUBLIC_KEY,
      )

      setStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      })
      setFormData(initialFormData)
    } catch (error) {
      console.error('EmailJS send failed:', error)
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email me directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
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

          <form onSubmit={handleSubmit} className="editorial-card contact-form-card w-full justify-self-stretch p-6 sm:p-7 lg:justify-self-end lg:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#F5F1EA]">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-field"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#F5F1EA]">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-field"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2 sm:col-span-2">
                <span className="text-sm font-bold text-[#F5F1EA]">Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-field"
                  placeholder="Project, internship, or collaboration"
                />
              </label>

              <label className="grid gap-2 sm:col-span-2">
                <span className="text-sm font-bold text-[#F5F1EA]">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-field contact-message-field"
                  placeholder="Tell me about your project or opportunity"
                />
              </label>

              {status.message && (
                <p
                  className={`sm:col-span-2 border px-4 py-3 text-sm leading-6 ${
                    status.type === 'success'
                      ? 'border-emerald-300/25 text-emerald-200'
                      : 'border-red-300/25 text-red-200'
                  }`}
                  role="status"
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="solid-btn contact-submit-button sm:col-span-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send size={18} />}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
