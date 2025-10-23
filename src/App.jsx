import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Achievements />
    <Contact />
  </div>
);

export default App;
