import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Eye, Link as LinkIcon, RefreshCcw } from 'lucide-react';

// Moved 'All' to the end of the list as requested
const CATEGORIES = ['Software', 'Web Design', 'Data Science', 'AI', 'Graphic Design', 'All'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(6); // Reset visible count when category changes
  };

  return (
    <section id="work" className="py-20 px-6 lg:px-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-gray-400 text-xs tracking-[4px] uppercase block mb-2 font-bold">My Work</span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark mb-6">Recent Work</h2>
        
        <div className="flex flex-wrap gap-4 md:gap-8 mt-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? 'text-primary border-b border-primary' 
                  : 'text-gray-500 hover:text-primary'
              } pb-1`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {visibleProjects.map((project) => (
          <div key={project.id} className="group relative h-64 overflow-hidden bg-gray-100">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-white text-xl font-serif mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <a href="#">{project.title}</a>
              </h3>
              <span className="text-white/80 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {project.category}
              </span>
              <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                <button className="p-2 bg-white text-black rounded hover:bg-black hover:text-white transition-colors">
                  <Eye size={18} />
                </button>
                <button className="p-2 bg-white text-black rounded hover:bg-black hover:text-white transition-colors">
                  <LinkIcon size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={handleLoadMore}
            className="flex items-center gap-2 px-8 py-3 bg-light text-dark text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <RefreshCcw size={14} /> Load more work
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
