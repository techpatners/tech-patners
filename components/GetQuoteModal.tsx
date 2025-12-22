
import React, { useState } from 'react';
import { X, Users, Briefcase, Globe, Mail, Award, Phone, Loader2, CheckCircle } from 'lucide-react';

interface GetQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetQuoteModal: React.FC<GetQuoteModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', process.env.VITE_WEB3FORMS_KEY || '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 6000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-[2rem] md:rounded-3xl w-full max-w-5xl max-h-[92vh] md:h-auto overflow-y-auto shadow-2xl flex flex-col md:flex-row animate-[fade-in-up_0.3s_ease-out]">
        
        <button 
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 p-2 bg-gray-100/80 backdrop-blur rounded-full z-20 shadow-sm"
        >
          <X size={18} />
        </button>

        {/* Left Side - Info (Condensed for mobile) */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-blue-50 to-white p-6 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-6 md:mb-8">
               <svg className="h-7 w-7 md:h-8 md:w-8" viewBox="0 0 40 40" fill="none">
                 <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" className="fill-blue-600" />
               </svg>
               <div className="flex flex-col">
                 <span className="font-bold text-xl md:text-2xl text-slate-800 leading-none">TECHPATNERS</span>
                 <span className="text-[10px] md:text-xs font-medium text-blue-500 tracking-wider">Technologies</span>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4 md:space-y-6 mb-4 md:mb-8">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Award size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-base md:text-xl font-bold text-slate-900 leading-tight">Custom</h4>
                  <p className="text-slate-500 text-[10px] md:text-sm">Tailored builds</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Users size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-base md:text-xl font-bold text-slate-900 leading-tight">75+</h4>
                  <p className="text-slate-500 text-[10px] md:text-sm">Engineers</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <Briefcase size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-base md:text-xl font-bold text-slate-900 leading-tight">Global</h4>
                  <p className="text-slate-500 text-[10px] md:text-sm">Delivery reach</p>
                </div>
              </div>
            </div>
            
            <hr className="hidden md:block border-gray-200 my-6" />
            
            <div className="hidden md:block space-y-3">
              <div className="flex items-center gap-3 text-slate-700">
                <Mail size={18} className="text-blue-500"/>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Contact us</p>
                  <p className="font-semibold text-sm">techpatners@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-3/5 p-6 md:p-12 relative bg-white">
          <button 
            onClick={onClose}
            className="hidden md:block absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-400 hover:text-gray-600" />
          </button>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-2">
            Build Your <span className="text-blue-600">Custom Software</span>
          </h3>
          <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8">Tell us your requirements!</p>

          <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm md:text-base"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm md:text-base"
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm md:text-base"
              />
            </div>
            <textarea 
              name="requirement"
              placeholder="Describe your project requirement in detail..." 
              rows={3}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none text-sm md:text-base md:h-32"
            ></textarea>

            <div className="flex flex-col gap-4">
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 md:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70`}
              >
                 {isSubmitting ? (
                   <Loader2 size={20} className="animate-spin" />
                 ) : submitStatus === 'success' ? (
                   <CheckCircle size={20} />
                 ) : (
                   "Send Requirement"
                 )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in border-l-4 border-l-green-500">
                  <p className="text-green-800 text-xs md:text-sm font-bold">Requirement Received!</p>
                  <p className="text-slate-600 text-[10px] md:text-xs mt-1 leading-relaxed">
                    Our team will review your details and get back to you within 1–2 business days.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-xs font-bold text-center animate-fade-in">Submission failed. Try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetQuoteModal;
