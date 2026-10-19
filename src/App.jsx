import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Bootcamp from './components/Bootcamp';
import Activities from './components/Activities';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Apply / remove dark class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove('light');
    } else {
      html.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? '' : 'light'}>
      <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode((d) => !d)} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Bootcamp />
        <Activities />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
