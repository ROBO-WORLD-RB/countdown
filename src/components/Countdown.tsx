import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  // Target date: June 1, 2026 00:00:00 UTC (GMT)
  // Note: Month in Date.UTC is 0-indexed (5 = June)
  const targetDateUTC = Date.UTC(2026, 5, 1, 0, 0, 0);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDateUTC - Date.now();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [currentGMT, setCurrentGMT] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      
      // Update the live GMT clock
      const now = new Date();
      setCurrentGMT(
        now.toUTCString().replace('GMT', 'UTC')
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format helper to ensure double digits
  const formatNum = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const renderCard = (value: number, label: string) => {
    const formatted = formatNum(value);
    
    return (
      <div className="flex flex-col items-center flex-1 min-w-[64px] xs:min-w-[72px] sm:min-w-[110px] md:min-w-[130px] max-w-[150px]">
        {/* Flip-card Container */}
        <div className="w-full aspect-square relative glass-panel-dark flex items-center justify-center rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(2,44,34,0.25)] border border-white/10 overflow-hidden group">
          {/* Subtle glow border hover */}
          <div className="absolute inset-0 bg-radial from-brand-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Card Middle Divider line */}
          <div className="absolute left-0 right-0 h-[1px] bg-emerald-950/20 top-1/2 z-10 pointer-events-none" />
          
          {/* Number Display with slide animation */}
          <div className="relative h-12 xs:h-16 sm:h-24 md:h-28 w-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={value}
                initial={{ y: 30, opacity: 0, rotateX: -45 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -30, opacity: 0, rotateX: 45 }}
                transition={{ 
                  y: { type: "spring", stiffness: 120, damping: 15 },
                  opacity: { duration: 0.15 },
                  rotateX: { duration: 0.25 }
                }}
                className="font-sans font-extrabold text-2xl xs:text-3xl sm:text-6xl md:text-7xl text-white select-none inline-block drop-shadow-md"
              >
                {formatted}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Label */}
        <span className="mt-2.5 text-[8px] sm:text-xs font-bold text-emerald-950 tracking-[0.2em] uppercase select-none opacity-80 text-center">
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 md:mt-12 px-4 z-10">
      {/* Target Date Banner */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="glass-badge py-1 px-3.5 rounded-full flex items-center gap-1.5 border border-brand-green/25 text-emerald-950">
          <Globe className="w-3.5 h-3.5 text-brand-green animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            Launch Date: June 1, 2026 at 00:00 GMT
          </span>
        </div>
      </div>

      {/* Countdown Grid */}
      <div className="flex justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 w-full max-w-2xl mx-auto">
        {renderCard(timeLeft.days, 'Days')}
        {renderCard(timeLeft.hours, 'Hours')}
        {renderCard(timeLeft.minutes, 'Minutes')}
        {renderCard(timeLeft.seconds, 'Seconds')}
      </div>

      {/* Synchronized Live Clock Banner */}
      <div className="mt-6 text-center">
        <p className="text-xs font-mono text-emerald-900/60 flex items-center justify-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Live GMT Time: <span className="text-emerald-950 font-bold select-all bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-950/5">{currentGMT || 'Calculating...'}</span>
        </p>
      </div>
    </div>
  );
}
