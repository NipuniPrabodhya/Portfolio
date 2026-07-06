import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <footer style={{ 
        textAlign: 'center', 
        padding: '3rem 0', 
        backgroundColor: 'var(--bg-secondary)', 
        color: '#94A3B8', 
        fontSize: '0.95rem',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
        <p>
          Designed &amp; built by <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Nipuni Prabodhya</span> &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}

export default App;