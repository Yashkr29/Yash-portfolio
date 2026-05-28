function GradientText({ children, className = '' }) {
  return (
    <span
      className={`inline-block bg-[linear-gradient(110deg,#e0f2fe_0%,#67e8f9_26%,#a78bfa_54%,#38bdf8_78%,#f8fafc_100%)] bg-[length:220%_100%] bg-clip-text text-transparent animate-gradient-pan ${className}`}
    >
      {children}
    </span>
  )
}

export default GradientText
