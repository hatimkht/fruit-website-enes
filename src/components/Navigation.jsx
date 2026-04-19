import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fruits } from '../data/fruits.js'

const links = [
  { to: '/', label: 'Index', end: true },
  { to: '/catalog', label: 'Catalog' },
  { to: '/about', label: 'Concept' },
  { to: '/play', label: 'Play' },
]

export default function Navigation() {
  const { pathname } = useLocation()
  const [dot, setDot] = useState(fruits[0].colors.primary)

  useEffect(() => {
    // Rotate the logo dot color subtly on route change
    const match = pathname.match(/\/fruit\/(.+)/)
    const idx = match ? fruits.findIndex((f) => f.id === match[1]) : Math.floor(Date.now() / 10000) % fruits.length
    setDot(fruits[Math.max(idx, 0)].colors.primary)
  }, [pathname])

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo" data-cursor-hover>
          <span className="nav__logo-dot" style={{ background: dot }} />
          Flora
        </Link>
        <div className="nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              data-cursor-hover
              className={({ isActive }) =>
                `nav__link ${isActive ? 'nav__link--active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <Link to="/catalog" className="nav__cta" data-cursor-hover>
          Enter catalog →
        </Link>
      </div>
    </nav>
  )
}
