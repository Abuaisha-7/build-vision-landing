import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7edcfbc1-83e9-427d-b5ce-de473709ff99/about-us-engineers-3f95cb66-1773301514527.webp" 
                alt="Construction Engineers" 
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 border-8 border-white shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-yellow-400 p-10 hidden md:block">
                <div className="text-zinc-900">
                  <span className="block text-6xl font-black leading-none">25+</span>
                  <span className="block text-sm font-bold uppercase tracking-widest mt-2 leading-tight">Years of<br />Excellence</span>
                </div>
              </div>
            </motion.div>
            <div className="absolute top-10 left-10 w-full h-full border-2 border-yellow-400/20 -z-10" />
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-12 bg-yellow-400" />
                <span className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-sm">About NEMAR General Contractor</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-8 uppercase italic leading-tight">
                Pioneering the Future of <span className="text-yellow-400">Construction</span>
              </h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                At NEMAR General Contractor, we don't just build structures; we build legacies. Founded on principles of integrity and innovation, we've grown into a leading force in the construction industry.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {[
                  'Licensed & Certified',
                  'Award-Winning Team',
                  'Sustainable Practices',
                  'Safety First Culture',
                  'Precision Engineering',
                  'Customer-Centric approach'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-yellow-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-zinc-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 border-t border-zinc-100 pt-10">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-200" />
                  ))}
                </div>
                <div>
                  <p className="text-zinc-900 font-bold">Over 500+ satisfied clients</p>
                  <p className="text-zinc-500 text-sm">Join our growing community of happy partners.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;