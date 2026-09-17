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
  const trackRef = useRef(null)

  useGSAP(() => {
    gsap.to(trackRef.current, {
      x: () => -(trackRef.current.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: pinRef.current,
        start: 'top top',
        end: () => "+=" + trackRef.current.scrollWidth,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true, // Recalculate on resize
      }
    })
  }, { scope: pinRef })

  return (
    <div className="tracks-pin-wrapper" id="tracks" ref={pinRef}>
      <div className="tracks-scroll-track" ref={trackRef}>
        <div className="tracks-text-side">
          <h1 className="tracks-page__heading">Tracks</h1>
          <p className="tracks-page__subtitle">
            Four tracks. Endless possibilities. Pick your arena.
          </p>
        </div>

        <div className="tracks-cards-layer">
          {tracks.map((track, i) => (
            <div 
              key={track.id} 
              className="track-card-wrapper"
            >
              <TrackCard track={track} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tracks
