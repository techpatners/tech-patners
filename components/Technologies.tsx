import React, { useState } from 'react';
import { TECH_CATEGORIES } from '../constants';
import Reveal from './Reveal';

const Technologies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const currentTechs = TECH_CATEGORIES.find(c => c.id === activeCategory)?.items || [];

  return (
    <section className="py-24 bg-white text-center relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-display">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Technologies</span> & Platforms
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
            We build powerful solutions tailored to your needs, using the latest tech and diverse tools to drive innovation and deliver exceptional results.
          </p>
        </Reveal>

        {/* Filter Pills */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1 ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/30'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {currentTechs.map((item, idx) => (
            <Reveal key={`${activeCategory}-${idx}`} delay={idx * 0.05}>
              <div className="flex flex-col items-center p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-16 h-16 mb-6 flex items-center justify-center relative z-10">
                   <img 
                     src={item.icon} 
                     alt={item.name} 
                     className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm"
                   />
                </div>
                <span className="font-bold text-gray-700 group-hover:text-black relative z-10">{item.name}</span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;