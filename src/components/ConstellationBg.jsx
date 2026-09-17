import { useEffect, useRef } from 'react'

/**
 * Canvas-based constellation background.
 * Renders drifting dots connected by faint lines when nearby.
 * Uses requestAnimationFrame with frame-skip for low CPU usage.
 *
 * @param {{ className?: string }} props
 */
function ConstellationBg({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    const CONNECT_DIST = 140
    const PARTICLE_COUNT_BASE = 60 // per 1920×1080 area

    /* ── Colors from our palette ──────────────────────────────── */
    const TEAL = { r: 0, g: 212, b: 212 }
    const AMBER = { r: 255, g: 184, b: 30 }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles(rect.width, rect.height)
    }

    function initParticles(w, h) {
      const area = w * h
      const count = Math.floor((area / (1920 * 1080)) * PARTICLE_COUNT_BASE)
      particles = Array.from({ length: Math.max(count, 20) }, () => {
        const isTeal = Math.random() > 0.3
        const color = isTeal ? TEAL : AMBER
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 1.8 + 0.6,
          color,
          alpha: Math.random() * 0.5 + 0.2,
        }
      })
    }

    function draw() {
      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2))
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2))
      ctx.clearRect(0, 0, w, h)

      // Move particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        // Wrap edges
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const opacity = (1 - dist / CONNECT_DIST) * 0.15
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${TEAL.r}, ${TEAL.g}, ${TEAL.b}, ${opacity})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`constellation-bg ${className}`}
      aria-hidden="true"
    />
  )
}

export default ConstellationBg
