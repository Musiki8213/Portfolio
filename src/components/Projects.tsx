import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  const projects = [
    {
      title: 'Link Vault',
      description:
        'A React + TypeScript app to store, manage, and view links with a sleek, responsive interface. Features user authentication, add/edit/delete/search/filter links, with responsive design and dark/light theme.',
      technologies: ['React', 'TypeScript', 'React Router', 'CSS'],
      image: '/project-weather-app.png',
    },
    {
      title: 'SafeMzansi — Community Safety App',
      description:
        'A React + Express app to keep communities informed and safe, with web and mobile support via Capacitor. Features user-friendly React frontend, Express backend with JWT authentication, mobile-ready with Capacitor, and real-time updates.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Firebase', 'Capacitor'],
      image: '/project-safemzansi.png',
    },
    {
      title: 'Weather App',
      description:
        'A React + TypeScript web application that shows current weather and forecasts for any location. Features search by city, displays temperature/humidity/wind, responsive design, and dynamic UI with weather-based icons.',
      technologies: ['React', 'TypeScript', 'CSS', 'OpenWeatherMap API'],
      image: '/project-link-vault.png',
    },
    {
      title: 'ShopMate — Shopping List App',
      description:
        'A responsive Shopping List App built with React + TypeScript, Redux Toolkit, Tailwind CSS, and JSON Server. Features user registration/login, create/edit/delete/search/sort lists, persistent data, and responsive design.',
      technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
      image: '/project-shopmate.png',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 bg-[#ffffff] dark:bg-[#3a3a3a] text-[#000000] dark:text-[#e5e5e5] relative overflow-hidden ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6] dark:bg-[#3b82f6] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-5 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3b82f6] dark:bg-[#3b82f6] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="inline-flex items-center gap-3">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3b82f6] dark:text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectIcons = [
              <svg key="link" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
              <svg key="safety" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
              <svg key="weather" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
              <svg key="shop" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            ];
            return (
              <div
                key={index}
                className={`bg-[#ffffff] dark:bg-[#2a2a2a] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border-2 border-transparent hover:border-[#3b82f6] dark:hover:border-[#60a5fa] hover:scale-[1.02] overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Preview Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to gradient if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-lg bg-[#3b82f6] dark:bg-[#60a5fa] flex items-center justify-center group-hover:scale-110 transition-all duration-300 text-[#ffffff] shadow-lg">
                      {projectIcons[index] || projectIcons[0]}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#000000] dark:text-[#aaaaaa] group-hover:text-[#000000] dark:group-hover:text-[#e5e5e5] transition-colors mb-4">
                    {project.title}
                  </h3>
                  <div className="mb-4">
                    <p
                      className={`text-[#333333] dark:text-[#cccccc] leading-relaxed ${
                        expandedProjects.has(index) ? '' : 'line-clamp-2'
                      }`}
                    >
                      {project.description}
                    </p>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-2 text-[#3b82f6] dark:text-[#60a5fa] hover:text-[#2563eb] dark:hover:text-[#3b82f6] text-sm font-medium flex items-center gap-1 transition-colors"
                    >
                      {expandedProjects.has(index) ? (
                        <>
                          <span>Show less</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Read more</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#3b82f6] dark:bg-[#60a5fa] text-[#ffffff] rounded text-xs font-medium hover:scale-105 hover:shadow-sm transition-all duration-300 cursor-default whitespace-nowrap flex-shrink-0"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
