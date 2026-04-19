/**
 * Static SVG rendering of a single fruit, including decorative stem/leaf.
 * Uses the fruit object from /data/fruits.
 */
export default function FruitShape({ fruit, size = '100%', withGradient = true, idle = false }) {
  const gradId = `grad-${fruit.id}`
  const highlightId = `hl-${fruit.id}`

  return (
    <svg
      viewBox="0 0 300 300"
      width={size}
      height={size}
      aria-label={fruit.name}
      style={{ animation: idle ? 'none' : undefined }}
    >
      <defs>
        <radialGradient id={gradId} cx="38%" cy="32%" r="85%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="32%" stopColor={fruit.colors.primary} stopOpacity="1" />
          <stop offset="100%" stopColor={fruit.colors.primary} />
        </radialGradient>
        <radialGradient id={highlightId} cx="32%" cy="28%" r="20%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Body */}
      <path d={fruit.path} fill={withGradient ? `url(#${gradId})` : fruit.colors.primary} />

      {/* Highlight */}
      <path d={fruit.path} fill={`url(#${highlightId})`} />

      {/* Stem */}
      {fruit.stem && (
        <path
          d={fruit.stem}
          stroke={fruit.colors.secondary}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      )}

      {/* Leaf */}
      {fruit.leaf && (
        <path
          d={fruit.leaf}
          fill={fruit.colors.accent}
        />
      )}

      {/* Strawberry seeds */}
      {fruit.id === 'strawberry' && (
        <g fill="#f3e9c7">
          <ellipse cx="132" cy="132" rx="3" ry="5" transform="rotate(-20 132 132)" />
          <ellipse cx="158" cy="120" rx="3" ry="5" transform="rotate(10 158 120)" />
          <ellipse cx="180" cy="140" rx="3" ry="5" transform="rotate(20 180 140)" />
          <ellipse cx="116" cy="162" rx="3" ry="5" transform="rotate(-10 116 162)" />
          <ellipse cx="146" cy="166" rx="3" ry="5" transform="rotate(5 146 166)" />
          <ellipse cx="172" cy="172" rx="3" ry="5" transform="rotate(18 172 172)" />
          <ellipse cx="130" cy="196" rx="3" ry="5" transform="rotate(0 130 196)" />
          <ellipse cx="162" cy="200" rx="3" ry="5" transform="rotate(14 162 200)" />
          <ellipse cx="146" cy="220" rx="3" ry="5" transform="rotate(0 146 220)" />
        </g>
      )}

      {/* Dragon fruit speckles */}
      {fruit.id === 'dragonfruit' && (
        <g fill="#2b1b22" opacity="0.55">
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2
            const r = 45 + ((i * 13) % 35)
            const cx = 150 + Math.cos(a) * r
            const cy = 160 + Math.sin(a) * r
            return <circle key={i} cx={cx} cy={cy} r="1.6" />
          })}
        </g>
      )}

      {/* Banana ridge */}
      {fruit.id === 'banana' && (
        <path
          d="M 80 118 C 140 130 210 158 238 186"
          stroke="#c9a426"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
      )}
    </svg>
  )
}
