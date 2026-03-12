import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "James Wilson",
    role: "Property Developer",
    content: "NEMAR General Contractor delivered our commercial project ahead of schedule and with incredible attention to detail. Their professionalism is unmatched in the industry.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Homeowner",
    content: "Choosing them for our home renovation was the best decision. They communicated throughout the process and the results exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Rodriquez",
    role: "Site Manager",
    content: "As a collaborator, I've seen many companies cut corners. NEMAR General Contractor is different. Their commitment to safety and quality is genuine.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-[2px] w-12 bg-yellow-400" />
              <span className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-sm">Testimonials</span>
              <span className="h-[2px] w-12 bg-yellow-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase italic">
              What Our <span className="text-yellow-400">Clients</span> Say
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : index === 2 ? 20 : 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 shadow-xl border-b-4 border-yellow-400 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-zinc-100" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-600 italic mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-200 rounded-full" />
                <div>
                  <h4 className="text-zinc-900 font-bold uppercase tracking-tight">{testimonial.name}</h4>
                  <p className="text-yellow-600 text-xs font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;