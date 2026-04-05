# 🌾 SENAGRO - Site Vitrine Agrobusiness

Site web professionnel pour SENAGRO, ferme intégrée au Sénégal spécialisée dans l'aviculture, l'élevage et l'agriculture.

![SENAGRO](https://images.unsplash.com/photo-1743518576468-bed065594281?w=800)

## ✨ Fonctionnalités

- 🏠 **Page d'accueil** avec présentation des activités
- 📖 **À propos** : Histoire, mission, vision et cycle intégré
- 🛒 **Catalogue de produits** avec filtres par catégorie
- 📞 **Formulaire de contact** avec intégration WhatsApp et Google Maps
- 📱 **Design responsive** (mobile, tablette, desktop)
- 🎨 **Interface moderne** avec animations fluides

## 🛠️ Technologies utilisées

- **React 18** - Framework JavaScript
- **TypeScript** - Typage statique
- **React Router 7** - Navigation
- **Tailwind CSS 4** - Styling
- **Vite 6** - Build tool
- **Lucide React** - Icônes

## 🚀 Installation rapide

### 1. Cloner ou télécharger le projet

```bash
# Si vous avez Git
git clone [url-du-projet]
cd senagro-site

# OU créez un dossier et copiez tous les fichiers dedans
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer en mode développement

```bash
npm run dev
```

Le site sera accessible sur **http://localhost:5173**

### 4. Build pour la production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

## 📁 Structure des fichiers principaux

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation principale
│   │   ├── Footer.tsx          # Pied de page
│   │   ├── Layout.tsx          # Mise en page globale
│   │   └── ProductCard.tsx     # Carte produit
│   ├── pages/
│   │   ├── Home.tsx            # Page d'accueil
│   │   ├── About.tsx           # À propos
│   │   ├── Products.tsx        # Nos produits
│   │   └── Contact.tsx         # Contact
│   ├── App.tsx                 # Composant racine
│   └── routes.tsx              # Configuration routing
└── styles/
    ├── index.css               # CSS principal
    ├── tailwind.css            # Tailwind
    └── theme.css               # Thème personnalisé
```

## 🎨 Personnalisation

### Modifier les produits

Éditez `src/app/pages/Products.tsx` :

```tsx
const products = [
  {
    id: 1,
    name: "Nom du produit",
    category: "aviculture", // ou "elevage" ou "agriculture"
    description: "Description",
    price: "2,500 FCFA",
    unit: "le kg",
    image: "url-de-l-image",
  },
  // Ajoutez vos produits ici
];
```

### Modifier les informations de contact

**Footer** (`src/app/components/Footer.tsx`) :
```tsx
// Ligne ~27-35
<span className="text-gray-300 text-sm">
  Thiès, Sénégal  {/* Changez l'adresse */}
</span>
```

**Page Contact** (`src/app/pages/Contact.tsx`) :
```tsx
// Ligne ~24-36
const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Adresse",
    content: "Votre adresse ici", // Modifiez ici
  },
  // ...
];
```

### Modifier le lien WhatsApp

Remplacez `+221771234567` par votre numéro dans :
- `src/app/pages/Products.tsx` (ligne ~153)
- `src/app/pages/Contact.tsx` (ligne ~202)

### Modifier la carte Google Maps

Dans `src/app/pages/Contact.tsx` (ligne ~182), remplacez l'URL de l'iframe par vos coordonnées.

## 🌐 Déploiement

### Option 1 : Vercel (Recommandé)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Connectez votre projet GitHub
3. Déployez en un clic !

### Option 2 : Netlify

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `dist/` après `npm run build`

### Option 3 : GitHub Pages

```bash
npm run build
# Uploadez le contenu de dist/ sur votre repo GitHub Pages
```

## 📦 Dépendances principales

```json
{
  "react": "18.3.1",
  "react-router": "7.13.0",
  "lucide-react": "0.487.0",
  "tailwindcss": "4.1.12",
  "vite": "6.3.5"
}
```

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile pour la production
- `npm run preview` - Prévisualise le build de production

## 📝 À faire (optionnel)

- [ ] Connecter Supabase pour l'espace admin
- [ ] Ajouter plus de produits
- [ ] Intégrer un vrai système de paiement
- [ ] Ajouter une galerie photo
- [ ] Mettre en place l'envoi d'emails pour le formulaire

## 📞 Contact SENAGRO

- 📧 Email : contact@senagro.sn
- 📱 Téléphone : +221 77 123 45 67
- 📍 Adresse : Thiès, Sénégal
- 💬 WhatsApp : [Nous contacter](https://wa.me/221771234567)

## 📄 Licence

© 2026 SENAGRO. Tous droits réservés.

---

**Développé avec ❤️ pour l'agriculture sénégalaise**
