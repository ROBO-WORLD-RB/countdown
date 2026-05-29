import { motion, type Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  desc: string;
  image: string;
  tag: string;
}

const products: Product[] = [
  {
    id: 'milk-drink',
    name: 'Coconut Milk Drink',
    desc: 'Creamy, dairy-free, natively organic, and highly refreshing beverage processed under sterile conditions.',
    image: '/hero-cocnut_milk_drink.webp',
    tag: 'Classic Nourishment',
  },
  {
    id: 'pineapple-ginger',
    name: 'Pineapple Coconut + Ginger',
    desc: 'An exotic tropical blend of pure pineapple, premium coconut water, and a warm splash of local organic Ghanaian ginger.',
    image: '/hero-pineapple_coconut+ginger.webp',
    tag: 'Tropical Zing',
  },
  {
    id: 'coconut-water',
    name: 'Natural Coconut Water',
    desc: '100% pure, electrolyte-rich hydration straight from premium local Ghanaian green coconuts.',
    image: '/hero-Coconut_Water.webp',
    tag: 'Pure Hydration',
  },
  {
    id: 'ice-cream',
    name: 'Coconut Ice Cream',
    desc: 'A rich, dairy-free, organic coconut ice cream served in a rustic coconut shell.',
    image: '/hero-coconut_ice_cream.png',
    tag: 'Guilt-Free Indulgence',
  },
];

export default function Teaser() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 12 } },
  };

  return (
    <div className="w-full px-4 md:px-12 max-w-6xl mx-auto mt-12 md:mt-16 z-10">
      <div className="text-center mb-8">
        <h2 className="font-serif font-black text-2xl sm:text-3xl text-emerald-950 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-green animate-pulse" />
          Our Flagship Offerings
        </h2>
        <p className="text-sm md:text-base text-emerald-900/60 font-sans mt-1">
          A sneak peek of the nature-crafted wellness coming to your table.
        </p>
      </div>

      {/* Horizontal Swiper on Mobile, Grid on Desktop */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="flex overflow-x-auto pb-6 pt-2 snap-x snap-mandatory gap-6 lg:grid lg:grid-cols-4 lg:overflow-x-visible lg:pb-0 scrollbar-none"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-auto snap-center flex flex-col justify-between glass-panel-light p-4 rounded-2xl border border-emerald-950/10 shadow-[0_10px_25px_rgba(2,44,34,0.03)] hover:shadow-[0_20px_35px_rgba(16,185,129,0.1)] hover:border-brand-green/30 transition-all duration-500 transform hover:-translate-y-2 group"
          >
            {/* Image container */}
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-emerald-950/5 relative mb-4">
              <div className="absolute top-2 left-2 z-10">
                <span className="text-[9px] font-bold text-white bg-emerald-950/70 px-2 py-0.5 rounded-full backdrop-blur-xs tracking-wider uppercase">
                  {product.tag}
                </span>
              </div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                onError={(e) => {
                  // Fallback in case of image rendering issues, e.g. replacing with a generic background or fallback formats
                  e.currentTarget.style.opacity = '0.7';
                }}
              />
            </div>

            {/* Product Details */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-black text-lg text-emerald-950 group-hover:text-brand-green transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-900/70 font-sans mt-2 leading-relaxed">
                  {product.desc}
                </p>
              </div>
              
              {/* Premium micro details indicator */}
              <div className="mt-4 pt-3 border-t border-emerald-950/5 flex justify-between items-center text-[10px] font-bold text-brand-green/80 uppercase tracking-widest">
                <span>100% Organic</span>
                <span>Dairy-Free</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Mobile Swipe Hint */}
      <div className="flex justify-center mt-3 lg:hidden text-[10px] text-emerald-900/40 uppercase tracking-widest font-bold animate-pulse">
        ← Swipe to explore →
      </div>
    </div>
  );
}
