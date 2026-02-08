# FacultyPlus

Le PGI intelligent pour l'Enseignement Supérieur - Landing Page

## Description

FacultyPlus est une solution complète de gestion pédagogique et administrative conçue spécialement pour les universités africaines. Cette application offre une interface moderne et intuitive pour gérer efficacement la scolarité, l'administration et la vie académique, adaptée aux exigences du système LMD.

## Technologies

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations
- **React Router** - Routing
- **Vitest** - Tests unitaires
- **ESLint** - Linting
- **Prettier** - Formatage de code

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Lancer les tests
npm run test

# Linter le code
npm run lint
```

## Structure du Projet

```
src/
├── app/                    # Configuration de l'application
│   ├── App.tsx            # Composant racine avec Router
│   └── providers/         # Providers React
├── assets/                # Assets statiques
│   ├── images/
│   └── fonts/
├── components/            # Composants réutilisables
│   ├── layout/            # Layout components (Header, Footer)
│   ├── sections/          # Sections de la landing page
│   ├── ui/                # Composants UI de base
│   └── common/            # Composants communs
├── hooks/                 # Hooks React personnalisés
├── lib/                   # Utilitaires et helpers
│   ├── utils.ts
│   └── constants.ts
├── routes/                # Configuration des routes
│   └── index.tsx
├── types/                 # Types TypeScript globaux
│   └── index.ts
├── styles/                # Styles globaux
│   ├── index.css
│   └── globals.css
└── main.tsx              # Point d'entrée
```

## Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run test` - Lance les tests avec Vitest
- `npm run format` - Formate le code avec Prettier

## Guidelines de Développement

### Conventions de Nommage

- **Composants** : PascalCase (ex: `Header.tsx`, `HeroSection.tsx`)
- **Hooks** : camelCase avec préfixe `use` (ex: `useScrollTo.ts`)
- **Utilitaires** : camelCase (ex: `utils.ts`, `constants.ts`)
- **Types** : PascalCase (ex: `ModuleType`, `UserRole`)

### Structure des Composants

```typescript
// Import des dépendances
import { ... } from '...'

// Types et interfaces
interface ComponentProps {
  // ...
}

// Composant principal
export default function Component({ ... }: ComponentProps) {
  // ...
}
```

### Path Aliases

Le projet utilise des alias de chemins pour simplifier les imports :

- `@/components` → `src/components`
- `@/hooks` → `src/hooks`
- `@/lib` → `src/lib`
- `@/types` → `src/types`
- `@/styles` → `src/styles`
- `@/assets` → `src/assets`

## Features

- 🎨 Design moderne avec glassmorphism
- 📱 Responsive design
- ⚡ Animations fluides avec Framer Motion
- 🔒 Sécurité des documents avec QR Code
- 📊 Modules spécialisés par type d'utilisateur
- 🎓 Conforme au système LMD
- 🌍 Adapté aux universités africaines

## License

Propriétaire - Tous droits réservés
