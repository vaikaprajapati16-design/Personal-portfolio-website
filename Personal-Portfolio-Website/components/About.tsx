
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-indigo-100 rounded-3xl"></div>
              
              {/* Professional abstract placeholder without initials */}
              <div className="relative z-10 w-full aspect-square rounded-3xl shadow-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Visual Icon instead of initials */}
                <div className="relative z-20 flex flex-col items-center gap-4 text-white/90">
                  <i className="fa-solid fa-code-branch text-7xl md:text-8xl drop-shadow-2xl animate-pulse"></i>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/60"></div>
                    <div className="w-2 h-2 rounded-full bg-white/80"></div>
                  </div>
                </div>
                
                {/* Decorative coding-like elements */}
                <div className="absolute top-10 right-10 text-white/20 font-mono text-sm pointer-events-none">
                  &lt;developer /&gt;
                </div>
                <div className="absolute bottom-10 left-10 text-white/20 font-mono text-sm pointer-events-none">
                  {`{ engineer: true }`}
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 z-20 bg-indigo-600 p-6 rounded-2xl shadow-xl text-white hidden sm:block">
                <span className="text-4xl font-bold">20+</span>
                <p className="text-sm opacity-80 uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-indigo-600 font-semibold mb-2 uppercase tracking-widest text-sm">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              A Dedicated Computer Engineering Student
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-xl">
                  <i className="fa-solid fa-graduation-cap text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-medium">Education</p>
                  <p className="text-slate-700 font-semibold">{PERSONAL_INFO.university}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-xl">
                  <i className="fa-solid fa-location-dot text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-medium">Location</p>
                  <p className="text-slate-700 font-semibold">{PERSONAL_INFO.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-xl">
                  <i className="fa-solid fa-language text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-medium">Languages</p>
                  <p className="text-slate-700 font-semibold">{PERSONAL_INFO.languages.join(', ')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-xl">
                  <i className="fa-solid fa-cake-candles text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-medium">Born</p>
                  <p className="text-slate-700 font-semibold">{PERSONAL_INFO.dob}</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
