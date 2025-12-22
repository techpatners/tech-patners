
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, ShieldCheck, Zap, Award, Users, Globe, Rocket, Heart, ChevronRight, CheckCircle } from 'lucide-react';
import Reveal from './Reveal';
import { STATS } from '../constants';

const About: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
        // Just to ensure layout remains consistent on scroll if needed
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      
      {/* Dynamic Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-[#020617] overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 scale-110 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617]"></div>
          
          {/* Floating Light Blobs */}
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-blob"
            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"
            style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 pt-5 mt-4 ax-w-6xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
              The TechPatners Legacy
            </div>
            <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 font-display leading-tight tracking-tight">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">Ambition.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              We are a global collective of architects, engineers, and dreamers dedicated to building the backbone of the digital economy.
            </p>
            {/* Added mb-16 to the container for space below the buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
               <Link 
                 to="/#process"
                 className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] group inline-flex items-center justify-center"
               >
                  Our Methodology <ChevronRight className="inline ml-1 group-hover:translate-x-1 transition-transform" />
               </Link>
               <a href="#mission" className="text-white font-semibold hover:text-blue-400 transition-colors flex items-center gap-2">
                  Scroll to Discover <span className="animate-bounce">↓</span>
               </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Narrative Section: Our Mission */}
      <section id="mission" className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <Reveal>
                <div className="relative group perspective-1000">
                   {/* Main Image Frame */}
                   <div 
                      className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-2"
                      style={{ transform: `translateZ(50px)` }}
                   >
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                        alt="Our Strategy" 
                        className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                      />
                   </div>
                   {/* Decorative Elements */}
                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-3xl -z-10 animate-float"></div>
                   <div className="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-slate-100 rounded-full -z-10 animate-pulse"></div>
                   
                   <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 border border-white/50 animate-float animation-delay-2000">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                            <Rocket size={24} />
                         </div>
                         <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Efficiency</p>
                            <p className="text-xl font-bold text-slate-900">10x Build Speed</p>
                         </div>
                      </div>
                   </div>
                </div>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2">
              <Reveal delay={0.2}>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 font-display leading-tight">
                   Our Mission: <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Precision Engineering.</span>
                </h2>
                <p className="text-slate-600 text-xl leading-relaxed mb-10 font-light">
                  In a world of "good enough," we choose "flawless." TechPatners was founded on the belief that code should be a competitive advantage, not a bottleneck. We bridge the gap between complex requirements and elegant delivery.
                </p>
                <div className="space-y-6">
                   {[
                      { icon: Target, title: "Zero-Latency Thinking", desc: "We anticipate market shifts before they happen." },
                      { icon: ShieldCheck, title: "Iron-Clad Reliability", desc: "Our systems are built to withstand the toughest scales." },
                   ].map((item, i) => (
                      <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
                        <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                          <item.icon size={28} />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-slate-900 mb-1">{item.title}</h4>
                          <p className="text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                   ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values: Professional Cards */}
      <section className="py-32 bg-slate-900 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">The TechPatners Code</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Our DNA is built on three fundamental pillars of software excellence.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Zap, title: "Velocity First", desc: "We optimize every sprint to ensure your requirements go live with surgical precision.", color: "blue" },
              { icon: Heart, title: "Craftsmanship", desc: "Clean code isn't a goal; it's a baseline. We build systems that are as beautiful inside as outside.", color: "purple" },
              { icon: Globe, title: "Global Impact", desc: "Scale is in our nature. We build for millions of users across borders and languages.", color: "indigo" },
            ].map((value, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="relative h-full bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10 group hover:bg-white/10 transition-all duration-500 hover:-translate-y-4">
                  <div className={`w-20 h-20 rounded-3xl bg-${value.color}-600/20 flex items-center justify-center text-${value.color}-400 mb-10 group-hover:bg-${value.color}-600 group-hover:text-white transition-all shadow-inner`}>
                    <value.icon size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{value.desc}</p>
                  <div className="mt-10 flex items-center text-blue-400 font-bold gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                     Learn More <ChevronRight size={18} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section: Pro Analytics Look */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <Reveal>
                <span className="text-blue-600 font-bold uppercase tracking-widest mb-4 block">Proven Performance</span>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 font-display leading-tight">
                  Validated by <br />
                  <span className="text-blue-600">Numbers.</span>
                </h2>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                  Our success isn't just claimed—it's measured. Every project we undertake is tracked against strict performance KPIs.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   {STATS.map((stat, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group">
                        <div className="text-4xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                      </div>
                   ))}
                </div>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2">
               <Reveal delay={0.3}>
                  <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl relative">
                     <div className="absolute top-6 right-6 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     </div>
                     <div className="space-y-8">
                        <div className="space-y-3">
                           <div className="flex justify-between text-white text-sm font-bold uppercase tracking-widest">
                              <span>System Uptime</span>
                              <span>99.99%</span>
                           </div>
                           <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500 w-[99.99%] animate-pulse"></div>
                           </div>
                        </div>
                        <div className="space-y-3">
                           <div className="flex justify-between text-white text-sm font-bold uppercase tracking-widest">
                              <span>Customer Satisfaction</span>
                              <span>98%</span>
                           </div>
                           <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-purple-500 w-[98%] animate-pulse"></div>
                           </div>
                        </div>
                        <div className="space-y-3">
                           <div className="flex justify-between text-white text-sm font-bold uppercase tracking-widest">
                              <span>Build Accuracy</span>
                              <span>100%</span>
                           </div>
                           <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 w-[100%] animate-pulse"></div>
                           </div>
                        </div>
                        <div className="pt-8 text-center">
                           <p className="text-slate-400 text-sm mb-6 italic">"The most reliable engineering partner we've ever had."</p>
                           <button className="text-white font-bold flex items-center justify-center gap-2 mx-auto hover:text-blue-400 transition-colors">
                              View Detailed Performance <ChevronRight size={18} />
                           </button>
                        </div>
                     </div>
                  </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action: Professional Grid */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         <div className="relative z-10 max-w-4xl mx-auto px-4">
            <Reveal>
               <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display">Ready to Build the Future?</h2>
               <p className="text-blue-100 text-xl mb-12 font-light">
                  Our experts are standing by to transform your vision into a scalable reality. Let's start the conversation today.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1">Start a Project</button>
                  <button className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all">Join Our Team</button>
               </div>
            </Reveal>
         </div>
      </section>

    </div>
  );
};

export default About;
