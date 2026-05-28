import { useState } from 'react'

function SpotlightCard({ children, className = '', as: Tag = 'div', ...props }) {
  const [position, setPosition] = useState({ x: 50, y: 50 })

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setPosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <Tag
      {...props}
      onMouseMove={handleMouseMove}
      style={{
        '--spotlight-x': `${position.x}%`,
        '--spotlight-y': `${position.y}%`,
      }}
      className={`spotlight-card ${className}`}
    >
      {children}
    </Tag>
  )
}

export default SpotlightCard
