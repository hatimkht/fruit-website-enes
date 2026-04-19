import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import FruitShape from '../components/FruitShape.jsx'
import WarpText from '../components/WarpText.jsx'
import { Nutrition, Season } from '../components/NutritionRing.jsx'
import { getFruit, nextFruit, prevFruit, fruits } from '../data/fruits.js'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const fruit = getFruit(id)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -6])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    if (!fruit) navigate('/catalog', { replace: true })
  }, [fruit, navigate])

  if (!fruit) return null

  const next = nextFruit(fruit.id)
  const prev = prevFruit(fruit.id)

  return (
    <PageTransition>
      <div className="detail">
        <div
          className="detail__bg"
          style={{
            background: `linear-gradient(160deg, ${fruit.colors.bgFrom} 0%, ${fruit.colors.bgTo} 60%, var(--bg) 100%)`,
          }}
        />

        <section className="container" ref={heroRef}>
          <div className="detail__header">
            <div>
              <div className="detail__crumbs">
                <Link to="/catalog" data-cursor-hover>Catalog</Link>
                <span>/</span>
                <span>{fruit.category}</span>
                <span>/</span>
                <span>{String(fruits.findIndex((f) => f.id === fruit.id) + 1).padStart(2, '0')}</span>
              </div>
              <h1 className="display detail__title">
                <WarpText text={fruit.name} radius={220} strength={30} />
              </h1>
              <p className="detail__tagline">{fruit.tagline}. {fruit.description}</p>

              <div className="detail__facts">
                <div>
                  <div className="fact__label">Scientific</div>
                  <div className="fact__value"><em style={{ fontStyle: 'italic' }}>{fruit.scientificName}</em></div>
                </div>
                <div>
                  <div className="fact__label">Family</div>
                  <div className="fact__value">{fruit.family}</div>
                </div>
                <div>
                  <div className="fact__label">Origin</div>
                  <div className="fact__value">{fruit.origin}</div>
                </div>
              </div>
            </div>

            <motion.div className="detail__hero-shape" style={{ y, rotate, opacity }}>
              <FruitShape fruit={fruit} />
            </motion.div>
          </div>
        </section>

        <section className="container detail__body">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>The story</div>
            <h2 className="display display--m" style={{ marginBottom: 36 }}>
              <em className="italic">{fruit.name}</em>
              , retold.
            </h2>
            <div className="detail__story lead">
              {fruit.story.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
            <div
              style={{
                marginTop: 36,
                padding: 20,
                border: '1px solid var(--line)',
                borderRadius: 16,
                background: 'rgba(255,255,255,0.5)',
              }}
            >
              <div className="eyebrow" style={{ marginBottom: 8 }}>Fun fact</div>
              <p style={{ margin: 0, fontFamily: 'var(--f-serif)', fontSize: 20, lineHeight: 1.3 }}>
                {fruit.funFact}
              </p>
            </div>
          </div>

          <aside className="detail__side">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Nutritional profile (per 100 g)</div>
              <Nutrition fruit={fruit} />
            </div>
            <Season fruit={fruit} />
          </aside>
        </section>

        <section className="container">
          <div className="detail-next">
            <Link to={`/fruit/${prev.id}`} className="detail-next__side" data-cursor-hover>
              <div>
                <div className="detail-next__label">Previous</div>
                <div className="detail-next__name">← {prev.name}</div>
              </div>
            </Link>
            <Link to={`/fruit/${next.id}`} className="detail-next__side" data-cursor-hover style={{ textAlign: 'right' }}>
              <div>
                <div className="detail-next__label">Next</div>
                <div className="detail-next__name">{next.name} →</div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
