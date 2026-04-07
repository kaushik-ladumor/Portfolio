import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, projects, skills } from '../data/portfolioData';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const StatCard = ({ label, targetValue, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const increment = targetValue / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= targetValue) {
            setCount(targetValue);
            clearInterval(timer);
          } else {
            setCount(Math.round(start));
          }
        }, 16);
      }
    }, { threshold: 0.5 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <div ref={cardRef} className="reveal flex flex-col items-center justify-center rounded-2xl bg-slate-800/50 p-6 border border-slate-700/30 hover:border-orange-500/30 transition-all hover:scale-105">
      <h4 className="text-3xl font-bold text-orange-400">
        {count}{suffix}
      </h4>
      <p className="mt-1 text-sm font-medium uppercase tracking-widest text-slate-400">
        {label}
      </p>
    </div>
  );
};

const About = () => {
  const projCount = projects.length;
  const techCount = Object.values(skills).flat().length;

  return (
    <section id="about" className="relative w-full py-10 px-4 sm:px-8 lg:px-16 bg-slate-900 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <div className="reveal flex items-center justify-center gap-4 mb-16">
          <div className="h-0.5 w-12 bg-orange-500"></div>
          <h2 className="text-3xl font-bold sm:text-4xl text-white">About Me</h2>
          <div className="h-0.5 w-12 bg-orange-500"></div>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Avatar Area */}
          <div className="reveal flex flex-col items-center">
            <div className="relative group">
              {/* Outer animated ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-orange-500/20 to-orange-500/50 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
              
              {/* Avatar Initial Circle */}
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-slate-800 border-2 border-orange-500 shadow-2xl overflow-hidden">
                <span className="text-7xl font-bold tracking-tighter text-orange-400">
                  {personalInfo.name.split(' ').map(n=>n[0]).join('')}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-6">
              {personalInfo.github && (
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-slate-800 border border-slate-700 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <Github size={24} className="text-slate-400 group-hover:text-orange-400" />
                </a>
              )}
              {personalInfo.linkedin && (
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-slate-800 border border-slate-700 hover:border-teal-500 hover:bg-teal-500/10 transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <Linkedin size={24} className="text-slate-400 group-hover:text-teal-400" />
                </a>
              )}
              {personalInfo.leetcode && (
                <a 
                  href={personalInfo.leetcode} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-slate-800 border border-slate-700 hover:border-teal-500 hover:bg-teal-500/10 transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <ExternalLink size={24} className="text-slate-400 group-hover:text-teal-400" />
                </a>
              )}
            </div>
          </div>

          {/* Bio Area */}
          <div className="reveal">
            <h3 className="text-2xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
              Building Scalable & Data-Driven Solutions
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              {personalInfo.bio}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StatCard label="Projects Built" targetValue={projCount} />
              <StatCard label="Technologies" targetValue={techCount} />
              <StatCard label="Pursuing BTech" targetValue={2026} suffix="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
