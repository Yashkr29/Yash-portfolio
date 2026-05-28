import { motion } from 'framer-motion'

function BlurText({ text, className = '', delay = 0 }) {
  const words = text.split(' ')

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 18, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.55, delay: delay + index * 0.035, ease: 'easeOut' }}
        >
          {word}
          {index < words.length - 1 ? '\u00a0' : ''}
        </motion.span>
      ))}
    </span>
  )
}

export default BlurText
