import { useCallback } from 'react'

/**
 * Hook personnalisé pour le scroll smooth vers un élément
 */
export function useScrollTo() {
  const scrollTo = useCallback((elementId: string, offset = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [])

  return { scrollTo }
}

