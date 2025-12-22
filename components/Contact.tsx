
import React, { useState } from 'react';
import Reveal from './Reveal';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 10000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="relative h-[350px] w-full overflow-hidden bg-slate-900 flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display">Contact Us</h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              We'd love to discuss your project. Reach out to TechPatners today.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative -mt-24 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          
          <div className="bg-white rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none shadow-xl overflow-hidden flex flex-col h-full border-r border-gray-100">
             <div className="bg-slate-900 text-white p-6 text-center">
                <h2 className="text-2xl font-bold font-display">Get In Touch With Us Now!</h2>
             </div>
             
             <div className="p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 flex-grow items-center">
                <div className="flex flex-col items-center text-center">
                   <div className="w-12 h-12 mb-4 text-slate-800 flex items-center justify-center">
                      <Phone className="w-10 h-10 fill-current" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Phone Number</h3>
                   <p className="text-slate-700 font-semibold">+91 6263863343</p>
                   <p className="text-slate-700 font-semibold">+91 9770863494</p>
                </div>

                <div className="flex flex-col items-center text-center">
                   <div className="w-12 h-12 mb-4 text-slate-800 flex items-center justify-center">
                      <Mail className="w-10 h-10 fill-current" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                   <a href="mailto:techpatners@gmail.com" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors underline decoration-blue-500/30">techpatners@gmail.com</a>
                </div>

                <div className="flex flex-col items-center text-center col-span-1 md:col-span-2 border-t border-gray-100 pt-8 mt-4 md:mt-0">
                   <div className="w-12 h-12 mb-4 text-slate-800 flex items-center justify-center">
                      <MapPin className="w-10 h-10 fill-current" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Location</h3>
                   <p className="text-slate-700 max-w-xs leading-relaxed font-medium"> Pune IT Park, Maharashtra, India.</p>
                </div>

                <div className="flex flex-col items-center text-center col-span-1 md:col-span-2 border-t border-gray-100 pt-8">
                   <div className="w-12 h-12 mb-4 text-slate-800 flex items-center justify-center">
                      <Clock className="w-10 h-10 fill-current" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Working Hours</h3>
                   <p className="text-slate-700 font-medium">Monday To Saturday</p>
                   <p className="text-slate-700 font-medium">09:00 AM To 06:00 PM</p>
                </div>
             </div>
          </div>

          <div className="bg-gray-100 rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none shadow-xl overflow-hidden flex flex-col h-full">
             <div className="bg-slate-900 text-white p-6 text-center">
                <h2 className="text-2xl font-bold font-display">Contact Us</h2>
             </div>

             <div className="p-8 lg:p-12 flex-grow">
                <form className="space-y-6" onSubmit={handleSubmit}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-2 rounded-md shadow-sm border border-gray-300 focus-within:border-blue-500 transition-colors">
                         <div className="flex items-center px-2">
                             <span className="text-gray-500 mr-2"><UserIcon /></span>
                             <input type="text" name="name" placeholder="Full Name *" required className="w-full py-2 outline-none text-slate-900 placeholder:text-gray-500 bg-transparent" />
                         </div>
                      </div>
                      <div className="bg-white p-2 rounded-md shadow-sm border border-gray-300 focus-within:border-blue-500 transition-colors">
                         <div className="flex items-center px-2">
                             <span className="text-gray-500 mr-2"><PhoneIcon /></span>
                             <input type="tel" name="phone" placeholder="Mobile No *" required className="w-full py-2 outline-none text-slate-900 placeholder:text-gray-500 bg-transparent" />
                         </div>
                      </div>
                   </div>

                   <div className="bg-white p-2 rounded-md shadow-sm border border-gray-300 focus-within:border-blue-500 transition-colors">
                      <div className="flex items-center px-2">
                          <span className="text-gray-500 mr-2"><MailIcon /></span>
                          <input type="email" name="email" placeholder="Email ID *" required className="w-full py-2 outline-none text-slate-900 placeholder:text-gray-500 bg-transparent" />
                      </div>
                   </div>

                   <div className="bg-white p-2 rounded-md shadow-sm border border-gray-300 focus-within:border-blue-500 transition-colors">
                      <div className="px-2 py-1">
                          <textarea name="requirement" placeholder="Describe your requirement in detail" rows={4} required className="w-full py-1 outline-none text-slate-900 placeholder:text-gray-500 bg-transparent resize-none"></textarea>
                      </div>
                   </div>

                   <div className="flex flex-col gap-4">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-slate-900 text-white px-8 py-3 rounded-md font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70`}
                      >
                         {isSubmitting ? (
                           <>Processing <Loader2 size={16} className="animate-spin" /></>
                         ) : submitStatus === 'success' ? (
                           <>Sent Successfully <CheckCircle size={16} /></>
                         ) : (
                           <>Submit <Send size={16} /></>
                         )}
                      </button>
                      
                      {submitStatus === 'success' && (
                        <div className="p-5 bg-white border border-green-200 rounded-2xl animate-fade-in shadow-sm border-l-4 border-l-green-500">
                           <p className="text-green-700 text-sm font-bold">
                              Inquiry Received – TechPartners Technologies
                           </p>
                           <p className="text-slate-500 text-xs mt-2 leading-relaxed font-medium">
                              We’ve successfully received your requirement. Our experts will contact you shortly to discuss your project.
                           </p>
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <p className="text-red-600 text-sm font-bold text-center animate-fade-in">Something went wrong. Please try again later.</p>
                      )}
                   </div>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
   </svg>
);
const PhoneIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
   </svg>
);
const MailIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
   </svg>
);

export default Contact;
