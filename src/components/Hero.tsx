
export default function Hero() {
  return (
    <div className="w-full text-center px-4 max-w-4xl mx-auto mt-4 md:mt-8 z-10">
      <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-emerald-950 leading-tight tracking-tight">
        The Future of <span className="text-brand-green relative inline-block">
          Pure Refreshment
          <span className="absolute bottom-1 left-0 w-full h-[6px] bg-brand-green/20 rounded-full"></span>
        </span> <br className="hidden sm:inline" />
        is Coming.
      </h1>
      
      <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-emerald-900/80 font-sans max-w-2xl mx-auto leading-relaxed">
        Get ready to nourish your body and delight your senses. Experience a premium, sustainably sourced line of dairy-free coconut milk drinks, exotic tropical blends, and raw organic treats proudly processed in Ghana.
      </p>
    </div>
  );
}
