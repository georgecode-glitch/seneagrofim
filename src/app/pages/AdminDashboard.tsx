import { useState, useEffect } from 'react'
import { Navigate } from 'react-router'
import { LogOut, MessageSquare, Package, Users, BarChart3, Settings } from 'lucide-react'
import { supabase, ContactSubmission, Product } from '../../lib/supabase'

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'messages' | 'products'>('overview')
  const [messages, setMessages] = useState<ContactSubmission[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  // Vérifier l'authentification
  useEffect(() => {
    if (localStorage.getItem('adminAuthenticated') !== 'true') {
      return
    }

    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)

      // Charger les messages
      const { data: messagesData, error: messagesError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (messagesError) {
        console.error('Erreur chargement messages:', messagesError)
      } else {
        setMessages(messagesData || [])
      }

      // Charger les produits
      const { data: productsData, error: productsError } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })

      if (productsError) {
        console.error('Erreur chargement produits:', productsError)
      } else {
        setProducts(productsData || [])
      }
    } catch (error) {
      console.error('Erreur générale:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated')
    window.location.href = '/admin'
  }

  // Si pas authentifié, rediriger
  if (localStorage.getItem('adminAuthenticated') !== 'true') {
    return <Navigate to="/admin" replace />
  }

  const stats = {
    totalMessages: messages.length,
    unreadMessages: messages.filter(m => !m.read).length,
    totalProducts: products.length,
    totalRevenue: products.reduce((sum, p) => sum + parseFloat(p.price.replace(/[^0-9.]/g, '')), 0)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord Admin</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <LogOut size={16} />
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <BarChart3 size={20} />
                  Vue d'ensemble
                </button>
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'messages'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <MessageSquare size={20} />
                  Messages ({messages.length})
                </button>
                <button
                  onClick={() => setActiveTab('products')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === 'products'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Package size={20} />
                  Produits ({products.length})
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {loading ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Chargement...</p>
              </div>
            ) : (
              <>
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                            <MessageSquare size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Messages</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.totalMessages}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                            <MessageSquare size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Non lus</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.unreadMessages}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                            <Package size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Produits</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg">
                            <BarChart3 size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Revenus</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.totalRevenue.toFixed(2)} FCFA</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Messages */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">Messages récents</h2>
                      <div className="space-y-4">
                        {messages.slice(0, 5).map((message) => (
                          <div key={message.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-semibold text-gray-900">{message.name}</p>
                                <p className="text-sm text-gray-600">{message.email}</p>
                                <p className="text-sm text-gray-500 mt-1">{message.subject}</p>
                              </div>
                              <span className="text-xs text-gray-500">
                                {new Date(message.created_at || '').toLocaleDateString('fr-FR')}
                              </span>
                            </div>
                          </div>
                        ))}
                        {messages.length === 0 && (
                          <p className="text-gray-500 text-center py-4">Aucun message pour le moment</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'messages' && (
                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-6 border-b border-gray-200">
                      <h2 className="text-xl font-bold text-gray-900">Tous les messages</h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {messages.map((message) => (
                        <div key={message.id} className="p-6 hover:bg-gray-50">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-semibold text-gray-900">{message.name}</h3>
                              <p className="text-sm text-gray-600">{message.email}</p>
                              <p className="text-sm font-medium text-green-600 mt-1">{message.subject}</p>
                            </div>
                            <span className="text-xs text-gray-500">
                              {new Date(message.created_at || '').toLocaleDateString('fr-FR')}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-2">{message.message}</p>
                          {message.phone && (
                            <p className="text-sm text-gray-600">📞 {message.phone}</p>
                          )}
                        </div>
                      ))}
                      {messages.length === 0 && (
                        <div className="p-8 text-center text-gray-500">
                          Aucun message reçu pour le moment
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'products' && (
                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                      <h2 className="text-xl font-bold text-gray-900">Gestion des produits</h2>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                        + Nouveau produit
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                          <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-32 object-cover rounded-lg mb-4"
                            />
                            <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-green-600">{product.price}</span>
                              <span className="text-sm text-gray-500">{product.unit}</span>
                            </div>
                            <div className="mt-4 flex gap-2">
                              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded transition-colors">
                                Modifier
                              </button>
                              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm py-2 rounded transition-colors">
                                Supprimer
                              </button>
                            </div>
                          </div>
                        ))}
                        {products.length === 0 && (
                          <div className="col-span-full text-center py-8 text-gray-500">
                            Aucun produit pour le moment
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}