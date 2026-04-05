-- Script SQL pour créer les tables Supabase
-- Exécutez ce script dans l'onglet SQL Editor de Supabase

-- Table pour les soumissions du formulaire de contact
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE
);

-- Table pour les produits
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  price TEXT NOT NULL,
  unit TEXT NOT NULL,
  image TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Politiques RLS (Row Level Security) - optionnel mais recommandé
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Permettre l'accès en lecture/écriture pour l'anon key
CREATE POLICY "Enable all operations for authenticated users" ON contact_submissions
  FOR ALL USING (true);

CREATE POLICY "Enable all operations for authenticated users" ON products
  FOR ALL USING (true);