
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold gradient-text mb-4 inline-block">VP.</a>
            <p className="text-slate-500 text-sm max-w-xs">
              Computer Engineering Student exploring the world of software development.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6 text-xl text-slate-400">
              <a href="#" className="hover:text-indigo-600 transition-colors"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="hover:text-indigo-600 transition-colors"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" className="hover:text-indigo-600 transition-colors"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <p className="text-slate-400 text-xs">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
