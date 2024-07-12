import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
