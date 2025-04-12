import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      {/* Navigation Links */}
      {/* Sections */}
      <div id="about">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
