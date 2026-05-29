import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import NetworkStatus from './components/NetworkStatus';
import Teaser from './components/Teaser';
import Signup from './components/Signup';
import Footer from './components/Footer';

export default function App() {
  return (
    <div 
      className="relative min-h-screen w-full font-sans overflow-x-hidden flex flex-col justify-between app-bg-wrapper"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(240, 251, 247, 0.88) 0%, rgba(255, 255, 255, 0.78) 100%), url('/background-image.jpeg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Ambient Animated Floating Background Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-emerald-300/15 blur-3xl pointer-events-none animate-float-slow -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl pointer-events-none animate-float-reverse -z-10" />
      <div className="absolute top-1/2 left-1/3 w-60 h-60 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none animate-float-slow -z-10" style={{ animationDelay: '-10s' }} />

      {/* Main Page Content */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-grow flex flex-col justify-between"
      >
        <div>
          {/* Brand Navigation Header */}
          <Header />

          {/* Hero Taglines */}
          <Hero />

          {/* Precision UTC/GMT Countdown Timer */}
          <Countdown />

          {/* Real-time Global Domain Routing Propagation Panel */}
          <NetworkStatus />
          
          {/* Interactive B2B and Customer Launch Sign-up */}
          <Signup />

          {/* Flagship Product Showcase Teasers */}
          <Teaser />
        </div>

        {/* Contact Info and FDA/GSA Badges Footer */}
        <Footer />
      </motion.div>
    </div>
  );
}
