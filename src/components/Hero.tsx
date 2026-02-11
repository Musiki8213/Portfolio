import { Logo } from './Logo';

export const Hero = () => {
  const handleDownloadCV = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/Musiki-Sithomola-FlowCV-Resume-20251203.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Musiki-Sithomola-FlowCV-Resume-20251203.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback to direct download
      window.open('/Musiki-Sithomola-FlowCV-Resume-20251203.pdf', '_blank');
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ffffff] to-[#f8f9fa] dark:from-[#2a2a2a] dark:to-[#1a1a1a] text-[#000000] dark:text-[#e5e5e5] relative overflow-hidden py-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3b82f6] dark:bg-[#3b82f6] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b82f6] dark:bg-[#3b82f6] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#3b82f6] dark:bg-[#3b82f6] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-5 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Left Side */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1 animate-fade-in-left">
            <div className="space-y-6">
              <div className="inline-block lg:block mb-4 animate-scale-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
                <Logo size="lg" className="mx-auto lg:mx-0" />
              </div>
              <div className="h-1 w-24 bg-[#3b82f6] dark:bg-[#60a5fa] mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}></div>
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#333333] dark:text-[#cccccc] font-light animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                <span className="inline-flex items-center gap-3">
                  <svg className="w-6 h-6 md:w-7 md:h-7 animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                   Full Stack Developer
                </span>
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-[#333333] dark:text-[#cccccc] leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
              Crafting beautiful, intuitive user experiences with modern web technologies.
              Passionate about creating seamless digital solutions that bridge design and functionality.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up" style={{ animationDelay: '1s', opacity: 0 }}>
              <a
                href="#contact"
                className="group px-8 py-3 bg-[#3b82f6] dark:bg-[#3b82f6] text-[#ffffff] rounded-lg hover:bg-[#2563eb] dark:hover:bg-[#2563eb] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-md flex items-center gap-2"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>
              <a
                href="/Musiki-Sithomola-FlowCV-Resume-20251203.pdf"
                onClick={handleDownloadCV}
                className="group px-8 py-3 bg-transparent border-2 border-[#3b82f6] dark:border-[#60a5fa] text-[#3b82f6] dark:text-[#60a5fa] rounded-lg hover:bg-[#3b82f6] dark:hover:bg-[#3b82f6] hover:text-[#ffffff] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-md flex items-center gap-2"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-2xl transform rotate-3 opacity-20 dark:opacity-10 blur-xl animate-pulse-slow"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 animate-scale-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <img
                  src="/Gemini_Generated_Image_yqcy1kyqcy1kyqcy.png"
                  alt="Musiki Sithomola - UI/UX Full Stack Developer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b82f6]/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
