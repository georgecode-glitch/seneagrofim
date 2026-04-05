import { Target, Eye, Award, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: <Award className="w-10 h-10 text-green-600" />,
      title: "Qualité",
      description: "Des produits frais et de qualité supérieure, contrôlés à chaque étape",
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Engagement",
      description: "Au service de nos clients et de la communauté agricole sénégalaise",
    },
    {
      icon: <Target className="w-10 h-10 text-green-600" />,
      title: "Durabilité",
      description: "Une agriculture respectueuse de l'environnement et des générations futures",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1743518576468-bed065594281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5lZ2FsJTIwYWdyaWN1bHR1cmUlMjBmYXJtJTIwYWVyaWFsfGVufDF8fHx8MTc3Mzg4MjQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="À propos de SENAGRO"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">À Propos de SENAGRO</h1>
          <p className="text-xl md:text-2xl">Notre histoire, notre mission, notre vision</p>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1651903149620-ad2dab120529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBhZ3JpY3VsdHVyYWwlMjB3b3JrfGVufDF8fHx8MTc3Mzg4MjQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Notre histoire"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Fondée en 2026, SENAGRO est née d'une vision simple mais ambitieuse : créer une ferme intégrée au Sénégal qui combine aviculture, élevage et agriculture dans un cycle vertueux et durable.
                </p>
                <p>
                  Au fil des années, nous avons développé notre expertise et nos infrastructures pour devenir un acteur majeur de l'agrobusiness sénégalais. Notre approche intégrée nous permet de maximiser la productivité tout en respectant l'environnement.
                </p>
                <p>
                  Aujourd'hui, SENAGRO emploie plus de 50 personnes et fournit des produits de qualité à des centaines de clients à travers le Sénégal, tout en contribuant à la sécurité alimentaire du pays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <Target className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Notre Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Fournir des produits agricoles de qualité supérieure tout en pratiquant une agriculture durable et responsable. Nous nous engageons à soutenir la sécurité alimentaire du Sénégal et à créer de la valeur pour nos clients, nos employés et nos communautés.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <Eye className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Notre Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Devenir la référence de l'agriculture intégrée en Afrique de l'Ouest, en démontrant qu'il est possible de conjuguer productivité, durabilité et respect de l'environnement. Nous aspirons à inspirer une nouvelle génération d'agriculteurs africains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le Cycle Intégré */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Le Cycle Intégré SENAGRO</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Notre modèle unique d'agriculture circulaire où chaque élément nourrit les autres
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-6xl mb-4">🐔</div>
              <h3 className="text-2xl font-bold mb-4">Aviculture</h3>
              <p className="text-green-100">
                Production d'œufs et de volailles. Les fientes fertilisent nos cultures.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-6xl mb-4">🐄</div>
              <h3 className="text-2xl font-bold mb-4">Élevage</h3>
              <p className="text-green-100">
                Bovins pour viande et lait. Le fumier enrichit naturellement nos sols.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-6xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold mb-4">Agriculture</h3>
              <p className="text-green-100">
                Cultures céréalières et légumes. Les résidus nourrissent nos animaux.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
