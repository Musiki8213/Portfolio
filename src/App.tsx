import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer className="bg-[#ffffff] dark:bg-[#000000] py-8 text-center text-[#000000] dark:text-[#ffffff]">
          <p>&copy; {new Date().getFullYear()} Musiki Sithomola. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App
