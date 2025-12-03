import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#ffffff]/90 dark:bg-[#2a2a2a]/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:opacity-80 transition-opacity"
          >
            <Logo size="sm" variant="initials" />
          </button>
          
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.id === 'contact' ? (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-[#3b82f6] dark:bg-[#3b82f6] text-[#ffffff] shadow-lg'
                          : 'bg-[#3b82f6] dark:bg-[#3b82f6] text-[#ffffff] hover:bg-[#2563eb] dark:hover:bg-[#2563eb] shadow-md hover:shadow-lg hover:scale-[1.02]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                        activeSection === item.id
                          ? 'text-[#3b82f6] dark:text-[#60a5fa] border-b-2 border-[#3b82f6] dark:border-[#60a5fa] font-semibold'
                          : 'text-[#000000] dark:text-[#cccccc] hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition-colors duration-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[#3b82f6] dark:bg-[#3b82f6] text-[#ffffff] hover:bg-[#2563eb] dark:hover:bg-[#2563eb] transition-all duration-300 shadow-lg hover:shadow-md hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
