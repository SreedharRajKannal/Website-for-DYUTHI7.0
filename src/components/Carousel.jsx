import { useState, useRef, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import '../styles/carousel.css'
import '../styles/carousel.css'

/**
 * Reusable horizontal card carousel with prev/next arrows and dot indicators.
 *
 * @param {{
 *   children: React.ReactNode[],
 *   title?: string,
 *   subtitle?: string,
 *   visibleCards?: number,  // cards visible at once on desktop (default 3)
 * }} props
 */
function Carousel({ children, title, subtitle, visibleCards = 3 }) {
  const trackRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = Array.isArray(children) ? children.length : 0
  const maxIndex = Math.max(0, totalSlides - visibleCards)

  const scrollTo = useCallback(
    (index) => {
      const next = Math.max(0, Math.min(index, maxIndex))
      setCurrentIndex(next)
      if (trackRef.current) {
        const card = trackRef.current.children[next]
        if (card) {
          trackRef.current.scrollTo({
            left: card.offsetLeft - trackRef.current.offsetLeft,
            behavior: 'smooth',
          })
        }
      }
    },
    [maxIndex],
  )

  const prev = () => scrollTo(currentIndex - 1)
  const next = () => scrollTo(currentIndex + 1)

  /* Sync index on manual scroll */
  const handleScroll = () => {
    if (!trackRef.current) return
    const el = trackRef.current
    const cardWidth = el.scrollWidth / totalSlides
    const idx = Math.round(el.scrollLeft / cardWidth)
    setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)))
  }

  /* ── Custom Drag Implementation ── */
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)
  const velocity = useRef(0)
  const lastTime = useRef(0)
  const lastX = useRef(0)

  const handlePointerDown = (e) => {
    if (!trackRef.current) return
    isDragging.current = true
    gsap.killTweensOf(trackRef.current) // Stop active inertia
    startX.current = e.pageX || (e.touches && e.touches[0].pageX)
    scrollLeftStart.current = trackRef.current.scrollLeft
    lastX.current = startX.current
    lastTime.current = performance.now()
    
    trackRef.current.style.cursor = 'grabbing'
    trackRef.current.style.userSelect = 'none'
  }

  const handlePointerMove = (e) => {
    if (!isDragging.current || !trackRef.current) return
    e.preventDefault()
    
    const x = e.pageX || (e.touches && e.touches[0].pageX)
    const walk = (x - startX.current) * 1.5 // Drag multiplier
    
    trackRef.current.scrollLeft = scrollLeftStart.current - walk
    
    // Calculate velocity for inertia
    const now = performance.now()
    const dt = now - lastTime.current
    if (dt > 0) {
      velocity.current = (x - lastX.current) / dt
    }
    lastX.current = x
    lastTime.current = now
  }

  const handlePointerUp = () => {
    if (!isDragging.current || !trackRef.current) return
    isDragging.current = false
    trackRef.current.style.cursor = 'grab'
    trackRef.current.style.userSelect = ''

    // Inertia simulation using GSAP
    const targetScroll = trackRef.current.scrollLeft - (velocity.current * 200)
    
    gsap.to(trackRef.current, {
      scrollLeft: targetScroll,
      duration: 0.8,
      ease: 'power3.out',
      onComplete: handleScroll // Ensure index updates after throw
    })
  }

  if (totalSlides === 0) return null

  return (
    <div className="carousel">
      {/* Header row */}
      {(title || subtitle) && (
        <div className="carousel__header">
          <div>
            {title && <h2 className="carousel__title">{title}</h2>}
            {subtitle && <p className="carousel__subtitle">{subtitle}</p>}
          </div>
          {totalSlides > visibleCards && (
            <div className="carousel__arrows">
              <button
                className="carousel__arrow"
                onClick={prev}
                disabled={currentIndex === 0}
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="carousel__arrow"
                onClick={next}
                disabled={currentIndex >= maxIndex}
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Scrollable track */}
      <div
        className="carousel__track"
        ref={trackRef}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{
          '--carousel-visible': visibleCards,
        }}
      >
        {children}
      </div>

      {/* Dot indicators (mobile-friendly) */}
      {totalSlides > 1 && (
        <div className="carousel__dots" role="tablist" aria-label="Carousel navigation">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              className={`carousel__dot${i === currentIndex ? ' carousel__dot--active' : ''}`}
              onClick={() => scrollTo(i)}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
