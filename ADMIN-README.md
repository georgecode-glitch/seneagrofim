# Configuration Supabase pour l'Espace Admin

## 🚀 Configuration de Supabase

### 1. Créer un compte Supabase
- Allez sur [supabase.com](https://supabase.com)
- Créez un compte gratuit
- Créez un nouveau projet

### 2. Configurer les variables d'environnement
- Copiez `.env.example` vers `.env`
- Remplacez les valeurs par celles de votre projet Supabase :
  - `VITE_SUPABASE_URL` : URL de votre projet (visible dans Settings > API)
  - `VITE_SUPABASE_ANON_KEY` : Clé anonyme (anon public key)

### 3. Créer les tables
- Dans Supabase, allez dans l'onglet **SQL Editor**
- Copiez-collez le contenu du fichier `supabase-setup.sql`
- Cliquez sur **Run** pour créer les tables

### 4. Tester la connexion
- Lancez `npm run dev`
- Allez sur `/admin` (mot de passe : `admin123`)
- Le dashboard devrait charger les données

## 📊 Fonctionnalités de l'Espace Admin

### Accès
- URL : `/admin`
- Mot de passe : `admin123`

### Fonctionnalités
- ✅ **Vue d'ensemble** : Statistiques générales
- ✅ **Messages** : Voir tous les messages du formulaire de contact
- ✅ **Produits** : Gérer les produits (interface prête, logique à implémenter)
- ✅ **Authentification** : Sécurisée avec mot de passe

### Données stockées
- **Messages de contact** : nom, email, téléphone, sujet, message, date
- **Produits** : nom, catégorie, description, prix, unité, image

## 🔧 Développement

### Scripts disponibles
```bash
npm run dev      # Développement
npm run build    # Production
npm run preview  # Prévisualisation
```

### Structure des fichiers
```
src/
├── lib/
│   └── supabase.ts          # Configuration Supabase
├── app/
│   ├── pages/
│   │   ├── Admin.tsx        # Page de login
│   │   └── AdminDashboard.tsx # Dashboard admin
│   └── routes.tsx           # Routes incluant /admin
```

## 📝 Notes importantes

- **Sécurité** : Le mot de passe est stocké en localStorage (simple pour démo)
- **Base de données** : Supabase offre 500MB gratuit + généreux free tier
- **Déploiement** : Ajoutez les variables d'environnement dans Netlify/Vercel
- **Backup** : Pensez à sauvegarder vos données régulièrement

## 🆘 Dépannage

### Problème : "Erreur de connexion Supabase"
- Vérifiez les variables d'environnement dans `.env`
- Assurez-vous que le projet Supabase est actif

### Problème : "Table introuvable"
- Exécutez le script `supabase-setup.sql` dans Supabase

### Problème : "Mot de passe incorrect"
- Le mot de passe par défaut est `admin123`
- Modifiable dans `Admin.tsx` ligne 22

---

**Prêt à utiliser ! 🎉**