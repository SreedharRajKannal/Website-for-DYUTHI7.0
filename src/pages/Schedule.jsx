import { useState } from 'react'
import schedule from '../data/schedule'
import { useSEO } from '../hooks/useSEO'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/schedule.css'

function Schedule() {
  useSEO('Schedule', 'View the 3-day schedule for Dhyuthi 7.0.')
  const revealRef = useScrollReveal()
  const [activeDay, setActiveDay] = useState(0)
  const currentDay = schedule[activeDay]

  return (
    <div className="schedule-page reveal" ref={revealRef}>
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
