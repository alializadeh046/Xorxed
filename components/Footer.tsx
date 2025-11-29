import React from 'react';
import { Instagram, Send, Phone, MapPin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d2a2a] text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* About */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
            درباره مهران ۳دی‌پی
            <span className="absolute bottom-[-8px] right-0 w-8 h-0.5 bg-primary"></span>
          </h3>
          <p className="text-sm leading-7 mb-4">
            تخصصی‌ترین مرجع فروش پرینترهای سه بعدی، اسکنرهای سه بعدی، فیلامنت و رزین در ایران. ما کیفیت را تضمین می‌کنیم.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Send size={16} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">دسترسی سریع</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">فروشگاه</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">پیگیری سفارش</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">مقالات آموزشی</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">خدمات پرینت</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">قوانین و مقررات</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">تماس با ما</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primary" />
                <span>تهران، خیابان ولیعصر، برج فناوری، واحد ۳۰۴</span>
            </li>
            <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span dir="ltr">+98 21 1234 5678</span>
            </li>
            <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>info@mehran3dp.ir</span>
            </li>
          </ul>
        </div>

         {/* Newsletter */}
         <div>
            <h3 className="text-white font-bold text-lg mb-6">خبرنامه</h3>
            <p className="text-sm mb-4">برای دریافت کدهای تخفیف عضو شوید:</p>
            <div className="relative">
                <input 
                    type="email" 
                    placeholder="ایمیل خود را وارد کنید" 
                    className="w-full bg-gray-700 border-none rounded py-3 px-4 text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="absolute left-1 top-1 bottom-1 bg-primary text-white px-3 rounded hover:bg-green-600 transition-colors text-xs font-bold">
                    عضویت
                </button>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© ۱۴۰۳ تمامی حقوق برای مهران ۳دی‌پی محفوظ است.</p>
        <div className="mt-4 md:mt-0 flex gap-2">
            <img src="https://via.placeholder.com/50x30/444/fff?text=VISA" alt="Payment" className="opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://via.placeholder.com/50x30/444/fff?text=Master" alt="Payment" className="opacity-50 grayscale hover:grayscale-0 transition-all" />
        </div>
      </div>
    </footer>
  );
};
