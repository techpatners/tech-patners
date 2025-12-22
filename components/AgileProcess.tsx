
import React from 'react';
import { STATS } from '../constants';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const LEFT_STEPS = [
  { title: 'Plan', href: '#plan', subtitle: 'Strategy & Scope', color: 'blue' },
  { title: 'Design', href: '#design', subtitle: 'UI/UX & Architecture', color: 'indigo' },
  { title: 'Develop', href: '#develop', subtitle: 'Coding & Implementation', color: 'violet' },
];

const RIGHT_STEPS = [
  { title: 'Release', href: '#release', subtitle: 'Deploy & Launch', color: 'purple' },
  { title: 'Feedback', href: '#feedback', subtitle: 'Review & Improve', color: 'fuchsia' },
  { title: 'Test', href: '#test', subtitle: 'QA & Validation', color: 'pink' },
];

const StepLink = ({ title, href, subtitle, side, index }: { title: string, href: string, subtitle: string, side: 'left' | 'right', index: number }) => {
  return (
    <a 
      href={href}
      className={`relative block bg-white p-6 rounded-2xl shadow-lg border border-slate-100 group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 z-10 ${side === 'left' ? 'mr-4' : 'ml-4'}`}
    >
      {/* Decorative colored bar */}
      <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-300 ${side === 'left' ? 'bg-blue-500 group-hover:w-2' : 'bg-purple-500 group-hover:w-2'}`}></div>

      {/* Connection Line to Center (Desktop) */}
      <div className={`hidden lg:block absolute top-1/2 h-[2px] w-16 bg-gradient-to-r from-slate-200 to-slate-300 transition-all duration-500 group-hover:from-blue-400 group-hover:to-blue-500
        ${side === 'left' ? '-right-16 origin-left scale-x-100' : '-left-16 origin-right scale-x-100'}
      `}>
        {/* Dot at the end of connector */}
        <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-blue-500 shadow-sm transition-transform duration-300 group-hover:scale-150 group-hover:bg-blue-500
            ${side === 'left' ? '-right-1.5' : '-left-1.5'}
        `}></div>
      </div>

      <div className="pl-4 flex justify-between items-center">
        <div>
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-1 block group-hover:text-blue-600 transition-colors">{subtitle}</span>
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-black transition-colors flex items-center gap-2 font-display">
            {title}
          </h3>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </a>
  );
};

const AgileProcess: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-slate-50 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="lg:flex lg:items-center lg:gap-20">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight font-display">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Agile</span> Product Development
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12 font-light">
                At <strong>TechPatners</strong>, we don't just write code; we engineer success. Our agile methodology ensures rapid delivery, flexibility, and a product that perfectly aligns with your evolving business needs.
              </p>
            </Reveal>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {STATS.map((stat, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="text-center sm:text-left group cursor-default p-4 hover:bg-white hover:shadow-lg rounded-2xl transition-all duration-300">
                    <div className="flex items-center justify-center sm:justify-start mb-3 group-hover:scale-110 transition-transform origin-left">
                      <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                        <stat.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-4xl font-extrabold text-slate-800 mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive Flow */}
          <div className="lg:w-1/2 relative perspective-1000">
             
             {/* Central Timeline Axis (Desktop) */}
             <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-400 via-purple-500 to-transparent blur-[1px] animate-float"></div>
             </div>
             
             <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8">
                
                {/* Left Branch */}
                <div className="space-y-16 lg:mt-0">
                   {LEFT_STEPS.map((step, idx) => (
                     <Reveal key={step.title} width="100%" delay={idx * 0.2}>
                       <StepLink {...step} side="left" index={idx} />
                     </Reveal>
                   ))}
                </div>

                {/* Right Branch - Offset */}
                <div className="space-y-16 lg:mt-24">
                   {RIGHT_STEPS.map((step, idx) => (
                     <Reveal key={step.title} width="100%" delay={(idx + 3) * 0.2}>
                       <StepLink {...step} side="right" index={idx} />
                     </Reveal>
                   ))}
                </div>
                
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgileProcess;
