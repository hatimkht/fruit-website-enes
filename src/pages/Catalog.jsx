import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import FruitCard from '../components/FruitCard.jsx'
import WarpText from '../components/WarpText.jsx'
import { fruits } from '../data/fruits.js'

const FILTERS = ['all', 'pome', 'citrus', 'tropical', 'berry']

export default function Catalog() {
  const [filter, setFilter] = useState('all')
  const visible = useMemo(() => {
    if (filter === 'all') return fruits
    return fruits.filter((f) => f.category === filter)
  }, [filter])

  return (
    <PageTransition>
      <section className="container">
        <div className="catalog-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Vol. 01 · The index</div>
            <h1 className="display display--xl">
              <WarpText text="Catalog" />
              <br />
              <em className="italic">of forms.</em>
            </h1>
          </div>
          <div className="catalog-head__count">
            {String(visible.length).padStart(2, '0')} entries — hand-drawn, continuously updated.
          </div>
        </div>

        <div className="catalog-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-pill ${filter === f ? 'filter-pill--active' : ''}`}
              data-cursor-hover
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="catalog-grid"
          transition={{ layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          {visible.map((f, i) => (
            <FruitCard key={f.id} fruit={f} index={i} />
          ))}
        </motion.div>
      </section>
    </PageTransition>
  )
}
