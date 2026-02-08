import { motion } from 'framer-motion'
import { Shield, CheckCircle2 } from 'lucide-react'
import { DOCUMENTS, SECURITY_FEATURES } from '@/lib/constants'
import OptimizedImage from '@/components/ui/OptimizedImage'

/**
 * Security Section - FacultyPlus Landing Page
 * Design: Futurisme Technologique Africain
 * - Présentation de la sécurité et des documents
 * - QR Code sécurisé
 * - Types de documents générés
 */

export default function Security() {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

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
            Documents & <span className="text-primary">Sécurité</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FacultyPlus garantit la sécurité et l'authenticité de tous les documents officiels grâce à
            des technologies de pointe et des protocoles de sécurité rigoureux.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* QR Code Visualization */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="relative w-full max-w-sm">
              <OptimizedImage
                src="/images/features/mobile-feature.webp"
                alt="QR Code sécurisé pour authentification des documents FacultyPlus"
                className="w-full rounded-lg border border-border/50"
                fallback="/images/features/placeholder.jpg"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold whitespace-nowrap">
                🔐 Authentification Sécurisée
              </div>
            </div>
          </motion.div>

          {/* Security Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="font-heading text-3xl font-bold mb-8 text-foreground">
              Protection des Documents
            </h3>

            <div className="space-y-6 mb-8">
              {SECURITY_FEATURES.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-accent/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className="text-2xl flex-shrink-0">
                    {idx === 0 && '🔐'}
                    {idx === 1 && '🔒'}
                    {idx === 2 && '📋'}
                    {idx === 3 && '✅'}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                Conforme aux normes internationales de sécurité
              </div>
            </div>
          </motion.div>
        </div>

        {/* Documents Grid */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="font-heading text-3xl font-bold mb-8 text-foreground text-center">
            Documents Officiels Générés
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCUMENTS.map((doc, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {doc.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{doc.title}</h4>
                <p className="text-sm text-muted-foreground">{doc.desc}</p>

                {/* Decorative line */}
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 mx-auto" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Info */}
        <motion.div
          className="p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Shield className="w-12 h-12 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-2">
                Sécurité & Traçabilité
              </h4>
              <p className="text-muted-foreground">
                Tous les documents générés par FacultyPlus incluent des mécanismes de sécurité avancés,
                incluant QR Code, chiffrement, et audit trail complet pour garantir l'authenticité et la
                traçabilité de chaque document officiel.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

