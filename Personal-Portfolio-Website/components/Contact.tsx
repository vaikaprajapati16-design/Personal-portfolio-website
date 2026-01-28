
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative shadow-2xl">
            {/* Background design */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white opacity-5 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white opacity-5 rounded-full"></div>
            
            <div className="lg:w-1/2 text-white z-10">
              <h2 className="text-white/80 font-semibold mb-4 uppercase tracking-widest text-sm">Let's Talk</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Ready to take your projects to the next level?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl text-white">
                    <i className="fa-solid fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email Me At</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium hover:underline">{PERSONAL_INFO.email}</a>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl text-white">
                    <i className="fa-solid fa-phone text-xl"></i>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call Me At</p>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-medium hover:underline">{PERSONAL_INFO.phone}</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full z-10">
              <form className="bg-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                <textarea 
                  rows={4} 
                  placeholder="Your Message" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
