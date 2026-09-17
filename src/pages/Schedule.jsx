import { useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import schedule from '../data/schedule'
import { useSEO } from '../hooks/useSEO'
import '../styles/schedule.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Schedule() {
  useSEO('Schedule', 'View the 3-day schedule for Dhyuthi 7.0.')
  const containerRef = useRef(null)
  const lineRef = useRef(null)
  const [activeDay, setActiveDay] = useState(0)
  const currentDay = schedule[activeDay]

  useGSAP(() => {
    // We create a timeline that triggers when the schedule section hits center
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse'
      }
    })

    // Animate the line drawing down
    tl.fromTo(lineRef.current,
      { scaleY: 0 },
      { scaleY: 1, duration: 1, ease: 'power3.inOut', transformOrigin: 'top' }
    )

    // Stagger the event cards
    tl.fromTo('.timeline__event',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.5' // Overlap with line animation
    )
  }, { scope: containerRef, dependencies: [activeDay] })

  return (
    <div className="schedule-page" id="schedule" ref={containerRef}>
      <h1 className="schedule-page__heading">Schedule</h1>
      <p className="schedule-page__subtitle">
        Three days of workshops, competitions, and community.
      </p>

      <div className="schedule__layout">
        {/* ── Day Tabs ─────────────────────────────────────────── */}
        <div className="schedule__tabs" role="tablist" aria-label="Day selector">
          {schedule.map((day, i) => (
            <button
              key={day.day}
              className={`schedule__tab${i === activeDay ? ' schedule__tab--active' : ''}`}
              onClick={() => setActiveDay(i)}
              role="tab"
              aria-selected={i === activeDay}
              aria-controls="schedule-timeline"
              id={`tab-${i}`}
            >
              <span className="schedule__tab-day">{day.day}</span>
              <span className="schedule__tab-date">{day.date}</span>
            </button>
          ))}
        </div>

        {/* ── Timeline ─────────────────────────────────────────── */}
        <div
          className="timeline"
          id="schedule-timeline"
          role="tabpanel"
          aria-labelledby={`tab-${activeDay}`}
        >
          {/* Explicit line element for GSAP scaling */}
          <div className="timeline__line" ref={lineRef} />

          {currentDay.events.map((event, i) => (
            <div className="timeline__event" key={`${activeDay}-${i}`}>
              <div className="timeline__dot" />
              <div className="timeline__card">
                <span className="timeline__time">{event.time}</span>
                <h3 className="timeline__title">{event.title}</h3>
                <p className="timeline__desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Schedule
