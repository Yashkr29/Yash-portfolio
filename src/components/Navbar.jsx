import { useState } from 'react'
import { FileDown, Menu, X } from 'lucide-react'
import { links, scrollToSection } from '../utils/navigation.js'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Work', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (id) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <header className="nav-shell sticky top-0 z-50">
      <nav className="section-shell flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="text-sm font-black uppercase tracking-[0.14em] text-[#F5F1EA]"
          aria-label="Yash Kumar home"
        >
          Yash Kumar.
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <button key={link.id} type="button" onClick={() => scrollToSection(link.id)} className="nav-link">
              {link.label}
            </button>
          ))}
          <a href={links.resume} target="_blank" rel="noreferrer" className="nav-link inline-flex items-center gap-2">
            Resume <FileDown size={14} />
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F5F1EA]/45 text-[#F5F1EA] transition hover:bg-[#F5F1EA] hover:text-[#080808] md:!hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-menu md:hidden">
          <div className="section-shell grid gap-5 py-5">
            {navLinks.map((link) => (
              <button key={link.id} type="button" onClick={() => handleNavClick(link.id)} className="nav-link text-left">
                {link.label}
              </button>
            ))}
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="outline-btn w-fit"
            >
              Resume <FileDown size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
