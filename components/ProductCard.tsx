import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Eye, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 relative flex flex-col h-full">
      {product.isNew && (
        <div className="absolute top-3 right-3 z-10 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded">
          جدید
        </div>
      )}
      
      <div className="relative h-64 overflow-hidden bg-gray-50 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Quick Actions Overlay (Desktop) */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hidden md:flex">
            <button className="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-primary hover:text-white transition-colors" title="مشاهده سریع">
                <Eye size={18} />
            </button>
            <button 
                onClick={() => onAddToCart(product)}
                className="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-primary hover:text-white transition-colors" 
                title="افزودن به سبد"
            >
                <ShoppingCart size={18} />
            </button>
        </div>
      </div>

      <div className="p-4 text-center flex flex-col flex-grow">
        <div className="text-gray-400 text-xs mb-1 uppercase tracking-wider">{product.category === 'printers' ? 'پرینتر' : product.category === 'filaments' ? 'فیلامنت' : 'قطعات'}</div>
        <h3 className="font-bold text-gray-800 mb-2 hover:text-primary cursor-pointer line-clamp-1">
            {product.name}
        </h3>
        
        <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
                <Star 
                    key={i} 
                    size={14} 
                    className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
            ))}
        </div>

        <div className="mt-auto">
            <div className="font-bold text-lg text-primary mb-3">
              {product.price.toLocaleString('fa-IR')} <span className="text-xs text-gray-500 font-normal">تومان</span>
            </div>
            
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-gray-100 hover:bg-primary text-gray-800 hover:text-white font-medium py-2 rounded transition-colors text-sm flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white"
            >
              <ShoppingCart size={16} />
              افزودن به سبد خرید
            </button>
        </div>
      </div>
    </div>
  );
};