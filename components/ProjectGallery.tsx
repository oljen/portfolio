
import React from 'react';
import { PROJECTS } from '../constants.tsx';

const ProjectGallery: React.FC = () => {
  const accentColors = [
    'border-pink-500 shadow-pink-500',
    'border-blue-400 shadow-blue-400',
    'border-lime-400 shadow-lime-400',
  ];

  const titleBgColors = [
    'bg-pink-500',
    'bg-blue-400',
    'bg-lime-400',
  ];

  return (
    <section className="py-20 bg-blue-50 border-y-4 border-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-retro font-bold uppercase mb-12 flex items-center gap-4">
          <span className="bg-black text-white px-4 py-2">PROJECTS</span>
          <span className="text-black italic">Archive.zip</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`group flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-6px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden`}
            >
              {/* Card Header with Accent Color */}
              <div className={`h-2 w-full ${titleBgColors[index % titleBgColors.length]}`} />
              
              <div className="h-48 overflow-hidden border-b-2 border-black relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-black text-white text-[8px] font-mono-tech px-2 py-0.5 uppercase">
                  v1.0.4-stable
                </div>
                <div className="absolute bottom-2 left-2 flex gap-1">
                   {project.tags.slice(0, 1).map(tag => (
                    <span key={tag} className={`${titleBgColors[index % titleBgColors.length]} text-black text-[10px] font-bold px-2 py-0.5 border border-black`}>
                      {tag}
                    </span>
                   ))}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-retro font-bold mb-2 uppercase tracking-tighter">{project.title}</h3>
                <p className="text-sm font-mono-tech text-gray-700 mb-4 flex-1 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-50 border border-gray-300 px-2 py-0.5 text-[9px] font-bold uppercase text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-2 font-bold uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 active:shadow-none active:translate-x-1 active:translate-y-1 ${titleBgColors[index % titleBgColors.length]} hover:brightness-110`}
                >
                  <span className="text-black">Launch Module</span>
                  <span className="text-lg text-black">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
