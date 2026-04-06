import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { supabase } from '../../lib/supabase'
import { LayoutDashboard, MessageSquare, Package, LogOut, Trash2, Clock, Mail, Phone, Tag, TrendingUp, Users, ShoppingBag, Eye, Plus, Pencil, X } from 'lucide-react'

interface Message {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  submitted_at: string
}

interface Product {
  id: string
  name: string
  category: string
  description: string
  price: string
  unit: string
  image_url: string
}

type Tab = 'dashboard' | 'messages' | 'products'

const emptyProduct = { name: '', category: 'aviculture', description: '', price: '', unit: '', image_url: '' }

export function AdminDashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<Tab>('dashboard')
  const [messages, setMessages] = useState<Message[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [showProductForm, setShowProductForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [productForm, setProductForm] = useState(emptyProduct)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('adminAuthenticated') !== 'true') { navigate('/admin'); return }
    fetchMessages()
    fetchProducts()
  }, [])

  const fetchMessages = async () => {
    const { data, error } = await supabase.from('contact_submissions').select('*').order('submitted_at', { ascending: false })
    if (!error && data) setMessages(data)
    setLoading(false)
  }

  const fetchProducts = async () => {
    const { data, error } = await supabase.from('products').select('*').order('created_at')
    if (!error && data) setProducts(data)
  }

  const deleteMessage = async (id: string) => {
    if (!confirm('Supprimer ce message ?')) return
    const { error } = await supabase.from('contact_submissions').delete().eq('id', id)
    if (!error) { setMessages(messages.filter(m => m.id !== id)); if (selectedMessage?.id === id) setSelectedMessage(null) }
  }

  const deleteProduct = async (id: string) => {
    if (!confirm('Supprimer ce produit ?')) return
    const { error } = await supabase.from('products').delete().eq('id', id)
    if (!error) setProducts(products.filter(p => p.id !== id))
  }

  const openAddProduct = () => { setEditingProduct(null); setProductForm(emptyProduct); setShowProductForm(true) }
  const openEditProduct = (p: Product) => { setEditingProduct(p); setProductForm({ name: p.name, category: p.category, description: p.description, price: p.price, unit: p.unit, image_url: p.image_url }); setShowProductForm(true) }

  const saveProduct = async () => {
    setSaving(true)
    if (editingProduct) {
      const { error } = await supabase.from('products').update(productForm).eq('id', editingProduct.id)
      if (!error) { setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...productForm } : p)); setShowProductForm(false) }
    } else {
      const { data, error } = await supabase.from('products').insert([productForm]).select()
      if (!error && data) { setProducts([...products, data[0]]); setShowProductForm(false) }
    }
    setSaving(false)
  }

  const handleLogout = () => { localStorage.removeItem('adminAuthenticated'); navigate('/admin') }
  const formatDate = (d: string) => new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  const subjectLabel: Record<string, string> = { commande: 'Commande', info: 'Information', partenariat: 'Partenariat', autre: 'Autre' }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-64 bg-green-800 text-white flex flex-col">
        <div className="p-6 border-b border-green-700">
          <h1 className="text-xl font-bold">SENAGRO</h1>
          <p className="text-green-300 text-sm mt-1">Administration</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ' + (activeTab === 'dashboard' ? 'bg-green-600 text-white' : 'text-green-200 hover:bg-green-700')}>
            <LayoutDashboard size={18} />Tableau de bord
          </button>
          <button onClick={() => setActiveTab('messages')} className={'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ' + (activeTab === 'messages' ? 'bg-green-600 text-white' : 'text-green-200 hover:bg-green-700')}>
            <MessageSquare size={18} />Messages ({messages.length})
          </button>
          <button onClick={() => setActiveTab('products')} className={'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ' + (activeTab === 'products' ? 'bg-green-600 text-white' : 'text-green-200 hover:bg-green-700')}>
            <Package size={18} />Produits ({products.length})
          </button>
        </nav>
        <div className="p-4 border-t border-green-700">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-green-200 hover:bg-green-700 rounded-lg transition-colors">
            <LogOut size={18} />Deconnexion
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">
            {activeTab === 'dashboard' && 'Tableau de bord'}
            {activeTab === 'messages' && 'Messages recus'}
            {activeTab === 'products' && 'Gestion des produits'}
          </h2>
          {activeTab === 'products' && (
            <button onClick={openAddProduct} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              <Plus size={18} />Ajouter un produit
            </button>
          )}
        </div>

        <div className="p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><MessageSquare size={24} /></div>
                  <div><p className="text-gray-500 text-sm">Messages recus</p><p className="text-3xl font-bold text-gray-800">{messages.length}</p></div>
                </div>
                <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><ShoppingBag size={24} /></div>
                  <div><p className="text-gray-500 text-sm">Commandes recues</p><p className="text-3xl font-bold text-gray-800">{messages.filter(m => m.subject === 'commande').length}</p></div>
                </div>
                <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center"><Package size={24} /></div>
                  <div><p className="text-gray-500 text-sm">Produits</p><p className="text-3xl font-bold text-gray-800">{products.length}</p></div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><TrendingUp size={20} className="text-green-600" />Derniers messages</h3>
                {loading ? <p className="text-gray-500">Chargement...</p> : messages.length === 0 ? <p className="text-gray-500">Aucun message.</p> : (
                  <div className="space-y-3">
                    {messages.slice(0, 5).map(msg => (
                      <div key={msg.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div><p className="font-semibold text-gray-800">{msg.name}</p><p className="text-sm text-gray-500">{msg.email}</p></div>
                        <div className="text-right"><span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{subjectLabel[msg.subject] || msg.subject}</span><p className="text-xs text-gray-400 mt-1">{formatDate(msg.submitted_at)}</p></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="flex gap-6">
              <div className="w-1/2 space-y-3">
                {messages.length === 0 ? (
                  <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500"><MessageSquare size={48} className="mx-auto mb-3 text-gray-300" /><p>Aucun message recu.</p></div>
                ) : messages.map(msg => (
                  <div key={msg.id} onClick={() => setSelectedMessage(msg)} className={'bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-md transition-shadow border-2 ' + (selectedMessage?.id === msg.id ? 'border-green-500' : 'border-transparent')}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1"><p className="font-semibold text-gray-800">{msg.name}</p><p className="text-sm text-gray-500">{msg.email}</p><p className="text-sm text-gray-400 mt-1">{msg.message.substring(0, 60)}...</p></div>
                      <div className="text-right ml-3"><span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full block mb-1">{subjectLabel[msg.subject] || msg.subject}</span><p className="text-xs text-gray-400">{formatDate(msg.submitted_at)}</p></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-1/2">
                {selectedMessage ? (
                  <div className="bg-white rounded-xl shadow p-6">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-800">Detail du message</h3>
                      <button onClick={() => deleteMessage(selectedMessage.id)} className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm"><Trash2 size={16} />Supprimer</button>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><Users size={18} className="text-green-600" /><div><p className="text-xs text-gray-500">Nom</p><p className="font-semibold">{selectedMessage.name}</p></div></div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><Mail size={18} className="text-green-600" /><div><p className="text-xs text-gray-500">Email</p><a href={'mailto:' + selectedMessage.email} className="font-semibold text-blue-600 hover:underline">{selectedMessage.email}</a></div></div>
                      {selectedMessage.phone && <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><Phone size={18} className="text-green-600" /><div><p className="text-xs text-gray-500">Telephone</p><p className="font-semibold">{selectedMessage.phone}</p></div></div>}
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><Tag size={18} className="text-green-600" /><div><p className="text-xs text-gray-500">Sujet</p><p className="font-semibold">{subjectLabel[selectedMessage.subject] || selectedMessage.subject}</p></div></div>
                      <div className="p-3 bg-gray-50 rounded-lg"><p className="text-xs text-gray-500 mb-2">Message</p><p className="text-gray-800 leading-relaxed">{selectedMessage.message}</p></div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><Clock size={18} className="text-green-600" /><div><p className="text-xs text-gray-500">Recu le</p><p className="font-semibold">{formatDate(selectedMessage.submitted_at)}</p></div></div>
                      <a href={'mailto:' + selectedMessage.email + '?subject=Re: ' + selectedMessage.subject} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"><Mail size={18} />Repondre par email</a>
                    </div>
                  </div>
                ) : <div className="bg-white rounded-xl shadow p-8 text-center text-gray-400"><Eye size={48} className="mx-auto mb-3 text-gray-200" /><p>Clique sur un message pour le voir</p></div>}
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(p => (
                <div key={p.id} className="bg-white rounded-xl shadow overflow-hidden">
                  <img src={p.image_url} alt={p.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{p.category}</span>
                    <h3 className="font-bold text-gray-800 mt-2">{p.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{p.description}</p>
                    <p className="text-green-600 font-bold mt-2">{p.price} / {p.unit}</p>
                    <div className="flex gap-2 mt-3">
                      <button onClick={() => openEditProduct(p)} className="flex-1 flex items-center justify-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded-lg text-sm font-semibold transition-colors"><Pencil size={14} />Modifier</button>
                      <button onClick={() => deleteProduct(p.id)} className="flex-1 flex items-center justify-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-lg text-sm font-semibold transition-colors"><Trash2 size={14} />Supprimer</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showProductForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">{editingProduct ? 'Modifier le produit' : 'Ajouter un produit'}</h3>
              <button onClick={() => setShowProductForm(false)}><X size={24} /></button>
            </div>
            <div className="space-y-4">
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Nom du produit</label><input type="text" value={productForm.name} onChange={e => setProductForm({ ...productForm, name: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Prix (ex: 2,500 FCFA)</label><input type="text" value={productForm.price} onChange={e => setProductForm({ ...productForm, price: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Unite (ex: le kg)</label><input type="text" value={productForm.unit} onChange={e => setProductForm({ ...productForm, unit: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">URL de l image</label><input type="text" value={productForm.image_url} onChange={e => setProductForm({ ...productForm, image_url: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" /></div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Categorie</label>
                <select value={productForm.category} onChange={e => setProductForm({ ...productForm, category: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                  <option value="aviculture">Aviculture</option>
                  <option value="elevage">Elevage</option>
                  <option value="agriculture">Agriculture</option>
                </select>
              </div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Description</label><textarea value={productForm.description} onChange={e => setProductForm({ ...productForm, description: e.target.value })} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-none" /></div>
              <button onClick={saveProduct} disabled={saving} className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors">
                {saving ? 'Sauvegarde...' : editingProduct ? 'Modifier' : 'Ajouter'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}