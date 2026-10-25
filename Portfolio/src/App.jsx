import React from 'react';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import { personalInfo } from './data/portfolioData';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const App = () => {
  useIntersectionObserver('.reveal', 'reveal-visible');

  return (
    <>
      <div className="bg-slate-900">
        <Navbar />
        
        <main className="min-h-screen">
          <Hero />
          <About />
          <Skills />
          <Experience />
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
