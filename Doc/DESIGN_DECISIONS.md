# Design Decisions

This document outlines the rationale behind the visual and architectural design choices for the Dhyuthi 7.0 website.

## 1. Visual Theme: "Electric Diya"
**Concept:** A stark departure from the previous year's generic purple starfield. The new theme leans into a premium, high-contrast, dark-mode aesthetic.

- **Color Palette:** 
  - **Base:** Deep Charcoal / Near-Black (`#04070a`, `#0a0e13`) — provides a sophisticated, low-fatigue background.
  - **Primary (Electric Teal):** `rgb(0, 212, 212)` — Represents technology, circuitry, and the "IEEE" tech-fest identity. Used for borders, highlights, and primary glows.
  - **Accent (Ember / Amber):** `#ff6b4a` — Represents the "lamp/diya" aspect of the Dhyuthi constellation logo. Used sparingly for critical calls to action (like the "Register Now" button).
- **Typography:**
  - **Display (Headings):** `Outfit` — A geometric sans-serif that looks distinctly modern and tech-oriented.
  - **Body (Text):** `Inter` — The industry standard for highly legible, neutral UI text.

## 2. Global CSS Architecture & Tokens
Instead of relying on heavy CSS frameworks or utility classes like Tailwind, the styling was built on a robust Vanilla CSS architecture using CSS Variables (Custom Properties).

- **`tokens.css`:** Serves as the single source of truth for the design system. It dictates the spacing scale (`--space-1` to `--space-24`), typography scale (`--text-xs` to `--text-6xl`), color palette, border radii, and shadow/glow definitions.
- **Component-Scoped CSS:** Each major component or page (e.g., `navbar.css`, `home.css`) imports these variables, ensuring visual consistency across the entire application without global namespace collisions.

## 3. UI/UX Considerations
- **Glassmorphism:** Used tastefully on the sticky Navbar and Lightbox overlays (using `backdrop-filter: blur()`). This creates a sense of depth and modernity without overwhelming the user.
- **Micro-interactions:** Elements like the Timeline dots, Track cards, and Gallery tiles feature subtle CSS transitions (`transform: translateY(-4px)`, `box-shadow` glows). These non-distracting animations make the UI feel responsive and "alive".
- **Scroll Reveals:** Intersection Observer was utilized for scroll-reveal animations to keep the payload lightweight compared to shipping large libraries like Framer Motion.
- **Accessibility:** High contrast ratios were prioritized. The Google Map iframe was heavily filtered (`grayscale(100%) invert(92%)`) to ensure it didn't break the dark mode aesthetic or cause eye strain.
