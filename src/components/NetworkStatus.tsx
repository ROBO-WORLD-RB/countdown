import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Server, Activity, CheckCircle2, RefreshCw } from 'lucide-react';

interface Node {
  country: string;
  city: string;
  flag: string;
  ip: string;
  latency: number;
}

const globalNodes: Node[] = [
  { country: 'United States', city: 'Virginia', flag: '🇺🇸', ip: '52.95.245.19', latency: 68 },
  { country: 'United Kingdom', city: 'London', flag: '🇬🇧', ip: '18.130.0.125', latency: 74 },
  { country: 'Nigeria', city: 'Lagos', flag: '🇳🇬', ip: '102.164.20.5', latency: 18 },
  { country: 'Germany', city: 'Frankfurt', flag: '🇩🇪', ip: '3.120.0.15', latency: 82 },
  { country: 'Japan', city: 'Tokyo', flag: '🇯🇵', ip: '54.250.0.22', latency: 198 },
  { country: 'South Africa', city: 'Cape Town', flag: '🇿🇦', ip: '13.244.0.10', latency: 45 },
  { country: 'Canada', city: 'Montreal', flag: '🇨🇦', ip: '35.180.0.8', latency: 88 },
  { country: 'United Arab Emirates', city: 'Dubai', flag: '🇦🇪', ip: '15.185.0.41', latency: 110 },
  { country: 'Brazil', city: 'São Paulo', flag: '🇧🇷', ip: '54.233.0.19', latency: 140 },
  { country: 'Australia', city: 'Sydney', flag: '🇦🇺', ip: '13.54.0.98', latency: 220 },
  { country: 'Singapore', city: 'Singapore', flag: '🇸🇬', ip: '46.137.200.2', latency: 165 },
  { country: 'Ghana', city: 'Accra', flag: '🇬🇭', ip: '41.218.64.12', latency: 8 },
];

