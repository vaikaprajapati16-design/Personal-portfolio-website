
import React, { useState } from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';
import { GoogleGenAI } from "@google/genai";

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [skillInsight, setSkillInsight] = useState<string>('');
  const [isLoadingInsight, setIsLoadingInsight] = useState(false);

  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const handleSkillClick = async (skill: Skill) => {
    // Toggle behavior: if same skill clicked, close it
    if (selectedSkill?.name === skill.name) {
      setSelectedSkill(null);
      return;
    }

    setSelectedSkill(skill);
    setIsLoadingInsight(true);
    setSkillInsight('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Provide a 15-word professional clip explaining why "${skill.name}" is a critical skill for a Computer Engineering graduate.`,
      });
      setSkillInsight(response.text || "A core technical pillar for building modern, scalable engineering solutions.");
    } catch (error) {
      setSkillInsight("Essential tool for developing robust, high-performance computing applications.");
    } finally {
      setIsLoadingInsight(false);
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold mb-2 uppercase tracking-widest text-sm">Technical Toolkit</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Skills & Expertise</h3>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Interactive skill chips. Click any chip to reveal a professional AI-generated insight clip.
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="relative">
              <div className="flex items-center gap-4 mb-6">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] whitespace-nowrap">
                  {category}
                </h4>
                <div className="h-px w-full bg-slate-200"></div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(s => s.category === category).map((skill) => {
                  const isActive = selectedSkill?.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onClick={() => handleSkillClick(skill)}
                      className={`
                        group flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-300
                        ${isActive 
                          ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100 scale-105' 
                          : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md'
                        }
                      `}
                    >
                      <i className={`${skill.icon} transition-transform group-hover:scale-110`}></i>
                      <span className="font-semibold text-sm tracking-wide">{skill.name}</span>
                      {isActive && <i className="fa-solid fa-sparkles text-[10px] animate-pulse"></i>}
                    </button>
                  );
                })}
              </div>

              {/* In-line Detail Clip */}
              {selectedSkill && selectedSkill.category === category && (
                <div className="mt-6 animate-in slide-in-from-top-4 fade-in duration-300">
                  <div className="bg-white border border-indigo-100 rounded-2xl p-6 shadow-sm relative">
                    <div className="absolute -top-2 left-10 w-4 h-4 bg-white border-t border-l border-indigo-100 rotate-45"></div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                        <i className={`${selectedSkill.icon} text-xl`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-slate-900">{selectedSkill.name} Insight</h5>
                          <button 
                            onClick={() => setSelectedSkill(null)}
                            className="text-slate-400 hover:text-slate-600"
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                        
                        {isLoadingInsight ? (
                          <div className="flex items-center gap-2 text-indigo-400">
                            <i className="fa-solid fa-circle-notch animate-spin"></i>
                            <span className="text-sm font-medium">Generating clip...</span>
                          </div>
                        ) : (
                          <p className="text-slate-600 text-sm leading-relaxed italic">
                            "{skillInsight}"
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div className="mt-20 flex justify-center opacity-40">
           <div className="flex gap-8 text-slate-300 text-3xl">
              <i className="fa-brands fa-react animate-spin-slow"></i>
              <i className="fa-brands fa-node-js"></i>
              <i className="fa-brands fa-docker"></i>
              <i className="fa-brands fa-aws"></i>
           </div>
        </div>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
