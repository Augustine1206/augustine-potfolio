import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 lg:px-16 max-w-6xl mx-auto bg-white">
      <div className="mb-16">
        <span className="text-gray-400 text-xs tracking-[4px] uppercase block mb-2 font-bold">My Specialty</span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark mb-6">My Skills</h2>
        <p className="text-gray-500 mb-8 max-w-2xl leading-relaxed">
          I have honed my skills in a variety of modern technologies and tools to deliver high-quality software solutions. Continuous learning is at the core of my professional development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {SKILLS.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-dark font-medium font-serif">{skill.name}</span>
              <span className="text-gray-400 text-sm font-sans">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className={`${skill.color} h-2 rounded-full`} 
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;