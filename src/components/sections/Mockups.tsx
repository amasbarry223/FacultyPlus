import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Smartphone, Monitor, Download, ArrowRight, BellRing, Zap } from 'lucide-react'
import OptimizedImage from '@/components/ui/OptimizedImage'

/**
 * Mockups Section - FacultyPlus
 * Présente les mockups de l'application mobile et web
 * - Mockups iOS et Android
 * - Mockups web desktop et tablette
 * - Animations au scroll
 * - Call-to-action vers téléchargement
 */

const mockups = [
  {
    id: 'mobile',
    title: 'Application Mobile',
    description: 'Applications natives iOS et Android avec synchronisation en temps réel',
    image: '/images/mockups/mobile-ios.webp',
    imageAlt: 'Mockup de l\'application mobile FacultyPlus',
    icon: Smartphone,
    platform: 'Mobile',
  },
  {
    id: 'web',
    title: 'Interface Web',
    description: 'Dashboard complet accessible depuis votre navigateur, optimisé pour tous les écrans',
    image: '/images/mockups/web-desktop.webp',
    imageAlt: 'Mockup de l\'interface web FacultyPlus',
    icon: Monitor,
    platform: 'Web',
  },
]

export default function Mockups() {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Disponible sur <span className="text-primary">Web et Mobile</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Accédez à FacultyPlus depuis n'importe quel appareil. Application mobile native et interface web responsive pour une expérience optimale.
          </p>
        </motion.div>

        {/* Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {mockups.map((mockup, index) => {
            const Icon = mockup.icon
            return (
              <motion.div
                key={mockup.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-primary/10">
                  {/* Mockup Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <OptimizedImage
                      src={mockup.image}
                      alt={mockup.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fallback="/images/mockups/placeholder.jpg"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Platform Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      {mockup.platform}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {mockup.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mockup.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Features Highlight */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {useMemo(() => [
            { icon: Smartphone, title: 'Synchronisation Cloud', desc: 'Vos données synchronisées en temps réel' },
            { icon: BellRing, title: 'Notifications Push', desc: 'Restez informé des mises à jour importantes' },
            { icon: Zap, title: 'Performance Optimale', desc: 'Chargement rapide et expérience fluide' },
          ], []).map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 text-center"
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Télécharger l'Application
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 hover:bg-accent/10 text-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                Découvrir les Fonctionnalités
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

