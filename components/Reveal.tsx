
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "100%", delay = 0, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Immediate check if element is already in view
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, we can stop observing
        if (currentRef) observer.unobserve(currentRef);
      }
    }, { 
      threshold: 0.05, // Lower threshold for better trigger reliability
      rootMargin: "0px 0px 50px 0px" // Start animating slightly before it enters viewport
    });

    observer.observe(currentRef);
    
    // Fallback: If for some reason it's not visible after 1.5 seconds, show it anyway
    const timer = setTimeout(() => setIsVisible(true), 1500);
    
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={ref} style={{ width, position: 'relative' }} className={className}>
      <div
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          opacity: isVisible ? 1 : 0,
          transition: `all 0.6s cubic-bezier(0.2, 0.65, 0.3, 0.9) ${delay}s`,
          visibility: isVisible ? 'visible' : 'hidden'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;
