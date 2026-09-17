import { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'

/**
 * Reusable track card with "Know more" modal.
 * Driven entirely by a track data object.
 *
 * @param {{ track: {
 *   id: string, number: string, title: string, tagline: string,
 *   description: string, rules: string[], eligibility: string, prizes: string
 * }}} props
 */
function TrackCard({ track }) {
  const [modalOpen, setModalOpen] = useState(false)

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

  return (
    <>
      {/* ── Card ─────────────────────────────────────────────── */}
      <article className="track-card" id={track.id}>
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
