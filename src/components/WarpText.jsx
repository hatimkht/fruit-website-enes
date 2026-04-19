import { useEffect, useRef } from 'react'

/**
 * Proximity-reactive text. Letters are pushed gently *away* from the cursor.
 * Based on mousemove with CSS transitions (no per-frame rAF).
 */
export default function WarpText({ text, className = '', radius = 180, strength = 22, as: Tag = 'span' }) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const letters = Array.from(root.querySelectorAll('[data-warp-letter]'))

    const handle = (e) => {
      const mx = e.clientX
      const my = e.clientY
      for (const el of letters) {
        const r = el.getBoundingClientRect()
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        const dx = mx - cx
        const dy = my - cy
        const dist = Math.hypot(dx, dy)
        if (dist < radius) {
          const t = 1 - dist / radius
          const ang = Math.atan2(dy, dx)
          const ox = -Math.cos(ang) * t * strength
          const oy = -Math.sin(ang) * t * strength
          const rot = (-dx / radius) * t * 6
          el.style.transform = `translate(${ox.toFixed(2)}px, ${oy.toFixed(2)}px) rotate(${rot.toFixed(2)}deg)`
        } else if (el.style.transform) {
          el.style.transform = 'translate(0px, 0px) rotate(0deg)'
        }
      }
    }

    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [text, radius, strength])

  // Preserve spaces
  const chars = Array.from(text)

  return (
    <Tag ref={ref} className={`warp ${className}`}>
      {chars.map((c, i) => (
        <span key={i} data-warp-letter className="warp__letter">
          {c === ' ' ? '\u00A0' : c}
        </span>
      ))}
    </Tag>
  )
}
