import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import WarpText from '../components/WarpText.jsx'
import { fruits } from '../data/fruits.js'

/* ---------- color helpers ---------- */
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

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h *= 60
  }
  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)]
}

function averageColor(list) {
  if (list.length === 0) return '#f3ece0'
  const rgbs = list.map((f) => hexToRgb(f.colors.primary))
  const sum = rgbs.reduce(
    ([r, g, b], [rr, gg, bb]) => [r + rr, g + gg, b + bb],
    [0, 0, 0]
  )
  return rgbToHex([sum[0] / rgbs.length, sum[1] / rgbs.length, sum[2] / rgbs.length])
}

/* ---------- wave layer ---------- */
function WaveLayer({ color, delay = 0, amp = 6, speed = 6 }) {
  return (
    <svg className="blender__wave" viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden>
      <motion.path
        d="M 0 20 Q 15 10 30 20 T 60 20 T 90 20 T 120 20 L 120 40 L 0 40 Z"
        fill={color}
        animate={{ x: [-30, 0, -30] }}
        transition={{
          duration: speed,
          delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ y: amp * 0.2 }}
      />
    </svg>
  )
}

/* ---------- page ---------- */
export default function Play() {
  const [mix, setMix] = useState([])

  const add = (fruit) => {
    setMix((m) => (m.length >= 8 ? m : [...m, fruit]))
  }
  const remove = (i) => setMix((m) => m.filter((_, idx) => idx !== i))
  const clear = () => setMix([])
  const shuffle = () => {
    setMix((m) => [...m].sort(() => Math.random() - 0.5))
  }

  const finalHex = useMemo(() => averageColor(mix), [mix])
  const finalHsl = useMemo(() => {
    const [r, g, b] = hexToRgb(finalHex)
    return rgbToHsl(r, g, b)
  }, [finalHex])

  const liquidTop = 0.22 + Math.min(mix.length, 8) * 0.04 // from 22% down to 54% top line
  const fillHeight = `${(1 - liquidTop) * 100}%`

  return (
    <PageTransition>
      <section className="container play">
        <div className="play__head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Vol. 01 · Play</div>
            <h1 className="display display--xl">
              <WarpText text="Smoothie" />
              <br />
              <em className="italic">mixer.</em>
            </h1>
          </div>
          <p className="lead" style={{ alignSelf: 'end' }}>
            A deliberately useless tool. Pour fruits into the glass and watch
            their hues combine into a living palette — then export the result
            as HSL.
          </p>
        </div>

        <div className="mixer">
          {/* LEFT: fruit list */}
          <div className="mixer__column">
            <h3 className="mixer__title">Ingredients</h3>
            <p className="mixer__hint">Click to pour into the blender. Up to eight.</p>
            <div className="mixer__list">
              {fruits.map((f) => (
                <button
                  key={f.id}
                  onClick={() => add(f)}
                  className="mixer__item"
                  data-cursor-hover
                >
                  <span className="mixer__item-left">
                    <span className="mixer__dot" style={{ background: f.colors.primary }} />
                    <span className="mixer__item-name">{f.name}</span>
                  </span>
                  <span className="mixer__item-add">+ add</span>
                </button>
              ))}
            </div>
          </div>

          {/* MIDDLE: the blender */}
          <div className="mixer__column blender">
            <div className="blender__stage">
              <div className="blender__glass">
                <motion.div
                  className="blender__liquid-wrap"
                  animate={{ height: fillHeight }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="blender__liquid"
                    style={{ background: finalHex }}
                  />
                  <WaveLayer color={finalHex} delay={0} speed={5.5} />
                  <WaveLayer
                    color={finalHex}
                    delay={0.6}
                    speed={7.5}
                  />
                </motion.div>
              </div>
              <div className="blender__base" />
            </div>

            <div className="blender__actions">
              <button className="ghost-btn" onClick={shuffle} data-cursor-hover>Blend</button>
              <button className="ghost-btn" onClick={clear} data-cursor-hover>Empty</button>
            </div>
          </div>

          {/* RIGHT: palette */}
          <div className="mixer__column">
            <h3 className="mixer__title">Palette</h3>
            <p className="mixer__hint">
              {mix.length === 0
                ? 'Nothing poured yet. Your palette will appear here.'
                : `${mix.length} ${mix.length === 1 ? 'fruit' : 'fruits'} in the mix.`}
            </p>

            <div className="palette">
              <AnimatePresence initial={false}>
                {mix.map((f, i) => {
                  const [r, g, b] = hexToRgb(f.colors.primary)
                  const hsl = rgbToHsl(r, g, b)
                  return (
                    <motion.button
                      key={`${f.id}-${i}`}
                      className="palette__chip"
                      data-cursor-hover
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => remove(i)}
                    >
                      <span className="palette__swatch" style={{ background: f.colors.primary }} />
                      <span style={{ textAlign: 'left' }}>
                        <span className="palette__name" style={{ display: 'block' }}>{f.name}</span>
                        <span className="palette__code">
                          hsl({hsl[0]} {hsl[1]}% {hsl[2]}%)
                        </span>
                      </span>
                      <span className="palette__remove">remove</span>
                    </motion.button>
                  )
                })}
              </AnimatePresence>
            </div>

            <div className="final-swatch">
              <div className="final-swatch__preview" style={{ background: finalHex }} />
              <div className="final-swatch__meta">
                <span>Result</span>
                <span>
                  hsl({finalHsl[0]} {finalHsl[1]}% {finalHsl[2]}%)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
