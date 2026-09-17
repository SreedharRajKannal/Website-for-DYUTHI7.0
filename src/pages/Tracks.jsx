import { useRef, cloneElement } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TrackCard from '../components/TrackCard'
import tracks from '../data/tracks'
import { useSEO } from '../hooks/useSEO'
import '../styles/tracks.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Tracks() {
  useSEO('Tracks', 'Explore the various tracks and competitions at Dhyuthi 7.0.')
  const pinRef = useRef(null)
  const textRef = useRef(null)
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

    // 1. Move text out to the left
    tl.to(textRef.current, { xPercent: -100, ease: 'none' }, 0)

    // 2. Animate cards in from bottom right
    tl.fromTo(cardsRef.current,
      { y: '100vh', x: '50vw', opacity: 0 },
      { 
        y: 0, 
        x: (index) => index * 360, // Space them out
        opacity: 1,
        stagger: 0.1, 
        ease: 'power2.out',
        duration: 1
      },
      0.1
    )

    // 3. Move them leftwards
    tl.to(cardsRef.current, {
      x: (index) => (index * 360) - 1500, // Move left
      ease: 'none',
      duration: 2
    }, 1.2)

  }, { scope: pinRef })

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  return (
    <div className="tracks-pin-wrapper" id="tracks" ref={pinRef}>
      <div className="tracks-text-side" ref={textRef}>
        <h1 className="tracks-page__heading">Tracks</h1>
        <p className="tracks-page__subtitle">
          Four tracks. Endless possibilities. Pick your arena.
        </p>
      </div>

      <div className="tracks-cards-layer">
        {tracks.map((track, i) => (
          <div 
            key={track.id} 
            className="absolute-track-card"
            ref={addToCardsRef}
            style={{ zIndex: 10 + i }}
          >
            <TrackCard track={track} index={i} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tracks
