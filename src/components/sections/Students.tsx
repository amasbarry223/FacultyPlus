import { motion } from 'framer-motion'
import { GraduationCap, Users, BookOpen, Laptop } from 'lucide-react'
import OptimizedImage from '@/components/ui/OptimizedImage'
import bgImage from '@/assets/images/BG.jpg'
import bg1Image from '@/assets/images/bg1.jpg'
import womanLaptopImage from '@/assets/images/full-shot-woman-holding-laptop.jpg'
import studyGroupImage from '@/assets/images/study-group-african-people.jpg'

/**
 * Students Section - FacultyPlus
 * Section dédiée aux étudiants avec images authentiques
 * Design moderne avec galerie d'images et statistiques
 * UX/UI optimisé pour engagement et authenticité
 */

const studentImages = [
  {
    id: 1,
    src: bgImage,
    alt: 'Jeunes étudiants africains étudiant dans un parc',
    title: 'Étude en plein air',
    description: 'Accédez à FacultyPlus où que vous soyez',
  },
  {
    id: 2,
    src: bg1Image,
    alt: 'Étudiants multiethniques étudiant ensemble avec ordinateur portable sur le campus',
    title: 'Collaboration étudiante',
    description: 'Travaillez ensemble, réussissez ensemble',
  },
  {
    id: 3,
    src: studyGroupImage,
    alt: 'Groupe de cinq étudiants africains sur le campus universitaire',
    title: 'Communauté étudiante',
    description: 'Rejoignez une communauté dynamique',
  },
  {
    id: 4,
    src: womanLaptopImage,
    alt: 'Portrait d\'une jeune femme avec ordinateur portable à l\'extérieur',
    title: 'Apprentissage flexible',
    description: 'Étudiez à votre rythme, où vous voulez',
  },
]

const stats = [
  { icon: Users, value: '50K+', label: 'Étudiants actifs' },
  { icon: GraduationCap, value: '95%', label: 'Taux de réussite' },
  { icon: BookOpen, value: '200+', label: 'Universités partenaires' },
  { icon: Laptop, value: '24/7', label: 'Accès disponible' },
]

export default function Students() {
  return (
    <section className="relative py-20 md:py-32 bg-card/50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Une Communauté d'<span className="text-primary">Étudiants</span> Actifs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rejoignez des milliers d'étudiants qui utilisent FacultyPlus pour optimiser leur parcours académique
            et réussir leurs études.
          </p>
        </motion.div>

        {/* Images Gallery - Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {studentImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  fallback="/images/students/placeholder.jpg"
                />
                
                {/* Dark Overlay with minimal opacity for text visibility */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-opacity duration-300" />
                
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Content - Always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl font-semibold text-white mb-2 drop-shadow-lg">
                    {image.title}
                  </h3>
                  <p className="text-sm text-white/90 drop-shadow-md">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

