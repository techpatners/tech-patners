
import React from 'react';
import Reveal from './Reveal';
import { Calendar, ArrowRight, Clock, Bookmark, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

// Mapping the project constants to blog-style articles to keep it genuine and professional
const BLOG_POSTS = [
  {
    id: 1,
    projectRef: PROJECTS[0], // Electronic Seva (E-Seva)
    title: "Scaling the E-Seva Portal: A Government Service Transformation",
    excerpt: PROJECTS[0].description,
    image: PROJECTS[0].image,
    date: "Jan 15, 2024",
    author: "Aadarsh",
    role: "Django Developer",
    tag: "Case Study",
    readTime: "8 min read",
    href: PROJECTS[0].href
  },
  {
    id: 2,
    projectRef: PROJECTS[2], // WorknAI
    title: "WorknAI: Building a Scalable MERN Infrastructure for AI",
    excerpt: PROJECTS[2].description,
    image: PROJECTS[2].image,
    date: "Feb 02, 2024",
    author: "Sourabh Kumar",
    role: "MERN Stack Developer",
    tag: "SaaS Platform",
    readTime: "5 min read",
    href: PROJECTS[2].href
  },
  {
    id: 3,
    projectRef: PROJECTS[3], // GoAirClass
    title: "Real-time API Integration: The GoAirClass Booking Engine",
    excerpt: PROJECTS[3].description,
    image: PROJECTS[3].image,
    date: "Feb 10, 2024",
    author: "Sourabh Kumar",
    role: "Full Stack Engineer",
    tag: "Travel Tech",
    readTime: "6 min read",
    href: PROJECTS[3].href
  },
  {
    id: 4,
    projectRef: PROJECTS[1], // Flow CRM
    title: "Flow CRM: Data-Driven Business Intelligence Dashboard",
    excerpt: PROJECTS[1].description,
    image: PROJECTS[1].image,
    date: "Dec 20, 2023",
    author: "Divyansh",
    role: "Node.js Developer",
    tag: "Business Intelligence",
    readTime: "4 min read",
    href: PROJECTS[1].href
  },
  {
    id: 5,
    title: "The Role of Clean Code in Long-Term Project Maintenance",
    excerpt: "Why we prioritize maintainability over quick-fixes, saving our clients thousands in technical debt and ensuring software longevity.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800&h=600",
    date: "Nov 05, 2023",
    author: "Aadarsh",
    role: "Senior Engineer",
    tag: "Quality",
    readTime: "7 min read",
    href: "#"
  },
  {
    id: 6,
    title: "Cyber-Security in Custom Builds: A Non-Negotiable Requirement",
    excerpt: "How we implement end-to-end encryption and role-based access control as a baseline for all our bespoke software builds.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=600",
    date: "Oct 28, 2023",
    author: "Sourabh Kumar",
    role: "Full Stack Lead",
    tag: "Security",
    readTime: "10 min read",
    href: "#"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Blog Hero */}
      <div className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900 to-slate-900"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
              <Bookmark size={14} className="fill-current" />
              TechPatners Journal
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-display mb-8 leading-[0.9]">
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Insights</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Deep dives into how we build, scale, and secure modern digital infrastructure. Explore our live project case studies below.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Featured Article - Now linked to E-Seva */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
         <Reveal>
            <a 
              href={BLOG_POSTS[0].href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col lg:flex-row min-h-[500px] hover:shadow-blue-200/50 transition-all duration-500"
            >
               <div className="lg:w-3/5 relative h-64 lg:h-auto overflow-hidden">
                  <img 
                     src={BLOG_POSTS[0].image} 
                     alt={BLOG_POSTS[0].title} 
                     className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-8 left-8">
                     <span className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-xl flex items-center gap-2">
                        Live Project Case Study <ExternalLink size={12} />
                     </span>
                  </div>
               </div>
               <div className="lg:w-2/5 p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-slate-400 text-sm mb-6">
                     <span className="flex items-center gap-1"><Calendar size={14} /> {BLOG_POSTS[0].date}</span>
                     <span className="flex items-center gap-1"><Clock size={14} /> {BLOG_POSTS[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display group-hover:text-blue-600 transition-colors">
                     {BLOG_POSTS[0].title}
                  </h2>
                  <p className="text-slate-500 text-lg mb-8 leading-relaxed font-light line-clamp-4">
                     {BLOG_POSTS[0].excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                     <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-blue-600">
                        {BLOG_POSTS[0].author === "Sourabh Kumar" ? "SK" : BLOG_POSTS[0].author[0]}
                     </div>
                     <div>
                        <p className="text-sm font-bold text-slate-900">{BLOG_POSTS[0].author}</p>
                        <p className="text-xs text-slate-500">{BLOG_POSTS[0].role}</p>
                     </div>
                  </div>
               </div>
            </a>
         </Reveal>
      </div>

      {/* Blog Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Reveal className="mb-16">
           <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-slate-900 font-display">Recent Publications</h2>
              <div className="hidden sm:flex gap-2">
                 {['All', 'Case Study', 'Engineering', 'Security'].map(f => (
                    <button key={f} className="px-4 py-2 rounded-full text-sm font-semibold border border-slate-200 hover:bg-slate-900 hover:text-white transition-all">
                       {f}
                    </button>
                 ))}
              </div>
           </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.slice(1).map((post, idx) => (
            <Reveal key={post.id} delay={idx * 0.1}>
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group h-full flex flex-col border border-slate-100 hover:border-blue-100">
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-md text-blue-600 text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-sm">
                      {post.tag}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} className="text-blue-500" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} className="text-blue-500" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-500 mb-8 line-clamp-3 text-sm leading-relaxed flex-grow font-light">
                    {post.excerpt}
                  </p>

                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600">
                           {post.author === "Sourabh Kumar" ? "SK" : post.author[0]}
                        </div>
                        <div>
                           <p className="text-[11px] font-bold text-slate-900 leading-tight">{post.author}</p>
                           <p className="text-[10px] text-slate-400">{post.role}</p>
                        </div>
                     </div>
                     <a 
                       href={post.href} 
                       target={post.href !== '#' ? "_blank" : "_self"}
                       rel="noopener noreferrer"
                       className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                     >
                        {post.href !== '#' ? <ExternalLink size={16} /> : <ArrowRight size={16} />}
                     </a>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-32 relative">
           <div className="absolute inset-0 bg-blue-600 rounded-[3rem] transform -rotate-1"></div>
           <div className="relative z-10 bg-slate-900 rounded-[3rem] p-12 md:p-24 overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
              
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <Reveal>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Join 500+ Engineering Leaders</h2>
                    <p className="text-slate-400 mb-0 text-lg font-light leading-relaxed">
                       Get a monthly digest of our technical findings, architecture diagrams, and the latest news from the Pune IT hub.
                    </p>
                 </Reveal>
                 
                 <Reveal delay={0.2}>
                    <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                       <input 
                          type="email" 
                          placeholder="Your professional email" 
                          className="flex-grow px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                       />
                       <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                          Subscribe
                       </button>
                    </form>
                    <p className="text-slate-500 text-xs mt-6 px-2">No spam. Only high-signal engineering content. Unsubscribe anytime.</p>
                 </Reveal>
              </div>
           </div>
        </div>
      </div>

    </div>
  );
};

export default Blog;
