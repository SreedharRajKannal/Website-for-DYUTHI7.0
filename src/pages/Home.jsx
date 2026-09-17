import { useRef } from 'react'
import { MapPin, ChevronDown } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import WebGLBackground from '../components/WebGLBackground'
import CountdownTimer from '../components/CountdownTimer'
import { useSEO } from '../hooks/useSEO'
import logo from '../assets/dhyuthi-logo.png'
import '../styles/home.css'

gsap.registerPlugin(useGSAP)

/* 60 days from now as default countdown target */
const EVENT_DATE = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)

function Home() {
  useSEO('Home', 'Welcome to Dhyuthi 7.0, the flagship technical festival of IEEE SCT SB.')
  const containerRef = useRef(null)
  
  // Elements for GSAP animation
  const logoRef = useRef(null)
  const titleRef = useRef(null)
  const taglineRef = useRef(null)
  const contentRef = useRef(null) // for countdown, meta, cta

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    
    // Initial state setup (if not handled by CSS)
    gsap.set([taglineRef.current, contentRef.current], { opacity: 0, y: 20 })
    gsap.set(logoRef.current, { opacity: 0, scale: 0.8 })
    
    // 1. Logo fades and scales in
    tl.to(logoRef.current, { opacity: 1, scale: 1, duration: 1.2 }, 0.2)
    
    // 2. Title rises from the mask
    tl.fromTo(
      titleRef.current, 
      { y: '100%', opacity: 0 }, 
      { y: '0%', opacity: 1, duration: 1.2 }, 
      '-=0.6'
    )
    
    // 3. Tagline fades and slides up
    tl.to(taglineRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.8')
    
    // 4. Everything else fades in
    tl.to(contentRef.current, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, '-=0.6')
    
  }, { scope: containerRef })

  return (
    <>
      <section className="hero" id="hero" ref={containerRef}>
        {/* Interactive WebGL Canvas */}
        <WebGLBackground />

        <div className="hero__content">
          {/* Logo */}
          <img
            ref={logoRef}
            src={logo}
            alt="Dhyuthi 7.0 — lamp constellation logo"
            className="hero__logo"
          />

          {/* Title Mask */}
          <div className="hero__title-mask">
            <h1 className="hero__title" ref={titleRef}>
              <span>DHYUTHI 7.0</span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="hero__tagline" ref={taglineRef}>
            Ignite &middot; <em>Innovate</em> &middot; Illuminate
          </p>

          {/* Wrapper for the rest of the content to animate together */}
          <div ref={contentRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
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
