import React from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Navbar = () => {
  const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
  const activeId = useScrollSpy(sections);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 hidden md:block">
      <div className="glass mx-auto mt-4 flex max-w-4xl items-center justify-between rounded-full border border-slate-700/50 px-8 py-3 transition-all duration-300">
        {/* Monogram / Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleClick(e, 'home')}
          className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent hover:scale-110 transition-transform cursor-pointer"
        >
          KL
        </a>

        {/* Desktop Links */}
        <ul className="flex items-center space-x-8">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => handleClick(e, section)}
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
