import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = personalInfo.tagline;
  const typingSpeed = 50; // ms per character

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [fullText]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-start md:justify-center bg-slate-900 px-4 pt-20 md:pt-0 transition-all duration-300">
      
      {/* Background patterns */}
      <div className="bg-grid-pattern absolute inset-0 opacity-20 pointer-events-none"></div>
      
      {/* Floating Teal Orbs */}
      <div className="orb top-1/4 left-1/4 animate-float"></div>
      <div className="orb bottom-1/4 right-1/4 animate-float [animation-delay:2s]"></div>

      <div className="z-10 flex flex-col items-center text-center">
        {/* Animated Name */}
        <h1 className="animate-fadeIn relative font-bold text-slate-50 opacity-0 [animation-delay:0.3s] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Hi, I am <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">{personalInfo.name.split(' ')[0]}</span>
        </h1>

        {/* Typewriter Tagline */}
        <p className="mt-4 min-h-[3rem] max-w-3xl text-sm font-medium leading-relaxed text-slate-400 sm:text-base md:text-lg lg:text-xl typewriter-cursor pr-1">
          {displayText}
        </p>

        {/* CTA Buttons */}
        <div className="animate-fadeIn mt-8 flex flex-col items-center gap-4 opacity-0 [animation-delay:0.8s] sm:flex-row">
          <button 
            onClick={() => scrollTo('projects')}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-orange-500 px-8 py-3.5 font-bold text-slate-900 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20"
          >
            <span className="relative">View Projects</span>
          </button>
          
          <a 
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-orange-500 bg-transparent px-8 py-3.5 font-bold text-orange-400 transition-all duration-300 hover:bg-orange-500/10 hover:scale-105 active:scale-95"
          >
            <span className="relative">Download CV</span>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
