import React from 'react';
import { HardHat, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-yellow-400 p-1.5 rounded-sm">
                <HardHat className="w-6 h-6 text-zinc-900" />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter text-white">
                NEMAR <span className="text-yellow-400">Contractor</span>
              </span>
            </div>
            <p className="text-zinc-500 leading-relaxed mb-8">
              Building sustainable futures through innovation, quality engineering, and commitment to excellence since 1998.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-zinc-900 hover:bg-yellow-400 hover:text-zinc-900 transition-all flex items-center justify-center">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase italic mb-8 border-l-4 border-yellow-400 pl-4">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'Recent Projects', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 hover:text-yellow-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-zinc-700 group-hover:bg-yellow-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase italic mb-8 border-l-4 border-yellow-400 pl-4">Our Services</h4>
            <ul className="space-y-4">
              {['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Renovations'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 hover:text-yellow-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-zinc-700 group-hover:bg-yellow-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase italic mb-8 border-l-4 border-yellow-400 pl-4">Newsletter</h4>
            <p className="text-zinc-500 mb-6">Subscribe to get latest construction news and project updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address"
                className="bg-zinc-900 border-none p-4 text-sm w-full outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 text-zinc-900 px-6 font-bold">JOIN</button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} NEMAR General Contractor. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-zinc-600 text-sm">
            <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-zinc-900 hover:bg-yellow-400 hover:text-zinc-900 transition-all flex items-center justify-center shadow-lg"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;