import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award, DollarSign } from 'lucide-react';

const reasons = [
  {
    icon: <Users className="w-10 h-10" />,
    title: "Experienced Engineers",
    description: "Our team brings decades of technical expertise to every project."
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "High-Quality Materials",
    description: "We source only premium materials to ensure lasting durability."
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Safety Standards",
    description: "Rigorous safety protocols that exceed industry requirements."
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "On-Time Delivery",
    description: "Strict project timelines backed by efficient management."
  },
  {
    icon: <DollarSign className="w-10 h-10" />,
    title: "Affordable Pricing",
    description: "Transparent costs and competitive rates without compromising quality."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/5 -skew-x-12 transform translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-12 bg-yellow-400" />
                <span className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-sm">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8 leading-tight">
                Setting The <span className="text-yellow-400">Gold Standard</span> In Construction
              </h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed max-w-xl">
                We combine traditional craftsmanship with cutting-edge technology to deliver results that stand the test of time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <div className="text-yellow-400">{reason.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold uppercase italic mb-2">{reason.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7edcfbc1-83e9-427d-b5ce-de473709ff99/about-us-engineers-3f95cb66-1773301514527.webp" 
                  alt="Quality control" 
                  className="w-full h-full object-cover grayscale opacity-60"
                />
                <div className="absolute inset-0 border-[20px] border-yellow-400/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-400 flex flex-col items-center justify-center p-6 text-zinc-900 text-center">
                  <span className="text-5xl font-black mb-1">100%</span>
                  <span className="text-xs font-bold uppercase tracking-widest leading-tight">Satisfaction Guaranteed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;