import { useState, useEffect, useCallback, useRef } from 'react'
import { X } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/**
 * Reusable track card with "Know more" modal.
 * Driven entirely by a track data object.
 *
 * @param {{ track: {
 *   id: string, number: string, title: string, tagline: string,
 *   description: string, rules: string[], eligibility: string, prizes: string
 * }, index: number }} props
 */
function TrackCard({ track, index }) {
  const [modalOpen, setModalOpen] = useState(false)
  const cardRef = useRef(null)
  const innerRef = useRef(null)
  const modalRef = useRef(null)

  const openModal = () => setModalOpen(true)
  const closeModal = useCallback(() => setModalOpen(false), [])

  /* Close on Escape key */
  useEffect(() => {
    if (!modalOpen) return
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [modalOpen, closeModal])

  /* ── GSAP Animations ─────────────────────────────────────────── */
  // ScrollTrigger parallax has been moved to the parent pinned timeline

  /* ── GSAP Modal Animation ────────────────────────────────────── */
  // We use a regular useEffect here so it runs every time modalOpen changes
  useEffect(() => {
    if (modalOpen && modalRef.current) {
      gsap.fromTo(modalRef.current,
        { scale: 0.8, y: 50, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.8, ease: 'elastic.out(1, 0.6)' }
      )
    }
  }, [modalOpen])

  /* ── 3D Hover Tilt Logic ─────────────────────────────────────── */
  const handleMouseMove = (e) => {
    if (!innerRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left // x position within the element
    const y = e.clientY - rect.top  // y position within the element
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Calculate rotation (-10 to 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    gsap.to(innerRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000,
      transformOrigin: 'center center'
    })
  }

  const handleMouseLeave = () => {
    if (!innerRef.current) return
    gsap.to(innerRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power3.out'
    })
  }

  return (
    <>
      {/* ── Card ─────────────────────────────────────────────── */}
      <article 
        className="track-card" 
        id={track.id} 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="track-card__inner" ref={innerRef}>
          <div className="track-card__poster">
            <span className="track-card__number">Track {track.number}</span>
            <span className="track-card__poster-label">Poster coming soon</span>
          </div>

          <div className="track-card__body">
            <h3 className="track-card__title">{track.title}</h3>
            <p className="track-card__tagline">{track.tagline}</p>
            <p className="track-card__desc">{track.description}</p>
            <button
              className="track-card__cta"
              onClick={openModal}
              aria-haspopup="dialog"
            >
              Know more
            </button>
          </div>
        </div>
      </article>

      {/* ── Detail Modal ─────────────────────────────────────── */}
      {modalOpen && (
        <div
          className="track-modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
          role="presentation"
        >
          <div
            className="track-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${track.id}-modal-title`}
            ref={modalRef}
          >
            {/* Header */}
            <div className="track-modal__header">
              <div className="track-modal__header-left">
                <span className="track-modal__number">Track {track.number}</span>
                <h2 className="track-modal__title" id={`${track.id}-modal-title`}>
                  {track.title}
                </h2>
              </div>
              <button
                className="track-modal__close"
                onClick={closeModal}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="track-modal__body">
              <p className="track-modal__tagline">{track.tagline}</p>
              <p className="track-modal__desc">{track.description}</p>

              {/* Rules */}
              {track.rules?.length > 0 && (
                <div>
                  <h3 className="track-modal__section-title">Rules</h3>
                  <ul className="track-modal__rules">
                    {track.rules.map((rule, i) => (
                      <li key={i}>{rule}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Eligibility */}
              {track.eligibility && (
                <div>
                  <h3 className="track-modal__section-title">Eligibility</h3>
                  <p className="track-modal__eligibility">{track.eligibility}</p>
                </div>
              )}

              {/* Prizes */}
              {track.prizes && (
                <div>
                  <h3 className="track-modal__section-title">Prizes</h3>
                  <p className="track-modal__prizes">{track.prizes}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TrackCard
