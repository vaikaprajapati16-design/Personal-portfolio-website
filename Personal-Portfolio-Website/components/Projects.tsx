
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold mb-2 uppercase tracking-widest text-sm">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h3>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            A selection of projects where I've applied my technical skills to solve problems and create user-focused experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <a 
                      href={project.link} 
                      className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a 
                      href={project.repo} 
                      className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors"
                      title="View Code"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-white text-indigo-600 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm border border-indigo-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h4>
                
                {/* Category Tags Display */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[11px] font-medium text-slate-400 bg-slate-200/50 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
