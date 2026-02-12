import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { Users, BookOpen, Settings, Shield, Layers, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

/**
 * Architecture Section - FacultyPlus Landing Page
 * Design: Futurisme Technologique Africain avec animations avancées
 * - Présentation de la 4-layer LMD architecture
 * - Image visuelle de l'architecture avec effet parallaxe
 * - Descriptions détaillées de chaque couche avec animations
 */

const layers = [
  {
    number: '01',
    title: 'Student Management',
    description: 'Gestion complète des étudiants : préinscription, inscriptions, suivi académique',
    gradient: 'from-purple-500/20 via-pink-500/20 to-primary/20',
    iconGradient: 'from-purple-500 to-pink-500',
    icon: Users,
    delay: 0.1,
  },
  {
    number: '02',
    title: 'Academic Processing',
    description: 'Traitement académique : notes, délibérations, résultats, documents officiels',
    gradient: 'from-blue-500/20 via-cyan-500/20 to-accent/20',
    iconGradient: 'from-blue-500 to-cyan-500',
    icon: BookOpen,
    delay: 0.2,
  },
  {
    number: '03',
    title: 'Administrative Operations',
    description: 'Opérations administratives : paiements, finances, ressources humaines',
    gradient: 'from-amber-500/20 via-orange-500/20 to-yellow-500/20',
    iconGradient: 'from-amber-500 to-orange-500',
    icon: Settings,
    delay: 0.3,
  },
  {
    number: '04',
    title: 'Data & Security',
    description: 'Sécurité et données : protection, traçabilité, conformité, sauvegarde',
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    iconGradient: 'from-emerald-500 to-teal-500',
    icon: Shield,
    delay: 0.4,
  },
]

export default function Architecture() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-card/50 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header with Icon */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 backdrop-blur-sm border border-primary/20"
          >
            <Layers className="w-8 h-8 text-primary" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Architecture{' '}
            </span>
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              4-Layer LMD
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            FacultyPlus repose sur une architecture robuste et modulaire, conçue pour gérer efficacement
            tous les aspects du cycle académique et administratif.
          </motion.p>
        </motion.div>

        {/* Architecture Visualization with Parallax */}
        <motion.div
          ref={imageRef}
          style={{ y, opacity }}
          className="mb-16 md:mb-20 rounded-2xl overflow-hidden max-w-xl mx-auto relative group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <OptimizedImage
              src="/images/mockups/mockup2.png"
              alt="Architecture 4-Layer LMD de FacultyPlus montrant les différentes couches du système"
              className="w-full h-auto rounded-2xl border border-border/50 shadow-2xl group-hover:shadow-primary/20 transition-all duration-500"
              fallback="/images/mockups/placeholder.jpg"
            />
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
          </motion.div>
        </motion.div>

        {/* Layers Description with Enhanced Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {layers.map((layer, index) => {
            const Icon = layer.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: layer.delay,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="relative h-full border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  {/* Animated Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'linear',
                    }}
                  />
                  
                  {/* Content */}
                  <CardContent className="relative p-6 md:p-8">
                    <div className="flex items-start gap-4 md:gap-6">
                      {/* Number Badge */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="relative flex-shrink-0"
                      >
                        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-foreground/20 to-foreground/5 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent group-hover:text-transparent transition-all duration-500">
                          {layer.number}
                        </div>
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${layer.iconGradient} opacity-0 group-hover:opacity-10 blur-xl rounded-full`}
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 10 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${layer.iconGradient} mb-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>

                        {/* Title */}
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {layer.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {layer.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div
                      className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-accent/5 to-transparent rounded-br-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Architecture modulaire et évolutive
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

