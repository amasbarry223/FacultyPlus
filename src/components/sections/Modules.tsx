import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { MODULES } from '@/lib/constants'
import { getIconFromEmoji } from '@/lib/iconMapping'
import { Users, UserCheck, GraduationCap } from 'lucide-react'
import type { Module } from '@/types'

/**
 * Modules Section - FacultyPlus Landing Page
 * Design: Futurisme Technologique Africain
 * - Présentation des modules par type d'utilisateur
 * - Tabs interactifs : Personnel Admin, Enseignants, Étudiants
 * - Cartes animées avec glassmorphism
 */

export default function Modules() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const renderModuleCards = (moduleList: Module[]) => (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {moduleList.map((module, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="h-full p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 group cursor-pointer">
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
              {(() => {
                const IconComponent = getIconFromEmoji(module.icon)
                return <IconComponent className="w-10 h-10 text-primary" />
              })()}
            </div>
            <h4 className="font-heading text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              {module.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>

            {/* Decorative accent */}
            <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <section className="relative py-20 md:py-32 bg-card/50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

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
            Modules <span className="text-primary">Clés</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FacultyPlus offre des modules spécialisés pour chaque type d'utilisateur, garantissant une
            expérience optimale et adaptée à vos besoins spécifiques.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Tabs defaultValue="admin" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 sm:mb-12 bg-card border border-border/50 p-1 text-xs sm:text-sm">
              <TabsTrigger
                value="admin"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Personnel Admin
              </TabsTrigger>
              <TabsTrigger
                value="teachers"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
              >
                <UserCheck className="w-4 h-4" />
                Enseignants
              </TabsTrigger>
              <TabsTrigger
                value="students"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                Étudiants
              </TabsTrigger>
            </TabsList>

            <TabsContent value="admin" className="mt-8">
              {renderModuleCards(MODULES.admin)}
            </TabsContent>

            <TabsContent value="teachers" className="mt-8">
              {renderModuleCards(MODULES.teachers)}
            </TabsContent>

            <TabsContent value="students" className="mt-8">
              {renderModuleCards(MODULES.students)}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

