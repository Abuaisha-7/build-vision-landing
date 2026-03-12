import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import ProjectDetail from './portfolio/ProjectDetail';

const categories = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Industrial', 'Renovation'];

const projects = [
  {
    id: 1,
    title: "The Glass Tower",
    location: "New York, NY",
    category: "Commercial",
    year: "2023",
    area: "450,000 sq ft",
    client: "Global Tech Corp",
    description: "A state-of-the-art glass skyscraper featuring sustainable energy systems and flexible office spaces. This landmark project redefined the city skyline with its innovative structural design.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7edcfbc1-83e9-427d-b5ce-de473709ff99/commercial-project-e4008c7c-1773301489534.webp"
  },
  {
    id: 2,
    title: "Azure Villa",
    location: "Malibu, CA",
    category: "Residential",
    year: "2022",
    area: "8,500 sq ft",
    client: "Private Client",
    description: "A luxury beachfront residence designed to blend seamlessly with its natural surroundings. Features include floor-to-ceiling glass walls and an infinity pool overlooking the Pacific.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7edcfbc1-83e9-427d-b5ce-de473709ff99/residential-project-f760a81d-1773301503799.webp"
  },
  {
    id: 3,
    title: "Highway 101 Expansion",
    location: "Austin, TX",
    category: "Infrastructure",
    year: "2024",
    area: "12 miles",
    client: "State DOT",
    description: "A complex infrastructure project involving bridge construction, lane expansions, and smart traffic management systems to improve regional connectivity.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7edcfbc1-83e9-427d-b5ce-de473709ff99/road-construction-project-9df0051b-1773301499565.webp"
  },
  {
    id: 4,
    title: "Global Logistics Hub",
    location: "Chicago, IL",
    category: "Industrial",
    year: "2021",
    area: "1.2M sq ft",
    client: "Logistics Pro",
    description: "One of the largest distribution centers in the Midwest, optimized for automated storage and high-frequency logistics operations.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7edcfbc1-83e9-427d-b5ce-de473709ff99/industrial-project-017197ca-1773301489394.webp"
  },
  {
    id: 5,
    title: "Modern Loft Renovation",
    location: "Seattle, WA",
    category: "Renovation",
    year: "2023",
    area: "3,200 sq ft",
    client: "Urban Living Co.",
    description: "Transformation of an old industrial warehouse into a high-end residential loft, preserving historic features while adding modern luxury amenities.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7edcfbc1-83e9-427d-b5ce-de473709ff99/hero-construction-site-ec61b2d3-1773301483732.webp"
  },
  {
    id: 6,
    title: "Riverfront Office",
    location: "Portland, OR",
    category: "Commercial",
    year: "2022",
    area: "120,000 sq ft",
    client: "Riverside Partners",
    description: "A mixed-use commercial development focusing on wellness and outdoor accessibility, featuring vertical gardens and river view balconies.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7edcfbc1-83e9-427d-b5ce-de473709ff99/about-us-engineers-3f95cb66-1773301514527.webp"
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    toast.success(`Showing ${cat} projects`, {
      description: `We have ${cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length} projects in this category.`,
    });
  };

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="h-[2px] w-12 bg-yellow-400" />
              <span className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-sm">Portfolio</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-zinc-900 uppercase italic"
            >
              Our Iconic <span className="text-yellow-400">Projects</span>
            </motion.h2>
          </div>
          
          {/* Filtering Buttons */}
          <div className="flex gap-4 overflow-x-auto pb-4 w-full md:w-auto no-scrollbar">
            {categories.map((cat, i) => (
              <button 
                key={cat} 
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border-b-2 ${
                  activeCategory === cat 
                  ? 'border-yellow-400 text-zinc-900 bg-yellow-50' 
                  : 'border-transparent text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden bg-zinc-900 aspect-[4/5] cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                />
                
                {/* Hover Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <Badge className="w-fit mb-4 bg-yellow-400 text-zinc-900 hover:bg-yellow-500 border-none font-black uppercase rounded-none">
                    {project.category}
                  </Badge>
                  <h3 className="text-white text-3xl font-black uppercase italic mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-300 text-sm font-medium">
                    <MapPin className="w-4 h-4 text-yellow-400" />
                    {project.location}
                  </div>
                </div>

                {/* Corner Button */}
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center shadow-2xl">
                    <Maximize2 className="w-6 h-6 text-zinc-900" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetail 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

export default Portfolio;