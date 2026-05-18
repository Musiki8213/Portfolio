import { motion, type Variants } from 'framer-motion';

const phoneContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const phoneLetterVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: 'easeOut' },
  },
};

const AnimatedLetters = ({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) => (
  <>
    {Array.from(text).map((char, i) => (
      <motion.span
        key={`${i}-${char}`}
        variants={phoneLetterVariants}
        className={`inline-block whitespace-pre ${className}`}
      >
        {char}
      </motion.span>
    ))}
  </>
);

export const Hero = () => {
  const cvFilePath = '/Sithomola%20Musiki%20CV.pdf';

  const handleDownloadCV = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(cvFilePath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Sithomola Musiki CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
      window.open(cvFilePath, '_blank');
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] relative overflow-hidden mt-9 pt-0 pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-[#ffffff] dark:bg-[#0a0a0a] rounded-2xl min-h-[80vh] p-6 sm:p-8 lg:p-10">
          <div className="mt-4 lg:mt-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div className="space-y-8 max-w-3xl animate-fade-in-left">
              <p className="text-2xl sm:text-3xl text-[#111111] dark:text-[#f5f5f5]">Hello! I'm Musiki.</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] font-semibold tracking-tight">
                <span className="block">Designing digital</span>
                <span className="block">product with emphasis</span>
                <span className="block text-[#9ca3af] dark:text-[#737373]">on visual design</span>
              </h1>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full bg-[#0b0f1a] text-[#ffffff] font-medium hover:bg-[#000000] transition-colors inline-flex items-center gap-2"
                >
                  Contact
                </a>
                <a
                  href={cvFilePath}
                  onClick={handleDownloadCV}
                  className="px-8 py-3 rounded-full bg-[#e5e7eb] dark:bg-[#2a2a2a] text-[#0b0f1a] dark:text-[#ffffff] font-medium hover:bg-[#0b0f1a] hover:text-[#ffffff] dark:hover:bg-[#ffffff] dark:hover:text-[#000000] transition-colors inline-flex items-center gap-2"
                >
                  Download CV
                </a>
              </div>
              <p className="text-[#444444] dark:text-[#b3b3b3] text-lg max-w-md leading-relaxed">
                A multidisciplinary designer and full-stack developer blending strategy, design,
                and code to build clean digital experiences.
              </p>
            </div>

            {/* Visual right side to mimic reference phone composition */}
            <div className="relative animate-fade-in-right h-[450px] sm:h-[540px] w-[270px] sm:w-[330px] mx-auto -mt-6 sm:-mt-8">
              <div className="absolute inset-x-4 top-8 bottom-6 rounded-[2.6rem] bg-[#0a0a0a]"></div>
              <div className="absolute inset-x-6 top-10 bottom-8 rounded-[2.3rem] bg-[#ffffff] overflow-hidden border border-[#e5e7eb]">
                <div className="px-5 pt-4 pb-3 text-[13px] font-medium flex items-center justify-between">
                  <span>9:41</span>
                  <div className="h-6 w-24 rounded-full bg-[#e8e8e8]"></div>
                  <span className="text-[12px]">◔ </span>
                </div>

                <motion.div
                  className="px-5 pt-2 font-poppins"
                  variants={phoneContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="text-2xl mb-3 tracking-tight text-[#000000]">
                    <AnimatedLetters text="Hello! I'm Musiki." />
                  </p>
                  <h2 className="text-5xl font-bold leading-[0.9] tracking-tight text-[#000000]">
                    <AnimatedLetters text="Designing" />
                    <br />
                    <AnimatedLetters text="digital" />
                    <br />
                    <AnimatedLetters text="product" />
                    <br />
                    <AnimatedLetters text="with" />
                    <br />
                    <AnimatedLetters text="emphasis" />
                    <br />
                    <AnimatedLetters text="at " />
                    <AnimatedLetters text="visual" className="text-[#a3a7af]" />
                    <br />
                    <AnimatedLetters text="design" className="text-[#a3a7af]" />
                  </h2>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