export default function NetworkStatus() {
  // Start date: May 28, 2026 19:19:00 UTC (When project began)
  const startDate = Date.UTC(2026, 4, 28, 19, 19, 0);
  // Target date: June 1, 2026 00:00:00 UTC
  const targetDate = Date.UTC(2026, 5, 1, 0, 0, 0);

  const [progress, setProgress] = useState(0);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [logFeed, setLogFeed] = useState<string[]>([]);
  const [onlineNodesCount, setOnlineNodesCount] = useState(0);

  // Calculate real-time mathematical progress synced with the countdown days
  useEffect(() => {
    const updateProgress = () => {
      const now = Date.now();
      const totalDuration = targetDate - startDate;
      const elapsed = now - startDate;
      
      let percentage = (elapsed / totalDuration) * 100;
      
      // Clamp boundaries
      if (percentage < 10) percentage = 12.3854; // default minimum initiation status
      if (percentage > 100) percentage = 100;
      
      setProgress(percentage);
      
      // Calculate how many nodes are fully "Online" based on percentage
      const totalNodes = globalNodes.length;
      const count = Math.min(
        totalNodes,
        Math.floor((percentage / 100) * totalNodes) + 1
      );
      setOnlineNodesCount(count);
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000); // High frequency updates for precision decimals
    return () => clearInterval(interval);
  }, []);

  // Live network activity ticker log
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random node to simulate propagation/sync checks
      const randomIndex = Math.floor(Math.random() * globalNodes.length);
      setActiveNodeIndex(randomIndex);
      
      const node = globalNodes[randomIndex];
      const isPropagated = randomIndex < onlineNodesCount;
      const timestamp = new Date().toUTCString().replace('GMT', 'UTC').split(' ')[4];
      
      const logEntries = [
        `[${timestamp}] Spaceship DNS Query: ${node.flag} ${node.city} (${node.country}) | ping: ${node.latency}ms`,
        isPropagated 
          ? `[${timestamp}] Spaceship DNS: ${node.flag} ${node.city} Edge routing resolved successfully.`
          : `[${timestamp}] Spaceship Sync: ${node.flag} ${node.city} network configuration in progress...`
      ];

      setLogFeed(prev => [logEntries[Math.floor(Math.random() * logEntries.length)], ...prev.slice(0, 4)]);
    }, 4000);

    return () => clearInterval(interval);
  }, [onlineNodesCount, progress]);

  // Initial log entries on mount
  useEffect(() => {
    const timestamp = new Date().toUTCString().replace('GMT', 'UTC').split(' ')[4];
    setLogFeed([
      `[${timestamp}] Registrar Connection: Secure handshake established with Spaceship.com APIs.`,
      `[${timestamp}] DNS Status: Spaceship.com engineering team is actively configuring global routing namespaces...`,
      `[${timestamp}] Routing Core: Localizing CDN endpoints across all 6 major continents.`
    ]);
  }, []);

  return (
    <div className="w-full px-4 md:px-12 max-w-5xl mx-auto mt-12 md:mt-16 z-10">
      <div className="glass-panel-dark p-4 xs:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Background glow lines */}
        <div className="absolute inset-0 bg-radial from-brand-green/5 to-transparent pointer-events-none" />
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-green/10 border border-brand-green/20 text-brand-green animate-pulse">
              <Globe className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                Network Propagation
              </span>
              <h2 className="font-serif font-black text-xl md:text-2xl text-white">
                Global Domain Routing Status
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1.5 rounded-xl xs:px-4 xs:py-2 xs:rounded-2xl border border-white/10">
            <Server className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
            <span className="text-[10px] xs:text-xs font-mono font-bold text-white uppercase tracking-wider whitespace-nowrap">
              Registrar: Spaceship.com | DNS Active
            </span>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="w-full space-y-3 mb-8">
          <div className="flex justify-between items-end text-xs font-bold font-mono text-emerald-100/70">
            <span className="flex items-center gap-1.5 uppercase tracking-wider">
              <Activity className="w-4 h-4 text-brand-green animate-bounce" /> Propagation Progress
            </span>
            <span className="text-white text-sm tracking-widest bg-brand-green/20 px-2 py-0.5 rounded border border-brand-green/20">
              {progress.toFixed(4)}% SECURE
            </span>
          </div>
          
          {/* Main Progress track */}
          <div className="w-full h-4 bg-emerald-950/80 rounded-full border border-white/5 p-0.5 overflow-hidden shadow-inner relative">
            <motion.div 
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-600 via-brand-green to-emerald-300 relative shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            >
              {/* Sliding glass highlight */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            </motion.div>
          </div>
          
          <div className="flex flex-col xs:flex-row justify-between items-center text-[10px] sm:text-xs font-bold text-emerald-100/40 uppercase tracking-widest gap-2">
            <span>Stage 1: Spaceship.com DNS Provisioning [ONLINE]</span>
            <span>Stage 2: Spaceship Global Edge Routing [{onlineNodesCount}/{globalNodes.length} Nodes ONLINE]</span>
          </div>
        </div>

        {/* Grid of Global Country Nodes */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 xs:gap-3.5 mb-8">
          {globalNodes.map((node, idx) => {
            const isOnline = idx < onlineNodesCount;
            const isActive = idx === activeNodeIndex;
            
            return (
              <div 
                key={node.city}
                className={`p-2.5 xs:p-3 rounded-xl sm:rounded-2xl border transition-all duration-500 relative flex flex-col justify-between ${
                  isActive 
                    ? 'bg-brand-green/20 border-brand-green shadow-[0_0_15px_rgba(16,185,129,0.25)] scale-105 z-10' 
                    : isOnline
                      ? 'bg-emerald-950/40 border-brand-green/20 text-emerald-50'
                      : 'bg-emerald-950/20 border-white/5 text-emerald-100/40'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xl select-none" role="img" aria-label={node.country}>
                    {node.flag}
                  </span>
                  {isOnline ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                  ) : (
                    <RefreshCw className="w-3 h-3 text-emerald-100/30 animate-spin" />
                  )}
                </div>

                <div className="mt-3 text-left">
                  <h4 className="text-xs font-black truncate">{node.city}</h4>
                  <p className="text-[9px] font-mono opacity-60 tracking-wider truncate">
                    {isOnline ? `${node.latency}ms` : 'propagating...'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-time Propagation Server Terminal Log */}
        <div className="w-full text-left bg-emerald-950/80 p-3 xs:p-4 rounded-xl sm:rounded-2xl border border-white/5 font-mono text-[9px] sm:text-xs text-emerald-200/80 space-y-1.5 shadow-inner min-h-[120px]">
          <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-2 text-emerald-100/40 font-bold uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-[9px]">Live Propagation Logs</span>
          </div>

          <div className="space-y-1 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {logFeed.map((log, index) => (
                <motion.div
                  key={log + index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="truncate"
                >
                  <span className="text-brand-green font-bold">➜</span> {log}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
