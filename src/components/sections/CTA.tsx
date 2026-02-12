import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, MessageCircle, Target } from 'lucide-react'

/**
 * CTA Section - FacultyPlus Landing Page
 * Design: Futurisme Technologique Africain
 * - Appels à l'action finaux
 * - Contact et démo
 */

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative py-20 md:py-32 bg-card/50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Main CTA */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Prêt à <span className="text-primary">Transformer</span> votre Université ?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Rejoignez les universités africaines qui font confiance à FacultyPlus pour optimiser leur
            gestion académique et administrative. Découvrez comment nous pouvons vous aider.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 flex items-center gap-2"
            >
              <Target className="w-5 h-5" />
              Demander une Démo Gratuite
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-accent/50 hover:bg-accent/10 text-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              📄 Télécharger la Plaquette
            </Button>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16"
          >
            <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-300">
              <Phone className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Appel Téléphonique</h3>
              <p className="text-sm text-muted-foreground mb-4">Parlez directement avec notre équipe</p>
              <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                +1 (234) 567-8900
              </Button>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-300">
              <Mail className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-4">Contactez-nous par email</p>
              <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                demo@facultyplus.io
              </Button>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-300">
              <MessageCircle className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Chat en Direct</h3>
              <p className="text-sm text-muted-foreground mb-4">Assistance instantanée</p>
              <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                Démarrer le Chat
              </Button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

