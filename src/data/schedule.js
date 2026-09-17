/**
 * ─── Schedule data ─────────────────────────────────────────────────
 * TODO: Replace all placeholder times and event details with the
 *       real schedule before production deployment.
 * ───────────────────────────────────────────────────────────────────
 */

const schedule = [
  {
    day: 'Day 1',
    date: '24 Oct 2026',
    events: [
      {
        time: '08:00 – 09:00',
        title: 'Registration & Check-in',
        description: 'Collect your ID badges, event kits, and grab breakfast before the opening ceremony.',
      },
      {
        time: '09:00 – 09:45',
        title: 'Inaugural Ceremony',
        description: 'Keynote address by the chief guest, lamp lighting, and a welcome from the organising team.',
      },
      {
        time: '10:00 – 12:30',
        title: 'Workshop Session 1 — AI / ML Foundations',
        description: 'Hands-on workshop covering core machine-learning concepts, model training, and evaluation with real datasets.',
      },
      {
        time: '12:30 – 13:30',
        title: 'Lunch Break',
        description: 'Networking lunch at the campus cafeteria. Vegetarian and non-vegetarian options available.',
      },
      {
        time: '13:30 – 16:00',
        title: 'Track Nexus — Round 1',
        description: 'First round of the competitive programming contest. Individual participation, standard CP rules.',
      },
      {
        time: '16:00 – 16:30',
        title: 'Tea Break & Ice-Breaker Activity',
        description: 'Quick refreshments and a fun team-building game to energise participants.',
      },
      {
        time: '16:30 – 18:30',
        title: 'Workshop Session 2 — Intro to Cybersecurity',
        description: 'Beginner-friendly CTF walkthrough covering web exploitation basics, cryptography, and forensics.',
      },
      {
        time: '19:00 – 21:00',
        title: 'Culturals & Dinner',
        description: 'Live music, open mic, and dinner under the stars at the amphitheatre.',
      },
    ],
  },
  {
    day: 'Day 2',
    date: '25 Oct 2026',
    events: [
      {
        time: '09:00 – 09:30',
        title: 'Day 2 Kickoff',
        description: 'Quick recap of Day 1 highlights and preview of the day ahead.',
      },
      {
        time: '09:30 – 12:00',
        title: 'Track Synapse — Hackathon Begins',
        description: 'Problem statements released. Teams start ideating and building prototypes.',
      },
      {
        time: '12:00 – 13:00',
        title: 'Lunch Break',
        description: 'Refuel and recharge. Hackathon teams may continue working in the lab.',
      },
      {
        time: '13:00 – 15:30',
        title: 'Track Cipher — CTF Challenge',
        description: 'Jeopardy-style Capture-the-Flag competition with tiered difficulty. Hints available at point cost.',
      },
      {
        time: '15:30 – 16:00',
        title: 'Tea Break',
        description: 'Light snacks and refreshments.',
      },
      {
        time: '16:00 – 18:00',
        title: 'Track Volt — Circuit Challenge',
        description: 'Teams build and demo working circuits based on given problem statements.',
      },
      {
        time: '18:00 – 19:00',
        title: 'Tech Talk — Industry Speaker',
        description: 'Guest lecture from an industry professional on emerging tech trends.',
      },
      {
        time: '19:30 – 21:30',
        title: 'Game Night & Bonfire',
        description: 'Board games, trivia quiz, and a bonfire gathering. Hackathon teams continue overnight.',
      },
    ],
  },
  {
    day: 'Day 3',
    date: '26 Oct 2026',
    events: [
      {
        time: '09:00 – 09:30',
        title: 'Day 3 Opening',
        description: 'Final day briefing, hackathon submission timeline, and event reminders.',
      },
      {
        time: '09:30 – 11:00',
        title: 'Track Nexus — Final Round',
        description: 'Championship round of the competitive programming contest.',
      },
      {
        time: '11:00 – 13:00',
        title: 'Hackathon Presentations',
        description: 'Teams present their prototypes to the judging panel. Q&A and scoring.',
      },
      {
        time: '13:00 – 14:00',
        title: 'Lunch Break',
        description: 'Final lunch of the fest. Results tabulation in progress.',
      },
      {
        time: '14:00 – 15:00',
        title: 'Paper / Poster Presentations',
        description: 'Student research presentations and poster exhibition in the main hall.',
      },
      {
        time: '15:00 – 16:30',
        title: 'Valedictory Ceremony & Prize Distribution',
        description: 'Closing remarks, winner announcements across all tracks, certificate distribution, and group photo.',
      },
    ],
  },
]

export default schedule
