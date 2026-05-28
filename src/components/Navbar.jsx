import { useState } from 'react'
import { FileDown, Menu, X } from 'lucide-react'
import { links, scrollToSection } from '../utils/navigation.js'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080b12]/72 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="group flex items-center gap-3"
          aria-label="Yash Kumar home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-300 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
            YK
          </span>
          <span className="font-semibold text-white transition-colors group-hover:text-cyan-200">
            Yash Kumar
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="rounded-md px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex min-h-10 items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/16"
          >
            <FileDown size={16} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/6 text-slate-100 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#080b12]/96 px-4 py-4 shadow-2xl md:hidden">
          <div className="mx-auto flex max-w-xl flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => {
                  scrollToSection(link.id)
                  setIsOpen(false)
                }}
                className="rounded-md px-4 py-3 text-sm text-slate-200 transition hover:bg-white/8 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              <FileDown size={16} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
