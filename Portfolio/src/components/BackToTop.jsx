import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-[100] md:bottom-8 lg:right-10 flex h-14 w-14 items-center justify-center rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700/50 text-orange-400 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 hover:border-orange-500/50 group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};

export default BackToTop;
