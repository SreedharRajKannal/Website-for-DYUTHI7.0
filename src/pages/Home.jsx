import { MapPin, ChevronDown } from 'lucide-react'
import ConstellationBg from '../components/ConstellationBg'
import CountdownTimer from '../components/CountdownTimer'
import { useSEO } from '../hooks/useSEO'
import logo from '../assets/dhyuthi-logo.png'
import '../styles/home.css'

/* 60 days from now as default countdown target */
const EVENT_DATE = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)

function Home() {
  useSEO('Home', 'Welcome to Dhyuthi 7.0, the flagship technical festival of IEEE SCT SB.')

  return (
    <>
      <section className="hero" id="hero">
        {/* Animated constellation canvas */}
        <ConstellationBg />

        <div className="hero__content">
          {/* Logo */}
          <img
            src={logo}
            alt="Dhyuthi 7.0 — lamp constellation logo"
            className="hero__logo"
          />

          {/* Title */}
          <h1 className="hero__title">
            <span>DHYUTHI 7.0</span>
          </h1>

          {/* Tagline */}
          <p className="hero__tagline">
            Ignite &middot; <em>Innovate</em> &middot; Illuminate
          </p>

          {/* Countdown */}
          <div className="hero__countdown-wrap">
            <CountdownTimer targetDate={EVENT_DATE} />
          </div>

          {/* Event meta */}
          <div className="hero__meta">
            <span className="hero__dates">24 – 26 October 2026</span>
            <span className="hero__venue">
              <MapPin size={14} />
              Sree Chitra Thirunal College of Engineering, Thiruvananthapuram
            </span>
          </div>

          {/* CTA */}
          <a href="#" className="hero__cta" id="register-cta">
            Register Now
          </a>
        </div>

        {/* Scroll hint */}
        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>
    </>
  )
}

export default Home
