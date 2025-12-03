import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 bg-[#ffffff] dark:bg-[#3a3a3a] text-[#000000] dark:text-[#e5e5e5] relative overflow-hidden ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {/* Subtle background decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#3b82f6] dark:bg-[#3b82f6] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-5 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#3b82f6] dark:bg-[#3b82f6] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="inline-flex items-center gap-3">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3b82f6] dark:text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3b82f6] dark:bg-[#3b82f6] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-6 h-6 text-[#ffffff] dark:text-[#e5e5e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed text-[#333333] dark:text-[#cccccc]">
                I'm a UI/UX Full Stack Developer at mlab, combining technical expertise with creative problem-solving to build exceptional digital experiences.
              </p>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3b82f6] dark:bg-[#3b82f6] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-6 h-6 text-[#ffffff] dark:text-[#e5e5e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed text-[#333333] dark:text-[#cccccc]">
                Currently pursuing Computer Science at TUT, I've developed a comprehensive skill set spanning from UI design to backend development.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-[#ffffff] dark:bg-[#2a2a2a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#3b82f6] dark:border-[#60a5fa]">
              <h3 className="text-xl font-semibold mb-4 text-[#3b82f6] dark:text-[#60a5fa] flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                What I Do
              </h3>
              <ul className="space-y-3 text-[#333333] dark:text-[#cccccc]">
                <li className="flex items-start gap-3 group/item">
                  <svg className="w-5 h-5 mt-1 text-[#3b82f6] dark:text-[#60a5fa] group-hover/item:scale-150 group-hover/item:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span>Design intuitive user interfaces and experiences</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <svg className="w-5 h-5 mt-1 text-[#666666] dark:text-[#999999] group-hover/item:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Develop full-stack web applications</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <svg className="w-5 h-5 mt-1 text-[#666666] dark:text-[#999999] group-hover/item:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Create responsive and accessible designs</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <svg className="w-5 h-5 mt-1 text-[#666666] dark:text-[#999999] group-hover/item:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Optimize performance and user experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
