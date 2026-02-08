import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Modules from '@/components/sections/Modules'
import Mockups from '@/components/sections/Mockups'
import Architecture from '@/components/sections/Architecture'
import Security from '@/components/sections/Security'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

/**
 * FacultyPlus Landing Page
 * Design: Futurisme Technologique Africain
 * - Hero section avec carousel moderne
 * - A propos et avantages
 * - Modules par type d'utilisateur
 * - Mockups mobile et web
 * - Architecture 4-layer LMD
 * - Securite et documents
 * - Témoignages étudiants
 * - CTA et contact
 */

export default function Home() {
  return (
    <Layout>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="modules">
        <Modules />
      </section>
      <section id="mockups">
        <Mockups />
      </section>
      <section id="architecture">
        <Architecture />
      </section>
      <section id="security">
        <Security />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="cta">
        <CTA />
      </section>
    </Layout>
  )
}
