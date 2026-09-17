import { useRef } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import '../styles/venue.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Venue() {
  const venueRef = useRef(null)

  useGSAP(() => {
    // Fade up the heading, map, and contact blocks
    gsap.fromTo('.venue-section__heading, .venue-map, .venue-details__block',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: venueRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    )
  }, { scope: venueRef })

  return (
    <section className="venue-section" aria-labelledby="venue-heading" ref={venueRef}>
      <h2 className="venue-section__heading" id="venue-heading">Venue & Contact</h2>
      
      <div className="venue-grid">
        {/* Map Embed */}
        <div className="venue-map" aria-label="Google Maps location">
          <iframe
            src="https://maps.google.com/maps?q=Sree+Chitra+Thirunal+College+of+Engineering,+Pappanamcode,+Thiruvananthapuram&t=&z=16&ie=UTF8&iwloc=&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue Map"
          />
        </div>

        {/* Contact Details */}
        <div className="venue-details">
          <div className="venue-details__block">
            <MapPin className="venue-details__icon" size={24} />
            <div className="venue-details__text">
              <span className="venue-details__label">Address</span>
              <span className="venue-details__value">
                Sree Chitra Thirunal College of Engineering,<br />
                Pappanamcode, Thiruvananthapuram,<br />
                Kerala 695018
              </span>
            </div>
          </div>
          
          <div className="venue-details__block">
            <Mail className="venue-details__icon" size={24} />
            <div className="venue-details__text">
              <span className="venue-details__label">Email</span>
              <span className="venue-details__value">
                <a href="mailto:ieeesctsb.dummy@example.com">ieeesctsb.dummy@example.com</a>
              </span>
            </div>
          </div>

          <div className="venue-details__block">
            <Phone className="venue-details__icon" size={24} />
            <div className="venue-details__text">
              <span className="venue-details__label">Phone</span>
              <span className="venue-details__value">
                <a href="tel:+919000000000">John Doe — +91 90000 00000</a><br />
                <a href="tel:+919000000001">Jane Doe — +91 90000 00001</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Venue
