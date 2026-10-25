import React from 'react';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-slate-900 px-4 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading section-heading-centered reveal">
          <span className="section-kicker">Professional experience</span>
          <h2 className="section-title">Building products with <span className="section-title-accent">real teams.</span></h2>
        </div>

        <div className="mx-auto max-w-5xl">
          {experience.map((entry, index) => (
            <article key={entry.company} style={{ transitionDelay: `${index * 140}ms` }} className={`reveal relative grid gap-5 py-7 first:pt-0 sm:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1.3fr)] sm:gap-10 ${index < experience.length - 1 ? 'border-b border-slate-700/70' : ''}`}>
              <div className="relative sm:border-l sm:border-slate-700/80 sm:pl-7">
                <span aria-hidden="true" className="absolute -left-[5px] top-1 hidden h-2.5 w-2.5 rounded-full bg-orange-400 ring-4 ring-slate-900 sm:block" />
                <p className="font-mono text-xs font-medium text-orange-300">{entry.period}</p>
                <p className="mt-2 text-sm text-slate-500">{entry.location}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-50">{entry.role}</h3>
                <p className="mt-1 font-medium text-slate-300">{entry.company}</p>
                <ul className="mt-4 space-y-2">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
