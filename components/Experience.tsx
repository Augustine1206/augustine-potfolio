import React from 'react';
import { EXPERIENCE } from '../constants';
import { Pencil } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-16 max-w-6xl mx-auto bg-blue-50">
      <div className="mb-16">
        <span className="text-gray-400 text-xs tracking-[4px] uppercase block mb-2 font-bold">Experience</span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark mb-6">Work Experience</h2>
      </div>

      <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12">
        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12 group">
            <div className={`absolute -left-[11px] md:-left-[11px] top-0 w-6 h-6 rounded-full border-2 border-gray-100 ${exp.color} z-10 flex items-center justify-center`}>
                <Pencil size={12} className="text-white" />
            </div>
            
            <div className="bg-white p-6 md:p-8 relative shadow-sm group-hover:shadow-md transition-shadow">
               {/* Arrow */}
               <div className="absolute top-4 -left-2 w-4 h-4 bg-white transform rotate-45"></div>

               <h3 className="text-xl font-medium text-dark mb-1">
                 {exp.role} <span className="text-gray-400 font-light text-base mx-2">at {exp.company}</span>
               </h3>
               <span className="block text-primary text-xs font-bold uppercase tracking-widest mb-4">{exp.period}</span>
               <p className="text-gray-500 leading-relaxed font-sans">
                 {exp.description}
               </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
