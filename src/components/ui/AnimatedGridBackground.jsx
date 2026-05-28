function AnimatedGridBackground() {
  return (
    <div className="theme-background pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="theme-glow absolute inset-0" />
      <div className="theme-grid absolute inset-0 bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,rgba(0,0,0,0.72),transparent_96%)]" />
      <div className="absolute left-1/2 top-0 h-px w-[min(760px,80vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
    </div>
  )
}

export default AnimatedGridBackground
