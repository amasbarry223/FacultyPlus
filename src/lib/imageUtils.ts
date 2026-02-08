/**
 * Image Utilities - FacultyPlus
 * Utilitaires pour la gestion et l'optimisation des images
 */

export interface ImageSrcSet {
  src: string
  srcSet?: string
  sizes?: string
  webp?: string
  fallback?: string
}

/**
 * Génère un srcset responsive pour une image
 */
export function generateSrcSet(
  basePath: string,
  widths: number[] = [400, 800, 1200, 1600, 1920]
): string {
  return widths.map((width) => `${basePath}?w=${width} ${width}w`).join(', ')
}

/**
 * Génère les tailles pour les images responsive
 */
export function generateSizes(breakpoints: Record<string, string>): string {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => `(min-width: ${breakpoint}) ${size}`)
    .join(', ')
}

/**
 * Chemin vers les assets images
 */
export const IMAGE_PATHS = {
  hero: {
    slide1: '/images/hero/slide-1-dashboard',
    slide2: '/images/hero/slide-2-mobile',
    slide3: '/images/hero/slide-3-students',
    slide4: '/images/hero/slide-4-web',
  },
  mockups: {
    mobileIOS: '/images/mockups/mobile-ios',
    mobileAndroid: '/images/mockups/mobile-android',
    webDesktop: '/images/mockups/web-desktop',
    webTablet: '/images/mockups/web-tablet',
  },
  students: {
    student1: '/images/students/student-1',
    student2: '/images/students/student-2',
    student3: '/images/students/student-3',
  },
  features: {
    dashboard: '/images/features/dashboard-feature',
    mobile: '/images/features/mobile-feature',
  },
} as const

