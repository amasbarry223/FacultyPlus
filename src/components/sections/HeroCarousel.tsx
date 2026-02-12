import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import OptimizedImage from '@/components/ui/OptimizedImage'
import {
  ArrowRight,
  Download,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Target,
  Play,
  TrendingUp,
  Users,
  Award,
  Zap,
  CheckCircle2,
} from 'lucide-react'

/**
 * HeroCarousel Component - FacultyPlus (Refonte Expert UX/UI)
 * 
 * Design Principles:
 * - Hiérarchie visuelle claire (F-pattern)
 * - Contraste et lisibilité optimisés
 * - Animations performantes et subtiles
 * - Accessibilité WCAG 2.1 AA
 * - Responsive mobile-first
 * - Performance optimisée (lazy loading, memoization)
 * - Micro-interactions engageantes
 */

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  stats?: Array<{ value: string; label: string; icon: React.ComponentType<{ className?: string }> }>
  features?: string[]
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Révolutionnez',
    subtitle: 'la Gestion Universitaire',
    description:
      "La plateforme intelligente qui transforme l'expérience académique. Gestion complète, intuitive et sécurisée pour les universités africaines.",
    image: '/images/hero/slide-1-dashboard.webp',
    imageAlt: 'Dashboard moderne de FacultyPlus',
    primaryCTA: {
      text: 'Démarrer maintenant',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Voir la démo',
      href: '#',
    },
    stats: [
      { value: '50K+', label: 'Étudiants actifs', icon: Users },
      { value: '200+', label: 'Universités', icon: Award },
      { value: '99.9%', label: 'Disponibilité', icon: Zap },
    ],
    features: [
      'Gestion complète LMD',
      'Interface intuitive',
      'Sécurité renforcée',
    ],
  },
  {
    id: 2,
    title: 'Mobile First',
    subtitle: 'Dans votre poche',
    description:
      "Accédez à toutes vos données académiques depuis n'importe où. Applications natives iOS et Android avec synchronisation en temps réel.",
    image: '/images/hero/slide-2-mobile.webp',
    imageAlt: 'Application mobile FacultyPlus',
    primaryCTA: {
      text: 'Télécharger l\'app',
      href: '#',
    },
    secondaryCTA: {
      text: 'Voir les fonctionnalités',
      href: '/services',
    },
    stats: [
      { value: '4.8/5', label: 'Note utilisateurs', icon: TrendingUp },
      { value: '1M+', label: 'Téléchargements', icon: Download },
      { value: '24/7', label: 'Support', icon: Zap },
    ],
    features: [
      'iOS et Android',
      'Synchronisation temps réel',
      'Mode hors ligne',
    ],
  },
  {
    id: 3,
    title: 'Pour les Étudiants',
    subtitle: 'Votre succès, notre priorité',
    description:
      "Une expérience étudiante exceptionnelle. Gestion simplifiée de votre parcours académique avec des outils puissants et accessibles.",
    image: '/images/hero/slide-3-students.webp',
    imageAlt: 'Étudiants utilisant FacultyPlus',
    primaryCTA: {
      text: 'Découvrir',
      href: '/services',
    },
    secondaryCTA: {
      text: 'Voir les tarifs',
      href: '/tarification',
    },
    stats: [
      { value: '95%', label: 'Satisfaction', icon: TrendingUp },
      { value: '10K+', label: 'Témoignages', icon: Users },
      { value: '0.5s', label: 'Temps de chargement', icon: Zap },
    ],
    features: [
      'Parcours simplifié',
      'Outils puissants',
      'Accès 24/7',
    ],
  },
  {
    id: 4,
    title: 'Interface Web',
    subtitle: 'Performance & Design',
    description:
      "Une interface web moderne et responsive. Optimisée pour toutes les tailles d'écran avec des performances exceptionnelles.",
    image: '/images/hero/slide-4-web.webp',
    imageAlt: 'Interface web FacultyPlus',
    primaryCTA: {
      text: 'Essayer gratuitement',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'En savoir plus',
      href: '/about',
    },
    stats: [
      { value: '100%', label: 'Responsive', icon: Award },
      { value: 'A+', label: 'Performance', icon: TrendingUp },
      { value: 'SSL', label: 'Sécurisé', icon: Zap },
    ],
    features: [
      'Design moderne',
      'Performance optimale',
      'Sécurité SSL',
    ],
  },
] as const

