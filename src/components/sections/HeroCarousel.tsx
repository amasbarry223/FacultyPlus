import { useState, useEffect, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
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
} from 'lucide-react'

/**
 * HeroCarousel Component - FacultyPlus (Refonte Moderne)
 * Design moderne avec layout asymétrique, glassmorphism et animations fluides
 * Optimisé avec useMemo et useCallback
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
}

const slides = [
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
  },
] satisfies Slide[]

const AUTO_PLAY_INTERVAL = 6000

export default function HeroCarousel() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  const currentSlideData = useMemo(() => slides[currentSlide], [currentSlide])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }, [currentSlide])

  const goToPrevious = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }, [])

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }, [])

  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), [])
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, AUTO_PLAY_INTERVAL)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Nouvelle génération de PGI
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="block bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                    {currentSlideData.title}
                  </span>
                  <span className="block text-foreground mt-2">
                    {currentSlideData.subtitle}
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    size="lg"
                    onClick={() => navigate(currentSlideData.primaryCTA.href)}
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
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
                      className="group border-2 border-border/50 hover:border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-card/50 text-foreground px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      {currentSlideData.secondaryCTA.text}
                    </Button>
                  )}
                </motion.div>

                {/* Stats */}
                {currentSlideData.stats && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-3 gap-4 pt-4"
                  >
                    {currentSlideData.stats.map((stat, idx) => {
                      const Icon = stat.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + idx * 0.1 }}
                          className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
                        >
                          <Icon className="w-5 h-5 text-primary mb-2" />
                          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Visual */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative rounded-3xl overflow-hidden bg-card/30 backdrop-blur-xl border border-border/50 shadow-2xl aspect-[4/3] flex items-center justify-center">
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
                
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                  }} />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl bg-primary text-primary-foreground shadow-xl backdrop-blur-sm border border-primary/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Solution #1</div>
                    <div className="text-xs opacity-90">En Afrique</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-3 bg-primary'
                    : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2 ml-4">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300"
              aria-label="Slide précédent"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300"
              aria-label="Slide suivant"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </section>
  )
}
