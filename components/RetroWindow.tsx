
import React from 'react';

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: string;
  onClose?: () => void;
}

const RetroWindow: React.FC<RetroWindowProps> = ({ title, children, className = '', icon = '🌐', onClose }) => {
  return (
    <div className={`retro-border bg-[#c0c0c0] flex flex-col overflow-hidden ${className}`}>
      {/* Title Bar */}
      <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] p-1 flex items-center justify-between">
        <div className="flex items-center gap-2 px-1">
          <span className="text-sm">{icon}</span>
          <span className="text-white font-mono-tech text-xs font-bold uppercase tracking-wider">{title}</span>
        </div>
        <div className="flex gap-1">
          <button className="w-5 h-5 bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black border text-[10px] flex items-center justify-center font-bold">_</button>
          <button className="w-5 h-5 bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black border text-[10px] flex items-center justify-center font-bold">□</button>
          <button 
            onClick={onClose}
            className="w-5 h-5 bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black border text-[10px] flex items-center justify-center font-bold text-red-600 hover:bg-red-100"
          >
            X
          </button>
        </div>
      </div>
      
      {/* Inner Content Area */}
      <div className="flex-1 p-4 bg-white m-1 border-t-2 border-l-2 border-[#808080] border-b-2 border-r-2 border-white overflow-auto">
        {children}
      </div>
      
      {/* Status Bar */}
      <div className="bg-[#c0c0c0] border-t-2 border-[#808080] px-2 py-0.5 flex items-center gap-4">
        <div className="text-[10px] text-[#404040] font-mono-tech uppercase">Status: Connected</div>
        <div className="flex-1 h-3 border-t border-l border-[#808080] border-b border-r border-white bg-white">
          <div className="h-full bg-[#000080] w-[65%]" />
        </div>
      </div>
    </div>
  );
};

export default RetroWindow;
