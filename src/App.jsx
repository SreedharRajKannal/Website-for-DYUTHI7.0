import { Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Tracks from './pages/Tracks'
import Schedule from './pages/Schedule'
import Gallery from './pages/Gallery'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import StyleGuide from './pages/StyleGuide'
import './styles/App.css'

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/style-guide" element={<StyleGuide />} />
      </Route>
    </Routes>
    </ReactLenis>
  )
}

/* Temporary placeholder for routes not yet built */
function Placeholder({ title }) {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 'var(--space-4)',
    }}>
      <h1>{title}</h1>
      <p style={{ color: 'var(--text-muted)' }}>Coming soon…</p>
    </div>
  )
}

export default App
