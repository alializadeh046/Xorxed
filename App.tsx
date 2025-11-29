import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CartSidebar } from './components/CartSidebar';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { PRODUCTS, CATEGORIES } from './constants';
import { CartItem, Product } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQty = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header cartCount={totalCartItems} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <Hero />

        {/* Shop Section */}
        <section id="shop" className="container mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-secondary mb-4">محصولات ویژه</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>

          {/* Categories Tab */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-secondary text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart} 
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              محصولی در این دسته یافت نشد.
            </div>
          )}
        </section>

        {/* Features Section */}
        <section className="bg-white py-16 border-t border-gray-100">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <img src="https://cdn-icons-png.flaticon.com/512/2830/2830305.png" alt="Shipping" className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="font-bold text-lg mb-2">ارسال سریع به سراسر کشور</h3>
                    <p className="text-gray-500 text-sm">بسته‌بندی ایمن و ارسال با پست و تیپاکس</p>
                </div>
                <div className="p-6">
                    <img src="https://cdn-icons-png.flaticon.com/512/950/950299.png" alt="Support" className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="font-bold text-lg mb-2">مشاوره تخصصی رایگان</h3>
                    <p className="text-gray-500 text-sm">راهنمایی قبل از خرید توسط مهندسین مجرب</p>
                </div>
                <div className="p-6">
                    <img src="https://cdn-icons-png.flaticon.com/512/2438/2438078.png" alt="Guarantee" className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="font-bold text-lg mb-2">ضمانت اصالت کالا</h3>
                    <p className="text-gray-500 text-sm">تضمین اورجینال بودن تمامی فیلامنت‌ها و قطعات</p>
                </div>
            </div>
        </section>
      </main>

      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onRemove={handleRemoveFromCart}
        onUpdateQty={handleUpdateQty}
      />

      <AIAssistant />
    </div>
  );
}

export default App;
