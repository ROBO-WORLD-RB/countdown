import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Terminal, Cpu, Loader2, Check, RefreshCw } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const deployLogs = [
  "Spaceship DNS: Syncing domain namespace zone records for Cocolyf.com...",
  "Spaceship Edge: Binding global Cloudflare CDN endpoints... latency: 12ms",
  "Spaceship Build: Production build validated. Performance: 100/100.",
  "Spaceship SSL: Provisioning Let's Encrypt SSL/TLS secure certificate...",
  "Spaceship SSL: Handshake established. HTTPS secure padlock activated.",
  "CocoLyf NOC: FDA Ghana Approved Certificates verified successfully.",
  "CocoLyf NOC: Ghana Standards Authority (GSA) Quality conformity validated.",
  "Spaceship Mail: Mounting info@cocolyf.com domain redirection routes...",
  "Spaceship CDN: Flushing static resource cache across all 12 global nodes...",
  "Spaceship CDN: Pre-warming page load cache for Accra, London, and Virginia...",
  "NOC Audit: Mobile responsive layout verification and scroll test... OK",
  "NOC Audit: Fluid flex container scaling verified across iOS & Android.",
  "Spaceship DNS: Resolving default domain routes to secure target server IP...",
  "Spaceship NOC: Final integrity check in progress. Site build successful.",
  "CocoLyf Database: Warming secure subscriber email logging server...",
  "Spaceship CDN: Global propagation status verified at 100% online.",
  "Status Check: All server groups reporting 200 OK. Route binding success.",
];

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
  
  // States for deployment simulation
  const [isLiveDeploy, setIsLiveDeploy] = useState(false);
  const [deployPercent, setDeployPercent] = useState(0);
  const [deployLogsFeed, setDeployLogsFeed] = useState<string[]>([]);
  const [deployCompleted, setDeployCompleted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
      
      // If time hits 0, trigger deployment state automatically
      const diff = targetDateUTC - Date.now();
      if (diff <= 0 && !isLiveDeploy && !deployCompleted) {
        setIsLiveDeploy(true);
      }

      // Update live clock
      const now = new Date();
      setCurrentGMT(now.toUTCString().replace('GMT', 'UTC'));
    }, 1000);

    return () => clearInterval(timer);
  }, [isLiveDeploy, deployCompleted]);

  // Handle simulated deployment progress when active
  useEffect(() => {
    if (!isLiveDeploy) return;

    // Start logs
    const timestamp = new Date().toUTCString().replace('GMT', 'UTC').split(' ')[4];
    setDeployLogsFeed([
      `[${timestamp}] Launch Initiated: Cocolyf.com domain is now going live!`,
      `[${timestamp}] NOC Status: Spaceship.com is ensuring the site build is successful.`,
    ]);
    setDeployPercent(5);

    const progressInterval = setInterval(() => {
      setDeployPercent(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setDeployCompleted(true);
          return 100;
        }
        // Increments progress dynamically
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + increment);
      });
    }, 2500);

    const logsInterval = setInterval(() => {
      const time = new Date().toUTCString().replace('GMT', 'UTC').split(' ')[4];
      const randomLog = deployLogs[Math.floor(Math.random() * deployLogs.length)];
      setDeployLogsFeed(prev => [`[${time}] ${randomLog}`, ...prev.slice(0, 3)]);
    }, 3200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logsInterval);
    };
  }, [isLiveDeploy]);

  // Format helper
  const formatNum = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const renderCard = (value: number, label: string) => {
    const formatted = formatNum(value);
    
    return (
      <div className="flex flex-col items-center flex-1 min-w-[64px] xs:min-w-[72px] sm:min-w-[110px] md:min-w-[130px] max-w-[150px]">
        <div className="w-full aspect-square relative glass-panel-dark flex items-center justify-center rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(2,44,34,0.25)] border border-white/10 overflow-hidden group">
          <div className="absolute inset-0 bg-radial from-brand-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute left-0 right-0 h-[1px] bg-emerald-950/20 top-1/2 z-10 pointer-events-none" />
          
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
        
        <span className="mt-2.5 text-[8px] sm:text-xs font-bold text-emerald-950 tracking-[0.2em] uppercase select-none opacity-80 text-center">
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 md:mt-12 px-4 z-10">
      
      {/* Launch Control Panel & Preview Toggle */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="glass-badge py-1 px-3.5 rounded-full flex items-center gap-1.5 border border-brand-green/25 text-emerald-950">
          <Globe className="w-3.5 h-3.5 text-brand-green animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            {isLiveDeploy ? "Final Propagation Live" : "Launch Date: June 1, 2026 at 00:00 GMT"}
          </span>
        </div>

        {/* Quick Preview Toggle (Thoughtful UI feature for instant testing) */}
        <button
          onClick={() => {
            if (isLiveDeploy || deployCompleted) {
              setIsLiveDeploy(false);
              setDeployCompleted(false);
              setDeployPercent(0);
              setDeployLogsFeed([]);
            } else {
              setIsLiveDeploy(true);
            }
          }}
          className="glass-badge px-3 py-1 rounded-full border border-brand-green/30 text-[9px] font-bold uppercase tracking-wider text-emerald-950 hover:bg-brand-green hover:text-white transition-all cursor-pointer select-none active:scale-95 shadow-sm"
        >
          {isLiveDeploy || deployCompleted ? "Reset Timer" : "Preview Launch Engine"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!isLiveDeploy && !deployCompleted ? (
          // Countdown view
          <motion.div
            key="countdown"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 w-full max-w-2xl mx-auto">
              {renderCard(timeLeft.days, 'Days')}
              {renderCard(timeLeft.hours, 'Hours')}
              {renderCard(timeLeft.minutes, 'Minutes')}
              {renderCard(timeLeft.seconds, 'Seconds')}
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs font-mono text-emerald-900/60 flex items-center justify-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live GMT Time: <span className="text-emerald-950 font-bold select-all bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-950/5">{currentGMT || 'Calculating...'}</span>
              </p>
            </div>
          </motion.div>
        ) : (
          // Spaceship.com Final Launch & Deployment Console view
          <motion.div
            key="deployment"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 15 }}
            className="w-full max-w-2xl mx-auto glass-panel-dark p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden text-left"
          >
            {/* Background scanner line effect */}
            <div className="absolute inset-0 bg-linear-to-b from-brand-green/0 via-brand-green/5 to-brand-green/0 pointer-events-none animate-pulse" />

            {/* Title / Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-green/10 border border-brand-green/30 text-brand-green animate-spin" style={{ animationDuration: '6s' }}>
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-black text-xl text-white">
                    CocoLyf.com is Going Live!
                  </h3>
                  <p className="text-[10px] font-mono text-emerald-100/50 uppercase tracking-widest mt-0.5">
                    Spaceship.com Edge Configuration Engine
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-brand-green/20 px-3 py-1 rounded-full border border-brand-green/30">
                <Loader2 className="w-3.5 h-3.5 text-brand-green animate-spin" />
                <span className="text-[9px] font-bold text-white uppercase tracking-wider">Deploying...</span>
              </div>
            </div>

            {/* Assurance Statement */}
            <div className="mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
              <p className="text-xs sm:text-sm text-emerald-50/90 leading-relaxed font-sans font-medium">
                📢 <span className="font-bold text-brand-green">Attention Tribe:</span> Cocolyf.com is now going live! We are currently propagating edge servers, compiling static pages, and configuring the global routing engine. <span className="font-bold text-brand-green">Spaceship.com is ensuring the site build is 100% successful</span> for lightning-fast speeds. This final security handshake might take a short while—thank you for your patience!
              </p>
            </div>

            {/* Overall Deployment Progress Bar */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-emerald-100/60 uppercase tracking-widest">
                <span className="flex items-center gap-1"><Cpu className="w-3.5 h-3.5 text-brand-green animate-pulse" /> Edge Provisioning</span>
                <span className="text-brand-green">{deployPercent}% SECURED</span>
              </div>
              <div className="w-full h-3 bg-emerald-950/80 rounded-full border border-white/5 p-0.5 overflow-hidden shadow-inner relative">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${deployPercent}%` }}
                  transition={{ ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-brand-green relative shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                />
              </div>
            </div>

            {/* Active Logs Ticker Terminal */}
            <div className="w-full bg-emerald-950/90 p-4 rounded-2xl border border-white/5 font-mono text-[9px] sm:text-xs text-emerald-200/80 space-y-1.5 shadow-inner">
              <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-2 text-emerald-100/40 font-bold uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-brand-green" />
                <span>Spaceship Deployment Logs</span>
              </div>
              <div className="space-y-1 min-h-[90px]">
                <AnimatePresence mode="popLayout">
                  {deployLogsFeed.map((log, index) => (
                    <motion.div
                      key={log + index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="truncate"
                    >
                      <span className="text-brand-green font-bold mr-1">➜</span> {log}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Final Completion message */}
            {deployCompleted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-brand-green/10 border border-brand-green/30 rounded-xl flex items-center gap-2 text-xs font-bold text-brand-green"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Deploy Finished! Spaceship.com records confirmed. Opening gateway redirect...</span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
