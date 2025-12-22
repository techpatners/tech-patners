
import React, { useRef, useState, useEffect } from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const ProcessTimeline: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle scroll to update dots on mobile
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85; // Matches the mobile card width
      const index = Math.round(scrollPosition / cardWidth);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal>
          <div className="mb-12 md:mb-20 max-w-3xl">
            <p className="text-blue-400 font-bold tracking-widest uppercase mb-4">Our Methodology</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight font-display">
               From Concept to <br/> 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Reality</span>
            </h2>
          </div>
        </Reveal>

        {/* Card Container: Flex/Scroll on Mobile, Grid on Desktop */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-8 md:pb-0"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <div 
              key={index} 
              className="min-w-[85vw] md:min-w-0 snap-center"
            >
              <Reveal delay={index * 0.15}>
                <div className="group relative h-[420px] md:h-[480px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5 hover:border-blue-500/30">
                  {/* Background Image with Zoom Effect */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${step.image})` }}
                  ></div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* Step Number */}
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold backdrop-blur-md">
                      {index + 1}
                    </div>

                    <div className="h-1 w-12 bg-blue-500 mb-6 group-hover:w-full transition-all duration-500"></div>
                    
                    <h3 className="text-2xl font-bold uppercase tracking-wide mb-3 font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-6 opacity-0 md:opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-3">
                      {step.description}
                    </p>

                    {/* On mobile we show description by default or simplify */}
                    <p className="md:hidden text-gray-300 text-xs mb-6 opacity-80">
                      {step.description}
                    </p>
                    
                    <button className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white transition-colors">
                      View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Indicators (Dots) */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {PROCESS_STEPS.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'bg-blue-500 w-8' : 'bg-gray-600 w-2'
              }`}
            />
          ))}
        </div>

        {/* Timeline Indicator (Desktop only) */}
        <Reveal delay={0.6}>
          <div className="mt-20 relative h-0.5 bg-gray-800 rounded-full w-full max-w-4xl mx-auto hidden lg:block">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-1/2 mx-auto blur-[1px]"></div>
             <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-[12.5%]">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-dark border-2 border-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10"></div>
                ))}
             </div>
          </div>
        </Reveal>

      </div>
      
      {/* CSS Utility for hiding scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProcessTimeline;
