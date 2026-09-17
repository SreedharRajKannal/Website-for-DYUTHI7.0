import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useSEO } from '../hooks/useSEO'
import logo from '../assets/dhyuthi-logo.png'
import '../styles/about.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/* ─── Pre-event placeholder data ────────────────────────────────────── */
// TODO: Replace with real pre-event details once finalised
const PRE_EVENTS = [
  {
    id: 'pre-1',
    title: 'CodeSprint',
    blurb:
      'A fast-paced competitive programming contest open to all skill levels. Tackle algorithmic challenges under time pressure and climb the leaderboard.',
    registerLink: '#',
  },
  {
    id: 'pre-2',
    title: 'DesignJam',
    blurb:
      'A UI/UX design hackathon where teams craft user-centric solutions in 48 hours. Showcase creativity, prototyping skills, and design thinking.',
    registerLink: '#',
  },
  {
    id: 'pre-3',
    title: 'Circuit Quest',
    blurb:
      'A hands-on electronics and IoT challenge. Build, debug, and demonstrate working circuits to solve real-world problem statements.',
    registerLink: '#',
  },
]

function About() {
  useSEO('About', 'Learn more about Dhyuthi 7.0 and its pre-events.')
  const pinRef = useRef(null)
  const introRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinRef.current,
        start: 'top top',
        end: '+=2500', // Duration of the pinned scroll
        scrub: 1,
        pin: true,
      }
    })

    // 1. Move the intro section out to the left
    tl.to(introRef.current, { xPercent: -100, ease: 'none' }, 0)

    // 2. Animate cards in from bottom right (y: 100vh, x: 50vw)
    // and fan them out horizontally.
    tl.fromTo(cardsRef.current,
      { y: '100vh', x: '50vw', opacity: 0 },
      { 
        y: 0, 
        x: (index) => index * 340, // 340px spacing between cards
        opacity: 1,
        stagger: 0.1, 
        ease: 'power2.out',
        duration: 1
      },
      0.1
    )

    // 3. Move them leftwards to simulate horizontal scrolling
    tl.to(cardsRef.current, {
      x: (index) => (index * 340) - 1200, // Move left by 1200px
      ease: 'none',
      duration: 2
    }, 1.2)

  }, { scope: pinRef })

  // Initialize refs array
  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  return (
    <div className="about-pin-wrapper" id="about" ref={pinRef}>
      {/* ── About Intro ────────────────────────────────────────── */}
      <section className="about__intro" ref={introRef}>
        <div className="about__logo-side">
          <img
            src={logo}
            alt="Dhyuthi 7.0 logo"
            className="about__logo"
          />
          <span className="about__logo-badge">IEEE SCT SB</span>
        </div>

        <div className="about__text-side">
          <h1 className="about__heading">About Dhyuthi 7.0</h1>

          {/*
           * ──────────────────────────────────────────────────────
           *  PLACEHOLDER COPY — Replace with final event description
           *  before production deployment.
           * ──────────────────────────────────────────────────────
           */}
          <div className="about__body">
            <p>
              <strong>Dhyuthi 7.0</strong> is the flagship annual tech-fest
              organised by the <em>IEEE Student Branch</em> of Sree Chitra
              Thirunal College of Engineering, Thiruvananthapuram. Now in its
              seventh edition, Dhyuthi has grown into one of the most
              anticipated student-run technical festivals in Kerala, drawing
              participants from colleges across the state and beyond.
            </p>
            <p>
              The event spans three action-packed days of
              <strong> workshops, hackathons, coding contests, paper
              presentations, and robotics challenges</strong> — each designed
              to push boundaries and inspire the next generation of
              innovators. Whether you&apos;re a seasoned developer, a hardware
              enthusiast, or someone just beginning your tech journey, Dhyuthi
              has a track for you.
            </p>
            <p>
              This year&apos;s theme, <em>&ldquo;Ignite · Innovate ·
              Illuminate&rdquo;</em>, celebrates the spark of curiosity that
              drives meaningful change. Join us to collaborate, compete, and
              create something extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pre-Events Cards ────────────────────────────────── */}
      <section className="about__pre-events-layer">
        {PRE_EVENTS.map((event, index) => (
          <article 
            className="pre-event-card absolute-card" 
            key={event.id}
            ref={addToCardsRef}
            style={{ zIndex: 10 + index }}
          >
            <div className="pre-event-card__poster">
              <span className="pre-event-card__poster-label">
                Poster coming soon
              </span>
            </div>

            <div className="pre-event-card__body">
              <h3 className="pre-event-card__title">{event.title}</h3>
              <p className="pre-event-card__blurb">{event.blurb}</p>
              <a
                href={event.registerLink}
                className="pre-event-card__register"
              >
                Register
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default About
