import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Education = () => {
  const { ref, isVisible } = useScrollAnimation();
  const education = [
    {
      degree: 'Diploma of Science in Computer Science',
      institution: 'Tshwane University of Technology (TUT)',
      period: '2022 - 2025',
      duration: '4 years',
      description: [
        'Comprehensive study of computer science fundamentals',
        'Software engineering and development practices',
        'Database systems and data structures',
        'Web development and modern programming paradigms',
      ],
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className={`py-20 bg-[#ffffff] dark:bg-[#3a3a3a] text-[#000000] dark:text-[#e5e5e5] relative overflow-hidden ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {/* Subtle background decoration */}
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#3b82f6] dark:bg-[#3b82f6] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-5 animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="inline-flex items-center gap-3">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3b82f6] dark:text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v9m0-9l-3-3m3 3l3-3" />
            </svg>
            Education
          </span>
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[#ffffff] dark:bg-[#2a2a2a] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border-l-4 border-transparent hover:border-[#3b82f6] dark:hover:border-[#60a5fa]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#3b82f6] dark:bg-[#60a5fa] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-[#ffffff] dark:text-[#e5e5e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-xl text-[#000000] dark:text-[#aaaaaa] flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="text-right mt-2 md:mt-0 flex flex-col gap-1">
                  <p className="text-[#333333] dark:text-[#cccccc] font-medium flex items-center justify-end gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {edu.period}
                  </p>
                  <p className="text-[#333333] dark:text-[#cccccc] text-sm">
                    {edu.duration}
                  </p>
                </div>
              </div>
              <ul className="list-none space-y-3 text-[#333333] dark:text-[#cccccc] mt-6">
                {edu.description.map((item, i) => (
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
