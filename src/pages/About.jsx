import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import WarpText from '../components/WarpText.jsx'

const principles = [
  {
    no: '01',
    title: 'Draw the thing',
    body: 'No stock photography. Every fruit is built from hand-authored SVG, so it can morph, reflow and respond to the reading experience.',
  },
  {
    no: '02',
    title: 'Motion as grammar',
    body: 'Animation is a grammatical tool, not a garnish. Page transitions, cursor, parallax and type-warping all serve reading rhythm.',
  },
  {
    no: '03',
    title: 'Quiet palette',
    body: 'A warm off-white canvas, ink text, and six fruit-native gradients. Color is earned, never applied by default.',
  },
  {
    no: '04',
    title: 'One voice',
    body: 'Editorial writing over marketing copy. Each fruit gets a short, considered essay — the kind of paragraph you\'d read in a print journal.',
  },
  {
    no: '05',
    title: 'Real routes',
    body: 'Every page is a real page — Landing, Catalog, Detail, Concept, Play. No fake anchors, no faux sections pretending to be pages.',
  },
  {
    no: '06',
    title: 'A little play',
    body: 'The Smoothie Mixer is deliberately useless and deliberately delightful. Every serious project should reserve space for play.',
  },
]

export default function About() {
  return (
    <PageTransition>
      <section className="container about-hero">
        <div className="about-hero__text">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Vol. 01 · Concept</div>
          <h1 className="display display--xl">
            <WarpText text="An editorial" />
            <br />
            <em className="italic">for fruit.</em>
          </h1>
        </div>
      </section>

      <section className="container about-statement">
        <div className="eyebrow">Statement</div>
        <div className="lead">
          <p>
            Flora started as a question: what would a design studio build if the
            brief were simply <em>fruit</em> — not a supermarket, not an ad, just
            fruit as a visual and cultural subject?
          </p>
          <p>
            The answer is a small, slow website. Six entries. Hand-drawn forms
            that morph into each other because the taxonomic boundaries between
            them are less sharp than we pretend. A smoothie mixer that exists
            only to make a color palette. No tracking, no newsletter, no
            signup modal.
          </p>
          <p>
            Think of it as a magazine issue, paginated by an interaction
            designer. Read it front to back, or open a single fruit and stay.
          </p>
        </div>
      </section>

      <section className="container principles">
        <div className="eyebrow">Principles</div>
        <h2 className="display display--m" style={{ marginTop: 12, maxWidth: '22ch' }}>
          Six things we refused <em className="italic">to compromise on.</em>
        </h2>
        <div className="principles__grid">
          {principles.map((p, i) => (
            <motion.article
              key={p.no}
              className="principle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="principle__no">— {p.no}</div>
              <h3 className="principle__title">{p.title}</h3>
              <p className="lead" style={{ fontSize: 15 }}>{p.body}</p>
            </motion.article>
          ))}
        </div>

        <div style={{ marginTop: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <p className="lead" style={{ maxWidth: '48ch' }}>
            Built with React, Vite, Framer Motion, Lenis and flubber. Type set
            in Fraunces and Inter. No analytics, no cookies, no affiliate
            links. Just fruit.
          </p>
          <Link to="/catalog" className="btn" data-cursor-hover>
            <span className="btn__dot" />
            Back to the catalog
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
