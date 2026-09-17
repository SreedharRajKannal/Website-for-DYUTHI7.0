import { MapPin, Mail, Phone } from 'lucide-react'
import '../styles/venue.css'

function Venue() {
  return (
    <section className="venue-section" aria-labelledby="venue-heading">
      <h2 className="venue-section__heading" id="venue-heading">Venue & Contact</h2>
      
      <div className="venue-grid">
        {/* Map Embed */}
        <div className="venue-map" aria-label="Google Maps location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.335345799981!2d76.97864311478253!3d8.494793693895995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b0a394c8e7cb%3A0xc66df04432168925!2sSree%20Chitra%20Thirunal%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1689617304123!5m2!1sen!2sin"
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