const AUTO_PLAY_INTERVAL = 8000 // Augmenté pour meilleure UX
const TRANSITION_DURATION = 0.5

// Variants d'animation réutilisables pour performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TRANSITION_DURATION,
      ease: [0.22, 1, 0.36, 1], // Easing personnalisé pour fluidité
    },
  },
}

export default function HeroCarousel() {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Scroll-based parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const currentSlideData = useMemo(() => slides[currentSlide], [currentSlide])

  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide) return
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Reprendre auto-play après 10s
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [currentSlide])

  const goToPrevious = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])

  // Auto-play avec pause au hover
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, AUTO_PLAY_INTERVAL)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered])

  // Keyboard navigation pour accessibilité
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') setIsAutoPlaying((prev) => !prev)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrevious, goToNext])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Section principale - FacultyPlus"
    >
      {/* Animated Background avec parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        {/* Gradient principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/8" />
        
        {/* Orbes animés avec performance optimisée */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-accent/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center min-h-[70vh] sm:min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-6"
              >
                {/* Badge avec animation */}
                <motion.div variants={itemVariants}>
                  <motion.span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent text-sm font-medium shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Nouvelle génération de PGI
                  </motion.span>
                </motion.div>

                {/* Title avec hiérarchie améliorée */}
                <motion.h1
                  variants={itemVariants}
                  className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
                >
                  <motion.span
                    className="block bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {currentSlideData.title}
                  </motion.span>
                  <motion.span
                    className="block text-foreground mt-2 sm:mt-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    {currentSlideData.subtitle}
                  </motion.span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* Features list si disponible */}
                {currentSlideData.features && (
                  <motion.ul
                    variants={itemVariants}
                    className="flex flex-wrap gap-2 sm:gap-3"
                  >
                    {currentSlideData.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}

                {/* CTA Buttons avec meilleure hiérarchie */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <Button
                    size="lg"
                    onClick={() => navigate(currentSlideData.primaryCTA.href)}
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground px-5 sm:px-6 md:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98]"
                    aria-label={currentSlideData.primaryCTA.text}
                  >
                    <Target className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    {currentSlideData.primaryCTA.text}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {currentSlideData.secondaryCTA && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => navigate(currentSlideData.secondaryCTA!.href)}
                      className="group border-2 border-border/50 hover:border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-card/50 text-foreground px-5 sm:px-6 md:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      aria-label={currentSlideData.secondaryCTA.text}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      {currentSlideData.secondaryCTA.text}
                    </Button>
                  )}
                </motion.div>

                {/* Stats avec animation staggered */}
                {currentSlideData.stats && (
                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4"
                  >
                    {currentSlideData.stats.map((stat, idx) => {
                      const Icon = stat.icon
                      return (
                        <motion.div
                          key={idx}
                          className="p-2 sm:p-3 md:p-4 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-default"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform" />
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column - Visual avec parallax */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
              style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
            >
              {/* Mockup Image avec effet de profondeur */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <OptimizedImage
                  src="/images/mockups/mockup1.png"
                  alt="Mockup de l'application mobile FacultyPlus - Tableau de bord étudiant et page de connexion"
                  className="w-full h-auto object-contain drop-shadow-2xl scale-[1.15]"
                  priority={true}
                  fallback="/images/mockups/placeholder.jpg"
                />
                
                {/* Glow effect subtil */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 blur-3xl -z-10" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation Controls améliorés */}
        <motion.div
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* Dots avec indicateur de progression */}
          <div className="flex gap-2 bg-card/60 backdrop-blur-md px-3 py-2 rounded-full border border-border/50">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                  index === currentSlide
                    ? 'w-8 h-2 bg-primary'
                    : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Aller au slide ${index + 1} sur ${slides.length}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
              />
            ))}
          </div>

          {/* Arrows avec meilleure accessibilité */}
          <div className="flex gap-2">
            <button
              onClick={goToPrevious}
              className="p-2 sm:p-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Slide précédent"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 sm:p-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Slide suivant"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator amélioré */}
        <motion.div
          className="absolute bottom-8 right-4 sm:right-8 hidden lg:flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent via-primary/50 to-transparent" />
        </motion.div>
      </div>

      {/* Grid Pattern Overlay subtil */}
      <div className="absolute inset-0 z-10 opacity-[0.015] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>
    </section>
  )
}
