
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, ChevronRight, ArrowRight,
  Smartphone, BarChart, Users, Globe, Code, Settings, 
  Rocket, Database, Cpu, Layout, FileText, UserCheck, 
  Server, Layers
} from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const SERVICES_TABS = [
  { id: 'software_engineering', label: 'Software Engineering', icon: Code },
  { id: 'smart_teams', label: 'Smart Teams', icon: Users },
];

const SERVICES_CONTENT: Record<string, any> = {
  software_engineering: {
    type: 'grid',
    items: [
      { title: 'Mobile App Development', desc: 'Develop the Next-gen apps for iOS and Android', icon: Smartphone },
      { title: 'Salesforce', desc: 'A CRM to boost your business x10', icon: BarChart },
      { title: 'Software Development & Consulting', desc: 'Make your software idea a reality', icon: Users },
      { title: 'Web App Development', desc: 'Unleash creativity for dynamic web experiences', icon: Globe },
      { title: 'Front End Development', desc: 'Impress your users with state-of-art design', icon: Code },
      { title: 'DevOps', desc: 'Bridge development and operations for maximum efficiency', icon: Settings },
      { title: 'It Services for Startups', desc: 'Make your startup dream a reality', icon: Rocket },
      { title: 'Data Engineering', desc: 'Transforming data into solutions for business challenges', icon: Database },
      { title: 'AI ML', desc: 'Improve accuracy, reduce mistakes, and organize operations', icon: Cpu },
      { title: 'UI UX', desc: 'Creating simple and engaging experiences', icon: Layout },
    ]
  },
  smart_teams: {
    type: 'process',
    title: 'Learn more about',
    cta: 'Staff Augmentation',
    steps: [
      { title: 'You Share the Requirements', icon: FileText },
      { title: 'Get Access to the Talent Pool', icon: Users },
      { title: 'Sign SLA & onboard experts', icon: UserCheck }
    ]
  }
};

const TECH_TABS = [
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'frameworks', label: 'Frameworks and CMS', icon: Layers },
  { id: 'mobility', label: 'Mobility', icon: Smartphone },
];

