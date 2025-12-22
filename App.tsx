
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AgileProcess from './components/AgileProcess';
import ProcessTimeline from './components/ProcessTimeline';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Contact from './components/Contact';
import GetQuoteModal from './components/GetQuoteModal';
import WriteForUsModal from './components/WriteForUsModal';
import Testimonials from './components/Testimonials';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setWidth(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-[100]" style={{ width: `${width}%` }} />
  );
};

const HomePage = ({ onOpenQuote }: { onOpenQuote: () => void }) => (
  <div className="animate-fade-in">
    <Hero onOpenQuote={onOpenQuote} />
    <section id="services">
      <Services onOpenQuote={onOpenQuote} />
    </section>
    <ProcessTimeline />
    <AgileProcess />
    <section id="tech">
      <Technologies />
    </section>
    <Testimonials />
  </div>
);

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isWriteForUsOpen, setIsWriteForUsOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const openQuote = () => setIsQuoteOpen(true);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative overflow-x-hidden">
      
      <ScrollProgress />
      <GetQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <WriteForUsModal isOpen={isWriteForUsOpen} onClose={() => setIsWriteForUsOpen(false)} />
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenQuote={openQuote} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuote={openQuote} />} />
            <Route path="/about" element={<About onOpenQuote={openQuote} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer onOpenWriteForUs={() => setIsWriteForUsOpen(true)} />
      </div>
      
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={openQuote}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40 hover:scale-110 hover:rotate-6 transition-all cursor-pointer group animate-bounce"
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
           </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
