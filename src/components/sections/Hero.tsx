import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://storage.googleapis.com/dala-prod-public-storage/generated-images/7edcfbc1-83e9-427d-b5ce-de473709ff99/hero-construction-site-ec61b2d3-1773301483732.webp")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[2px] w-12 bg-yellow-400" />
              <span className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-sm">Welcome to NEMAR General Contractor</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 uppercase italic">
              Building Your <span className="text-yellow-400">Vision</span> Into Reality
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              With over 25 years of excellence, we provide world-class construction services delivered with precision, safety, and unmatched quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden bg-yellow-400 px-8 py-5 flex items-center justify-center gap-2 font-black uppercase tracking-widest text-zinc-900 transition-transform active:scale-95">
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-5 border-2 border-white/30 hover:border-white text-white flex items-center justify-center gap-2 font-black uppercase tracking-widest transition-colors backdrop-blur-sm">
                View Projects
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical bar */}
      <div className="hidden lg:block absolute right-12 bottom-0 w-[1px] h-32 bg-zinc-700/50" />
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 text-white/10 font-black text-9xl vertical-text select-none">
        ESTD 1998
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default Hero;