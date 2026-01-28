
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 hero-gradient overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
          Computer Engineering Student
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Hello, I'm <br />
          <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
          Passionate developer from {PERSONAL_INFO.location}, dedicated to building 
          robust software solutions and web experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300"
          >
            Get In Touch
          </a>
          <a
            href="#skills"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300"
          >
            View My Skills
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-6 text-2xl text-slate-400">
          <a href="#" className="hover:text-indigo-600 transition-colors"><i className="fa-brands fa-github"></i></a>
          <a href="#" className="hover:text-indigo-600 transition-colors"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#" className="hover:text-indigo-600 transition-colors"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-indigo-600">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
