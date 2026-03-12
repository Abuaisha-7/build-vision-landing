import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building2, 
  Truck, 
  Hammer, 
  Briefcase, 
  PenTool,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Residential Construction",
    description: "Custom homes designed for your lifestyle, built with the highest quality standards."
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Commercial Construction",
    description: "Modern office spaces and retail centers tailored to support business growth."
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Road Construction",
    description: "Durable infrastructure and highway systems built with precision engineering."
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "Renovation & Remodeling",
    description: "Transforming existing spaces into modern masterpieces with expert craftsmanship."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Project Management",
    description: "End-to-end management ensuring your project stays on time and within budget."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Engineering Consulting",
    description: "Expert advice and technical solutions for complex structural challenges."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-[2px] w-12 bg-yellow-400" />
              <span className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-sm">Our Services</span>
              <span className="h-[2px] w-12 bg-yellow-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-6">
              Expertise In Every <span className="text-yellow-400">Sector</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              We offer a comprehensive range of construction services to meet the diverse needs of our clients.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 bg-zinc-800/50 hover:bg-zinc-800 transition-all duration-300 border border-zinc-800"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/5 group-hover:bg-yellow-400 transition-colors duration-500 flex items-center justify-center">
                <div className="text-yellow-400 group-hover:text-zinc-900 transition-colors duration-500">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold uppercase italic mb-4 mt-8">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;