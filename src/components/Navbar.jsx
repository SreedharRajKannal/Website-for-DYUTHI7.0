import { useState, useEffect, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/dhyuthi-logo.png'
import ieeeLogo from '../assets/ieee-master-brand.svg'
import '../styles/navbar.css'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Tracks', path: '/tracks' },
  { label: 'Schedule', path: '/schedule' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  /* ── Scroll detection ──────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Lock body scroll when mobile menu open ────────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link to="/" className="navbar__brand" onClick={closeMobile}>
          <img src={logo} alt="Dhyuthi 7.0 logo" className="navbar__logo" />
          <span className="navbar__wordmark">
            DHYUTHI <span>7.0</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* IEEE Master Brand */}
        <div className="navbar__ieee">
          <img src={ieeeLogo} alt="IEEE" className="ieee-master-brand" />
        </div>
      </nav>

      {/* Mobile overlay scrim */}
      <div
        className={`navbar__mobile-overlay${mobileOpen ? ' navbar__mobile-overlay--open' : ''}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <aside
        className={`navbar__mobile-menu${mobileOpen ? ' navbar__mobile-menu--open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="navbar__mobile-header">
          <Link to="/" className="navbar__brand" onClick={closeMobile}>
            <img src={logo} alt="Dhyuthi 7.0 logo" className="navbar__logo" />
            <span className="navbar__wordmark">
              DHYUTHI <span>7.0</span>
            </span>
          </Link>
          <button
            className="navbar__mobile-close"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="navbar__mobile-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
                }
                onClick={closeMobile}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Navbar
