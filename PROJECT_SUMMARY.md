# Résumé du Projet Memet Group

## Vue d'ensemble
Ce projet est un site web professionnel d'une seule page (one-page) pour Memet Group, une entreprise spécialisée dans la rénovation, l'aménagement de magasins, la plomberie et les services généraux. Le site présente les services de l'entreprise, son histoire, ses avantages concurrentiels et permet aux visiteurs de contacter l'entreprise.

## Structure du Projet

### Technologies Principales
- **Frontend**: Next.js 15.3.0, React 19
- **Langage**: TypeScript
- **Styles**: Tailwind CSS
- **Linting**: ESLint
- **Build**: Turbopack

### Organisation des Dossiers
```
memetgroup/
├── .next/                # Fichiers de build Next.js
├── public/               # Fichiers statiques (images, icônes)
│   ├── images/           # Images du site
│   └── icons/            # Icônes utilisées
├── scripts/              # Scripts utilitaires
│   └── generate-placeholder-images.js  # Génère des images placeholder
├── src/                  # Code source
│   ├── app/              # Structure Next.js App Router
│   │   ├── globals.css   # Styles globaux
│   │   ├── layout.tsx    # Layout principal
│   │   └── page.tsx      # Page d'accueil
│   └── components/       # Composants React
│       ├── Header.tsx    # En-tête du site
│       ├── Hero.tsx      # Section principale (bannière)
│       ├── About.tsx     # Section À propos
│       ├── Services.tsx  # Section Services
│       ├── WhyChooseUs.tsx # Section Pourquoi nous choisir
│       ├── Testimonials.tsx # Témoignages clients
│       ├── Contact.tsx   # Formulaire et informations de contact
│       └── Footer.tsx    # Pied de page
├── .env.example          # Variables d'environnement d'exemple
├── next.config.ts        # Configuration Next.js
├── tailwind.config.js    # Configuration Tailwind CSS
├── tsconfig.json         # Configuration TypeScript
└── package.json          # Dépendances et scripts
```

## Sections du Site
1. **Header**: Navigation et logo de l'entreprise
2. **Hero**: Introduction principale avec appel à l'action
3. **About**: Histoire et mission de l'entreprise
4. **Services**: Présentation des différents services proposés
5. **WhyChooseUs**: Avantages concurrentiels et raisons de choisir Memet Group
6. **Testimonials**: Avis et témoignages de clients satisfaits
7. **Contact**: Formulaire de contact et coordonnées de l'entreprise
8. **Footer**: Informations légales, liens utiles, et copyright

## Fonctionnalités Principales
- Design responsive adapté à tous les appareils (mobile, tablette, desktop)
- Animations et transitions fluides pour une meilleure expérience utilisateur
- Formulaire de contact avec validation des données
- Optimisation SEO pour un meilleur référencement
- Performance optimisée avec chargement rapide des pages

## Processus de Développement
- **Développement**: `npm run dev` (avec Turbopack pour des performances améliorées)
- **Build**: `npm run build` pour la préparation à la mise en production
- **Démarrage**: `npm run start` pour lancer la version de production

## Déploiement
Le site est conçu pour être facilement déployable sur des plateformes comme Vercel, Netlify ou tout autre hébergement supportant Next.js.

## Personnalisation
Le site peut être personnalisé en modifiant:
- Les couleurs et styles dans `tailwind.config.js`
- Les textes dans les composants correspondants
- Les images dans le dossier `public/images`

## Contact et Propriété
© 2023-2024 Memet Group. Tous droits réservés.
Site web: memetgroup.pl
Email: contact@memetgroup.pl 