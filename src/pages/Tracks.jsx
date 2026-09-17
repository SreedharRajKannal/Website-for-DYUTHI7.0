import TrackCard from '../components/TrackCard'
import tracks from '../data/tracks'
import { useSEO } from '../hooks/useSEO'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/tracks.css'

function Tracks() {
  useSEO('Tracks', 'Explore the various tracks and competitions at Dhyuthi 7.0.')
  const revealRef = useScrollReveal()

  return (
    <div className="tracks-page reveal" ref={revealRef}>
      <h1 className="tracks-page__heading">Tracks</h1>
      <p className="tracks-page__subtitle">
        Four tracks. Endless possibilities. Pick your arena.
      </p>

      <div className="tracks-grid">
        {tracks.map((track, i) => (
          <TrackCard key={track.id} track={track} index={i} />
        ))}
      </div>
    </div>
  )
}

export default Tracks
