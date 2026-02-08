import { motion } from 'framer-motion'
import OptimizedImage from '@/components/ui/OptimizedImage'

/**
 * Architecture Section - FacultyPlus Landing Page
 * Design: Futurisme Technologique Africain
 * - Présentation de la 4-layer LMD architecture
 * - Image visuelle de l'architecture
 * - Descriptions détaillées de chaque couche
 */

const layers = [
  {
    number: '01',
    title: 'Student Management',
    description: 'Gestion complète des étudiants : préinscription, inscriptions, suivi académique',
    color: 'from-primary to-primary/50',
    icon: '👥',
  },
  {
    number: '02',
    title: 'Academic Processing',
    description: 'Traitement académique : notes, délibérations, résultats, documents officiels',
    color: 'from-accent to-accent/50',
    icon: '📚',
  },
  {
    number: '03',
    title: 'Administrative Operations',
    description: 'Opérations administratives : paiements, finances, ressources humaines',
    color: 'from-yellow-400 to-yellow-400/50',
    icon: '⚙️',
  },
  {
    number: '04',
    title: 'Data & Security',
    description: 'Sécurité et données : protection, traçabilité, conformité, sauvegarde',
    color: 'from-cyan-400 to-cyan-400/50',
    icon: '🔒',
  },
]

export default function Architecture() {
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
            Architecture <span className="text-primary">4-Layer LMD</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FacultyPlus repose sur une architecture robuste et modulaire, conçue pour gérer efficacement
            tous les aspects du cycle académique et administratif.
          </p>
        </motion.div>

        {/* Architecture Visualization */}
        <motion.div
          className="mb-16 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <OptimizedImage
            src="/images/features/dashboard-feature.webp"
            alt="Architecture 4-Layer LMD de FacultyPlus montrant les différentes couches du système"
            className="w-full h-auto rounded-lg border border-border/50"
            fallback="/images/features/placeholder.jpg"
          />
        </motion.div>

        {/* Layers Description */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group"
            >
              <div
                className={`p-6 rounded-lg bg-gradient-to-r ${layer.color} opacity-10 border border-border/50 hover:border-foreground/20 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                    {layer.number}
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl mb-2">{layer.icon}</div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                      {layer.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{layer.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Features */}
        <motion.div
          className="mt-16 p-8 rounded-xl bg-card border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
            Caractéristiques Techniques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Web Moderne', desc: 'Dernières technologies web pour performance optimale' },
              { title: 'API Sécurisée', desc: 'Interfaçage robuste et sécurisé' },
              { title: 'Mobile iOS/Android', desc: 'Applications natives pour expérience fluide' },
              { title: 'Hébergement Cloud', desc: 'Scalabilité et fiabilité garanties' },
              { title: 'Scalabilité', desc: 'Capacité à gérer une croissance importante' },
              { title: 'Intégrations', desc: 'Connexion avec systèmes externes' },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

