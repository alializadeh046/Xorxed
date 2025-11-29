import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, X, User } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-primary text-white text-xs py-2 px-4 text-center hidden md:block">
        به فروشگاه مهران ۳دی‌پی خوش آمدید | ارسال رایگان برای سفارش‌های بالای ۲ میلیون تومان
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
           <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center">
             <span className="text-white font-bold text-xl">M</span>
           </div>
           <div className="flex flex-col">
             <span className="text-xl font-bold text-secondary leading-none">Mehran</span>
             <span className="text-sm text-gray-500 font-medium tracking-widest leading-none">3DP STORE</span>
           </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-primary transition-colors">خانه</a>
          <a href="#shop" className="hover:text-primary transition-colors">فروشگاه</a>
          <a href="#services" className="hover:text-primary transition-colors">خدمات پرینت</a>
          <a href="#blog" className="hover:text-primary transition-colors">بلاگ</a>
          <a href="#contact" className="hover:text-primary transition-colors">تماس با ما</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-secondary hover:text-primary transition-colors hidden sm:block">
            <Search size={22} />
          </button>
          <button className="text-secondary hover:text-primary transition-colors hidden sm:block">
            <User size={22} />
          </button>
          <button 
            className="text-secondary hover:text-primary transition-colors relative"
            onClick={onCartClick}
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 shadow-lg absolute w-full left-0 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-sm font-medium text-gray-600">
            <a href="#" className="block py-2 border-b border-gray-100">خانه</a>
            <a href="#shop" className="block py-2 border-b border-gray-100">فروشگاه</a>
            <a href="#services" className="block py-2 border-b border-gray-100">خدمات</a>
            <a href="#contact" className="block py-2">تماس</a>
          </nav>
        </div>
      )}
    </header>
  );
};
