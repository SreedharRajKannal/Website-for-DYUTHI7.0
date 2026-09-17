import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import logo from '../assets/dhyuthi-logo.png'
import ieeeLogo from '../assets/ieee-master-brand.svg'
import '../styles/footer.css'

/* ── Inline brand SVGs (lucide dropped social/brand icons) ──────────── */

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const SOCIALS = [
  { label: 'Instagram', icon: InstagramIcon, href: '#' },
  { label: 'LinkedIn', icon: LinkedInIcon, href: '#' },
  { label: 'GitHub', icon: GitHubIcon, href: '#' },
  { label: 'WhatsApp', icon: MessageCircle, href: '#' },
  { label: 'Email', icon: Mail, href: 'mailto:ieeesctsb.dummy@example.com' },
]

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* ── Brand Column ─────────────────────────────────────── */}
        <div className="footer__brand">
          <Link to="/" className="footer__brand-link">
            <img
              src={logo}
              alt="Dhyuthi 7.0 logo"
              className="footer__brand-logo"
            />
            <span className="footer__brand-name">
              Dhyuthi <span>7.0</span>
            </span>
          </Link>
          <p className="footer__brand-tagline">
            IEEE SCT Student Branch&apos;s flagship annual tech-fest.
            Celebrating innovation, creativity, and collaboration.
          </p>
        </div>

        {/* ── Connect Column ───────────────────────────────────── */}
        <div>
          <h3 className="footer__col-title">Connect with us</h3>
          <ul className="footer__social-list">
            {SOCIALS.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={18} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact Column ───────────────────────────────────── */}
        <div>
          <h3 className="footer__col-title">Contact</h3>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <Mail size={16} className="footer__contact-icon" />
              <div className="footer__contact-text">
                <span className="footer__contact-label">Email</span>
                <a href="mailto:ieeesctsb.dummy@example.com">
                  ieeesctsb.dummy@example.com
                </a>
              </div>
            </li>
            <li className="footer__contact-item">
              <Phone size={16} className="footer__contact-icon" />
              <div className="footer__contact-text">
                <span className="footer__contact-label">Call</span>
                <a href="tel:+919000000000">
                  John Doe — +91 90000 00000
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* ── Address Column ───────────────────────────────────── */}
        <div>
          <h3 className="footer__col-title">Address</h3>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <MapPin size={16} className="footer__contact-icon" />
              <div className="footer__contact-text">
                Sree Chitra Thirunal College of Engineering,
                <br />
                Pappanamcode, Thiruvananthapuram,
                <br />
                Kerala 695018
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────────────── */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; 2026 Dhyuthi 7.0. All Rights Reserved.
        </p>
        <div className="footer__bottom-links">
          <img src={ieeeLogo} alt="IEEE" className="ieee-master-brand-footer" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
