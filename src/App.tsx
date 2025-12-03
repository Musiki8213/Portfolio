import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#ffffff] dark:bg-[#2a2a2a] transition-colors duration-300">
        <Navigation />
        <ThemeToggle />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <footer className="bg-[#ffffff] dark:bg-[#3a3a3a] py-8 text-center text-[#000000] dark:text-[#cccccc]">
          <p>&copy; {new Date().getFullYear()} Musiki Sithomola. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App
