import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8',
        isScrolled ? 'bg-zinc-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 p-1.5 rounded-sm">
            <HardHat className="w-6 h-6 text-zinc-900" />
          </div>
          <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white">
            NEMAR <span className="text-yellow-400">Contractor</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider text-white hover:text-yellow-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-zinc-900 px-6 py-2.5 rounded-none font-black uppercase text-sm tracking-widest transition-all transform hover:-translate-y-1 active:scale-95">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold uppercase tracking-widest text-white hover:text-yellow-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-yellow-400 text-zinc-900 py-4 rounded-none font-black uppercase tracking-widest text-sm">
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;