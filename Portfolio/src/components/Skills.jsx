import React from 'react';
import { skills } from '../data/portfolioData';
import { 
  Code2, 
  Palette, 
  Layout, 
  Atom, 
  Terminal, 
  Database, 
  Server, 
  LineChart, 
  Settings, 
  FileJson,
  Cpu
} from 'lucide-react';

const getIcon = (name) => {
  const n = name.toLowerCase();
  
  // Frontend
  if (n.includes('html')) return <Code2 size={14} />;
  if (n.includes('css')) return <Palette size={14} />;
  if (n.includes('javascript') || n === 'js') return <FileJson size={14} />;
  if (n.includes('react')) return <Atom size={14} />;
  if (n.includes('tailwind') || n.includes('bootstrap')) return <Layout size={14} />;
  
  // Backend & DB
  if (n.includes('node') || n.includes('express') || n.includes('rest')) return <Server size={14} />;
  if (n.includes('mongodb') || n.includes('sql') || n.includes('mongoose')) return <Database size={14} />;
  
  // Data
  if (n.includes('power bi') || n.includes('excel') || n.includes('pandas') || n.includes('python') || n.includes('numpy') || n.includes('matplotlib') || n.includes('seaborn')) return <LineChart size={14} />;
  
  // Tools
  if (n.includes('git') || n.includes('vscode') || n.includes('terminal')) return <Terminal size={14} />;
  if (n.includes('postman') || n.includes('render') || n.includes('vercel') || n.includes('actions')) return <Settings size={14} />;
  
  return <Cpu size={14} />;
};

const SkillPill = ({ name }) => (
  <div className="reveal group relative inline-flex min-h-10 w-full min-w-0 items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/55 px-3 py-2 transition-all duration-200 hover:border-orange-500/50 hover:bg-orange-500/5 sm:w-auto sm:px-3.5">
    <span className="text-orange-500/50 group-hover:text-orange-400 transition-colors">
      {getIcon(name)}
    </span>
    <span className="text-sm font-medium text-slate-400 group-hover:text-orange-400 transition-colors">
      {name}
    </span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-10 px-4 sm:px-8 lg:px-16 bg-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading section-heading-centered reveal">
          <span className="section-kicker">My toolkit</span>
          <h2 className="section-title">Tools I use to <span className="section-title-accent">make things work.</span></h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="reveal group rounded-2xl border border-slate-700/70 bg-slate-800/25 p-6 transition-colors hover:border-slate-600 sm:p-7">
              <h3 className="mb-5 flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-100 sm:text-xl">
                <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                {category}
              </h3>
              
              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
                {categorySkills.map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
