import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const [hovering, setHovering] = useState(false)

  const dotX = useSpring(x, { damping: 30, stiffness: 700, mass: 0.1 })
  const dotY = useSpring(y, { damping: 30, stiffness: 700, mass: 0.1 })
  const ringX = useSpring(x, { damping: 22, stiffness: 180, mass: 0.5 })
  const ringY = useSpring(y, { damping: 22, stiffness: 180, mass: 0.5 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      const t = e.target instanceof Element ? e.target : null
      const hit = !!(t && t.closest('[data-cursor-hover]'))
      setHovering(hit)
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
    }
  }, [x, y])

  return (
    <>
      <motion.div
        className="cursor cursor--dot"
        style={{ x: dotX, y: dotY, scale: hovering ? 0 : 1 }}
      />
      <motion.div
        className="cursor cursor--ring"
        style={{ x: ringX, y: ringY, scale: hovering ? 1.9 : 1 }}
      />
    </>
  )
}
