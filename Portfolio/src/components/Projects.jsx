import React from 'react';
import { projects } from '../data/portfolioData';
import { ArrowUpRight, BarChart3, CheckCircle2, Code2, Github, MapPinned, ShoppingBag, UsersRound } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const PreviewIcon = project.type === 'AI & HRMS'
    ? UsersRound
    : project.type === 'Data Analytics'
    ? BarChart3
    : project.title.startsWith('ClothOra')
      ? ShoppingBag
      : MapPinned;

  return (
    <div 
      className="project-card reveal group flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-700/70 bg-slate-800/35 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-black/30"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="project-visual relative flex h-32 items-center justify-center overflow-hidden border-b border-slate-700/70 sm:h-52">
        {project.type === 'AI & HRMS' ? (
          <div aria-hidden="true" className="project-preview">
            <div className="flex items-center justify-between border-b border-slate-700/70 pb-2">
              <span className="font-mono text-[10px] text-slate-300">PEOPLE OPERATIONS</span>
              <UsersRound size={15} className="text-orange-400" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {['People', 'Payroll', 'Growth'].map((label) => (
                <div key={label} className="rounded-md border border-slate-700/70 bg-slate-800/80 p-2">
                  <span className="block h-1.5 w-8 rounded-full bg-slate-600" />
                  <span className="mt-2 block text-[9px] text-slate-400">{label}</span>
                </div>
              ))}
            </div>
          </div>
        ) : project.type === 'Data Analytics' ? (
          <div aria-hidden="true" className="project-preview">
            <div className="flex items-center justify-between border-b border-slate-700/70 pb-2">
              <span className="font-mono text-[10px] text-slate-300">MATCH PERFORMANCE</span>
              <BarChart3 size={15} className="text-orange-400" />
            </div>
            <div className="mt-3 flex h-12 items-end gap-2">
              {[30, 52, 38, 72, 48, 86, 61, 100, 74].map((height, barIndex) => (
                <span key={barIndex} className="project-preview-bar" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        ) : project.title.startsWith('ClothOra') ? (
          <div aria-hidden="true" className="project-preview flex items-center gap-3">
            <div className="project-preview-product flex h-full w-16 shrink-0 items-center justify-center rounded-lg">
              <ShoppingBag size={24} className="text-orange-400" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">New collection</span>
              <div className="mt-2 h-2 w-4/5 rounded-full bg-slate-600" />
              <div className="mt-1.5 h-2 w-3/5 rounded-full bg-slate-700" />
              <div className="mt-3 flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-orange-400" />
                <span className="h-3 w-3 rounded-full bg-slate-500" />
                <span className="h-3 w-3 rounded-full bg-teal-400" />
              </div>
            </div>
          </div>
        ) : (
          <div aria-hidden="true" className="project-preview project-preview-map relative flex items-center justify-center">
            <div className="absolute left-6 top-5 h-5 w-5 rounded-full border border-teal-400/50 bg-teal-400/15" />
            <div className="absolute bottom-5 right-8 h-5 w-5 rounded-full border border-orange-400/50 bg-orange-400/15" />
            <MapPinned size={30} className="text-orange-400" />
            <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-widest text-slate-400">Find your next stay</span>
          </div>
        )}
        <div className="absolute bottom-4 right-5 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-600/80 bg-slate-800 text-orange-400 shadow-xl">
          <PreviewIcon size={20} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-7">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 sm:mb-4">
          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[.15em] text-orange-400">{project.type}</span>
          {project.period && <span className="text-xs font-medium text-slate-500">{project.period}</span>}
        </div>
        <h3 className="text-xl font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-orange-400">
          {project.title}
        </h3>
        <p className="project-summary mt-2 text-sm leading-6 text-slate-400 sm:mt-3">
          {project.summary}
        </p>

      {/* Skills Tags */}
      <div className="project-skills mt-4 mb-4 flex flex-wrap gap-2 sm:mt-5 sm:mb-6">
        {project.skills.slice(0, 5).map((skill) => (
          <span key={skill} className="rounded border border-slate-700 px-2 py-1 text-[11px] font-medium text-slate-400 transition-colors group-hover:border-orange-500/30">
            {skill}
          </span>
        ))}
        {project.skills.length > 5 && (
          <span className="px-1 text-[11px] font-medium text-slate-400">
            +{project.skills.length - 5}
          </span>
        )}
      </div>

      {/* Outcome Bullets */}
      <div className="project-outcomes mb-8 space-y-2">
        {project.outcomes.map((outcome, i) => (
          <div key={i} className="flex items-start gap-2 text-[13px] leading-5 text-slate-400">
            <CheckCircle2 size={12} className="text-orange-500 shrink-0 mt-0.5" />
            <span>{outcome}</span>
          </div>
        ))}
      </div>

      <details className="project-details mb-4">
        <summary className="cursor-pointer text-xs font-semibold text-orange-300">Project details</summary>
        <ul className="mt-3 space-y-2">
          {project.outcomes.map((outcome) => (
            <li key={outcome} className="text-xs leading-5 text-slate-400">{outcome}</li>
          ))}
        </ul>
      </details>

      {/* Footer Info / Links */}
      <div className="mt-auto flex items-center gap-4 border-t border-slate-700/70 pt-5">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-200 transition-colors hover:text-orange-400"
          >
            <Github size={16} /> Source code <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
            <Code2 size={16} /> Project overview
          </span>
        )}
      </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-10 px-4 sm:px-8 lg:px-16 bg-slate-900">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="section-heading section-heading-centered reveal">
          <p className="section-kicker">A few things I’ve worked on</p>
          <div className="flex flex-col items-start gap-3">
            <h2 className="section-title">Selected work<span className="section-title-accent">.</span></h2>
            <p className="section-description">Selected applications built to solve practical problems.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
