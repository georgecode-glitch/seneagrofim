import { useState } from "react";
import { ProductCard } from "../components/ProductCard";

export function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Tous les produits" },
    { id: "aviculture", label: "Aviculture" },
    { id: "elevage", label: "Élevage" },
    { id: "agriculture", label: "Agriculture" },
  ];

  const products = [
    {
      id: 1,
      name: "Œufs Frais",
      category: "aviculture",
      description: "Œufs frais de poules élevées en plein air",
      price: "2,500 FCFA",
      unit: "la douzaine",
      image: "https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGVnZ3MlMjBiYXNrZXR8ZW58MXx8fHwxNzczODIyMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      name: "Poulet Fermier",
      category: "aviculture",
      description: "Poulet de chair élevé sans antibiotiques",
      price: "4,500 FCFA",
      unit: "le kg",
      image: "https://images.unsplash.com/photo-1723625449724-b756a2bac3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VucyUyMHBvdWx0cnklMjBmYXJtfGVufDF8fHx8MTc3MzgzNTAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      name: "Viande Bovine",
      category: "elevage",
      description: "Viande de bœuf de première qualité",
      price: "5,500 FCFA",
      unit: "le kg",
      image: "https://images.unsplash.com/photo-1657536011755-b6cbe9c4c522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmYXJtaW5nfGVufDF8fHx8MTc3Mzg4MjQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      name: "Lait Frais",
      category: "elevage",
      description: "Lait de vache 100% naturel, pasteurisé",
      price: "1,200 FCFA",
      unit: "le litre",
      image: "https://images.unsplash.com/photo-1772990977842-55d675ce427e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1pbGslMjBkYWlyeSUyMHByb2R1Y3RzfGVufDF8fHx8MTc3MzgzNDM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      name: "Légumes Bio",
      category: "agriculture",
      description: "Assortiment de légumes biologiques de saison",
      price: "800 FCFA",
      unit: "le kg",
      image: "https://images.unsplash.com/photo-1722810767145-5f8380c009df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdmVnZXRhYmxlcyUyMGhhcnZlc3R8ZW58MXx8fHwxNzczODQ2MzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      name: "Céréales",
      category: "agriculture",
      description: "Maïs, mil et sorgho cultivés localement",
      price: "600 FCFA",
      unit: "le kg",
      image: "https://images.unsplash.com/photo-1768729339998-909158957162?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFpbnMlMjBzZWVkcyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3Mzg4MjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Nos Produits</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Découvrez notre gamme complète de produits frais et de qualité supérieure
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeCategory === category.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">
                Aucun produit disponible dans cette catégorie
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Intéressé par nos produits ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous pour passer commande ou obtenir plus d'informations
          </p>
          <a
            href="https://wa.me/221709570652"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            Commander sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
