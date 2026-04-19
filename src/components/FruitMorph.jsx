import { useEffect, useRef, useState } from 'react'
import { interpolate } from 'flubber'
import { fruits } from '../data/fruits.js'

const HOLD_MS = 900
const MORPH_MS = 1500

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

function hexToRgb(hex) {
  const v = hex.replace('#', '')
  return [
    parseInt(v.slice(0, 2), 16),
    parseInt(v.slice(2, 4), 16),
    parseInt(v.slice(4, 6), 16),
  ]
}

function rgbToHex([r, g, b]) {
  const h = (n) => Math.round(n).toString(16).padStart(2, '0')
  return `#${h(r)}${h(g)}${h(b)}`
}

function mixHex(a, b, t) {
  const ra = hexToRgb(a)
  const rb = hexToRgb(b)
  return rgbToHex([
    ra[0] + (rb[0] - ra[0]) * t,
    ra[1] + (rb[1] - ra[1]) * t,
    ra[2] + (rb[2] - ra[2]) * t,
  ])
}

/**
 * Cycles through fruit SVG paths, morphing smoothly with flubber.
 */
export default function FruitMorph({ onChange, size = 520 }) {
  const pathRef = useRef(null)
  const glowRef = useRef(null)
  const rafRef = useRef(0)
  const aliveRef = useRef(true)
  const [index, setIndex] = useState(0)

  const onChangeRef = useRef(onChange)
  useEffect(() => { onChangeRef.current = onChange }, [onChange])

  useEffect(() => {
    aliveRef.current = true
    const path = pathRef.current
    const glow = glowRef.current
    if (!path) return

    path.setAttribute('d', fruits[0].path)
    path.setAttribute('fill', fruits[0].colors.primary)
    if (glow) glow.style.background = fruits[0].colors.primary
    onChangeRef.current?.(fruits[0], 0)

    let current = 0

    const cancel = () => cancelAnimationFrame(rafRef.current)

    const hold = (onDone) => {
      let start = null
      const tick = (ts) => {
        if (!aliveRef.current) return
        if (!start) start = ts
        if (ts - start >= HOLD_MS) onDone()
        else rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const morph = (fromIdx, toIdx, onDone) => {
      const from = fruits[fromIdx]
      const to = fruits[toIdx]
      const interpolator = interpolate(from.path, to.path, { maxSegmentLength: 2 })
      let start = null
      const tick = (ts) => {
        if (!aliveRef.current) return
        if (!start) start = ts
        const raw = Math.min((ts - start) / MORPH_MS, 1)
        const t = easeInOutCubic(raw)
        path.setAttribute('d', interpolator(t))
        const c = mixHex(from.colors.primary, to.colors.primary, t)
        path.setAttribute('fill', c)
        if (glow) glow.style.background = c
        if (raw < 1) rafRef.current = requestAnimationFrame(tick)
        else onDone()
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const loop = () => {
      const next = (current + 1) % fruits.length
      hold(() => {
        morph(current, next, () => {
          current = next
          setIndex(current)
          onChangeRef.current?.(fruits[current], current)
          loop()
        })
      })
    }

    loop()

    return () => {
      aliveRef.current = false
      cancel()
    }
  }, [])

  const fruit = fruits[index]

  return (
    <div className="hero__morph" style={{ maxWidth: size }}>
      <span ref={glowRef} className="hero__morph-glow" aria-hidden />
      <svg viewBox="0 0 300 300" aria-label="Morphing fruit">
        <path ref={pathRef} d={fruit.path} fill={fruit.colors.primary} />
      </svg>
      <span className="hero__morph-label">
        <span className="hero__morph-index">
          {String(index + 1).padStart(2, '0')} / {String(fruits.length).padStart(2, '0')}
        </span>
        <em>{fruit.name}</em>
      </span>
    </div>
  )
}
