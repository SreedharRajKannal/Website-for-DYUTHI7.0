/**
 * ─── Track data ────────────────────────────────────────────────────
 * TODO: Replace all placeholder content with real track details
 *       before production deployment.
 * ───────────────────────────────────────────────────────────────────
 */

import imgNexus from '../assets/tracks/nexus.png'
import imgSynapse from '../assets/tracks/synapse.png'
import imgCipher from '../assets/tracks/cipher.png'
import imgVolt from '../assets/tracks/volt.png'

const tracks = [
  {
    id: 'track-01',
    number: '01',
    title: 'Nexus',
    tagline: 'Where code meets competition.',
    description:
      'A multi-round competitive programming track designed to test algorithmic thinking, data-structure mastery, and problem-solving speed. Open to individuals and pairs.',
    rules: [
      'Teams of 1–2 members.',
      'Three progressive elimination rounds over two days.',
      'Standard competitive programming rules apply — no external help or AI tools.',
      'Languages allowed: C, C++, Java, Python.',
    ],
    eligibility: 'Open to all undergraduate and postgraduate students with a valid college ID.',
    prizes: '₹ XX,XXX (1st) · ₹ XX,XXX (2nd) · ₹ X,XXX (3rd)',
    image: imgNexus,
  },
  {
    id: 'track-02',
    number: '02',
    title: 'Synapse',
    tagline: 'Build something the world hasn\'t seen.',
    description:
      'A 24-hour hackathon where cross-functional teams ideate, prototype, and pitch solutions to real-world problem statements. Hardware and software tracks available.',
    rules: [
      'Teams of 3–5 members.',
      'Problem statements released at the start of the hack.',
      'Judging criteria: innovation, technical depth, design, and pitch quality.',
      'Overnight stay arrangements provided.',
    ],
    eligibility: 'Open to all college students. Cross-college teams welcome.',
    prizes: '₹ XX,XXX (1st) · ₹ XX,XXX (2nd) · ₹ X,XXX (3rd) + sponsor goodies',
    image: imgSynapse,
  },
  {
    id: 'track-03',
    number: '03',
    title: 'Cipher',
    tagline: 'Decode. Defend. Dominate.',
    description:
      'A Capture-the-Flag cybersecurity challenge spanning web exploitation, cryptography, reverse engineering, and forensics. Beginner-friendly with tiered difficulty.',
    rules: [
      'Individual participation only.',
      'Jeopardy-style CTF with dynamic scoring.',
      'No attacking the infrastructure or other participants.',
      'Hints available at point cost.',
    ],
    eligibility: 'Open to all students. No prior CTF experience required.',
    prizes: '₹ XX,XXX (1st) · ₹ XX,XXX (2nd) · ₹ X,XXX (3rd)',
    image: imgCipher,
  },
  {
    id: 'track-04',
    number: '04',
    title: 'Volt',
    tagline: 'Circuits, sensors, and sparks.',
    description:
      'A hands-on electronics and IoT track featuring circuit-building challenges, sensor integration tasks, and a final showcase round where teams demo working prototypes.',
    rules: [
      'Teams of 2–3 members.',
      'Basic components provided; teams may bring additional modules.',
      'Final demo judged on functionality, creativity, and presentation.',
      'Safety guidelines must be followed at all times.',
    ],
    eligibility: 'Open to all college students with basic electronics knowledge.',
    prizes: '₹ XX,XXX (1st) · ₹ XX,XXX (2nd) · ₹ X,XXX (3rd) + component kits',
    image: imgVolt,
  },
]

export default tracks
