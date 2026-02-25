import React from 'react';
import { SERVICES } from '../constants';
import { Layers, Monitor, Database, Code, Terminal, LucideProps } from 'lucide-react';

// Using React.ElementType or defining the props specifically fixes implicit 'any' warnings
const iconMap: Record<string, React.FC<LucideProps>> = {
  Layers: Layers,
  Monitor: Monitor,
  Database: Database,
  Terminal: Terminal,
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-16 max-w-6xl mx-auto">
      <div className="mb-16">
        <span className="text-gray-400 text-xs tracking-[4px] uppercase block mb-2 font-bold">About Me</span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark mb-6">Who Am I?</h2>
        <p className="text-gray-500 mb-6 font-sans leading-relaxed text-md">
          <strong className="text-dark font-bold">With a strong foundation in modern web technologies, I strive to create immersive digital experiences. I specialize in building responsive, user-centric interfaces that solve real-world problems. My approach combines technical expertise with a keen eye for design.</strong>
        </p>
        <p className="text-gray-500 mb-6 font-sans leading-relaxed text-md">
          I am especially interested in the design of scalable, ethical, and interpretable AI-driven systems that can enhance decision-making, improve operational efficiency, and expand opportunities for underserved communities.
        </p>
      </div>

      <div id="services" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon] || Code;
          return (
            <div 
              key={service.id} 
              className={`p-6 bg-white shadow-lg border-b-4 border-blue-600 hover:-translate-y-2 transition-transform duration-300 group`}
            >
              <div className={`mb-4 text-3xl ${service.color.replace('border-', 'text-')} group-hover:scale-110 transition-transform`}>
                <Icon size={40} />
              </div>
              <h3 className="text-lg font-medium text-dark mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