const TECH_CONTENT: Record<string, any> = {
  frontend: {
    items: [
      { title: 'React JS', desc: 'Experience fast development & native performance', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { title: 'Angular', desc: 'Create smooth interactive SPAs', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { title: 'Vue JS', desc: 'The Progressive JavaScript Framework', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400'
  },
  backend: {
    items: [
      { title: 'Node.js', desc: 'Asynchronous event-driven JavaScript runtime', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { title: 'Python', desc: 'Powerful integration and data processing', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=600&h=400'
  },
  frameworks: {
    items: [
       { title: 'Next.js', desc: 'The React Framework for Production', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
       { title: 'WordPress', desc: 'Powering 40% of the web', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    ],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=400'
  },
  mobility: {
    items: [
      { title: 'Flutter', desc: 'Build apps for any screen', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { title: 'React Native', desc: 'Learn once, write anywhere', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600&h=400'
  }
};

interface NavbarProps {
  onOpenQuote: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('');
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when path changes
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
    if (label === 'Services' && !activeTab) setActiveTab('software_engineering');
    if (label === 'Technology Focus' && !activeTab) setActiveTab('frontend');
    
    if (label === 'Services' && !SERVICES_TABS.find(t => t.id === activeTab)) setActiveTab('software_engineering');
    if (label === 'Technology Focus' && !TECH_TABS.find(t => t.id === activeTab)) setActiveTab('frontend');
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || activeDropdown ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16 relative z-50">
          
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <svg className="h-9 w-9 md:h-10 md:w-10 mr-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" className="fill-blue-600" />
              <path d="M20 5L22 18L35 20L22 22L20 35L18 22L5 20L18 18L20 5Z" className="fill-orange-500 opacity-80" />
            </svg>
            <div className={`flex flex-col ${scrolled || activeDropdown ? 'text-gray-900' : 'text-white'}`}>
              <span className="font-bold text-lg md:text-2xl tracking-tight leading-none">TECHPATNERS</span>
              <span className="text-[10px] md:text-xs font-medium tracking-wider text-blue-500">Technologies</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 h-full">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label} 
                className="relative h-full flex items-center"
                onMouseEnter={() => item.hasDropdown ? handleMouseEnter(item.label) : setActiveDropdown(null)}
              >
                {item.href.includes('#') ? (
                  <a 
                    href={item.href}
                    className={`flex items-center text-sm font-medium hover:text-blue-500 transition-colors ${
                      scrolled || activeDropdown ? 'text-gray-700' : 'text-gray-200'
                    } ${activeDropdown === item.label ? 'text-blue-600' : ''}`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </a>
                ) : (
                  <Link 
                    to={item.href}
                    className={`flex items-center text-sm font-medium hover:text-blue-500 transition-colors ${
                      scrolled || activeDropdown ? 'text-gray-700' : 'text-gray-200'
                    } ${activeDropdown === item.label ? 'text-blue-600' : ''}`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onOpenQuote}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-semibold transition-transform transform hover:scale-105 flex items-center shadow-lg shadow-blue-500/30 whitespace-nowrap"
            >
              Get a Quote <span className="ml-2 hidden xl:inline">→</span>
            </button>
            
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md ${scrolled || activeDropdown ? 'text-gray-700' : 'text-white'} hover:bg-gray-100/10 focus:outline-none`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled || activeDropdown ? 'text-gray-700' : 'text-white'} hover:bg-gray-100/10 focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {activeDropdown && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl animate-fade-in z-40 hidden lg:block">
           <div className="max-w-[1920px] mx-auto flex min-h-[400px]">
              {activeDropdown === 'Services' && (
                <>
                  <div className="w-64 bg-slate-50 border-r border-gray-100 py-6">
                    {SERVICES_TABS.map((tab) => (
                      <button
                        key={tab.id}
                        onMouseEnter={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                          activeTab === tab.id ? 'bg-white text-blue-600 border-l-4 border-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-100 border-l-4 border-transparent'
                        }`}
                      >
                        <tab.icon size={18} className="mr-3" />
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex-1 p-8">
                     {activeTab && SERVICES_CONTENT[activeTab] && (
                        <div className="h-full animate-fade-in">
                           {SERVICES_CONTENT[activeTab].type === 'grid' && (
                              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
                                 {SERVICES_CONTENT[activeTab].items.map((item: any, idx: number) => (
                                    <div key={idx} className="flex gap-4 group cursor-pointer">
                                       <div className="flex-shrink-0 mt-1">
                                          <item.icon className="text-gray-400 group-hover:text-blue-600 transition-colors" size={24} />
                                       </div>
                                       <div>
                                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.desc}</p>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           )}
                           {SERVICES_CONTENT[activeTab].type === 'process' && (
                              <div className="flex flex-col h-full">
                                 <div className="flex justify-between items-center mb-12">
                                    <h3 className="text-2xl font-light text-gray-800">
                                       {SERVICES_CONTENT[activeTab].title}
                                    </h3>
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center">
                                       {SERVICES_CONTENT[activeTab].cta} <ArrowRight size={16} className="ml-2" />
                                    </button>
                                 </div>
                                 <div className="grid grid-cols-3 gap-6 flex-1 items-center">
                                    {SERVICES_CONTENT[activeTab].steps.map((step: any, idx: number) => (
                                       <div key={idx} className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 h-64 flex flex-col items-center justify-center text-center group">
                                          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                             <step.icon size={32} className="text-blue-600 group-hover:text-white transition-colors" />
                                          </div>
                                          <h4 className="text-lg font-semibold text-gray-800 px-4">{step.title}</h4>
                                          <span className="absolute top-4 right-4 text-4xl font-bold text-gray-100 -z-10">{idx + 1}</span>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                </>
              )}
              {activeDropdown === 'Technology Focus' && (
                <>
                  <div className="w-64 bg-slate-50 border-r border-gray-100 py-6">
                    {TECH_TABS.map((tab) => (
                      <button
                        key={tab.id}
                        onMouseEnter={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                          activeTab === tab.id ? 'bg-white text-blue-600 border-l-4 border-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-100 border-l-4 border-transparent'
                        }`}
                      >
                        <tab.icon size={18} className="mr-3" />
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex-1 p-8">
                     {activeTab && TECH_CONTENT[activeTab] && (
                        <div className="flex gap-8 h-full animate-fade-in">
                           <div className="flex-1 space-y-6">
                              {TECH_CONTENT[activeTab].items.length > 0 ? (
                                 TECH_CONTENT[activeTab].items.map((item: any, idx: number) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer">
                                       <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg p-2 flex items-center justify-center shadow-sm">
                                          <img src={item.iconUrl} alt={item.title} className="w-full h-full object-contain" />
                                       </div>
                                       <div>
                                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">{item.title}</h4>
                                          <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                                       </div>
                                    </div>
                                 ))
                              ) : (
                                 <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                    <Code size={48} className="mb-4 opacity-50" />
                                    <p>More technologies coming soon...</p>
                                 </div>
                              )}
                           </div>
                           {TECH_CONTENT[activeTab].image && (
                              <div className="w-80 h-full rounded-2xl overflow-hidden relative hidden lg:block shadow-lg">
                                 <img 
                                    src={TECH_CONTENT[activeTab].image} 
                                    alt="Technology" 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                    <h4 className="text-white font-bold text-xl mb-2">Build with {TECH_TABS.find(t => t.id === activeTab)?.label}</h4>
                                    <p className="text-gray-300 text-sm">Empower your digital transformation with our expert teams.</p>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                </>
              )}
           </div>
        </div>
      )}

      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full max-h-[80vh] overflow-y-auto border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <button 
              onClick={() => { setIsOpen(false); onOpenQuote(); }}
              className="w-full mt-4 bg-blue-600 text-white px-4 py-3 rounded-md font-semibold text-center"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
