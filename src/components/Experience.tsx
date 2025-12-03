import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: 'UI/UX & Full Stack Developer',
      company: 'mlab',
      period: 'July 2025 - Present',
      description: [
        'Designing and developing user-centric web applications',
        'Collaborating with cross-functional teams to deliver high-quality products',
        'Implementing responsive designs and ensuring optimal user experiences',
        'Working with modern web technologies and frameworks',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 bg-[#ffffff] dark:bg-[#2a2a2a] text-[#000000] dark:text-[#e5e5e5] relative overflow-hidden ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {/* Subtle background decoration */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-[#3b82f6] dark:bg-[#3b82f6] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-5 animate-pulse-slow"></div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="inline-flex items-center gap-3">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3b82f6] dark:text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Experience
          </span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#ffffff] dark:bg-[#3a3a3a] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border-l-4 border-transparent hover:border-[#3b82f6] dark:hover:border-[#60a5fa]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#3b82f6] dark:bg-[#3b82f6] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-[#ffffff] dark:text-[#e5e5e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-xl text-[#000000] dark:text-[#aaaaaa] flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span className="text-[#333333] dark:text-[#cccccc] font-medium mt-2 md:mt-0 flex items-center gap-2 bg-[#ffffff] dark:bg-[#2a2a2a] px-4 py-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {exp.period}
                </span>
              </div>
              <ul className="list-none space-y-3 text-[#333333] dark:text-[#cccccc] mt-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <svg className="w-5 h-5 mt-1 text-[#3b82f6] dark:text-[#60a5fa] flex-shrink-0 group-hover/item:scale-150 group-hover/item:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
