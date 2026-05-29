import { Phone, Mail, MapPin, Navigation } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-16 md:mt-24 pb-8 px-6 md:px-12 z-10 border-t border-emerald-950/10 pt-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Sleek 3-Column Contact & Address Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-emerald-950 text-sm">
          
          {/* Column 1: Brand & Physical Office Address */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif font-black text-xl tracking-tight">
              Coco<span className="text-brand-green">Lyf</span>
            </h3>
            
            <div className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5 text-xs text-emerald-900/80 leading-relaxed font-medium">
                <span className="font-bold text-emerald-950">Physical Headquarters:</span>
                <span>Opintinse Street, 49</span>
                <span>CT 2484 East Cantonments, Accra</span>
                <span>Ayawaso Central, Greater Accra, Ghana</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Navigation className="w-4 h-4 text-brand-green flex-shrink-0" />
              <div className="text-[11px] font-mono font-bold text-emerald-950 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-950/5 select-all">
                GPS: G2-063-2158
              </div>
            </div>
          </div>

          {/* Column 2: Hotlines & WhatsApp Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-brand-green uppercase tracking-[0.15em] flex items-center gap-1.5">
              <Phone className="w-4 h-4" /> Support & Sales Hotlines
            </h4>
            
            <div className="flex flex-col gap-2.5 text-xs font-semibold">
              <a 
                href="https://wa.me/233503127102" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl bg-white/40 border border-emerald-950/5 hover:border-brand-green/30 hover:bg-white/80 transition-all duration-300 group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-emerald-900/60 font-medium">WhatsApp Biz:</span>
                <span className="text-emerald-950 group-hover:text-brand-green">+233 50 312 7102</span>
              </a>

              <div className="flex flex-col gap-1.5 pl-2 border-l border-emerald-950/10 text-emerald-900/80">
                <a href="tel:+233503127102" className="hover:text-brand-green transition-colors flex justify-between items-center pr-2">
                  <span>Line 1 (Hotline):</span>
                  <span className="font-bold">+233 50 312 7102</span>
                </a>
                <a href="tel:+233546959629" className="hover:text-brand-green transition-colors flex justify-between items-center pr-2">
                  <span>Line 2 (Support):</span>
                  <span className="font-bold">+233 54 695 9629</span>
                </a>
                <a href="tel:+233278326949" className="hover:text-brand-green transition-colors flex justify-between items-center pr-2">
                  <span>Line 3 (Office):</span>
                  <span className="font-bold">+233 27 832 6949</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Corporate Emails & Trust Strip */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold text-brand-green uppercase tracking-[0.15em] flex items-center gap-1.5">
                <Mail className="w-4 h-4" /> Corporate Correspondence
              </h4>
              <div className="flex flex-col gap-1 text-xs font-semibold pl-2">
                <a href="mailto:info@cocolyf.com" className="text-emerald-950 hover:text-brand-green hover:underline transition-all">
                  info@cocolyf.com
                </a>
                <a href="mailto:pinnaclecoco7@gmail.com" className="text-emerald-900/60 hover:text-brand-green hover:underline transition-all font-medium">
                  pinnaclecoco7@gmail.com
                </a>
              </div>
            </div>

            {/* Glassmorphic Trust Strip Section */}
            <div className="glass-panel-light p-3.5 rounded-2xl border border-emerald-950/10 flex justify-between items-center gap-2 shadow-xs">
              {/* FDA Stamp */}
              <div className="flex items-center gap-1.5">
                <svg className="w-5 h-5 text-emerald-950 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-black uppercase tracking-wider text-emerald-950 leading-none">FDA APPROVED</span>
                  <span className="text-[7.5px] font-bold text-emerald-900/40 uppercase tracking-widest leading-none">Food & Drugs Auth.</span>
                </div>
              </div>

              <div className="w-[1px] h-6 bg-emerald-950/10" />

              {/* GSA Stamp */}
              <div className="flex items-center gap-1.5">
                <svg className="w-5 h-5 text-emerald-950 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-black uppercase tracking-wider text-emerald-950 leading-none">GSA CERTIFIED</span>
                  <span className="text-[7.5px] font-bold text-emerald-900/40 uppercase tracking-widest leading-none">Ghana Standards Auth.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Copyright and Ghanaian Heritage Strip */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-emerald-950/10 pt-6 text-center sm:text-left text-xs font-sans text-emerald-900/60">
          <div className="flex flex-col gap-0.5">
            <p className="font-serif font-black text-emerald-950 text-sm">
              Coco<span className="text-brand-green">Lyf</span>
            </p>
            <p className="text-[11px]">
              © {new Date().getFullYear()} Pinnacle Coco Limited. All Rights Reserved.
            </p>
          </div>
          <div className="text-[10px] font-medium tracking-wide uppercase text-emerald-900/40 flex items-center gap-1">
            <span>Sustainably Sourced</span>
            <span>•</span>
            <span>Proudly Processed in Ghana</span>
            <span>🇬🇭</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
