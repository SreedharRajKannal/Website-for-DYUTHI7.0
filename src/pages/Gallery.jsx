import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/gallery.css'

/**
 * ─── Gallery Placeholder Data ──────────────────────────────────────
 * Replace `src` with actual imported images when ready.
 */
const GALLERY_IMAGES = [
  { id: 1, spanClass: 'gallery-item--wide gallery-item--tall', caption: 'Inaugural ceremony Dhyuthi 6.0' },
  { id: 2, spanClass: '', caption: 'Hackathon team collaborating' },
  { id: 3, spanClass: 'gallery-item--tall', caption: 'Robotics track finale' },
  { id: 4, spanClass: '', caption: 'Workshop session on AI' },
  { id: 5, spanClass: 'gallery-item--wide', caption: 'Crowd at the pro-show' },
  { id: 6, spanClass: '', caption: 'Winners of CodeSprint' },
  { id: 7, spanClass: 'gallery-item--tall', caption: 'IoT track hardware setup' },
  { id: 8, spanClass: '', caption: 'Valedictory function' },
  { id: 9, spanClass: '', caption: 'Organising committee' },
  { id: 10, spanClass: 'gallery-item--wide', caption: 'Campus during sunset' },
]

function Gallery() {
  useSEO('Gallery', 'View memories and photos from past editions of Dhyuthi.')
  const revealRef = useScrollReveal()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const nextImg = useCallback((e) => {
    if (e) e.stopPropagation()
    if (lightboxIndex !== null && lightboxIndex < GALLERY_IMAGES.length - 1) {
      setLightboxIndex(lightboxIndex + 1)
    }
  }, [lightboxIndex])

  const prevImg = useCallback((e) => {
    if (e) e.stopPropagation()
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1)
    }
  }, [lightboxIndex])

  /* Keyboard navigation for Lightbox */
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImg()
      if (e.key === 'ArrowLeft') prevImg()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, closeLightbox, nextImg, prevImg])

  return (
    <div className="gallery-page reveal" ref={revealRef}>
      <h1 className="gallery-page__heading">Gallery</h1>
      <p className="gallery-page__subtitle">
        Memories from past editions. A glimpse into the Dhyuthi experience.
      </p>

      {/* ── Grid ─────────────────────────────────────────────────── */}
      <div className="gallery-grid">
        {GALLERY_IMAGES.map((img, idx) => (
          <div
            key={img.id}
            className={`gallery-item ${img.spanClass}`}
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            aria-label={`View image: ${img.caption}`}
            onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(idx) }}
          >
            {/* 
              When real images are ready, replace this placeholder block
              with an <img src={img.src} alt={img.caption} className="gallery-item__img" />
            */}
            <div className="gallery-item__placeholder">
              <span className="gallery-item__label">Image coming soon</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
            <X size={24} />
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={prevImg}
            disabled={lightboxIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()} /* Prevent closing when clicking content */
          >
            {/* Real image tag would go here */}
            <div className="lightbox__placeholder-view">
              <ImageIcon size={64} style={{ color: 'var(--border-strong)' }} />
              <p style={{ color: 'var(--text-muted)' }}>Placeholder for: <strong>{GALLERY_IMAGES[lightboxIndex].caption}</strong></p>
            </div>
            
            <div className="lightbox__caption">
              {GALLERY_IMAGES[lightboxIndex].caption}
            </div>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={nextImg}
            disabled={lightboxIndex === GALLERY_IMAGES.length - 1}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Gallery
