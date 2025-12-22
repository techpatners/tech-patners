
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap, Cpu, Globe, Cloud, Code2 } from 'lucide-react';
import Reveal from './Reveal';

interface FloatingMessage {
  id: number;
  text: string;
  xOffset: number; // For slight random horizontal scatter
}

interface HeroProps {
  onOpenQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Robot Floating Speech Logic
  const [floatingMessages, setFloatingMessages] = useState<FloatingMessage[]>([]);
  const msgIdRef = useRef(0);
  const phrases = [
    "Got a requirement? 👋", 
    "Custom Build Software 💻", 
    "Web Platforms 🌐", 
    "Mobile Apps 📱", 
    "AI Solutions 🤖", 
    "Let's build it! 🚀",
    "Tailored For You ☁️"
  ];

  // Typewriter State
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);
  const toRotate = ["Requirement.", "Build.", "Deliver."];
  const period = 2000;

  // Floating Message Interval
  useEffect(() => {
    const spawnInterval = setInterval(() => {
      const id = msgIdRef.current++;
      const textIndex = id % phrases.length;
      const text = phrases[textIndex];
      const xOffset = Math.random() * 40 - 20;

      setFloatingMessages(prev => [...prev, { id, text, xOffset }]);

      setTimeout(() => {
        setFloatingMessages(prev => prev.filter(m => m.id !== id));
      }, 3000);

    }, 2500);

    return () => clearInterval(spawnInterval);
  }, []);

  // Typewriter Logic
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    } else {
       if(!isDeleting && delta === period) setDelta(150);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        setMousePos({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const eyeX = mousePos.x * 12;
  const eyeY = mousePos.y * 12;

  const isSpeaking = floatingMessages.length > 0;

  return (
    <div ref={containerRef} className="relative bg-dark overflow-hidden min-h-screen flex items-center pt-16 perspective-1000">
      <div className="absolute inset-0 bg-dark">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-black"></div>
      </div>

      <div 
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-b from-blue-600/20 to-transparent rounded-full blur-[100px] animate-pulse-slow"
        style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
      ></div>
      <div 
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-t from-purple-600/20 to-transparent rounded-full blur-[80px] opacity-40"
        style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
      ></div>
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Zap className="absolute top-1/4 left-1/4 text-blue-500/10 w-12 h-12 animate-bounce" style={{ animationDuration: '3s' }} />
          <Cpu className="absolute bottom-1/3 right-1/3 text-purple-500/10 w-20 h-20 animate-pulse" />
          <Globe className="absolute top-1/3 right-10 text-cyan-500/10 w-24 h-24 animate-spin-slow" />
          <Cloud className="absolute bottom-20 left-20 text-white/5 w-32 h-32" />
      </div>

      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left z-20 mb-12 lg:mb-0">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 mb-8 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm max-w-full">
               <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               <span className="text-blue-400 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase truncate">Your Idea, Our Build</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight sm:leading-none mb-6 font-display min-h-[160px] lg:min-h-auto">
              Custom Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-gradient-x">
                 {text}
              </span>
              <span className="animate-pulse text-blue-400 ml-1 font-light">|</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
              We take your business requirements and engineer custom digital solutions from scratch. <strong>You define the goal, we deliver the code.</strong>
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onOpenQuote}
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-base sm:text-lg transition-all flex items-center justify-center group shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              >
                Discuss Requirement
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#process"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-semibold text-base sm:text-lg transition-all flex items-center justify-center backdrop-blur-sm"
              >
                How We Work <Code2 className="ml-2" size={18}/>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:w-1/2 relative h-[400px] sm:h-[500px] w-full flex items-center justify-center perspective-1000">
            <div 
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] transition-transform duration-100 ease-out preserve-3d"
              style={{ 
                transform: `rotateX(${mousePos.y * -10}deg) rotateY(${mousePos.x * 10}deg)` 
              }}
            >
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-blue-500/20 rounded-[100%] blur-xl animate-pulse"></div>
               <div className="relative w-full h-full animate-float">
                  <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-0 h-0 z-50 overflow-visible">
                    {floatingMessages.map((msg) => (
                      <div 
                        key={msg.id}
                        className="absolute bottom-0 left-1/2 animate-float-message whitespace-nowrap"
                        style={{ marginLeft: `${msg.xOffset}px` }}
                      >
                         <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/50 text-cyan-100 rounded-full text-xs sm:text-sm font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                           {msg.text}
                         </span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
                  <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border border-blue-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-40 sm:w-56 sm:h-48">
                      <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-8 sm:h-10 bg-slate-600 overflow-hidden">
                         <div className="w-full h-full bg-blue-400/50 animate-pulse"></div>
                         <div className="absolute -top-2 -left-1 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,1)] animate-ping"></div>
                         <div className="absolute -top-2 -left-1 w-4 h-4 bg-red-500 rounded-full"></div>
                      </div>
                      <div className="w-full h-full bg-slate-800/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center z-10 group">
                          <div className="w-32 h-20 sm:w-40 sm:h-24 bg-black rounded-2xl border-2 border-slate-700 shadow-inner flex items-center justify-center gap-4 sm:gap-6 relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-full h-1 bg-green-500/50 shadow-[0_0_10px_#22c55e] animate-[scan_2s_linear_infinite]"></div>
                             <div className="w-8 h-10 sm:w-10 sm:h-12 bg-blue-500 rounded-full relative shadow-[0_0_30px_rgba(59,130,246,0.8)] overflow-hidden">
                                <div 
                                  className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full top-1/2 left-1/2 transition-transform duration-75"
                                  style={{ transform: `translate(calc(-50% + ${eyeX}px), calc(-50% + ${eyeY}px))` }}
                                ></div>
                             </div>
                             <div className="w-8 h-10 sm:w-10 sm:h-12 bg-blue-500 rounded-full relative shadow-[0_0_30px_rgba(59,130,246,0.8)] overflow-hidden">
                                <div 
                                  className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full top-1/2 left-1/2 transition-transform duration-75"
                                  style={{ transform: `translate(calc(-50% + ${eyeX}px), calc(-50% + ${eyeY}px))` }}
                                ></div>
                             </div>
                          </div>
                          <div className="mt-3 sm:mt-4 flex items-center gap-1 h-2 sm:h-3">
                             {[...Array(5)].map((_, i) => (
                               <div 
                                 key={i} 
                                 className={`w-1 sm:w-1.5 rounded-full ${isSpeaking ? 'bg-cyan-400 animate-[bounce_0.3s_infinite]' : 'bg-blue-800'}`} 
                                 style={{ height: '100%', animationDelay: `${i * 0.05}s` }}
                               ></div>
                             ))}
                          </div>
                      </div>
                      <div className="absolute top-10 sm:top-12 -left-3 sm:-left-4 w-4 sm:w-6 h-20 sm:h-24 bg-slate-700 rounded-l-lg sm:rounded-l-xl border-r border-slate-600"></div>
                      <div className="absolute top-10 sm:top-12 -right-3 sm:-right-4 w-4 sm:w-6 h-20 sm:h-24 bg-slate-700 rounded-r-lg sm:rounded-r-xl border-l border-slate-600"></div>
                  </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
