import { Link } from "react-router";
import { Sprout, Beef, Egg, ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: <Egg className="w-12 h-12 text-green-600" />,
      title: "Aviculture",
      description: "Production d'œufs et de volailles de qualité supérieure",
    },
    {
      icon: <Beef className="w-12 h-12 text-green-600" />,
      title: "Élevage",
      description: "Viandes bovines et produits laitiers frais",
    },
    {
      icon: <Sprout className="w-12 h-12 text-green-600" />,
      title: "Agriculture",
      description: "Cultures céréalières et légumes biologiques",
    },
  ];

  const stats = [
    { number: "10+", label: "Années d'expérience" },
    { number: "500+", label: "Clients satisfaits" },
    { number: "100%", label: "Produits locaux" },
    { number: "3", label: "Secteurs intégrés" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1743518576468-bed065594281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5lZ2FsJTIwYWdyaWN1bHR1cmUlMjBmYXJtJTIwYWVyaWFsfGVufDF8fHx8MTc3Mzg4MjQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="SENAGRO Ferme"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SENAGRO
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            L'excellence agricole au cœur du Sénégal
          </p>
          <p className="text-lg mb-8 text-gray-200">
            Une ferme intégrée combinant aviculture, élevage et agriculture pour des produits de qualité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Découvrir nos produits
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Activités
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une approche intégrée pour une production durable et de qualité
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cycle Intégré Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Cycle Intégré
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                SENAGRO pratique une agriculture intégrée où chaque secteur enrichit les autres, créant ainsi un écosystème agricole durable et productif.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Les déjections animales fertilisent naturellement nos cultures
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Les résidus agricoles nourrissent notre bétail et notre volaille
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Une gestion optimale des ressources pour une production durable
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Réduction de l'impact environnemental et des coûts
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651903149620-ad2dab120529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBhZ3JpY3VsdHVyYWwlMjB3b3JrfGVufDF8fHx8MTc3Mzg4MjQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Agriculture durable"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Prêt à découvrir nos produits ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explorez notre gamme complète de produits agricoles de qualité supérieure
          </p>
          <Link
            to="/products"
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
          >
            Voir nos produits
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
