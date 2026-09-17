import { useState, useEffect, useRef } from 'react'
import '../styles/countdown.css'

/**
 * Reusable flip-card style countdown timer.
 * @param {{ targetDate: Date | string }} props
 */
function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate))
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const t = getTimeLeft(targetDate)
      setTimeLeft(t)
      if (t.total <= 0) clearInterval(intervalRef.current)
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [targetDate])

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="countdown" role="timer" aria-label="Event countdown">
      {units.map(({ label, value }) => (
        <div className="countdown__unit" key={label}>
          <div className="countdown__card">
            <span className="countdown__value">
              {String(value).padStart(2, '0')}
            </span>
            <div className="countdown__divider" />
          </div>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  )
}

function getTimeLeft(target) {
  const diff = Math.max(0, new Date(target) - Date.now())
  return {
    total: diff,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default CountdownTimer
