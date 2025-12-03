export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ffffff] to-[#ffffff] dark:from-[#2a2a2a] dark:to-[#3a3a3a] text-[#000000] dark:text-[#e5e5e5] relative overflow-hidden"
    >
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#e8e8e8] dark:bg-[#4a4a4a] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#f0f0f0] dark:bg-[#5a5a5a] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#f5f5f5] dark:bg-[#6a6a6a] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-block mb-4">
            <svg className="w-16 h-16 md:w-20 md:h-20 mx-auto text-[#3b82f6] dark:text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-[#3b82f6] dark:text-[#60a5fa]">
            Musiki Sithomola
          </h1>
          <div className="h-1 w-32 bg-[#3b82f6] dark:bg-[#60a5fa] mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-[#000000] dark:text-[#cccccc] font-light">
            <span className="inline-flex items-center gap-2">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              UI/UX Full Stack Developer
            </span>
          </p>
        </div>
        <p className="text-lg md:text-xl text-[#000000] dark:text-[#cccccc] max-w-2xl mx-auto mb-8 leading-relaxed">
          Crafting beautiful, intuitive user experiences with modern web technologies.
          Passionate about creating seamless digital solutions that bridge design and functionality.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="group px-8 py-3 bg-[#3b82f6] dark:bg-[#3b82f6] text-[#ffffff] rounded-lg hover:bg-[#2563eb] dark:hover:bg-[#2563eb] transition-all duration-300 transform hover:scale-110 shadow-lg flex items-center gap-2 mx-auto md:mx-0"
          >
            <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </a>
         
        </div>
      </div>
    </section>
  );
};
