import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Venue from '../components/Venue'
import { useSEO } from '../hooks/useSEO'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/contact.css'

function Contact() {
  useSEO('Contact', 'Get in touch with the Dhyuthi 7.0 team.')
  const revealRef = useScrollReveal()
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Show dummy toast
    setShowToast(true)
    // Clear form
    setFormData({ name: '', email: '', message: '' })
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  return (
    <div className="contact-page reveal" ref={revealRef}>
      <h1 className="contact-page__heading">Contact</h1>
      <p className="contact-page__subtitle">
        Have a question or need assistance? Reach out to us.
      </p>

      {/* ── Contact Form ──────────────────────────────────────────────── */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__group">
          <label htmlFor="name" className="contact-form__label">Name</label>
          <input
            type="text"
            id="name"
            className="contact-form__input"
            placeholder="John Doe"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">Email</label>
          <input
            type="email"
            id="email"
            className="contact-form__input"
            placeholder="john@example.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">Message</label>
          <textarea
            id="message"
            className="contact-form__textarea"
            placeholder="How can we help you?"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button type="submit" className="contact-form__submit">
          Send Message
        </button>
      </form>

      {/* ── Venue / Address Details ───────────────────────────────────── */}
      {/* Reusing the Venue component from FAQs */}
      <Venue />

      {/* ── Toast Notification ────────────────────────────────────────── */}
      <div className={`contact-toast ${showToast ? 'contact-toast--show' : ''}`} role="alert">
        <CheckCircle2 className="contact-toast__icon" size={20} />
        <span className="contact-toast__text">Message sent! We'll get back to you soon.</span>
      </div>
    </div>
  )
}

export default Contact
