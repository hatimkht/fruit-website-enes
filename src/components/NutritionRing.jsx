import { motion } from 'framer-motion'

const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

export function Nutrition({ fruit }) {
  const rows = [
    { label: 'Calories', value: `${fruit.nutrition.calories} kcal`, ratio: Math.min(fruit.nutrition.calories / 120, 1) },
    { label: 'Carbohydrates', value: `${fruit.nutrition.carbs} g`, ratio: Math.min(fruit.nutrition.carbs / 30, 1) },
    { label: 'Fiber', value: `${fruit.nutrition.fiber} g`, ratio: Math.min(fruit.nutrition.fiber / 6, 1) },
    { label: 'Vitamin C', value: `${fruit.nutrition.vitaminC} mg`, ratio: Math.min(fruit.nutrition.vitaminC / 80, 1) },
  ]

  return (
    <div className="nutrition">
      {rows.map((r, i) => (
        <motion.div
          key={r.label}
          className="nutrition__item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="nutrition__label">{r.label}</div>
          <div className="nutrition__value">{r.value}</div>
          <div className="nutrition__bar">
            <motion.span
              style={{ background: fruit.colors.primary }}
              initial={{ width: 0 }}
              whileInView={{ width: `${r.ratio * 100}%` }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function Season({ fruit }) {
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Seasonality</div>
      <div className="season">
        {fruit.season.map((active, i) => (
          <motion.span
            key={i}
            className="season__cell"
            data-active={active === 1}
            initial={{ scaleY: 0.3, opacity: 0.4 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: active ? fruit.colors.primary : undefined,
              transformOrigin: 'bottom',
            }}
          />
        ))}
      </div>
      <div className="season-labels">
        {MONTHS.map((m, i) => (
          <span key={i} style={{ textAlign: 'center' }}>{m}</span>
        ))}
      </div>
    </div>
  )
}
