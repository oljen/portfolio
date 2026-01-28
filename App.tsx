
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero.tsx';
import ProjectGallery from './components/ProjectGallery.tsx';
import SkillGrid from './components/SkillGrid.tsx';
import CyberAssistant from './components/CyberAssistant.tsx';

const App: React.FC = () => {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (booting) {
    return (
      <div className="fixed inset-0 bg-black text-lime-400 font-mono-tech p-6 md:p-10 flex flex-col gap-2 overflow-hidden z-[1000]">
        <p className="animate-pulse">BIOS Version 4.02.1 - SCHOLAR EDITION</p>
        <p>Memory Test: 1048576KB OK</p>
        <p>Detecting Mainframe...</p>
        <p className="mt-4">Mounting Components...</p>
        <p>[ OK ] Neural Engine</p>
        <p>[ OK ] Robotics Simulation Module</p>
        <p>[ OK ] Gemini AI Module</p>
        <p className="mt-4 text-white font-bold">System Ready. Establishing Handshake...</p>
        <div className="mt-auto h-2 bg-white/20 w-full max-w-xs border border-white">
          <div className="h-full bg-lime-400 animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
        <style>{`
          @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-pink-500 selection:text-white bg-[#f0f0f0]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-2 border-black flex justify-between items-center px-4 md:px-6 py-2">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-retro text-xl font-bold">OG</div>
          <div className="font-mono-tech font-bold text-[10px] uppercase hidden sm:block">Ogulcan_Gurelli_v1.0.0_DeepMind</div>
        </div>
        
        <div className="flex gap-4 md:gap-6 font-mono-tech text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-pink-500 transition-colors">Research</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Projects</a>
          <a href="#" className="bg-black text-white px-2 md:px-3 py-1 -my-1">CV</a>
        </div>
      </nav>

      <main className="pt-12">
        <Hero />
        
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-50/20 to-transparent pointer-events-none" />
          <SkillGrid />
          <ProjectGallery />
        </div>
        
        {/* Footer Area */}
        <footer className="bg-black text-white py-12 px-6 border-t-4 border-lime-400">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-retro font-bold uppercase mb-4 tracking-tighter text-white">Let's Synthesize</h2>
              <p className="font-mono-tech text-sm text-gray-400 max-w-md">
                Google DeepMind Scholar studying Robotics and AI at UCL. 
                Passionate about autonomy, safety, and machine learning.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 font-mono-tech text-xs uppercase font-bold w-full md:w-auto">
              <a href="#" className="flex justify-between md:justify-start items-center gap-2 hover:text-lime-400 group">
                <span>ResearchGate</span> 
                <span className="opacity-30 group-hover:opacity-100 hidden md:inline">────────</span>
                <span className="md:hidden">↗</span>
              </a>
              <a href="#" className="flex justify-between md:justify-start items-center gap-2 hover:text-lime-400 group">
                <span>LinkedIn</span> 
                <span className="opacity-30 group-hover:opacity-100 hidden md:inline">───────</span>
                <span className="md:hidden">↗</span>
              </a>
              <a href="#" className="flex justify-between md:justify-start items-center gap-2 hover:text-lime-400 group">
                <span>Scholar</span> 
                <span className="opacity-30 group-hover:opacity-100 hidden md:inline">────────</span>
                <span className="md:hidden">↗</span>
              </a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-mono-tech opacity-40 uppercase">
            <div>© 202X OGULCAN_GURELLI_AI_SYSTEM</div>
            <div>Powered by DeepMind Research & Gemini</div>
          </div>
        </footer>
      </main>

      {/* AI Assistant */}
      <CyberAssistant />
    </div>
  );
};

export default App;
