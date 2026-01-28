
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating AI Assistant Toggle */}
      <button 
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white p-4 rounded-full shadow-2xl hover:bg-indigo-700 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Open Assistant"
      >
        <i className="fa-solid fa-robot text-2xl"></i>
      </button>

      {isAssistantOpen && (
        <Assistant onClose={() => setIsAssistantOpen(false)} />
      )}
    </div>
  );
};

export default App;
