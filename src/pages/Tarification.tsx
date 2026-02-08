import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Check, Star } from 'lucide-react'

/**
 * Page Tarification - FacultyPlus
 * Présente les différents plans et tarifs
 */

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Gratuit',
    period: 'Essai gratuit',
    description: 'Parfait pour tester la plateforme',
    features: [
      'Jusqu\'à 100 étudiants',
      'Modules de base',
      'Support par email',
      '1 administrateur',
      'Stockage limité',
    ],
    popular: false,
    cta: 'Commencer',
  },
  {
    name: 'Professional',
    price: '150 000',
    period: 'FCFA/mois',
    description: 'Idéal pour les petites universités',
    features: [
      'Jusqu\'à 500 étudiants',
      'Tous les modules',
      'Support prioritaire',
      '5 administrateurs',
      'Stockage illimité',
      'Formation incluse',
      'Rapports avancés',
    ],
    popular: true,
    cta: 'Choisir ce plan',
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    period: 'Devis personnalisé',
    description: 'Pour les grandes institutions',
    features: [
      'Étudiants illimités',
      'Tous les modules + personnalisation',
      'Support dédié 24/7',
      'Administrateurs illimités',
      'Stockage illimité',
      'Formation complète',
      'API personnalisée',
      'Intégrations sur mesure',
      'Gestionnaire de compte dédié',
    ],
    popular: false,
    cta: 'Nous contacter',
  },
]

export default function Tarification() {
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
              Tarification <span className="text-primary">Transparente</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choisissez le plan qui correspond le mieux aux besoins de votre institution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative bg-card rounded-2xl border-2 p-8 ${
                  plan.popular
                    ? 'border-primary shadow-lg shadow-primary/20 scale-105'
                    : 'border-border/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.name === 'Enterprise' ? (
                  <Link to="/contact">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                          : 'bg-background hover:bg-card border border-border'
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                ) : (
                  <Link to="/contact">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                          : 'bg-background hover:bg-card border border-border'
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions Fréquentes
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Puis-je changer de plan à tout moment ?',
                answer:
                  'Oui, vous pouvez mettre à niveau ou rétrograder votre plan à tout moment. Les changements prennent effet immédiatement.',
              },
              {
                question: 'Y a-t-il des frais cachés ?',
                answer:
                  'Non, nos tarifs sont transparents. Le prix affiché est le prix que vous payez, sans frais cachés.',
              },
              {
                question: 'Quels modes de paiement acceptez-vous ?',
                answer:
                  'Nous acceptons les virements bancaires, les cartes de crédit/débit, et les paiements mobiles (Orange Money, Free Money, etc.).',
              },
              {
                question: 'Offrez-vous une période d\'essai ?',
                answer:
                  'Oui, le plan Starter est gratuit et vous permet de tester toutes les fonctionnalités de base pendant 30 jours.',
              },
              {
                question: 'Qu\'en est-il du support technique ?',
                answer:
                  'Tous nos plans incluent le support par email. Les plans Professional et Enterprise bénéficient d\'un support prioritaire et dédié.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-background p-6 rounded-xl border border-border/50"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
              Besoin d'un devis personnalisé ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contactez-nous pour discuter de vos besoins spécifiques
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Nous Contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

