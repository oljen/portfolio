
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 border-4 border-black rounded-full opacity-10 animate-pulse hidden md:block" />
      <div className="absolute bottom-20 right-10 w-32 h-32 md:w-48 md:h-48 border-4 border-pink-500 rotate-45 opacity-10 hidden md:block" />
      
      <div className="z-10 max-w-4xl w-full">
        <div className="mb-6 inline-block bg-lime-400 border-2 border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-mono-tech text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Google DeepMind Scholar @ UCL</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-retro text-black leading-[0.9] mb-8 uppercase italic tracking-tighter">
          Ogulcan <span className="text-pink-500 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">Gurelli</span>
        </h1>
        
        <div className="bg-white border-2 border-black p-5 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative mx-auto max-w-2xl">
          <div className="absolute -top-3 -left-3 bg-black text-white px-2 py-1 text-[8px] md:text-[10px] font-mono-tech uppercase">System_Status: Operational</div>
          <p className="text-lg md:text-2xl font-mono-tech leading-relaxed text-black">
            MSc Robotics and <span className="bg-blue-200 px-1 font-bold italic">Artificial Intelligence</span>. 
            Designing the cognitive engines of <span className="underline decoration-pink-500 decoration-2 md:decoration-4">tomorrow's machines</span>.
          </p>
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
          <button className="bg-blue-600 text-white px-6 py-3 font-bold text-lg md:text-xl uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[2px] active:shadow-none">
            Research Archive
          </button>
          <button className="bg-white text-black px-6 py-3 font-bold text-lg md:text-xl uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[2px] active:shadow-none">
            Get in Touch
          </button>
        </div>
      </div>
      
      {/* Scrolling Text Ribbon */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap bg-black py-2 border-y-2 border-white">
        <div className="flex animate-[marquee_30s_linear_infinite]">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-lime-400 font-mono-tech text-[10px] mx-8 uppercase font-bold tracking-widest">
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
