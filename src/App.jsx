import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation.jsx'
import Cursor from './components/Cursor.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import Landing from './pages/Landing.jsx'
import Catalog from './pages/Catalog.jsx'
import Detail from './pages/Detail.jsx'
import About from './pages/About.jsx'
import Play from './pages/Play.jsx'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Cursor />
      <Navigation />
      <SmoothScroll>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/fruit/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="/play" element={<Play />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </AnimatePresence>
      </SmoothScroll>
      <footer className="site-footer">
        <div className="site-footer__row">
          <span className="site-footer__mark">Flora&nbsp;©&nbsp;{new Date().getFullYear()}</span>
          <span className="site-footer__meta">An experience in fruit — hand-built, no templates.</span>
        </div>
      </footer>
    </>
  )
}
