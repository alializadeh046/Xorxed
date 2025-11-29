import React from 'react';
import { X, Trash2, ArrowLeft, ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, delta: number) => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 md:w-96 bg-white z-[70] shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="p-5 border-b flex justify-between items-center bg-gray-50">
          <h2 className="font-bold text-lg text-secondary">سبد خرید</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <ShoppingCart size={48} className="mb-4 opacity-20" />
              <p>سبد خرید شما خالی است</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-3 border-b border-gray-100 pb-4">
                  <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h4 className="text-sm font-bold text-gray-800 line-clamp-2">{item.name}</h4>
                        <div className="text-xs text-gray-500 mt-1">{item.price.toLocaleString('fa-IR')} تومان</div>
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="flex items-center border rounded">
                            <button 
                                onClick={() => onUpdateQty(item.id, -1)}
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            >-</button>
                            <span className="px-2 text-sm font-medium">{item.quantity}</span>
                            <button 
                                onClick={() => onUpdateQty(item.id, 1)}
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            >+</button>
                        </div>
                        <button 
                            onClick={() => onRemove(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
            <div className="p-5 border-t bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">جمع کل:</span>
                    <span className="text-xl font-bold text-primary">{total.toLocaleString('fa-IR')} تومان</span>
                </div>
                <button className="w-full bg-primary hover:bg-green-600 text-white font-bold py-3 rounded flex items-center justify-center gap-2 transition-colors">
                    تسویه حساب <ArrowLeft size={18} />
                </button>
            </div>
        )}
      </div>
    </>
  );
};