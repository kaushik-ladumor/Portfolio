import React from 'react';
import { education } from '../data/portfolioData';

const EducationEntry = ({ entry }) => {
  return (
    <article className="education-entry reveal relative grid grid-cols-1 gap-2 border-b border-slate-700/70 py-5 first:pt-0 last:border-b-0 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-7">
      <div className="relative">
        <span className="education-dot absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-orange-400 bg-slate-900" />
        <span className="education-year pl-6 font-mono text-xs font-medium text-orange-300 sm:text-sm">{entry.year}</span>
      </div>
      <div className="min-w-0 pb-1">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-slate-50 sm:text-xl">
          {entry.degree}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-slate-200 sm:text-base">{entry.university}</p>
        <p className="mt-1 text-sm leading-6 text-slate-400">{entry.institute}</p>
        <p className="mt-3 text-sm text-slate-400">
          Result <span className="px-1.5 text-slate-600">·</span><span className="font-medium text-slate-200">{entry.score}</span>
        </p>
      </div>
    </article>
  );
};

const Education = () => {
  return (
    <section id="education" className="relative w-full py-10 px-4 sm:px-8 lg:px-16 bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading section-heading-centered reveal">
          <span className="section-kicker">Where I’ve learned</span>
          <h2 className="section-title">Education & <span className="section-title-accent">growth.</span></h2>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col">
          {education.map((entry, index) => (
            <EducationEntry key={index} entry={entry} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
