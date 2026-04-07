import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import { personalInfo } from './data/portfolioData';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Initialize Intersection Observer hook for scroll reveals
  useIntersectionObserver('.reveal', 'reveal-visible');

  useEffect(() => {
    // Show loader for 1.8 seconds then reveal contents
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      
      {/* Portfolo Content Container */}
      <div 
        className={`bg-slate-900 transition-opacity duration-1000 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar />
        
        <main className="min-h-screen">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        
        <MobileNav />
        <BackToTop />
        
        <footer className="w-full pt-12 pb-24 md:pb-12 px-4 text-center bg-slate-900 border-t border-slate-800/50">
          <p className="text-slate-500 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
