import React from 'react';
import { education } from '../data/portfolioData';

const EducationEntry = ({ entry }) => {
  return (
    <div className="reveal flex relative pb-12 last:pb-0 group">
      {/* Timeline Line */}
      <div className="absolute left-4 top-2 h-full w-0.5 bg-slate-800 group-last:h-0"></div>
      
      {/* Timeline Dot */}
      <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border-2 border-orange-500 shadow-lg shadow-orange-500/20 group-hover:scale-125 transition-transform duration-300">
        <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="ml-10 pt-1 group-hover:translate-x-3 transition-transform duration-300">
        <span className="inline-block rounded-full bg-orange-500/10 px-3 py-1 text-[10px] font-bold text-orange-400 border border-orange-500/20 uppercase tracking-widest mb-3">
          {entry.year}
        </span>
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
          {entry.degree}
        </h3>
        <p className="text-slate-100 font-semibold text-lg">{entry.university}</p>
        <p className="text-slate-400 text-sm mt-1">{entry.institute}</p>
        <p className="mt-4 text-sm font-medium text-orange-400/80 bg-orange-500/5 inline-block px-3 py-1.5 rounded-lg border border-orange-500/10">
          Result: <span className="font-bold text-orange-400">{entry.score}</span>
        </p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="relative w-full py-10 px-4 sm:px-8 lg:px-16 bg-slate-900">
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <div className="reveal flex items-center justify-start gap-4 mb-20 ml-2">
          <div className="h-0.5 w-16 bg-orange-500"></div>
          <h2 className="text-4xl font-bold text-white">Educational Path</h2>
        </div>

        <div className="flex flex-col">
          {education.map((entry, index) => (
            <EducationEntry key={index} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
