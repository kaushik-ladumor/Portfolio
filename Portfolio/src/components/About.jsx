import React from 'react';
import { personalInfo, projects, skills } from '../data/portfolioData';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const StatCard = ({ label, value }) => {
  return (
    <div className="rounded-2xl border border-slate-700/70 bg-slate-800/50 p-5 transition-colors hover:border-orange-500/40">
      <p className="text-2xl font-extrabold tracking-tight text-orange-400">{value}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
    </div>
  );
};

const About = () => {
  const projCount = projects.length;
  const techCount = Object.values(skills).flat().length;

  return (
    <section id="about" className="relative w-full py-10 px-4 sm:px-8 lg:px-16 bg-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading section-heading-centered reveal">
          <span className="section-kicker">A little about me</span>
          <h2 className="section-title">Turning ideas into <span className="section-title-accent">reliable web apps.</span></h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="reveal">
            <h3 className="mb-4 text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl">
              Full-stack development, from idea to launch.
            </h3>
            <p className="mb-7 max-w-3xl text-[.95rem] leading-7 text-slate-400 sm:text-base">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <StatCard label="Selected projects" value={String(projCount).padStart(2, '0')} />
              <StatCard label="Tools & technologies" value={`${techCount}+`} />
              <StatCard label="Current degree" value="BTech" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="mr-1 text-sm text-slate-500">Find me online</span>
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kaushik on GitHub"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 transition-colors hover:border-orange-400/50 hover:text-orange-300"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kaushik on LinkedIn"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 transition-colors hover:border-orange-400/50 hover:text-orange-300"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              )}
              {personalInfo.leetcode && (
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kaushik on LeetCode"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 transition-colors hover:border-orange-400/50 hover:text-orange-300"
                >
                  <ExternalLink size={16} /> LeetCode
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
