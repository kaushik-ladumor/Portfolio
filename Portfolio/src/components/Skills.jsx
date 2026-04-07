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
  <div className="reveal hover:scale-110 active:scale-95 group relative inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/40 px-5 py-2 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/10">
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
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <div className="reveal flex items-center justify-center gap-4 mb-16 text-center">
          <div className="h-0.5 w-12 bg-orange-500"></div>
          <h2 className="text-3xl font-bold sm:text-4xl text-white tracking-tight">Technical Skills</h2>
          <div className="h-0.5 w-12 bg-orange-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="reveal bg-slate-800/20 backdrop-blur rounded-3xl p-8 border border-slate-700/50 hover:border-orange-500/20 transition-all group">
              <h3 className="text-xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
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
