import { useEffect } from 'react'

/**
 * Custom hook to manage SEO meta tags without extra dependencies.
 * Updates document.title and <meta name="description"> on mount.
 *
 * @param {string} title - The page title
 * @param {string} description - The page description
 */
export function useSEO(title, description) {
  useEffect(() => {
    // Save original values to restore on unmount if needed, or just leave it.
    // For a single page app, usually we just let the next route override it.
    
    document.title = title ? `${title} | Dhyuthi 7.0` : 'Dhyuthi 7.0 — IEEE Tech Fest'

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.name = 'description'
        document.head.appendChild(metaDesc)
      }
      metaDesc.content = description
    }
  }, [title, description])
}
