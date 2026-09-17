# Component Structure & Routing

This document details the frontend component architecture, reusability patterns, and routing configuration for the Dhyuthi 7.0 application.

## 1. Routing Strategy
- **Library:** `react-router-dom`
- **Router Implementation:** `<HashRouter>`
- **Rationale:** Because the application is deployed to GitHub Pages (`https://<username>.github.io/Website-for-DYUTHI7.0/`), standard HTML5 `BrowserRouter` history API routing often fails upon direct page refreshes (resulting in 404s) without complex server-side redirection rules (like a `404.html` hack). Using `HashRouter` ensures that routing works flawlessly out-of-the-box on GitHub Pages by appending a `#` to the URL.

## 2. Layout Wrapper Pattern
The application utilizes a central `<Layout>` component in `App.jsx`:
```jsx
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    // ...other routes
  </Route>
</Routes>
```
**Rationale:** The `<Layout>` component encapsulates the `<Navbar>` and `<Footer>`. This ensures the navigation and footer are only rendered once, persisting their state (and avoiding re-renders) while the `<Outlet />` swaps out the main page content dynamically.

## 3. Reusable Component Primitives
To maintain DRY (Don't Repeat Yourself) code and ensure consistency, several UI elements were abstracted into reusable, prop-driven components:

### `TrackCard.jsx`
- **Purpose:** Renders the layout for tracks and workshops.
- **Usage:** Used primarily on the `/tracks` page. It accepts props for title, description, and status, and encapsulates its own expandable modal logic ("Know more" functionality) entirely within itself.

### `Accordion.jsx`
- **Purpose:** A fully accessible, expandable Q&A list.
- **Usage:** Central to the `/faqs` page. It accepts a data array of `items` and a config prop (`allowMultiple`) to determine if multiple panes can be open simultaneously. 

### `Carousel.jsx`
- **Purpose:** A horizontally scrolling showcase for upcoming events.
- **Usage:** Implemented on the `/about` page for Pre-Events. Built with native CSS `overflow-x: auto` and scroll-snapping, ensuring 60fps performance on mobile devices without needing a heavyweight JavaScript swiper library.

### `Venue.jsx`
- **Purpose:** Displays the Google Maps embed and contact information grid.
- **Usage:** Abstracted out so it could be reused identically on both the `/faqs` page and the `/contact` page, preventing duplicated HTML and CSS maintenance.

## 4. Data Separation
Content for dense pages like `Tracks` and `Schedule` was decoupled from the React JSX and placed into dedicated JavaScript arrays in `src/data/tracks.js` and `src/data/schedule.js`.
**Rationale:** As event details change rapidly leading up to the fest, organizers can simply update the data files without having to parse through nested JSX structure.
