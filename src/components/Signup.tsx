import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, AlertCircle, Sparkles, Building2, User } from 'lucide-react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [isRetail, setIsRetail] = useState(true);
  const [isB2B, setIsB2B] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Email regex verification
  const validateEmail = (val: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(val);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(''); // Reset error on typing
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check validation
    if (!email) {
      setError('Email address is required.');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!isRetail && !isB2B) {
      setError('Please select at least one role (Customer or Partner).');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate server request
    setTimeout(() => {
      // Store in local storage for local demo
      const subscriptions = JSON.parse(localStorage.getItem('cocolyf_subscribers') || '[]');
      subscriptions.push({
        email,
        retail: isRetail,
        distributor: isB2B,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('cocolyf_subscribers', JSON.stringify(subscriptions));

      setLoading(false);
      setSuccess(true);
      setEmail('');
    }, 1200);
  };

  return (
    <div className="w-full px-4 max-w-xl mx-auto mt-12 md:mt-16 z-10">
      <div className="glass-panel-light p-6 md:p-8 rounded-3xl border border-emerald-950/10 shadow-[0_30px_60px_rgba(2,44,34,0.06)] relative overflow-hidden">
        
        {/* Success Modal Overlay */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 z-20"
            >
              <motion.div
                initial={{ scale: 0.3, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="w-16 h-16 rounded-full bg-brand-green flex items-center justify-center text-white mb-4 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              >
                <Check className="w-8 h-8 stroke-[3]" />
              </motion.div>
              
              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-serif font-black text-2xl text-white mb-2"
              >
                Welcome to the Tribe!
              </motion.h3>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-emerald-100/80 text-sm max-w-xs mx-auto leading-relaxed"
              >
                Thank you for subscribing. We will keep you updated with exclusive early-access perks and tropical announcements as we launch!
              </motion.p>
              
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setSuccess(false)}
                className="mt-6 px-6 py-2 rounded-xl bg-white text-emerald-950 font-bold text-xs uppercase tracking-widest hover:bg-emerald-50 active:scale-95 transition-all shadow-md"
              >
                Close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Signup Header */}
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold text-brand-green uppercase tracking-[0.25em] flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Launch Access
          </span>
          <h2 className="font-serif font-black text-xl md:text-2xl text-emerald-950 mt-1">
            Join the CocoLyf Launch List
          </h2>
          <p className="text-xs text-emerald-900/60 font-sans mt-1">
            Be the first to know when we are live and unlock exclusive launch rewards.
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email input field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-900/40">
              <Mail className="w-5 h-5" />
            </div>
            
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
              className={`w-full pl-10 pr-10 py-3 rounded-2xl font-sans text-sm outline-none transition-all duration-300 bg-white/70 border ${
                error 
                  ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100 shadow-[0_0_10px_rgba(239,68,68,0.05)]' 
                  : email && validateEmail(email)
                    ? 'border-brand-green/40 focus:border-brand-green/60 focus:ring-2 focus:ring-emerald-100'
                    : 'border-emerald-950/10 focus:border-brand-green/50 focus:ring-2 focus:ring-emerald-500/10'
              } text-emerald-950 placeholder-emerald-950/30`}
            />

            {/* validation feedback icons */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {error && <AlertCircle className="w-5 h-5 text-red-500 animate-bounce" />}
              {email && validateEmail(email) && <Check className="w-5 h-5 text-brand-green" />}
            </div>
          </div>

          {/* Validation Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="text-xs text-red-500 font-bold flex items-center gap-1 mt-1 pl-1"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Checkboxes / Selection Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-2.5 border-y border-emerald-950/5">
            {/* Retail Customer Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer group select-none">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isRetail}
                  onChange={() => setIsRetail(!isRetail)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                  isRetail 
                    ? 'bg-brand-green border-brand-green text-white shadow-md' 
                    : 'border-emerald-950/20 bg-white/40 group-hover:border-brand-green/50'
                }`}>
                  <User className={`w-3.5 h-3.5 ${isRetail ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} transition-all`} />
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-950 select-none">
                Retail Customer
              </span>
            </label>

            {/* Distributor / Partner Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer group select-none">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isB2B}
                  onChange={() => setIsB2B(!isB2B)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                  isB2B 
                    ? 'bg-brand-green border-brand-green text-white shadow-md' 
                    : 'border-emerald-950/20 bg-white/40 group-hover:border-brand-green/50'
                }`}>
                  <Building2 className={`w-3.5 h-3.5 ${isB2B ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} transition-all`} />
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-950 select-none">
                Distributor / B2B Partner
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-2xl bg-brand-green hover:bg-emerald-500 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(16,185,129,0.25)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.35)] transition-all duration-300"
          >
            {loading ? (
              <span className="inline-block w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
            ) : (
              <>
                <span>Notify Me At Launch</span>
                <Check className="w-4 h-4 stroke-[3]" />
              </>
            )}
          </motion.button>
          
        </form>
      </div>
    </div>
  );
}
