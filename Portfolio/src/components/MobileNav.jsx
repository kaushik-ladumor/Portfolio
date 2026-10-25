import React from 'react';
import { Home, User, Code, FolderOpen, GraduationCap, Mail, BriefcaseBusiness } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const MobileNav = () => {
  const sections = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'experience', icon: BriefcaseBusiness, label: 'Exp' },
    { id: 'projects', icon: FolderOpen, label: 'Work' },
    { id: 'education', icon: GraduationCap, label: 'Edu' },
    { id: 'contact', icon: Mail, label: 'Mail' },
  ];

  const activeId = useScrollSpy(sections.map(s => s.id));

  return (
    <nav aria-label="Mobile navigation" className="mobile-navigation fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="mobile-nav glass mx-auto grid w-full grid-cols-7 items-center border-t border-slate-700/70 px-1 transition-all duration-300">
        {sections.map(({ id, icon: Icon, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Go to ${label}`}
            aria-current={activeId === id ? 'location' : undefined}
            className="group flex min-w-0 flex-col items-center gap-1 px-0 py-2 transition-transform active:scale-90"
          >
            <Icon 
              size={18}
              className={`transition-colors duration-300 ${
                activeId === id ? 'text-orange-400' : 'text-slate-400 group-hover:text-slate-200'
              }`} 
            />
            <span 
              className={`text-[9px] font-semibold uppercase tracking-[-.04em] transition-colors duration-300 ${
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
