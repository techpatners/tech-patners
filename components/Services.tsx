
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ChevronDown, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

interface ServicesProps {
  onOpenQuote: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenQuote }) => {
  const [activeService, setActiveService] = useState(SERVICES[0]);

  // Component for the service detail content to avoid repetition
  const ServiceDetails = ({ service, onOpen }: { service: typeof SERVICES[0], onOpen: () => void }) => (
    <div className="flex flex-col h-full">
      <div className="relative z-10 mb-6">
        <div className="inline-block p-2.5 bg-blue-600 text-white rounded-xl mb-4 shadow-lg shadow-blue-500/30">
          <service.icon size={28} />
        </div>
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
          {service.title}
        </h3>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-8 relative z-10">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2.5 group/item">
            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform" size={18} />
            <span className="text-gray-700 font-medium text-sm md:text-base group-hover/item:text-blue-700 transition-colors">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto relative z-10">
        <button 
          onClick={onOpen}
          className="w-full sm:w-auto group/btn relative overflow-hidden bg-slate-900 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <span className="relative z-10">Discuss {service.title}</span>
          <ArrowRight className="relative z-10 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover/btn:scale-100 group-hover/btn:bg-blue-600/20"></div>
        </button>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-blue-600 font-bold tracking-widest uppercase mb-3 text-sm">Our Expertise</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-display">Services We Provide</h2>
          </div>
        </Reveal>

        {/* Mobile View: Accordion Pattern */}
        <div className="lg:hidden space-y-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <div 
                className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                  activeService.id === service.id 
                    ? 'bg-white border-blue-200 shadow-xl' 
                    : 'bg-white/50 border-gray-100 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setActiveService(service)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                    activeService.id === service.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${
                      activeService.id === service.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <service.icon size={22} />
                    </div>
                    <span className="font-bold text-lg">{service.title}</span>
                  </div>
                  <div className={`transition-transform duration-300 ${activeService.id === service.id ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    activeService.id === service.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="p-5 pt-0 border-t border-gray-50 bg-white">
                    <div className="mt-6">
                      <ServiceDetails service={service} onOpen={onOpenQuote} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Desktop View: Tabbed Pattern (Unchanged) */}
        <div className="hidden lg:flex flex-row gap-12">
          
          {/* Navigation Tabs (Left) */}
          <div className="lg:w-1/3">
            <div className="space-y-3">
              {SERVICES.map((service, index) => (
                <Reveal key={service.id} delay={index * 0.1}>
                  <button
                    onClick={() => setActiveService(service)}
                    className={`w-full flex items-center justify-between p-5 rounded-xl text-left transition-all duration-300 group ${
                      activeService.id === service.id
                        ? 'bg-white text-blue-600 shadow-xl shadow-blue-100/50 scale-105 border border-blue-50'
                        : 'text-gray-500 hover:bg-white/60 hover:text-gray-800 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${activeService.id === service.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400 group-hover:bg-white'}`}>
                        <service.icon size={22} />
                      </div>
                      <span className="font-bold text-lg">{service.title}</span>
                    </div>
                    <ChevronRight size={20} className={`transform transition-transform duration-300 ${activeService.id === service.id ? 'translate-x-1 text-blue-600' : 'opacity-0 group-hover:opacity-100'}`} />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Content Area (Right) */}
          <div className="lg:w-2/3">
            <Reveal delay={0.2} className="h-full">
              <div className="bg-white p-12 rounded-3xl shadow-2xl shadow-blue-50/50 min-h-[550px] flex flex-col justify-center border border-gray-100 relative overflow-hidden group hover:shadow-3xl transition-shadow duration-500">
                
                {/* Background Decoration inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                
                <ServiceDetails service={activeService} onOpen={onOpenQuote} />

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
