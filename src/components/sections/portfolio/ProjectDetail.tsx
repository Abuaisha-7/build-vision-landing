import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MapPin, 
  Calendar, 
  Ruler, 
  User, 
  Building, 
  ArrowRight, 
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  HardHat
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  year: string;
  area: string;
  client: string;
  description: string;
  image: string;
}

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ 
  project, 
  isOpen, 
  onClose,
  onNext,
  onPrev
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/95 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-7xl max-h-[90vh] bg-white overflow-hidden flex flex-col md:flex-row shadow-2xl border border-zinc-200"
          >
            {/* Close Button - Desktop */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-3 bg-zinc-900 text-white hover:bg-yellow-400 hover:text-zinc-900 transition-all hidden md:block"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Side: Visuals */}
            <div className="w-full md:w-[60%] lg:w-[65%] relative overflow-hidden bg-zinc-100 group">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent z-10" />
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 z-20">
                <Badge className="bg-yellow-400 text-zinc-900 font-black uppercase rounded-none px-6 py-2 text-sm border-none shadow-xl tracking-widest">
                  {project.category}
                </Badge>
              </div>

              {/* Navigation Controls on Image */}
              <div className="absolute bottom-8 left-8 z-20 flex gap-4">
                <button 
                  onClick={(e) => { e.stopPropagation(); onPrev?.(); }}
                  className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-yellow-400 hover:text-zinc-900 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); onNext?.(); }}
                  className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-yellow-400 hover:text-zinc-900 transition-all"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Decorative Blueprint Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-0 left-[20%] w-[1px] h-full bg-white/30" />
                <div className="absolute top-0 left-[40%] w-[1px] h-full bg-white/30" />
                <div className="absolute top-0 left-[60%] w-[1px] h-full bg-white/30" />
                <div className="absolute top-[30%] left-0 w-full h-[1px] bg-white/30" />
                <div className="absolute top-[70%] left-0 w-full h-[1px] bg-white/30" />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-[40%] lg:w-[35%] bg-white flex flex-col h-full">
              {/* Mobile Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2 bg-zinc-900 text-white md:hidden"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12">
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-[2px] w-12 bg-yellow-400" />
                      <span className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px]">Project Showcase</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 uppercase italic leading-none mb-4">
                      {project.title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 !== 0 ? 'text-yellow-400 block' : 'block'}>
                          {word}
                        </span>
                      ))}
                    </h2>
                    <div className="flex items-center gap-2 text-zinc-500 font-bold tracking-tight">
                      <MapPin className="w-4 h-4 text-yellow-500" />
                      {project.location}
                    </div>
                  </div>

                  {/* Project Specs Grid */}
                  <div className="grid grid-cols-2 gap-y-8 gap-x-4 py-8 border-y border-zinc-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Year</span>
                      </div>
                      <p className="font-black text-zinc-900 uppercase tracking-tight">{project.year}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <Ruler className="w-4 h-4" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Scale</span>
                      </div>
                      <p className="font-black text-zinc-900 uppercase tracking-tight">{project.area}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <User className="w-4 h-4" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Client</span>
                      </div>
                      <p className="font-black text-zinc-900 uppercase tracking-tight truncate">{project.client}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <Building className="w-4 h-4" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Sector</span>
                      </div>
                      <p className="font-black text-zinc-900 uppercase tracking-tight">{project.category}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <h4 className="text-zinc-900 font-black uppercase tracking-widest text-sm flex items-center gap-2">
                      <HardHat className="w-4 h-4 text-yellow-500" />
                      Scope of Work
                    </h4>
                    <p className="text-zinc-600 leading-relaxed font-medium">
                      {project.description}
                    </p>
                    
                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 gap-2 pt-4">
                      {['Quality Assurance', 'Safety First', 'On-time Delivery'].map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-xs font-bold text-zinc-800 bg-zinc-50 p-2 border-l-2 border-yellow-400">
                          <CheckCircle2 className="w-3 h-3 text-yellow-500" />
                          {highlight.toUpperCase()}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-8 md:p-12 bg-zinc-50 border-t border-zinc-100 mt-auto">
                <Button 
                  onClick={() => {
                    toast.success("Inquiry Received", {
                      description: `Our consultants will contact you about ${project.title} within 24 hours.`
                    });
                    onClose();
                  }}
                  className="w-full h-16 bg-zinc-900 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 hover:text-zinc-900 transition-all rounded-none flex items-center justify-center gap-3 group"
                >
                  Request Technical Data
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <p className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest text-center mt-4">
                  Reference ID: NM-{project.id}-{project.year}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetail;