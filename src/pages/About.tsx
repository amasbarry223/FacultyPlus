import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import { BENEFITS } from '@/lib/constants'
import { GraduationCap, Globe, Shield, Zap, Users, TrendingUp } from 'lucide-react'

/**
 * Page À Propos - FacultyPlus
 * Présente l'entreprise, sa mission, ses valeurs et ses avantages
 */

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  '🎓': GraduationCap,
  '📱': Globe,
  '⚙️': Zap,
  '🔒': Shield,
  '🌍': Globe,
  '🚀': TrendingUp,
}

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              À Propos de <span className="text-primary">FacultyPlus</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nous révolutionnons la gestion universitaire en Afrique avec une solution
              intelligente, moderne et adaptée aux spécificités de l'enseignement supérieur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                FacultyPlus a été créé pour répondre aux défis uniques de la gestion
                universitaire en Afrique. Nous croyons que chaque institution mérite un système
                de gestion moderne, efficace et accessible.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Notre mission est de démocratiser l'accès aux outils de gestion académique de
                pointe, en offrant une solution complète, sécurisée et conforme aux standards
                internationaux LMD.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Pour les Universités</h3>
                      <p className="text-muted-foreground">
                        Une solution complète pour gérer efficacement toutes les opérations
                        académiques et administratives.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Pour les Étudiants</h3>
                      <p className="text-muted-foreground">
                        Un accès simplifié à toutes les informations académiques et
                        administratives.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Sécurité Avancée</h3>
                      <p className="text-muted-foreground">
                        Protection des données avec les standards de sécurité les plus élevés.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Les principes qui guident notre développement et notre relation avec nos clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => {
              const Icon = iconMap[benefit.icon] || GraduationCap
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer votre université ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Découvrez comment FacultyPlus peut améliorer la gestion de votre institution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Demander une Démo
              </Link>
              <Link
                to="/tarification"
                className="inline-block px-8 py-3 bg-card text-foreground rounded-lg font-semibold border border-border hover:border-primary transition-colors"
              >
                Voir les Tarifs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

