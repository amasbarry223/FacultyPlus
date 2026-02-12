/**
 * Icon Mapping - FacultyPlus
 * Mapping des emojis vers les icônes Lucide React pour cohérence visuelle
 */

import {
  BarChart3,
  FileText,
  CreditCard,
  Shield,
  TrendingUp,
  GraduationCap,
  BookOpen,
  PenTool,
  Scale,
  MessageSquare,
  Calendar,
  BookMarked,
  Monitor,
  ClipboardList,
  Eye,
  Bell,
  Sparkles,
  Target,
  Phone,
  Mail,
  MessageCircle,
  Users,
  UserCheck,
  Smartphone,
} from 'lucide-react'

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  '📊': BarChart3,
  '📝': FileText,
  '💳': CreditCard,
  '🔐': Shield,
  '📈': TrendingUp,
  '🎓': GraduationCap,
  '📚': BookOpen,
  '✍️': PenTool,
  '⚖️': Scale,
  '📢': MessageSquare,
  '📅': Calendar,
  '📖': BookMarked,
  '🖥️': Monitor,
  '📋': ClipboardList,
  '👁️': Eye,
  '💬': MessageCircle,
  '📰': Bell,
  '✨': Sparkles,
  '🎯': Target,
  '📞': Phone,
  '✉️': Mail,
  '👨💼': Users,
  '👨🏫': UserCheck,
  '📱': Smartphone,
}

/**
 * Get icon component from emoji
 */
export function getIconFromEmoji(emoji: string): React.ComponentType<{ className?: string }> {
  return iconMap[emoji] || Sparkles
}

