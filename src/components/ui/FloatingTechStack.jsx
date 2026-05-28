import { motion } from 'framer-motion'
import { BrainCircuit, Cloud, Code2, Database, GitBranch, Rocket, Server } from 'lucide-react'

const techStack = [
  { label: 'React', icon: Code2 },
  { label: 'Spring Boot', icon: Server },
  { label: 'Firebase', icon: Database },
  { label: 'REST APIs', icon: Cloud },
  { label: 'AI Products', icon: BrainCircuit },
  { label: 'Vercel', icon: Rocket },
  { label: 'GitHub', icon: GitBranch },
]

function FloatingTechStack() {
  return (
    <div className="relative mx-auto min-h-[430px] w-full max-w-[520px]">
      <div className="absolute inset-x-6 top-10 h-72 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-x-10 bottom-12 h-48 rounded-full bg-purple-500/10 blur-3xl" />

      <motion.div
        className="spotlight-card absolute left-1/2 top-1/2 w-[min(360px,88vw)] -translate-x-1/2 -translate-y-1/2 p-5"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
          </div>
          <span className="text-xs text-slate-400">terminal</span>
        </div>
        <div className="grid gap-3 font-mono text-sm text-slate-300">
          <span>
            <span className="text-cyan-300">&gt;</span> building products
          </span>
          <span>
            <span className="text-cyan-300">&gt;</span> shipping clean UI
          </span>
          <span>
            <span className="text-cyan-300">&gt;</span> deploying full-stack apps
          </span>
        </div>
      </motion.div>

      <div className="absolute inset-0">
        {techStack.map((tech, index) => {
          const Icon = tech.icon
          const angle = (index / techStack.length) * Math.PI * 2
          const radiusX = 138
          const radiusY = 154
          const x = Math.cos(angle) * radiusX
          const y = Math.sin(angle) * radiusY

          return (
            <motion.div
              key={tech.label}
              className="absolute left-1/2 top-1/2 flex items-center gap-2 rounded-md border border-white/12 bg-slate-950/78 px-3.5 py-2.5 text-sm font-semibold text-white shadow-2xl shadow-black/25 backdrop-blur-xl"
              style={{ marginLeft: x, marginTop: y }}
              animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
              transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Icon size={16} className="text-cyan-200" />
              <span>{tech.label}</span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default FloatingTechStack
