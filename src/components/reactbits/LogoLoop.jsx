import { useEffect, useRef, useState } from 'react'
import './LogoLoop.css'

function LogoLoop({
  logos = [],
  direction = 'left',
  speed = 45,
  logoHeight = 28,
  gap = 42,
  hoverSpeed = null,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#080808',
  ariaLabel = 'Logo loop',
  renderItem,
}) {
  const groupRef = useRef(null)
  const [duration, setDuration] = useState(30)

  useEffect(() => {
    if (!groupRef.current) return undefined

    const updateDuration = () => {
      const width = groupRef.current?.scrollWidth || 1
      setDuration(Math.max(18, width / Math.max(speed, 1)))
    }

    updateDuration()

    const observer = new ResizeObserver(updateDuration)
    observer.observe(groupRef.current)

    return () => observer.disconnect()
  }, [logos, speed])

  const renderLogo = (item, index, copyKey) => {
    if (renderItem) {
      return renderItem(item, `${copyKey}-${item.title || index}-${index}`)
    }

    return (
      <div className="logo-loop-default-item" key={`${copyKey}-${item.title || index}-${index}`}>
        <span style={{ fontSize: logoHeight }}>{item.node}</span>
        <span>{item.title}</span>
      </div>
    )
  }

  return (
    <div
      className={[
        'logo-loop',
        direction === 'right' ? 'logo-loop-right' : 'logo-loop-left',
        scaleOnHover ? 'logo-loop-scale' : '',
        fadeOut ? 'logo-loop-fade' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        '--logo-loop-duration': `${duration}s`,
        '--logo-loop-gap': `${gap}px`,
        '--logo-loop-height': `${logoHeight}px`,
        '--logo-loop-hover-duration': hoverSpeed === 0 ? '0s' : `${hoverSpeed || duration}s`,
        '--logo-loop-fade-color': fadeOutColor,
      }}
      aria-label={ariaLabel}
      role="list"
    >
      <div className="logo-loop-track">
        <div className="logo-loop-group" ref={groupRef}>
          {logos.map((item, index) => renderLogo(item, index, 'primary'))}
        </div>
        <div className="logo-loop-group" aria-hidden="true">
          {logos.map((item, index) => renderLogo(item, index, 'duplicate'))}
        </div>
      </div>
    </div>
  )
}

export default LogoLoop
