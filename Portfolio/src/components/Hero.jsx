import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-[min(880px,100svh)] w-full items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-70" />
      <div className="orb -right-24 top-24 animate-float opacity-70" />
      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
        <div className="animate-fadeIn min-w-0">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2 text-xs font-semibold tracking-wide text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            DESIGN <span className="text-slate-600">·</span> BUILD <span className="text-slate-600">·</span> SHIP
          </div>
          <p className="hero-meta mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm tracking-wide text-orange-400">
            <span>{personalInfo.location}</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>{personalInfo.tagline.split('|')[0].trim()}</span>
          </p>
          <h1 className="max-w-3xl text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-[1.04] tracking-[-.04em] text-slate-50">
            <span className="typewriter-line">Thoughtful code.</span>
            <span className="typewriter-line typewriter-line-accent mt-2 text-orange-400">Useful impact.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-[1.05rem]">
            I’m {personalInfo.name}, a full-stack developer focused on building dependable web applications and intelligent product features.
          </p>
          <div className="hero-actions mt-8 flex min-w-0 flex-col gap-3 sm:flex-row">
            <a href="#projects" className="group inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-3 rounded-full bg-orange-500 px-6 font-bold text-slate-900 transition-transform hover:-translate-y-0.5 sm:w-auto">
              Explore my work <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full border border-slate-700 px-6 font-semibold text-slate-200 transition-colors hover:border-orange-500/60 hover:text-orange-400 sm:w-auto">
              Let’s talk <ArrowUpRight size={17} />
            </a>
            <a href={personalInfo.resumeUrl} download="Kaushik_Ladumor_Resume.pdf" className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full border border-slate-700 px-6 font-semibold text-slate-200 transition-colors hover:border-orange-500/60 hover:text-orange-400 sm:w-auto">
              Download resume <Download size={16} />
            </a>
          </div>
        </div>

        <figure className="hero-portrait animate-portrait-enter relative mx-auto aspect-[4/5] w-full max-w-[25rem] overflow-hidden rounded-[2rem] border border-slate-700/80 shadow-[0_32px_100px_-44px_rgba(200,241,105,.3)]">
          <img
            src="/kaushik-photo.jpg"
            alt={`Portrait of ${personalInfo.name}`}
            fetchPriority="high"
            width="768"
            height="1152"
            className="profile-photo h-full w-full object-cover object-[center_18%]"
          />
          <div className="hero-portrait-shade absolute inset-0" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="mb-2 font-mono text-xs uppercase tracking-[.18em] text-orange-300">Full-stack developer · AI</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{personalInfo.name}</h2>
            <p className="mt-2 text-sm text-slate-300">{personalInfo.location}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
