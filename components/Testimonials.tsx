
import React, { useState, useEffect } from 'react';
import { REVIEWS } from '../constants';
import { ChevronLeft, ChevronRight, Star, Quote, PenTool, X, CheckCircle, Loader2, Trash2, Settings2 } from 'lucide-react';
import Reveal from './Reveal';
import { ReviewItem } from '../types';

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tempRating, setTempRating] = useState(5);
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (showReviewForm || isAdminMode) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (reviews.length || 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [showReviewForm, isAdminMode, reviews.length]);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % (reviews.length || 1));
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % (reviews.length || 1));
  };

  const handleDeleteReview = (id: number) => {
    if (window.confirm('Are you sure you want to remove this review?')) {
      const updatedReviews = reviews.filter(r => r.id !== id);
      setReviews(updatedReviews);
      if (activeIndex >= updatedReviews.length) {
        setActiveIndex(Math.max(0, updatedReviews.length - 1));
      }
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newReview: ReviewItem = {
      id: Date.now(),
      name: formData.get('name') as string,
      role: formData.get('role') as string || 'Project Lead',
      company: formData.get('company') as string || 'Innovator',
      content: formData.get('content') as string,
      rating: tempRating,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.get('name') as string)}&background=random&color=fff`
    };

    setReviews([newReview, ...reviews]);
    setActiveIndex(0);
    setIsSubmitting(false);
    setShowReviewForm(false);
    setTempRating(5);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16 relative">
          <Reveal>
             <p className="text-blue-600 font-bold tracking-widest uppercase mb-3 text-sm">Testimonials</p>
             <h2 className="text-3xl md:text-5xl font-bold text-slate-800 font-display mb-4 md:mb-6 leading-tight">Client Success Stories</h2>
             <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg px-4">Read how we've helped businesses scale their digital infrastructure.</p>
          </Reveal>

          <button 
            onClick={() => setIsAdminMode(!isAdminMode)}
            className={`absolute -top-4 right-0 md:top-0 p-3 rounded-full transition-all duration-300 ${isAdminMode ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-400 hover:text-blue-600'}`}
          >
            <Settings2 size={18} className={isAdminMode ? 'animate-spin-slow' : ''} />
          </button>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-[2rem] md:rounded-[3rem] border-2 border-dashed border-slate-200 mx-4">
            <p className="text-slate-400 text-lg">No reviews to display.</p>
            <button onClick={() => setShowReviewForm(true)} className="mt-4 text-blue-600 font-bold underline">Add a review now</button>
          </div>
        ) : (
          <div className="relative">
            <div className="max-w-4xl mx-auto relative h-[500px] md:h-[420px]">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    index === activeIndex 
                      ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' 
                      : index < activeIndex 
                        ? 'opacity-0 -translate-x-full scale-95 pointer-events-none' 
                        : 'opacity-0 translate-x-full scale-95 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-14 shadow-2xl border border-blue-50/50 text-center relative group h-full flex flex-col justify-center">
                    <Quote size={48} className="text-blue-50 absolute top-6 left-6 md:top-10 md:left-10 -z-10 opacity-50" />
                    
                    {isAdminMode && (
                      <div className="absolute top-4 right-4 z-50">
                        <button 
                          onClick={() => handleDeleteReview(review.id)}
                          className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all shadow-lg"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    )}

                    <div className="flex justify-center mb-4 md:mb-6">
                       <div className="w-16 h-16 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xl">
                          <img 
                             src={review.image} 
                             alt={review.name} 
                             className="w-full h-full rounded-full object-cover border-2 md:border-4 border-white"
                          />
                       </div>
                    </div>

                    <div className="flex justify-center gap-1 mb-4 md:mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={`${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} 
                        />
                      ))}
                    </div>

                    <p className="text-lg md:text-2xl text-slate-700 font-light leading-relaxed mb-6 md:mb-10 px-2 line-clamp-6 md:line-clamp-none">
                      "{review.content}"
                    </p>

                    <div className="pt-4 md:pt-8 border-t border-slate-50 inline-block mx-auto">
                      <h4 className="text-lg md:text-xl font-bold text-slate-900">{review.name}</h4>
                      <p className="text-blue-600 text-xs md:text-sm font-bold uppercase tracking-widest mt-1">{review.role} @ {review.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Controls Mobile Adjustments */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none px-0 md:-px-16 z-20">
               <button 
                  onClick={prevReview}
                  className="pointer-events-auto bg-white/90 backdrop-blur p-3 md:p-5 rounded-full shadow-lg text-slate-800 hover:bg-blue-600 hover:text-white transition-all ml-1 md:ml-0 border border-slate-100"
               >
                  <ChevronLeft size={20} />
               </button>
               <button 
                  onClick={nextReview}
                  className="pointer-events-auto bg-white/90 backdrop-blur p-3 md:p-5 rounded-full shadow-lg text-slate-800 hover:bg-blue-600 hover:text-white transition-all mr-1 md:mr-0 border border-slate-100"
               >
                  <ChevronRight size={20} />
               </button>
            </div>

            <div className="flex justify-center gap-2 mt-8 md:mt-12">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === activeIndex ? 'bg-blue-600 w-8 shadow-md shadow-blue-500/30' : 'bg-slate-300 w-1.5'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA Responsive Fix */}
        <div className="text-center mt-12 md:mt-20 flex flex-col items-center gap-4 px-4">
           {isAdminMode && (
             <p className="text-red-500 text-xs font-bold animate-pulse">Management Mode Active</p>
           )}
           <button 
             onClick={() => setShowReviewForm(true)}
             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 md:px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl active:scale-95"
           >
              <PenTool size={18} />
              Share Your Feedback
           </button>
        </div>
      </div>

      {showReviewForm && (
         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
            <div className="bg-white rounded-[2rem] w-full max-w-lg p-6 md:p-10 relative shadow-2xl animate-[fade-in-up_0.3s_ease-out] max-h-[90vh] overflow-y-auto">
               <button 
                  onClick={() => setShowReviewForm(false)} 
                  className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-400"
               >
                  <X size={18} />
               </button>
               <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center font-display">Write a Review</h3>
               <p className="text-slate-500 text-center mb-6 text-sm">Tell us about your project with TechPatners.</p>
               <form className="space-y-4" onSubmit={handleReviewSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Your Name</label>
                        <input type="text" name="name" placeholder="John Doe" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-all text-sm" required />
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Company</label>
                        <input type="text" name="company" placeholder="Business Name" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-all text-sm" required />
                     </div>
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Your Role</label>
                     <input type="text" name="role" placeholder="e.g. CEO" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-all text-sm" />
                  </div>
                  <div className="flex flex-col items-center py-2 bg-slate-50 rounded-xl">
                     <label className="text-[10px] font-bold text-slate-500 uppercase mb-1">Rating</label>
                     <div className="flex gap-1.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                           <button key={star} type="button" onClick={() => setTempRating(star)} className="transition-transform active:scale-90">
                              <Star size={24} fill={star <= tempRating ? "#fbbf24" : "none"} className={star <= tempRating ? "text-yellow-400" : "text-slate-300"} />
                           </button>
                        ))}
                     </div>
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Review Content</label>
                     <textarea name="content" placeholder="Describe your experience..." rows={3} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-all text-sm resize-none" required></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 disabled:opacity-70">
                     {isSubmitting ? <><Loader2 className="animate-spin" size={18} /></> : "Publish Review"}
                  </button>
               </form>
            </div>
         </div>
      )}
    </section>
  );
};

export default Testimonials;
