import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 border-b border-[#e5e5e5] dark:border-[#ffffff]/20 bg-[#ffffff]/75 dark:bg-[#000000]/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
            <button
              onClick={() => scrollToSection('home')}
              className="text-3xl font-semibold tracking-tight text-[#000000] dark:text-[#ffffff]"
              aria-label="Go to home"
            >
              MS
            </button>

            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.id === 'contact' ? (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer ${
                        activeSection === item.id
                          ? 'bg-[#000000] text-[#ffffff]'
                          : 'bg-[#000000] text-[#ffffff] hover:bg-[#1a1a1a] dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#ffffff]/90'
                      }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                        activeSection === item.id
                          ? 'text-[#000000] dark:text-[#ffffff] border-b-2 border-[#000000] dark:border-[#ffffff] font-semibold'
                          : 'text-[#000000] dark:text-[#ffffff] hover:text-[#1a1a1a] dark:hover:text-[#ffffff]/80 transition-colors duration-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-[#000000] dark:border-[#ffffff] text-[#000000] dark:text-[#ffffff] flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
        </div>
      </div>
    </nav>
  );
};
