import { Product } from './types';

export const HERO_IMAGE = "https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=1920&auto=format&fit=crop";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "پرینتر سه بعدی Ender-3 V2",
    price: 12500000,
    category: "printers",
    image: "https://images.unsplash.com/photo-1615828795709-3286db5e5c6e?auto=format&fit=crop&w=600&q=80",
    description: "یکی از محبوب‌ترین پرینترهای FDM با دقت بالا و قیمت مناسب.",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "فیلامنت PLA+ اسون (Esun)",
    price: 650000,
    category: "filaments",
    image: "https://images.unsplash.com/photo-1629196911514-cfd8d6316212?auto=format&fit=crop&w=600&q=80",
    description: "فیلامنت زیست‌تخریب‌پذیر با استحکام بالا و چاپ آسان.",
    rating: 4.5
  },
  {
    id: 3,
    name: "رزین استاندارد Anycubic",
    price: 980000,
    category: "resin",
    image: "https://images.unsplash.com/photo-1597585586616-e41c4558509c?auto=format&fit=crop&w=600&q=80",
    description: "رزین فتوپلیمر با دقت بالا برای پرینترهای LCD.",
    rating: 4.6
  },
  {
    id: 4,
    name: "نازل برنجی 0.4mm MK8",
    price: 45000,
    category: "parts",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&w=600&q=80",
    description: "نازل استاندارد سازگار با اکثر پرینترهای FDM.",
    rating: 4.2
  },
  {
    id: 5,
    name: "پرینتر سه بعدی رزینی Photon Mono",
    price: 18000000,
    category: "printers",
    image: "https://images.unsplash.com/photo-1685368315053-96b63c78864d?auto=format&fit=crop&w=600&q=80",
    description: "پرینتر رزینی با سرعت چاپ بالا و کیفیت سطح فوق‌العاده.",
    rating: 4.9,
    isNew: true
  },
  {
    id: 6,
    name: "فیلامنت PETG شفاف",
    price: 720000,
    category: "filaments",
    image: "https://images.unsplash.com/photo-1523293836414-90fa84489987?auto=format&fit=crop&w=600&q=80",
    description: "مقاوم در برابر حرارت و ضربه، مناسب برای قطعات مکانیکی.",
    rating: 4.4
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'همه محصولات' },
  { id: 'printers', name: 'پرینتر سه بعدی' },
  { id: 'filaments', name: 'فیلامنت' },
  { id: 'resin', name: 'رزین' },
  { id: 'parts', name: 'قطعات یدکی' },
];
