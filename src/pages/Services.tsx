import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import { MODULES } from '@/lib/constants'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, GraduationCap, UserCheck } from 'lucide-react'

/**
 * Page Services - FacultyPlus
 * Présente tous les modules et fonctionnalités par type d'utilisateur
 */

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Nos <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une suite complète de modules conçus pour répondre aux besoins de chaque acteur
              de l'écosystème universitaire
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <Tabs defaultValue="admin" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-card">
              <TabsTrigger value="admin" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Administrateurs
              </TabsTrigger>
              <TabsTrigger value="teachers" className="flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                Enseignants
              </TabsTrigger>
              <TabsTrigger value="students" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Étudiants
              </TabsTrigger>
            </TabsList>

            <TabsContent value="admin" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Modules Administrateurs</h2>
                  <p className="text-muted-foreground text-lg">
                    Outils complets pour la gestion administrative et académique de votre
                    institution
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {MODULES.admin.map((module, idx) => (
                    <motion.div
                      key={module.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="text-4xl mb-4">{module.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                      <p className="text-muted-foreground">{module.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="teachers" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Modules Enseignants</h2>
                  <p className="text-muted-foreground text-lg">
                    Outils pédagogiques et de gestion de cours pour faciliter votre enseignement
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {MODULES.teachers.map((module, idx) => (
                    <motion.div
                      key={module.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="text-4xl mb-4">{module.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                      <p className="text-muted-foreground">{module.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="students" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Modules Étudiants</h2>
                  <p className="text-muted-foreground text-lg">
                    Services en ligne pour gérer facilement votre parcours académique
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {MODULES.students.map((module, idx) => (
                    <motion.div
                      key={module.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="text-4xl mb-4">{module.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                      <p className="text-muted-foreground">{module.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fonctionnalités Clés
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des outils puissants pour une gestion universitaire moderne
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Interface Intuitive',
                description:
                  'Design moderne et ergonomique pour une prise en main rapide',
                icon: '✨',
              },
              {
                title: 'Multi-Plateforme',
                description: 'Accessible sur Web, iOS et Android',
                icon: '📱',
              },
              {
                title: 'Sécurité Renforcée',
                description: 'Protection des données avec QR Code et chiffrement',
                icon: '🔐',
              },
              {
                title: 'Conforme LMD',
                description: 'Respect total des standards académiques internationaux',
                icon: '🎓',
              },
              {
                title: 'Rapports Détaillés',
                description: 'Analyses et statistiques en temps réel',
                icon: '📊',
              },
              {
                title: 'Support 24/7',
                description: 'Assistance technique disponible à tout moment',
                icon: '💬',
              },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
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
              Prêt à découvrir nos services ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contactez-nous pour une démonstration personnalisée
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Demander une Démo
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

