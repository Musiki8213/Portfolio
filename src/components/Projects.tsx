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
      title: 'E-Commerce',
      description:
        'A full-featured online store with product browsing, cart management, and checkout flow. Built with a modern React stack and deployed for a smooth shopping experience across devices.',
      technologies: ['React', 'TypeScript', 'Vercel', 'Responsive UI'],
      image: '/E-COMMERCE.png',
      link: 'https://e-commerce-omega-beige.vercel.app/',
      github: 'https://github.com/Musiki8213/e-commerce',
    },
    {
      title: 'TUT Chatbot',
      description:
        'An AI-powered chatbot for Tshwane University of Technology students. Helps with campus-related questions through a conversational interface with a clean, accessible design.',
      technologies: ['React', 'AI', 'Vercel', 'TypeScript'],
      image: '/TUT.jpg',
      link: 'https://thusa-tut-ai-chatbot.vercel.app/',
      github: 'https://github.com/Andile45/Thusa---TUT-AI-Chatbot',
    },
    {
      title: 'ClinicSync',
      description:
        'A clinic management platform for scheduling, patient records, and day-to-day healthcare workflows. Designed for clarity and efficiency in a clinical setting.',
      technologies: ['React', 'TypeScript', 'Healthcare', 'Vercel'],
      image: '/ClinicSync.png',
      link: 'https://clinic-sync-u4yx-7uipyal80-musikis-projects-3af67fec.vercel.app/',
      github: 'https://github.com/Musiki8213/ClinicSync',
    },
    {
      title: 'CMS',
      description:
        'A content management system for creating, editing, and publishing content with an intuitive admin interface and structured content workflows.',
      technologies: ['React', 'TypeScript', 'CMS', 'Vercel'],
      image: '/CMS.png',
      link: 'https://satumo-cms.vercel.app/',
      github: 'https://github.com/Musiki8213/Musiki-CMS',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] relative overflow-hidden ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#000000] dark:bg-[#000000] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-5 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#000000] dark:bg-[#000000] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="inline-flex items-center gap-3">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#000000] dark:text-[#ffffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectIcons = [
              <svg key="shop" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
              <svg key="chat" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
              <svg key="health" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
              <svg key="cms" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            ];
            return (
              <div key={index} className="block">
                <div
                  className={`bg-[#ffffff] dark:bg-[#000000] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border-2 border-transparent hover:border-[#000000] dark:border dark:border-[#ffffff]/20 dark:hover:border-[#ffffff] hover:scale-[1.02] overflow-hidden ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Preview Image */}
                  <div className="relative w-full h-48 bg-gradient-to-br from-[#000000] to-[#000000] dark:from-[#000000] dark:to-[#000000] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-lg bg-[#000000] dark:border dark:border-[#ffffff] flex items-center justify-center group-hover:scale-110 transition-all duration-300 text-[#ffffff] shadow-lg">
                        {projectIcons[index] || projectIcons[0]}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#000000] dark:text-[#ffffff] group-hover:text-[#000000] dark:group-hover:text-[#ffffff] transition-colors mb-4">
                      {project.title}
                    </h3>
                    <div className="mb-4">
                      <p
                        className={`text-[#000000] dark:text-[#ffffff] leading-relaxed ${
                          expandedProjects.has(index) ? '' : 'line-clamp-2'
                        }`}
                      >
                        {project.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleExpand(index)}
                        className="mt-2 text-[#000000] dark:text-[#ffffff] hover:text-[#1a1a1a] dark:hover:text-[#ffffff]/80 text-sm font-medium flex items-center gap-1 transition-colors"
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
                    <div className="flex flex-nowrap gap-2 overflow-x-auto pb-4 scrollbar-hide">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#000000] dark:bg-transparent dark:border dark:border-[#ffffff] text-[#ffffff] rounded text-xs font-medium hover:scale-105 hover:shadow-sm transition-all duration-300 cursor-default whitespace-nowrap flex-shrink-0"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2 border-t border-[#000000]/10 dark:border-[#ffffff]/20">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#000000] dark:bg-[#ffffff] dark:text-[#000000] text-[#ffffff] rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#000000] dark:border-[#ffffff] text-[#000000] dark:text-[#ffffff] rounded-md text-sm font-medium hover:bg-[#000000]/5 dark:hover:bg-[#ffffff]/10 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    </div>
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
