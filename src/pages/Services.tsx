import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import { MODULES } from '@/lib/constants'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, GraduationCap, UserCheck, Sparkles, Smartphone, Shield, GraduationCap as GraduationCapIcon, BarChart3, Headphones, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

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
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6"
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Fonctionnalités <span className="text-primary">Clés</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Des outils puissants pour une gestion universitaire moderne
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Interface Intuitive',
                description:
                  'Design moderne et ergonomique pour une prise en main rapide et intuitive',
                icon: Sparkles,
                gradient: 'from-purple-500/20 to-pink-500/20',
                iconColor: 'text-purple-500',
                delay: 0.1,
              },
              {
                title: 'Multi-Plateforme',
                description: 'Accessible sur Web, iOS et Android avec synchronisation en temps réel',
                icon: Smartphone,
                gradient: 'from-blue-500/20 to-cyan-500/20',
                iconColor: 'text-blue-500',
                delay: 0.2,
              },
              {
                title: 'Sécurité Renforcée',
                description: 'Protection des données avec QR Code et chiffrement de niveau entreprise',
                icon: Shield,
                gradient: 'from-green-500/20 to-emerald-500/20',
                iconColor: 'text-green-500',
                delay: 0.3,
              },
              {
                title: 'Conforme LMD',
                description: 'Respect total des standards académiques internationaux LMD',
                icon: GraduationCapIcon,
                gradient: 'from-orange-500/20 to-amber-500/20',
                iconColor: 'text-orange-500',
                delay: 0.4,
              },
              {
                title: 'Rapports Détaillés',
                description: 'Analyses et statistiques en temps réel avec visualisations avancées',
                icon: BarChart3,
                gradient: 'from-indigo-500/20 to-violet-500/20',
                iconColor: 'text-indigo-500',
                delay: 0.5,
              },
              {
                title: 'Support 24/7',
                description: 'Assistance technique disponible à tout moment pour tous vos besoins',
                icon: Headphones,
                gradient: 'from-red-500/20 to-rose-500/20',
                iconColor: 'text-red-500',
                delay: 0.6,
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="relative h-full border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    
                    {/* Content */}
                    <CardContent className="relative p-8">
                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                      >
                        <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>

                      {/* Decorative Element */}
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-primary" />
              <span>
                Toutes ces fonctionnalités incluses dans votre abonnement
              </span>
            </div>
          </motion.div>
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

