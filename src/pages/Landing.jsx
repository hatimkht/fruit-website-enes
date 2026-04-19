import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import FruitMorph from '../components/FruitMorph.jsx'
import FruitCard from '../components/FruitCard.jsx'
import WarpText from '../components/WarpText.jsx'
import { fruits } from '../data/fruits.js'

const strip = [
  'morphology', 'rosaceae', 'citrus', 'pomes', 'berries', 'drupes',
  'tropical', 'harvest', 'seasonality', 'flavour', 'genetics', 'sunlight',
]

export default function Landing() {
  const [current, setCurrent] = useState(fruits[0])
  const featuredRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: featuredRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '12%'])
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1.08])

  return (
    <PageTransition>
      <section className="container">
        <div className="hero">
          <div className="hero__copy">
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-line" />
              <span className="eyebrow">Vol. 01 · An index of fruit</span>
            </div>

            <h1 className="display display--hero hero__title">
              <WarpText text="An atlas" /><br />
              <em className="italic">of living</em> <WarpText text="colour." />
            </h1>

            <div className="hero__meta">
              <div className="hero__meta-item">
                <div className="hero__meta-label">Essay</div>
                <div className="hero__meta-value">
                  Six fruits, one editorial — the shapes, stories and seasons of what we eat.
                </div>
              </div>
              <div className="hero__meta-item">
                <div className="hero__meta-label">Now morphing</div>
                <div className="hero__meta-value" style={{ color: current.colors.primary }}>
                  {current.name} — <em>{current.tagline}</em>
                </div>
              </div>
            </div>

            <div className="hero__cta">
              <Link to="/catalog" className="btn" data-cursor-hover>
                <span className="btn__dot" />
                Open the catalog
              </Link>
            </div>
          </div>

          <FruitMorph onChange={(f) => setCurrent(f)} />
        </div>
      </section>

      {/* Marquee strip */}
      <div className="scroll-strip">
        <div className="scroll-strip__inner">
          {[...strip, ...strip].map((w, i) => (
            <span key={i} style={{ display: 'inline-flex', gap: 48, alignItems: 'center' }}>
              {w}
              <span className="scroll-strip__dot" />
            </span>
          ))}
        </div>
      </div>

      {/* Chapter 01 */}
      <section className="container chapter">
        <div className="chapter__title">
          <span className="chapter__title-no">— 01 · Prologue</span>
          <h2 className="display display--l">
            We eat <em className="italic">geometry</em> every day and rarely look at it.
          </h2>
        </div>

        <div className="chapter__text-grid">
          <div className="eyebrow">Thesis</div>
          <div className="lead">
            <p>
              A fruit is an argument made of sugar, water and pigment — an argument
              between a plant and the animals it wants to attract. Every shape in
              this index is the shape of a bargain.
            </p>
            <p>
              Flora is an editorial index of six fruits. We photograph nothing.
              Each fruit is drawn from scratch and morphs into the next as you
              read, because the boundaries between them are softer than a grocer's
              shelf makes them seem.
            </p>
          </div>
        </div>
      </section>

      {/* Featured (parallax) */}
      <section className="container">
        <motion.div
          ref={featuredRef}
          className="featured noise"
          style={{
            background: `linear-gradient(135deg, ${current.colors.bgFrom} 0%, ${current.colors.bgTo} 100%)`,
            transition: 'background 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <motion.div className="featured__shape" style={{ y, scale }}>
            <svg viewBox="0 0 300 300" width="100%" style={{ overflow: 'visible' }}>
              <motion.path
                d={current.path}
                fill={current.colors.primary}
                style={{ filter: 'drop-shadow(0 40px 80px rgba(22,18,14,0.18))' }}
              />
            </svg>
          </motion.div>

          <div className="featured__copy">
            <div className="eyebrow">Currently featured</div>
            <h3>
              <em className="italic">{current.name}</em>
              <br />
              {current.tagline.toLowerCase()}
            </h3>
            <p className="lead">{current.description}</p>
            <div style={{ marginTop: 28 }}>
              <Link to={`/fruit/${current.id}`} className="link-arrow" data-cursor-hover>
                Open profile →
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Preview grid */}
      <section className="container chapter">
        <div className="chapter__title">
          <span className="chapter__title-no">— 02 · The index</span>
          <h2 className="display display--l">
            Six fruits, <em className="italic">drawn by hand.</em>
          </h2>
        </div>
        <div className="preview-grid">
          {fruits.slice(0, 3).map((f, i) => (
            <FruitCard key={f.id} fruit={f} index={i} />
          ))}
        </div>
        <div style={{ marginTop: 48, display: 'flex', justifyContent: 'flex-end' }}>
          <Link to="/catalog" className="link-arrow" data-cursor-hover>
            See all six →
          </Link>
        </div>
      </section>

      {/* Play teaser */}
      <section className="container chapter">
        <div className="chapter__title">
          <span className="chapter__title-no">— 03 · Play</span>
          <h2 className="display display--l">
            Blend your own <em className="italic">palette.</em>
          </h2>
        </div>
        <div className="chapter__text-grid">
          <div className="eyebrow">Interactive</div>
          <div className="lead">
            <p>
              Every fruit has a colour signature. In the mixer, you pour fruits
              into a glass and watch their hues merge into a living palette — a
              little generative colour study you can export as HSL.
            </p>
            <Link to="/play" className="link-arrow" data-cursor-hover style={{ marginTop: 28 }}>
              Open the mixer →
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
