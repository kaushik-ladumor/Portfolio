import React from 'react';
import { Home, User, Code, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const MobileNav = () => {
  const sections = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: FolderOpen, label: 'Work' },
    { id: 'education', icon: GraduationCap, label: 'Edu' },
    { id: 'contact', icon: Mail, label: 'Mail' },
  ];

  const activeId = useScrollSpy(sections.map(s => s.id));

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
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass mx-auto flex w-full items-center justify-around border-t border-slate-700/50 py-4 px-6 transition-all duration-300">
        {sections.map(({ id, icon: Icon, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className="group flex flex-col items-center gap-1 transition-transform active:scale-90"
          >
            <Icon 
              size={20} 
              className={`transition-colors duration-300 ${
                activeId === id ? 'text-orange-400' : 'text-slate-400 group-hover:text-slate-200'
              }`} 
            />
            <span 
              className={`text-[10px] font-semibold uppercase tracking-tighter transition-colors duration-300 ${
                activeId === id ? 'text-orange-400' : 'text-slate-500 group-hover:text-slate-400'
              }`}
            >
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
