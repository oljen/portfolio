
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService.ts';
import { Message } from '../types.ts';
import RetroWindow from './RetroWindow.tsx';

const CyberAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to the mainframe! I'm your Cyber-Sprite companion. How can I assist your navigation through this portfolio today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    let currentResponse = '';
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    await geminiService.sendMessageStream(input, (chunk) => {
      currentResponse += chunk;
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { role: 'model', text: currentResponse };
        return newMessages;
      });
    });

    setIsTyping(false);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-pink-500 text-white p-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform flex items-center gap-2 font-bold"
      >
        <span className="text-xl animate-bounce">👾</span>
        <span className="font-mono-tech text-xs uppercase">Ask Sprite</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 md:w-96 h-[500px] flex">
      <RetroWindow 
        title="CYBER-SPRITE V1.0" 
        icon="👾" 
        onClose={() => setIsOpen(false)}
        className="w-full h-full"
      >
        <div className="flex flex-col h-full gap-4">
          <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 pr-2 font-mono-tech text-[13px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-2 ${
                  m.role === 'user' 
                  ? 'bg-blue-100 border-l-4 border-blue-500' 
                  : 'bg-pink-50 border-l-4 border-pink-500'
                }`}>
                  <div className="text-[10px] font-bold uppercase opacity-50 mb-1">
                    {m.role === 'user' ? 'Guest' : 'Cyber-Sprite'}
                  </div>
                  <div className="leading-relaxed whitespace-pre-wrap">{m.text}</div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-[10px] animate-pulse font-bold text-pink-600 uppercase">Processing packet...</div>
            )}
          </div>
          
          <div className="flex gap-2 border-t-2 border-[#808080] pt-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query the mainframe..."
              className="flex-1 p-2 border-2 border-[#808080] outline-none focus:border-black font-mono-tech text-sm"
            />
            <button 
              onClick={handleSend}
              className="bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black border-2 px-4 py-1 font-bold text-xs uppercase retro-button-active"
            >
              SEND
            </button>
          </div>
        </div>
      </RetroWindow>
    </div>
  );
};

export default CyberAssistant;
