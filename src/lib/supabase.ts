import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types pour nos données
export interface ContactSubmission {
  id?: number
  name: string
  email: string
  phone: string
  subject: string
  message: string
  created_at?: string
}

export interface Product {
  id?: number
  name: string
  category: string
  description: string
  price: string
  unit: string
  image: string
  created_at?: string
}