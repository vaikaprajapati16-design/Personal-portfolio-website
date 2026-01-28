
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold mb-2 uppercase tracking-widest text-sm">Milestones</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Academic Qualification</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {EDUCATION.map((item, index) => (
              <div 
                key={index} 
                className="relative pl-8 sm:pl-32 py-8 group"
              >
                {/* Desktop timeline marker */}
                <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-24 text-right pr-8">
                  <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                
                {/* Dot */}
                <div className="absolute left-0 sm:left-28 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white bg-indigo-600 shadow-sm z-10 group-hover:scale-150 transition-transform"></div>
                
                {/* Line */}
                {index !== EDUCATION.length - 1 && (
                  <div className="absolute left-[7px] sm:left-[118px] top-1/2 w-0.5 h-full bg-slate-100"></div>
                )}

                <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{item.degree}</h4>
                      <p className="text-indigo-600 font-medium">{item.institution}</p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                      <span className="text-sm text-slate-500 block">Grade/Status</span>
                      <span className="text-lg font-bold text-slate-800">{item.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
