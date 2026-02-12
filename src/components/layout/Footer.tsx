import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

/**
 * Footer Section - FacultyPlus Multi-Page Site
 * Design: Futurisme Technologique Africain
 */

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: 'Modules', href: '/services' },
      { label: 'Architecture', href: '/#architecture' },
      { label: 'Sécurité', href: '/#security' },
      { label: 'Tarification', href: '/tarification' },
    ],
    Company: [
      { label: 'À Propos', href: '/about' },
      { label: 'Blog', href: '#' },
      { label: 'Carrières', href: '#' },
      { label: 'Contact', href: '/contact' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Support', href: '/contact' },
      { label: 'FAQ', href: '/tarification#faq' },
    ],
    Legal: [
      { label: 'Mentions Légales', href: '#' },
      { label: 'Politique de Confidentialité', href: '#' },
      { label: "Conditions d'Utilisation", href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Instagram, label: 'Instagram' },
  ]

  return (
    <footer className="relative bg-card border-t border-border/50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 sm:col-span-3 lg:col-span-1"
          >
            <Link to="/" className="block mb-4">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Faculty<span className="text-primary">Plus</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Le PGI intelligent pour l'Enseignement Supérieur
              </p>
            </Link>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={idx}
                    href="#"
                    className="p-2 rounded-lg bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    ) : link.href === '#' ? (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} FacultyPlus. Tous droits réservés. Conçu pour les universités africaines.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Mentions Légales
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Politique de Confidentialité
            </a>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 opacity-0 pointer-events-none z-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7-7m0 0l-7 7m7-7v12"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}

