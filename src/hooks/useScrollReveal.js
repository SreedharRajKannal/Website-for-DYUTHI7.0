import { useEffect, useRef } from 'react'

/**
 * Custom hook to apply Intersection Observer for scroll-reveal animations.
 * When the element enters the viewport, it adds the 'reveal--visible' class.
 *
 * @param {Object} options - Intersection Observer options (threshold, rootMargin)
 * @returns {React.RefObject} - Ref to attach to the target element
 */
export function useScrollReveal(options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('reveal--visible')
        // Optional: stop observing once revealed so it doesn't animate out and back in
        observer.unobserve(el)
      }
    }, options)

    observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [options.threshold, options.rootMargin])

  return ref
}
