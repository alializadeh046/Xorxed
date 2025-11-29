import React from 'react';
import { HERO_IMAGE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded mb-4 animate-pulse">
          تخفیف ویژه
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight max-w-2xl">
          دنیای خلاقیت را <br/>
          <span className="text-primary">سه بعدی</span> بسازید
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg">
          بهترین پرینترهای سه بعدی، باکیفیت‌ترین فیلامنت‌ها و خدمات حرفه‌ای پرینت در مهران ۳دی‌پی.
        </p>
        <a href="#shop" className="bg-primary hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition-all transform hover:scale-105 shadow-lg">
          مشاهده محصولات
        </a>
      </div>
    </div>
  );
};
