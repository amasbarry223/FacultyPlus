# Guide des Images - FacultyPlus

Ce dossier contient toutes les images utilisées dans l'application FacultyPlus.

## Structure des Dossiers

### `/hero/` - Images Hero Section
Images pour le carousel de la section hero. Format recommandé : WebP, 1920x1080px minimum.

**Fichiers requis :**
- `slide-1-dashboard.webp` - Dashboard moderne de l'application
- `slide-2-mobile.webp` - Application mobile en action
- `slide-3-students.webp` - Étudiants utilisant la plateforme
- `slide-4-web.webp` - Interface web responsive

### `/mockups/` - Mockups Mobile et Web
Mockups des applications mobile et web. Format recommandé : WebP, haute résolution.

**Fichiers requis :**
- `mobile-ios.webp` - Mockup iPhone/iPad
- `mobile-android.webp` - Mockup Android
- `web-desktop.webp` - Mockup interface web desktop
- `web-tablet.webp` - Mockup interface web tablette

### `/students/` - Photos d'Étudiants
Photos d'étudiants pour les témoignages. Format recommandé : WebP, 400x400px (carré), portrait.

**Fichiers requis :**
- `student-1.webp` - Photo étudiant 1
- `student-2.webp` - Photo étudiant 2
- `student-3.webp` - Photo étudiant 3

### `/features/` - Screenshots de Fonctionnalités
Screenshots et visuels de fonctionnalités. Format recommandé : WebP, haute résolution.

**Fichiers requis :**
- `dashboard-feature.webp` - Screenshot dashboard
- `mobile-feature.webp` - Screenshot application mobile

### `/ui/` - Éléments UI
Logos, icônes custom, et autres éléments d'interface.

## Format des Images

- **Format principal** : WebP (meilleure compression)
- **Format fallback** : JPG/PNG (pour compatibilité)
- **Optimisation** : Utiliser des outils comme TinyPNG, Squoosh, ou ImageOptim
- **Responsive** : Le composant `OptimizedImage` gère automatiquement les différentes tailles

## Utilisation

Les images sont référencées avec des chemins relatifs depuis `/public/images/` ou utilisent le composant `OptimizedImage` pour un chargement optimisé.

Exemple :
```tsx
<OptimizedImage
  src="/images/hero/slide-1-dashboard.webp"
  alt="Description"
  fallback="/images/hero/placeholder.jpg"
/>
```

## Notes

- Toutes les images doivent avoir des textes alternatifs (alt) descriptifs
- Les images sont chargées en lazy loading par défaut (sauf si `priority={true}`)
- Le composant `OptimizedImage` gère automatiquement les fallbacks et le support WebP

