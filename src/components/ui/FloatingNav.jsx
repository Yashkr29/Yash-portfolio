import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { IconFileText } from '@tabler/icons-react'
import { links, scrollToSection } from '../../utils/navigation.js'

function FloatingNav({ navItems = [] }) {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(true)

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious()

    if (current < 24) {
      setIsVisible(true)
      return
    }

    setIsVisible(current < previous)
  })

  const handleClick = (item) => {
    if (item.link?.startsWith('#')) {
      scrollToSection(item.link.replace('#', ''))
    }
  }

  return (
    <motion.nav
      className="fixed left-1/2 top-5 z-50 w-[calc(100%-1.5rem)] max-w-fit -translate-x-1/2 rounded-full border border-white/15 bg-[#080808]/80 px-2 py-2 text-[#F5F1EA] shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-3"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -88, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      aria-label="Primary navigation"
    >
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => handleClick(item)}
            className="inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-xs font-black uppercase tracking-[0.08em] text-[#A8A29E] transition hover:bg-white/[0.04] hover:text-[#E6BEAE] sm:px-4"
            aria-label={`Go to ${item.name}`}
          >
            <span className="shrink-0">{item.icon}</span>
            <span className="hidden sm:inline">{item.name}</span>
          </button>
        ))}

        <span className="mx-1 hidden h-6 w-px bg-white/15 sm:block" aria-hidden="true" />

        <a
          href={links.resume}
          target="_blank"
          rel="noreferrer"
          className="hidden min-h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-xs font-black uppercase tracking-[0.08em] text-[#F5F1EA] transition hover:border-[#E6BEAE]/70 hover:text-[#E6BEAE] sm:inline-flex"
          aria-label="Open resume"
        >
          <IconFileText className="h-4 w-4" />
          Resume
        </a>
      </div>
    </motion.nav>
  )
}

export default FloatingNav
