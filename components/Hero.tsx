
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-black rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-pink-500 rotate-45 opacity-10" />
      
      <div className="z-10 max-w-4xl">
        <div className="mb-4 inline-block bg-lime-400 border-2 border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-mono-tech text-xs font-bold uppercase tracking-[0.2em]">Google DeepMind Scholar @ UCL</span>
        </div>
        
        <h1 className="text-4xl md:text-8xl font-retro font-extrabold text-black leading-none mb-6 tracking-tighter uppercase italic">
          Ogulcan <span className="text-pink-500 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Gurelli</span>
        </h1>
        
        <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
          <div className="absolute -top-3 -left-3 bg-black text-white px-2 py-1 text-[10px] font-mono-tech uppercase">Scholar Profile</div>
          <p className="text-xl md:text-2xl font-mono-tech leading-relaxed text-[#333]">
            MSc Robotics and <span className="bg-blue-200 px-1 font-bold italic">Artificial Intelligence</span>. 
            Designing the cognitive engines of <span className="underline decoration-pink-500 decoration-4">tomorrow's machines</span>.
          </p>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="bg-blue-600 text-white px-8 py-3 font-bold text-xl uppercase retro-border hover:bg-blue-700 transition-colors retro-button-active">
            Research Archive
          </button>
          <button className="bg-white text-black px-8 py-3 font-bold text-xl uppercase retro-border hover:bg-gray-100 transition-colors retro-button-active">
            Get in Touch
          </button>
        </div>
      </div>
      
      {/* Scrolling Text Ribbon */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap bg-black py-2 border-y-2 border-white">
        <div className="flex animate-[marquee_20s_linear_infinite]">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-lime-400 font-mono-tech text-xs mx-8 uppercase font-bold tracking-widest">
              DeepMind Scholarship • Robotics Engineering • UCL Research • Neural Networks • Autonomous Systems • AI Ethics •
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
