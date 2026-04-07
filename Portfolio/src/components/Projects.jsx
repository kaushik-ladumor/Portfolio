import React from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="reveal group flex flex-col overflow-hidden rounded-3xl bg-slate-800/40 border border-slate-700/50 p-6 transition-all duration-300 hover:scale-105 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/20 uppercase tracking-widest">
          {project.type}
        </span>
        <span className="text-xs font-medium text-slate-500 bg-slate-900/50 px-2 py-1 rounded">
          {project.period}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-6 mb-auto">
        {project.summary}
      </p>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.skills.slice(0, 5).map((skill) => (
          <span key={skill} className="text-[10px] uppercase font-bold text-slate-500 border border-slate-700 rounded px-2 py-0.5 group-hover:border-orange-500/20 group-hover:text-orange-500/50 transition-colors">
            {skill}
          </span>
        ))}
        {project.skills.length > 5 && (
          <span className="text-[10px] uppercase font-bold text-slate-600 px-1">
            +{project.skills.length - 5}
          </span>
        )}
      </div>

      {/* Outcome Bullets */}
      <div className="space-y-2 mb-8">
        {project.outcomes.map((outcome, i) => (
          <div key={i} className="flex gap-2 items-start text-xs text-slate-400 leading-tight">
            <CheckCircle2 size={12} className="text-orange-500 shrink-0 mt-0.5" />
            <span>{outcome}</span>
          </div>
        ))}
      </div>

      {/* Footer Info / Links */}
      <div className="mt-auto flex items-center gap-4">
        <a 
          href={project.github || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            project.github 
              ? "bg-slate-700 text-white hover:bg-orange-500 hover:text-slate-900 group-hover:scale-105" 
              : "bg-slate-800 text-slate-600 cursor-not-allowed opacity-50"
          }`}
          onClick={(e) => !project.github && e.preventDefault()}
        >
          <Github size={16} />
          <span>Code</span>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-10 px-4 sm:px-8 lg:px-16 bg-slate-900">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="reveal flex items-center justify-center gap-4 mb-20">
          <div className="h-0.5 w-16 bg-orange-500"></div>
          <h2 className="text-4xl font-bold text-white text-center">Featured Projects</h2>
          <div className="h-0.5 w-16 bg-orange-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
