import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Plug, WandSparkles } from 'lucide-react'
import { FaJava } from 'react-icons/fa'
import {
  SiCss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenai,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiVscodium,
} from 'react-icons/si'
import LogoLoop from './reactbits/LogoLoop.jsx'

const skillRows = [
  {
    category: 'Frontend',
    direction: 'left',
    logos: [
      { node: <SiReact />, title: 'React.js' },
      { node: <SiHtml5 />, title: 'HTML' },
      { node: <SiCss />, title: 'CSS' },
      { node: <SiJavascript />, title: 'JavaScript' },
      { node: <SiTailwindcss />, title: 'Tailwind CSS' },
    ],
  },
  {
    category: 'Backend',
    direction: 'right',
    logos: [
      { node: <FaJava />, title: 'Java' },
      { node: <SiSpringboot />, title: 'Spring Boot' },
      { node: <Code2 size={22} />, title: 'REST APIs' },
      { node: <SiNodedotjs />, title: 'Node.js' },
    ],
  },
  {
    category: 'Database',
    direction: 'left',
    logos: [
      { node: <SiMysql />, title: 'MySQL' },
      { node: <SiFirebase />, title: 'Firebase Firestore' },
      { node: <SiMongodb />, title: 'MongoDB' },
      { node: <SiSupabase />, title: 'Supabase' },
    ],
  },
  {
    category: 'Tools',
    direction: 'right',
    logos: [
      { node: <SiGit />, title: 'Git' },
      { node: <SiGithub />, title: 'GitHub' },
      { node: <SiVercel />, title: 'Vercel' },
      { node: <SiPostman />, title: 'Postman' },
      
    ],
  },
  {
    category: 'AI/ML',
    direction: 'left',
    logos: [
      { node: <SiPython />, title: 'Machine Learning' },
      { node: <SiOpenai />, title: 'Generative AI' },
      { node: <WandSparkles size={22} />, title: 'Prompt Engineering' },
      { node: <Plug size={22} />, title: 'API Integration' },
    ],
  },
]

function SkillLoopItem(item, key) {
  return (
    <div
      key={key}
      className="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-4 py-3 text-sm font-bold text-[#F5F1EA] transition hover:border-[#E6BEAE]/70 hover:text-[#E6BEAE] sm:px-5"
      role="listitem"
    >
      <span className="text-xl text-current">{item.node}</span>
      <span className="whitespace-nowrap">{item.title}</span>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-pad section-line scroll-mt-24">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="kicker mb-5">Capabilities</p>
            <h2 className="section-title">
              <span className="block">
                Skills
                <span className="font-serif italic normal-case tracking-[-0.04em] text-[#E6BEAE]"> &</span>
              </span>
              <span className="block">Technologies</span>
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#A8A29E]">
            A focused stack I use to build full-stack apps, dashboards, APIs, and AI-powered products.
          </p>
        </div>

        <div className="grid">
          {skillRows.map((group) => (
            <article
              key={group.category}
              className="border-t border-white/10 py-8 last:border-b md:grid md:grid-cols-[180px_1fr] md:items-center md:gap-8"
            >
              <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-[#A8A29E] md:mb-0">
                {group.category}
              </h3>
              <div className="relative min-h-16 overflow-hidden">
                <LogoLoop
                  logos={group.logos}
                  direction={group.direction}
                  speed={45}
                  logoHeight={28}
                  gap={42}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#080808"
                  ariaLabel={`${group.category} skills`}
                  renderItem={SkillLoopItem}
                />
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
