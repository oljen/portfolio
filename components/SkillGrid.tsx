
import React from 'react';
import { SKILLS } from '../constants.tsx';
import RetroWindow from './RetroWindow.tsx';

const SkillGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto my-20">
      <RetroWindow title="TECHNICAL_SKILLS.DLL" icon="🛠️">
        <div className="space-y-6">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between text-xs font-mono-tech font-bold uppercase">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-6 bg-gray-100 border-2 border-black p-1">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-pink-500 border border-black transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </RetroWindow>

      <div className="flex flex-col gap-6">
        <RetroWindow title="INTELLIGENCE_CORE.EXE" icon="💾">
          <ul className="list-disc pl-5 font-mono-tech text-sm space-y-3 text-gray-800">
            <li>Advanced Reinforcement Learning (Deep RL, PPO, SAC)</li>
            <li>Robotic Control (PID, MPC, Optimal Control)</li>
            <li>Embedded Systems (Arduino, Raspberry Pi, NVIDIA Jetson)</li>
            <li>Physics Engines & Simulators (MuJoCo, PyBullet, Gazebo)</li>
            <li>Deep Learning Frameworks (PyTorch, TensorFlow, Keras)</li>
          </ul>
        </RetroWindow>
        
        <div className="bg-lime-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6">
          <div className="text-5xl">🤖</div>
          <div>
            <h3 className="font-bold text-xl uppercase underline">Research Objective</h3>
            <p className="font-mono-tech text-xs mt-1">Bridging the gap between simulation and real-world deployment for complex multi-agent robotic systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillGrid;
