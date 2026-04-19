import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FruitShape from './FruitShape.jsx'

export default function FruitCard({ fruit, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay: (index % 6) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={`/fruit/${fruit.id}`}
        className="card"
        data-cursor-hover
        aria-label={`Open ${fruit.name}`}
      >
        <div
          className="card__bg"
          style={{
            background: `linear-gradient(135deg, ${fruit.colors.bgFrom} 0%, ${fruit.colors.bgTo} 100%)`,
          }}
        />
        <div className="card__shape">
          <FruitShape fruit={fruit} />
        </div>
        <div className="card__top">
          <span>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>{fruit.category}</span>
        </div>
        <div className="card__bottom">
          <span className="card__name">{fruit.name}</span>
          <span className="card__tag">{fruit.tagline}</span>
        </div>
      </Link>
    </motion.div>
  )
}
