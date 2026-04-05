# 🌾 Installation du Site SENAGRO

## 📋 Prérequis

- Node.js (version 18 ou supérieure) - [Télécharger ici](https://nodejs.org/)
- Un éditeur de code (VS Code recommandé)

## 🚀 Installation sur votre ordinateur

### Étape 1 : Créer le dossier du projet

```bash
mkdir senagro-site
cd senagro-site
```

### Étape 2 : Copier les fichiers

Copiez tous les fichiers et dossiers fournis dans le dossier `senagro-site`

### Étape 3 : Installer les dépendances

```bash
npm install
```

OU si vous utilisez pnpm :

```bash
pnpm install
```

### Étape 4 : Lancer le site en développement

```bash
npm run dev
```

Le site sera accessible sur : **http://localhost:5173**

## 📁 Structure du projet

```
senagro-site/
├── src/
│   ├── app/
│   │   ├── components/        # Composants réutilisables
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   └── figma/
│   │   │       └── ImageWithFallback.tsx
│   │   ├── pages/             # Pages du site
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Products.tsx
│   │   │   └── Contact.tsx
│   │   ├── App.tsx            # Point d'entrée React
│   │   └── routes.tsx         # Configuration des routes
│   ├── styles/                # Fichiers CSS
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── fonts.css
│   └── main.tsx
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 Personnalisation

### Modifier les informations de contact

Éditez les fichiers suivants :
- `src/app/components/Footer.tsx` - Informations du footer
- `src/app/pages/Contact.tsx` - Page de contact

### Modifier les produits

Éditez `src/app/pages/Products.tsx` et modifiez le tableau `products`

### Changer les couleurs

Les couleurs vertes sont définies directement dans les composants.
Pour changer la palette, remplacez :
- `green-700` par votre couleur foncée
- `green-600` par votre couleur moyenne
- `green-500` par votre couleur claire

## 📦 Build pour la production

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`

## 🌐 Déploiement

Vous pouvez déployer gratuitement sur :
- **Vercel** : [vercel.com](https://vercel.com)
- **Netlify** : [netlify.com](https://netlify.com)
- **GitHub Pages**

## 🆘 Aide

Si vous rencontrez des problèmes :

1. Vérifiez que Node.js est bien installé : `node --version`
2. Supprimez `node_modules` et réinstallez : `rm -rf node_modules && npm install`
3. Videz le cache : `npm cache clean --force`

## 📞 Contact

Pour toute question sur le site SENAGRO :
- Email : contact@senagro.sn
- Téléphone : +221 77 123 45 67
