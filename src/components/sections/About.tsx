import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { BENEFITS } from '@/lib/constants'
import OptimizedImage from '@/components/ui/OptimizedImage'
import lmdImage from '@/assets/images/licence-master-doctorat-850x478.jpg'

/**
 * About Section - FacultyPlus Landing Page
 * Design: Futurisme Technologique Africain
 * - Présentation du produit et de sa valeur
 * - Mise en avant du système LMD
 * - Avantages clés avec icônes
 */

export default function About() {
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Decorative background elements */}
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
            À Propos de <span className="text-primary">FacultyPlus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FacultyPlus est un Progiciel de Gestion Intégré (PGI) complet qui optimise l'ensemble du cycle
            académique et administratif. Il centralise et automatise les processus clés, offrant une solution
            intégrée pour la gestion de la scolarité, de l'administration et de la vie académique.
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Decorative accent line */}
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* LMD System Highlight */}
        <motion.div
          className="relative p-8 md:p-12 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10" />

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 w-full">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
                Conforme au Système <span className="text-primary">LMD</span>
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                FacultyPlus est entièrement optimisé pour le système LMD (Licence, Master, Doctorat),
                garantissant une conformité totale avec les standards académiques internationaux. Gestion
                des UE/EC, délibérations, et documents officiels sécurisés.
              </p>
              <div className="space-y-3">
                {[
                  "Gestion des Unités d'Enseignement (UE)",
                  'Éléments Constitutifs (EC)',
                  'Délibérations automatisées',
                  'Documents sécurisés avec QR Code',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden border border-border/50 relative group">
              <OptimizedImage
                src={lmdImage}
                alt="Système LMD (Licence, Master, Doctorat) - Conforme aux standards académiques internationaux"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                fallback="/images/students/african-students-campus.jpg"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

