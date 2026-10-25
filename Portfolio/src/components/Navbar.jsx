import React from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
  const activeId = useScrollSpy(sections);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 hidden md:block">
      <div className="glass mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-slate-700/70 px-7 py-3 transition-all duration-300">
        {/* Brand */}
        <a 
          href="#home" 
          aria-label={`${personalInfo.name} home`}
          className="whitespace-nowrap text-lg font-bold tracking-tight text-slate-50 transition-colors hover:text-orange-400 lg:text-xl"
        >
          {personalInfo.name}<span className="text-orange-400">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="flex items-center gap-7">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                aria-current={activeId === section ? 'location' : undefined}
                className={`group relative text-sm font-medium capitalize transition-colors duration-300 ${
                  activeId === section ? 'text-orange-400' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {section}
                {/* Underline on hover and active */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-orange-400 transition-all duration-300 ${
                    activeId === section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
