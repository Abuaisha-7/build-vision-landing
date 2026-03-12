import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! Our team will contact you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-12 bg-yellow-400" />
              <span className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-sm">Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase italic mb-8 leading-tight">
              Let's Build Your <span className="text-yellow-400">Next Project</span>
            </h2>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
              Have a question or ready to start your project? Get in touch with our expert team today for a free consultation and quote.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-yellow-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-bold uppercase tracking-widest text-sm mb-1">Our Office</h4>
                  <p className="text-zinc-500">123 Construction Plaza, Suite 456<br />Metropolis, NY 10001</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-yellow-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-bold uppercase tracking-widest text-sm mb-1">Phone Number</h4>
                  <p className="text-zinc-500">+1 (555) 123-4567<br />+1 (555) 765-4321</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-yellow-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-bold uppercase tracking-widest text-sm mb-1">Email Address</h4>
                  <p className="text-zinc-500">info@nemargc.com<br />quotes@nemargc.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 md:p-12 relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 -z-0" />
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-zinc-800 border-none p-4 text-white focus:ring-2 focus:ring-yellow-400 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-zinc-800 border-none p-4 text-white focus:ring-2 focus:ring-yellow-400 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-zinc-800 border-none p-4 text-white focus:ring-2 focus:ring-yellow-400 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Message</label>
                <textarea 
                  required
                  rows={4} 
                  placeholder="Tell us about your project..."
                  className="w-full bg-zinc-800 border-none p-4 text-white focus:ring-2 focus:ring-yellow-400 transition-all outline-none resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-black uppercase tracking-widest py-4 flex items-center justify-center gap-2 transition-all"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
        
        {/* Map Placeholder */}
        <div className="mt-24 h-[400px] bg-zinc-100 relative grayscale group overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-200">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-zinc-400 mx-auto mb-4" />
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Interactive Map Placeholder</p>
            </div>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976369780145!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2susa!4v1645000000000!5m2!1sen!2susa" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            className="opacity-60 group-hover:opacity-100 transition-opacity duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;