function AnimatedGridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#070a12]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_82%_14%,rgba(168,85,247,0.14),transparent_28%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.1),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,rgba(0,0,0,0.72),transparent_96%)]" />
      <div className="absolute left-1/2 top-0 h-px w-[min(760px,80vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
    </div>
  )
}

export default AnimatedGridBackground
