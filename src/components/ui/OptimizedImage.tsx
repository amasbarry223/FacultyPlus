import { useState, useEffect, useRef, useCallback, memo, ImgHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { ImageOff } from 'lucide-react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string
  webp?: string
  fallback?: string
  alt: string
  className?: string
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

/**
 * OptimizedImage Component
 * Composant image optimisé avec lazy loading, fallback, et support WebP
 * Mémorisé pour éviter les re-renders inutiles
 */
const OptimizedImage = memo(function OptimizedImage({
  src,
  webp,
  fallback,
  alt,
  className,
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setHasError(true)
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    // Si priorité, charger immédiatement
    if (priority) {
      setIsInView(true)
      return
    }

    // Lazy loading avec Intersection Observer
    if (!imgRef.current) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observerRef.current?.disconnect()
          }
        })
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    )

    observerRef.current.observe(imgRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [priority])

  // Image source avec fallback
  const imageSrc = hasError && fallback ? fallback : src

  return (
    <div className={cn('relative overflow-hidden', className)} ref={imgRef}>
      {/* Placeholder blur */}
      {placeholder === 'blur' && blurDataURL && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-xl scale-110"
          style={{ backgroundImage: `url(${blurDataURL})` }}
          aria-hidden="true"
        />
      )}

      {/* Image container */}
      {isInView && (
        <picture>
          {/* WebP source si disponible */}
          {webp && !hasError && (
            <source srcSet={webp} type="image/webp" />
          )}
          
          {/* Image principale */}
          <motion.img
            src={imageSrc}
            alt={alt}
            className={cn(
              'w-full h-full object-cover transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0',
              className
            )}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            {...props}
          />
        </picture>
      )}

      {/* Error state */}
      {hasError && !fallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-card border border-border/50">
          <div className="text-center p-4">
            <ImageOff className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Image non disponible</p>
          </div>
        </div>
      )}

      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-card animate-pulse" aria-hidden="true" />
      )}
    </div>
  )
})

export default OptimizedImage
