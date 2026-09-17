import Accordion from '../components/Accordion'
import Venue from '../components/Venue'
import { useSEO } from '../hooks/useSEO'
import '../styles/faqs.css'

const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'Who can participate in Dhyuthi 7.0?',
    answer: <p>Dhyuthi is open to all undergraduate and postgraduate students from any college or university. Some specific pre-events may also be open to high school students, which will be clearly mentioned in their respective rulebooks.</p>
  },
  {
    id: 'faq-2',
    question: 'Do I need to be an IEEE member to register?',
    answer: <p>No, you do not need to be an IEEE member to participate! However, active IEEE members may be eligible for discounted registration fees for certain premium workshops or hackathon tracks.</p>
  },
  {
    id: 'faq-3',
    question: 'Will accommodation and meals be provided?',
    answer: <p>Accommodation is provided for participants traveling from outside the district upon prior request (a nominal fee may apply). For participants in the 24-hour hackathon (Track Synapse), overnight stay arrangements and meals for the duration of the hack are included in the registration.</p>
  },
  {
    id: 'faq-4',
    question: 'Are certificates provided?',
    answer: <p>Yes, all registered participants will receive an e-certificate of participation. Winners of competitive tracks will receive a physical Certificate of Merit along with their prize money.</p>
  },
  {
    id: 'faq-5',
    question: 'How do I reach the venue?',
    answer: <p>Sree Chitra Thirunal College of Engineering is located in Pappanamcode, Thiruvananthapuram. It is easily accessible by KSRTC buses from the Thampanoor bus station (approx. 5 km away) or by auto-rickshaws/taxis.</p>
  }
]

function FAQs() {
  useSEO('FAQs', 'Frequently asked questions about Dhyuthi 7.0.')

  return (
    <div className="faqs-curtain-wrapper" id="faqs">
      <div className="faqs-page">
      <h1 className="faqs-page__heading">FAQs</h1>
      <p className="faqs-page__subtitle">
        Got questions? We&apos;ve got answers.
      </p>

      {/* ── Accordion Section ─────────────────────────────────────────── */}
      <section aria-label="Frequently Asked Questions">
        <Accordion items={FAQ_DATA} />
      </section>

      {/* ── Venue Section ─────────────────────────────────────────────── */}
      <Venue />
      </div>
    </div>
  )
}

export default FAQs
