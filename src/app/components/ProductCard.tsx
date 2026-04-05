import { ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  unit: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-green-600">{product.price}</div>
            <div className="text-sm text-gray-500">{product.unit}</div>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
