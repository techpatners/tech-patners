
import React, { useState } from 'react';
import { X, PenTool, Lightbulb, Send, CheckCircle, Loader2, Sparkles, User, Mail } from 'lucide-react';

interface WriteForUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WriteForUsModal: React.FC<WriteForUsModalProps> = ({ isOpen, onClose }) => {
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
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 md:p-4">
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl animate-[fade-in-up_0.3s_ease-out]">
        
        <div className="bg-[#003B73] p-6 md:p-8 text-white relative">
           <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-bl-full blur-xl"></div>
           <button 
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-20"
           >
             <X size={20} />
           </button>
           
           <div className="flex items-center gap-3 md:gap-4 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                 {/* Fixed: Removed invalid md:size prop and replaced with responsive Tailwind classes */}
                 <PenTool className="text-blue-300 md:w-6 md:h-6" size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-display">Write For Us</h3>
           </div>
           <p className="text-blue-100/70 font-light text-sm md:text-base">Contribute articles or share improvements.</p>
        </div>

        <div className="p-6 md:p-10">
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
               <div className="space-y-1 md:space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                     <User size={12} className="text-blue-600"/> Full Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required
                    className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm md:text-base"
                  />
               </div>
               <div className="space-y-1 md:space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                     <Mail size={12} className="text-blue-600"/> Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="you@example.com" 
                    required
                    className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm md:text-base"
                  />
               </div>
            </div>

            <div className="space-y-1 md:space-y-2">
               <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                  <Lightbulb size={12} className="text-blue-600"/> Topic Type
               </label>
               <select 
                  name="type" 
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all bg-white text-sm md:text-base"
                  required
               >
                  <option value="Article Submission">Article Submission</option>
                  <option value="UI/UX Improvement">UI/UX Improvement</option>
                  <option value="Tech Stack Suggestion">Tech Stack Suggestion</option>
                  <option value="Other">Other</option>
               </select>
            </div>

            <div className="space-y-1 md:space-y-2">
               <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                  <Sparkles size={12} className="text-blue-600"/> Your Idea
               </label>
               <textarea 
                 name="message"
                 placeholder="Share your detailed thoughts here..." 
                 rows={4}
                 required
                 className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all resize-none text-sm md:text-base h-32 md:h-40"
               ></textarea>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#003B73] hover:bg-blue-800 text-white font-bold py-3.5 md:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70`}
              >
                 {isSubmitting ? (
                   <Loader2 size={18} className="animate-spin" />
                 ) : submitStatus === 'success' ? (
                   <CheckCircle size={18} />
                 ) : (
                   "Submit Contribution"
                 )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl animate-fade-in border-l-4 border-l-blue-600">
                   <p className="text-blue-800 text-xs md:text-sm font-bold">Received!</p>
                   <p className="text-blue-600 text-[10px] md:text-xs mt-1">Our editorial team will review it shortly.</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteForUsModal;
