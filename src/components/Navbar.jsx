import { useState } from 'react'
import { FileDown, Menu, Moon, Sun, X } from 'lucide-react'
import { links, scrollToSection } from '../utils/navigation.js'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
]

function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const isDark = theme === 'dark'

  return (
    <header className="nav-header fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="group flex items-center gap-3"
          aria-label="Yash Kumar home"
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md border border-cyan-300/30 bg-white p-1 shadow-lg shadow-cyan-500/20">
            <img
              src="/logo.webp"
              alt="Yash logo"
              className="h-full w-full object-contain"
            />
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

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-md border"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-md border"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          className="theme-toggle hidden h-10 w-10 items-center justify-center rounded-md border lg:inline-flex"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {isOpen && (
        <div className="nav-mobile border-t px-4 py-4 shadow-2xl lg:hidden">
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
