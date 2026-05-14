// importing modules
import './App.css'
import Navigation from './components/navigationBar/Navigation';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

// components
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  // intializing the aos when the component is loaded
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, [])

  // react element
  return (
    <div>
      <div>
        <Navigation />
      </div>
    <main>
  <section id="home">
    <Home />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="experience">
    <Experience />
  </section>

  <section id="skills">
    <Skills />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="education">
    <Education />
  </section>

  <section id="contact">
    <Contact />
  </section>

  <footer id="footer">
    <Footer />
  </footer>
</main>
    </div>
  )
}

export default App;