import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Carousel from '../components/Carousel'
import { useSEO } from '../hooks/useSEO'
import { useScrollReveal } from '../hooks/useScrollReveal'
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
  const revealIntro = useScrollReveal()
  const carouselContainerRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(carouselContainerRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: carouselContainerRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, { scope: carouselContainerRef })

  return (
    <div className="about">
      {/* ── About Intro ────────────────────────────────────────── */}
      <section className="about__intro reveal" id="about-intro" ref={revealIntro}>
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

      {/* ── Pre-Events Carousel ────────────────────────────────── */}
      <section className="about__pre-events" id="pre-events" ref={carouselContainerRef}>
        <Carousel
          title="Pre-Events"
          subtitle="Warm up before the main fest — open registrations now."
          visibleCards={3}
        >
          {PRE_EVENTS.map((event) => (
            <article className="pre-event-card" key={event.id}>
              {/* Poster placeholder — do NOT design actual graphics */}
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
        </Carousel>
      </section>
    </div>
  )
}

export default About
