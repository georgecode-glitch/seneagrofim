import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  unit: string;
  image_url: string;
}

export function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: "all", label: "Tous les produits" },
    { id: "aviculture", label: "Aviculture" },
    { id: "elevage", label: "Elevage" },
    { id: "agriculture", label: "Agriculture" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*").order("created_at");
      if (!error && data) setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Nos Produits</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Decouvrez notre gamme complete de produits frais et de qualite superieure
          </p>
        </div>
      </section>

      <section className="py-8 bg-white shadow-sm sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={"px-6 py-3 rounded-lg font-semibold transition-colors " + (activeCategory === category.id ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-16"><p className="text-xl text-gray-500">Chargement...</p></div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16"><p className="text-xl text-gray-500">Aucun produit disponible</p></div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{product.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-green-600">{product.price}</span>
                        <span className="text-gray-500 text-sm ml-1">/ {product.unit}</span>
                      </div>
                      <a href="https://wa.me/221709570652" target="_blank" rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        Commander
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interesse par nos produits ?</h2>
          <p className="text-lg text-gray-600 mb-8">Contactez-nous pour passer commande</p>
          <a href="https://wa.me/221709570652" target="_blank" rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block">
            Commander sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}