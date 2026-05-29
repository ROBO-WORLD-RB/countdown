
export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 z-20">
      {/* Brand & Badge */}
      <div className="flex items-center gap-4">
        <a href="https://cocolyf.com" className="flex items-center gap-2 group">
          <div className="bg-white/95 p-1.5 rounded-xl shadow-md border border-emerald-950/5 group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/logo.webp" 
              alt="CocoLyf Logo" 
              className="h-10 md:h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = '/logo.jpeg';
              }}
            />
          </div>
          <span className="font-serif font-black text-2xl md:text-3xl tracking-tight text-emerald-950 hidden xs:inline-block">
            Coco<span className="text-brand-green">Lyf</span>
          </span>
        </a>
        
        <div className="glass-badge py-1 px-3 rounded-full flex items-center gap-1.5 border border-brand-green/30 animate-pulse-subtle">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-green animate-ping"></span>
          <span className="text-[10px] md:text-xs font-bold text-emerald-950 uppercase tracking-widest">
            Ghanaian Premium Agro-Processing
          </span>
        </div>
      </div>

      {/* Social Media Links (Using ultra-crisp custom SVG icons for 100% TS stability) */}
      <div className="flex items-center gap-3">
        {/* Instagram Icon */}
        <a 
          href="https://www.instagram.com/_cocolyf/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/60 border border-emerald-950/10 text-emerald-950 hover:bg-brand-green hover:text-white hover:border-brand-green hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-1"
        >
          <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>

        {/* TikTok Icon */}
        <a 
          href="https://www.tiktok.com/@cocolyf_" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="TikTok"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/60 border border-emerald-950/10 text-emerald-950 hover:bg-brand-green hover:text-white hover:border-brand-green hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-1"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.81-.74-3.94-1.69-.64-.54-1.18-1.21-1.57-1.95v7.69c.02 2.03-.58 4.07-1.89 5.62-1.49 1.86-3.88 2.91-6.26 2.85-2.22-.03-4.42-.99-5.78-2.73-1.59-1.94-2.12-4.67-1.47-7.1 1.05-3.23 4.54-5.32 7.91-4.73 1.25.17 2.4.82 3.25 1.75v-9.43zm-4.04 10.45c-2 .03-3.66 1.68-3.66 3.69 0 2.02 1.66 3.68 3.68 3.67 2.02-.02 3.65-1.68 3.63-3.7-.02-2-1.65-3.64-3.65-3.66z"/>
          </svg>
        </a>

        {/* Facebook Icon */}
        <a 
          href="https://www.facebook.com/share/18Hiz49GGA/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Facebook"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/60 border border-emerald-950/10 text-emerald-950 hover:bg-brand-green hover:text-white hover:border-brand-green hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-1"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
          </svg>
        </a>
        
        {/* WhatsApp Icon */}
        <a 
          href="https://wa.me/233503127102" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="WhatsApp"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/60 border border-emerald-950/10 text-emerald-950 hover:bg-brand-green hover:text-white hover:border-brand-green hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-1"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.364a9.92 9.92 0 0 0 4.808 1.233h.004c5.507 0 9.99-4.479 9.992-9.986.002-2.668-1.037-5.176-2.927-7.067A9.92 9.92 0 0 0 12.012 2zm5.72 13.916c-.244.688-1.22 1.26-1.68 1.32-.42.06-.942.09-2.73-.64-2.29-.93-3.772-3.26-3.882-3.41-.11-.15-.89-1.18-.89-2.26 0-1.07.56-1.6.76-1.82.2-.22.44-.27.59-.27.15 0 .3.003.43.01.14.01.32-.054.5-.47.19-.446.65-1.58.71-1.7.06-.12.1-.26.02-.42-.08-.16-.36-.45-.55-.67-.19-.22-.4-.48-.57-.66-.17-.18-.36-.15-.49-.15-.12 0-.27.01-.41.01-.48.01-1.25.18-1.76.69-.51.51-1.96 1.91-1.96 4.67 0 2.76 2.01 5.43 2.29 5.81.28.38 3.96 6.04 9.59 8.47 1.34.58 2.39.92 3.2.18.82-.74 1.63-1.6 1.84-2.24.21-.64.08-1.2-.04-1.31-.12-.11-.47-.29-1-.55z"/>
          </svg>
        </a>
      </div>
    </header>
  );
}
