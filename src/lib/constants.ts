import type { ModulesData, Benefit, Document, SecurityFeature } from '@/types'

// Modules Data
export const MODULES: ModulesData = {
  admin: [
    {
      title: 'Dashboard Personnalisé',
      description: "Vue d'ensemble complète des opérations universitaires",
      icon: '📊',
    },
    {
      title: 'Inscriptions Académiques',
      description: 'Gestion simplifiée des inscriptions pédagogiques et académiques',
      icon: '📝',
    },
    {
      title: 'Paiements & Reçus',
      description: 'Suivi sécurisé des paiements et édition des reçus',
      icon: '💳',
    },
    {
      title: 'Documents Sécurisés',
      description: 'Accès et gestion des documents avec QR Code',
      icon: '🔐',
    },
    {
      title: 'Statistiques',
      description: 'Rapports détaillés et analyses de la vie scolaire',
      icon: '📈',
    },
    {
      title: 'Gestion de la Vie Scolaire',
      description: 'Suivi complet des activités et événements académiques',
      icon: '🎓',
    },
  ],
  teachers: [
    {
      title: 'Gestion des Formations',
      description: 'Organisation intuitive des cours et des formations',
      icon: '📚',
    },
    {
      title: 'Saisie des Notes',
      description: 'Saisie rapide et calcul automatique des notes',
      icon: '✍️',
    },
    {
      title: 'Délibérations',
      description: 'Processus de délibération simplifié et automatisé',
      icon: '⚖️',
    },
    {
      title: 'Gestion des Réclamations',
      description: 'Suivi transparent des réclamations étudiantes',
      icon: '📢',
    },
    {
      title: 'Emplois du Temps',
      description: 'Planification flexible des cours et des sessions',
      icon: '📅',
    },
    {
      title: 'Supports Pédagogiques',
      description: "Partage et gestion des ressources d'enseignement",
      icon: '📖',
    },
  ],
  students: [
    {
      title: 'Préinscription en Ligne',
      description: 'Processus simple et rapide de préinscription',
      icon: '🖥️',
    },
    {
      title: "Suivi d'Inscription",
      description: "Suivi en temps réel de votre dossier d'inscription",
      icon: '📋',
    },
    {
      title: 'Consultation des Notes',
      description: 'Accès instantané à vos notes et résultats',
      icon: '📊',
    },
    {
      title: 'Soumission de Réclamations',
      description: 'Processus transparent pour contester vos notes',
      icon: '💬',
    },
    {
      title: 'Accès aux Cours',
      description: 'Bibliothèque centralisée des cours et documents',
      icon: '📚',
    },
    {
      title: 'Actualités & Événements',
      description: 'Restez informé des événements universitaires',
      icon: '📰',
    },
  ],
}

// Benefits Data
export const BENEFITS: Benefit[] = [
  {
    title: '100% Conforme LMD',
    description: "Garantie d'alignement avec les standards académiques internationaux",
    icon: '🎓',
  },
  {
    title: 'Web & Mobile',
    description: 'Accessibilité universelle sur toutes les plateformes (iOS, Android, Web)',
    icon: '📱',
  },
  {
    title: 'Automatisation Intelligente',
    description: 'Optimisation des tâches administratives et académiques',
    icon: '⚙️',
  },
  {
    title: 'Sécurité des Données',
    description: 'Protection robuste des informations sensibles avec QR Code',
    icon: '🔒',
  },
  {
    title: 'Adapté aux Universités Africaines',
    description: 'Solution conçue pour répondre aux spécificités régionales',
    icon: '🌍',
  },
  {
    title: 'Évolutif et Modulaire',
    description: "Flexibilité pour s'adapter aux besoins futurs et aux différentes institutions",
    icon: '🚀',
  },
]

// Documents Data
export const DOCUMENTS: Document[] = [
  {
    title: 'Attestations',
    icon: '📄',
    desc: 'Certificats de scolarité et attestations officielles',
  },
  {
    title: 'Cartes Étudiant',
    icon: '🎫',
    desc: "Cartes d'identité numériques sécurisées",
  },
  {
    title: 'Relevés',
    icon: '📊',
    desc: 'Relevés de notes et transcripts académiques',
  },
  {
    title: 'Diplômes',
    icon: '🎓',
    desc: "Diplômes et certificats de fin d'études",
  },
]

// Security Features Data
export const SECURITY_FEATURES: SecurityFeature[] = [
  {
    title: 'QR Code Sécurisé',
    desc: 'Authentification et traçabilité des documents',
  },
  {
    title: 'Chiffrement',
    desc: 'Données protégées avec les standards de sécurité les plus élevés',
  },
  {
    title: 'Audit Trail',
    desc: 'Enregistrement complet de toutes les actions',
  },
  {
    title: 'Conformité',
    desc: 'Respect des normes de protection des données',
  },
]

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// Animation Durations
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
} as const

// Section IDs
export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  modules: 'modules',
  architecture: 'architecture',
  security: 'security',
  cta: 'cta',
} as const

