import { useEffect, useRef } from 'react'
import '../styles/bg.css'

export default function Background() {
  const containerRef = useRef(null)

  useEffect(() => {
    // reduce number of lines for a lighter effect
    const STREAK_COUNT = 8
    const container = containerRef.current
    if (!container) return

    // clear any existing streaks (happens on hot reload)
    const existing = container.querySelectorAll('.streak')
    existing.forEach((e) => e.remove())

    for (let i = 0; i < STREAK_COUNT; i++) {
      const el = document.createElement('div')
      el.className = 'streak'

      const width = 100 + Math.random() * 280 // px
      const top = 5 + Math.random() * 88 // %
      const duration = 5 + Math.random() * 7 // s
      const delay = Math.random() * 12 // s

      el.style.cssText = `
        width: ${width}px;
        top: ${top}%;
        animation-duration: ${duration}s;
        animation-delay: -${delay}s;
      `

      // insert before grain
      const grain = container.querySelector('.grain')
      container.insertBefore(el, grain)
    }
  }, [])

  return (
    <div className="bg" ref={containerRef}>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="grain" />
    </div>
  )
}
