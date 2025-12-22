
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Linkedin, Twitter, 
  Phone, Mail, 
  Smartphone, Code, Globe, Database, 
  Layers, Cpu, Server, Layout
} from 'lucide-react';

const TECH_STACK = [
  { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Vue JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Node JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: '.Net', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'iOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', invert: true },
  { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Xamarin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'MEAN', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MERN', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
  { name: 'Drupal', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg', invert: true },
  { name: 'Wordpress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'Woocommerce', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg' },
  { name: 'Shopify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg', invert: true }
];

const SERVICES_LINKS = [
  { name: 'Mobile App Development', icon: Smartphone, href: '/#services' },
  { name: 'Software development', icon: Code, href: '/#services' },
  { name: 'Web App Development', icon: Globe, href: '/#services' },
  { name: 'Salesforce', icon: Layers, href: '/#services' },
  { name: 'Staff Augmentation', icon: Server, href: '/#services' },
  { name: 'Frontend Development', icon: Layout, href: '/#services' },
  { name: 'Startup IT Services', icon: Cpu, href: '/#services' },
  { name: 'Data Engineering', icon: Database, href: '/#services' },
  { name: 'AI ML', icon: Cpu, href: '/#services' },
  { name: 'UI UX', icon: Layout, href: '/#services' },
];

const COMPANY_LINKS = [
  { name: 'About us', href: '/about' },
  { name: 'Engagement Model', href: '/#process' },
  { name: 'Career', href: '#' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Write For Us', href: 'modal' } // Special handle
];

interface FooterProps {
  onOpenWriteForUs: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenWriteForUs }) => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#003B73]">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-[#003B73]/90"></div>
      </div>

      {/* Decorative Curve Top */}
      <div className="absolute top-0 left-0 w-full h-16 bg-slate-50 rounded-b-[50%] z-10 shadow-sm transform scale-x-110"></div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-12">
          
          {/* Column 1: Brand & Contact (Span 3) */}
          <div className="xl:col-span-3 space-y-8">
            <Link to="/" className="flex items-center gap-3">
               <div className="relative">
                 <svg className="h-12 w-12" viewBox="0 0 40 40" fill="none">
                    <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" className="fill-blue-400" />
                    <path d="M20 5L22 18L35 20L22 22L20 35L18 22L5 20L18 18L20 5Z" className="fill-orange-500 opacity-90" />
                 </svg>
               </div>
               <div className="flex flex-col">
                 <span className="font-bold text-3xl text-white leading-none tracking-tight font-display">TECHPATNERS</span>
                 <span className="text-sm font-medium text-blue-300 tracking-[0.2em] uppercase">Technologies</span>
               </div>
            </Link>

            <p className="text-blue-100/80 text-sm leading-relaxed max-w-sm">
              AI-powered full-stack mobile & web app innovation (iOS | Android | Web). We transform ideas into digital reality with cutting-edge technology.
            </p>

            <div className="space-y-4 pt-2">
              <a href="tel:+916263863343" className="flex items-center gap-3 text-sm text-white hover:text-blue-300 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500 transition-colors border border-blue-400/30">
                   <Phone size={16} />
                </div>
                <span className="font-medium">+91 6263863343</span>
              </a>
              <a href="mailto:techpatners@gmail.com" className="flex items-center gap-3 text-sm text-white hover:text-blue-300 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500 transition-colors border border-blue-400/30">
                   <Mail size={16} />
                </div>
                <span className="font-medium">techpatners@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white text-[#003B73] flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                <Facebook size={20} fill="currentColor" className="stroke-0" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white text-[#003B73] flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                <Twitter size={20} fill="currentColor" className="stroke-0" />
              </a>
              <a href="https://www.linkedin.com/in/tech-patners/" className="w-10 h-10 rounded-full bg-white text-[#003B73] flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                <Linkedin size={20} fill="currentColor" className="stroke-0" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links (Span 2) */}
          <div className="xl:col-span-2">
            <h3 className="text-lg font-bold text-white mb-8">
              TechPatners
            </h3>
            <ul className="space-y-4">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  {link.href === 'modal' ? (
                    <button 
                      onClick={onOpenWriteForUs}
                      className="text-blue-100/80 hover:text-white hover:translate-x-2 transition-all inline-block text-sm text-left"
                    >
                      {link.name}
                    </button>
                  ) : link.href.startsWith('/#') ? (
                    <a href={link.href} className="text-blue-100/80 hover:text-white hover:translate-x-2 transition-all inline-block text-sm">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-blue-100/80 hover:text-white hover:translate-x-2 transition-all inline-block text-sm">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Span 3) */}
          <div className="xl:col-span-3">
            <h3 className="text-lg font-bold text-white mb-8">
              Services
            </h3>
            <ul className="space-y-4">
              {SERVICES_LINKS.map((service) => (
                <li key={service.name}>
                  {service.href.startsWith('/#') ? (
                     <a href={service.href} className="text-blue-100/80 hover:text-white hover:translate-x-2 transition-all inline-flex items-center gap-3 text-sm group">
                        <service.icon size={16} className="text-blue-400 group-hover:text-white transition-colors" />
                        {service.name}
                     </a>
                  ) : (
                     <Link to={service.href} className="text-blue-100/80 hover:text-white hover:translate-x-2 transition-all inline-flex items-center gap-3 text-sm group">
                        <service.icon size={16} className="text-blue-400 group-hover:text-white transition-colors" />
                        {service.name}
                     </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Technology Focus (Span 4) */}
          <div className="xl:col-span-4">
            <h3 className="text-lg font-bold text-white mb-8">
              Technology Focus
            </h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-6">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-5 h-5 flex-shrink-0">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className={`w-full h-full object-contain ${tech.invert ? 'brightness-0 invert' : ''} opacity-80 group-hover:opacity-100 transition-opacity`} 
                    />
                  </div>
                  <span className="text-[13px] text-blue-100/80 group-hover:text-white transition-colors truncate">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-blue-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200/60">
          <p>© {new Date().getFullYear()} TechPatners. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
