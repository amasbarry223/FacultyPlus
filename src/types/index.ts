// Module Types
export interface Module {
  title: string
  description: string
  icon: string
}

export interface ModulesData {
  admin: Module[]
  teachers: Module[]
  students: Module[]
}

// Benefit Types
export interface Benefit {
  title: string
  description: string
  icon: string
}

// Document Types
export interface Document {
  title: string
  icon: string
  desc: string
}

// Security Feature Types
export interface SecurityFeature {
  title: string
  desc: string
}

// Section Props Types
export interface SectionProps {
  className?: string
  id?: string
}

// Animation Variants Types
export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    transition?: {
      duration?: number
      delay?: number
      staggerChildren?: number
      delayChildren?: number
    }
  }
}

// Component Props Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline'
}

// Route Types
export interface RouteConfig {
  path: string
  element: React.ComponentType
  label?: string
}

