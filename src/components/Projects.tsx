export const Projects = () => {
  const projects = [
    {
      title: 'Link Vault',
      description:
        'A React + TypeScript app to store, manage, and view links with a sleek, responsive interface. Features user authentication, add/edit/delete/search/filter links, with responsive design and dark/light theme.',
      technologies: ['React', 'TypeScript', 'React Router', 'CSS', 'localStorage'],
    },
    {
      title: 'SafeMzansi — Community Safety App',
      description:
        'A React + Express app to keep communities informed and safe, with web and mobile support via Capacitor. Features user-friendly React frontend, Express backend with JWT authentication, mobile-ready with Capacitor, and real-time updates.',
      technologies: ['React', 'Vite', 'Express.js', 'MongoDB', 'Firebase', 'Capacitor', 'Google Maps API'],
    },
    {
      title: 'Weather App',
      description:
        'A React + TypeScript web application that shows current weather and forecasts for any location. Features search by city, displays temperature/humidity/wind, responsive design, and dynamic UI with weather-based icons.',
      technologies: ['React', 'TypeScript', 'CSS', 'OpenWeatherMap API'],
    },
    {
      title: 'ShopMate — Shopping List App',
      description:
        'A responsive Shopping List App built with React + TypeScript, Redux Toolkit, Tailwind CSS, and JSON Server. Features user registration/login, create/edit/delete/search/sort lists, persistent data, and responsive design.',
      technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'JSON Server', 'React Router v6'],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-[#ffffff] dark:bg-[#3a3a3a] text-[#000000] dark:text-[#e5e5e5]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="inline-flex items-center gap-3">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#8b5cf6] dark:text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="bg-[#ffffff] dark:bg-[#2a2a2a] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group border-2 border-transparent hover:border-[#8b5cf6] dark:hover:border-[#a78bfa] hover:scale-105"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#8b5cf6] dark:bg-[#a78bfa] flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 text-[#ffffff] shadow-lg">
                    {projectIcons[index] || projectIcons[0]}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#000000] dark:text-[#aaaaaa] group-hover:text-[#000000] dark:group-hover:text-[#e5e5e5] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[#000000] dark:text-[#cccccc] mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#8b5cf6] dark:bg-[#a78bfa] text-[#ffffff] rounded text-xs font-medium hover:scale-125 hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
