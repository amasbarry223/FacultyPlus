import { motion } from 'framer-motion'
import { useState } from 'react'
import { Star, Quote } from 'lucide-react'

/**
 * Testimonials Section - FacultyPlus
 * Témoignages avec carrousel horizontal continu (marquee)
 * Design adapté au design system FacultyPlus - Futurisme Technologique Africain
 * - Carrousel infini avec animation marquee
 * - Cartes glassmorphism cohérentes avec le design system
 * - Utilisation des variables CSS du thème
 */

interface Testimonial {
  id: number
  name: string
  role: string
  location: string
  image: string
  imageAlt: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Amadou Diallo',
    role: 'Étudiant',
    location: 'Dakar',
    image: '/images/students/student-1.webp',
    imageAlt: 'Photo de Amadou Diallo',
    text: "La plateforme web FacultyPlus a révolutionné la gestion de mon parcours universitaire. Interface intuitive et sécurisée !",
  },
  {
    id: 2,
    name: 'Aissata Ouidad',
    role: 'Étudiante',
    location: 'Bamako',
    image: '/images/students/student-2.webp',
    imageAlt: 'Photo de Aissata Ouidad',
    text: "L'application mobile FacultyPlus est mon partenaire quotidien ! Simple et rapide !",
  },
  {
    id: 3,
    name: 'Ibrahim Keita',
    role: 'Étudiant',
    location: 'Abidjan',
    image: '/images/students/student-3.webp',
    imageAlt: 'Photo de Ibrahim Keita',
    text: "FacultyPlus m'aide énormément dans mes études. Accès partout et consultation instantanée.",
  },
  {
    id: 4,
    name: 'Aisha Ahmed',
    role: 'Étudiante',
    location: 'Lagos',
    image: '/images/students/student-1.webp',
    imageAlt: 'Photo de Aisha Ahmed',
    text: "FacultyPlus a simplifié mes démarches administratives. Gérer mon inscription n'a jamais été aussi facile.",
  },
] as const

// Composant Avatar avec fallback - Design system compliant
function TestimonialAvatar({ name, image, imageAlt }: { name: string; image: string; imageAlt: string }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  // Couleurs du design system pour les avatars
  const gradients = [
    'from-primary/40 to-accent/40',
    'from-accent/40 to-primary/40',
    'from-primary/50 via-primary/30 to-accent/50',
    'from-accent/50 via-accent/30 to-primary/50',
  ]
  const gradientIndex = name.length % gradients.length

  if (imageError || !image) {
    return (
      <div className="rounded-full size-24 md:size-36 border border-border/50 shadow-lg overflow-hidden bg-card/50 backdrop-blur-sm flex items-center justify-center">
        <div
          className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradients[gradientIndex]} text-foreground text-xl md:text-3xl font-bold`}
        >
          {initials}
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-full size-24 md:size-36 border border-border/50 shadow-lg overflow-hidden bg-card/50 backdrop-blur-sm relative">
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-card animate-pulse">
          <div
            className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradients[gradientIndex]} text-foreground text-xl md:text-3xl font-bold`}
          >
            {initials}
          </div>
        </div>
      )}
      <img
        src={image}
        alt={imageAlt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageError(true)
          setImageLoaded(false)
        }}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default function Testimonials() {
  // Dupliquer les témoignages pour créer un effet de boucle infinie
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Decorative background elements - Design system pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header - Design system typography */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ce que disent nos <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez les témoignages de nos utilisateurs satisfaits qui font confiance à FacultyPlus pour
            gérer leur parcours académique.
          </p>
        </motion.div>

        {/* Marquee Carousel - Design system compliant */}
        <div className="mt-8">
          <div className="relative overflow-hidden mask-edges">
            <ul
              className="flex gap-6 w-[max-content] animate-marquee"
              aria-label="Témoignages FacultyPlus, défilement horizontal continu"
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <li key={`${testimonial.id}-${index}`}>
                  <motion.div
                    className="w-[360px] md:w-[580px] h-[280px] md:h-[300px] flex-shrink-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="group relative h-full rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                      <div className="p-6 md:p-8 h-full flex flex-col">
                        <div className="flex h-full gap-6">
                          {/* Content Left */}
                          <div className="flex-1 flex flex-col pr-4">
                            {/* Quote Icon */}
                            <Quote className="w-6 h-6 text-primary/40 mb-3 flex-shrink-0" />
                            
                            {/* Testimonial Text */}
                            <p className="text-foreground leading-relaxed line-clamp-4 md:line-clamp-none mb-4 flex-1">
                              {testimonial.text}
                            </p>
                            
                            {/* Stars Rating - Design system colors */}
                            <div className="flex items-center gap-2 mt-auto">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-primary text-primary"
                                />
                              ))}
                            </div>
                          </div>

                          {/* Avatar Right */}
                          <div className="w-28 md:w-40 flex flex-col items-center justify-center flex-shrink-0">
                            <TestimonialAvatar
                              name={testimonial.name}
                              image={testimonial.image}
                              imageAlt={testimonial.imageAlt}
                            />
                            <div className="mt-4 text-center">
                              <div className="font-heading text-sm md:text-base font-semibold text-foreground leading-tight mb-1">
                                {testimonial.name}
                              </div>
                              <div className="text-muted-foreground text-xs md:text-sm">
                                {testimonial.role}, {testimonial.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative accent on hover */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-b-2xl" />
                    </div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
