import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs.config';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'sithomolamusiki@gmail.com',
        },
        emailjsConfig.publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-[#ffffff] dark:bg-[#2a2a2a] text-[#000000] dark:text-[#e5e5e5]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="inline-flex items-center gap-3">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3b82f6] dark:text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </span>
        </h2>
        
        <div className="bg-[#ffffff] dark:bg-[#3a3a3a] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <p className="text-lg text-[#000000] dark:text-[#cccccc] mb-8 text-center leading-relaxed flex items-center justify-center gap-2">
            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#000000] dark:text-[#cccccc] mb-2">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#ffffff] dark:bg-[#2a2a2a] border-2 border-[#000000] dark:border-[#666666] rounded-lg text-[#000000] dark:text-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:focus:ring-[#60a5fa] focus:border-[#3b82f6] dark:focus:border-[#60a5fa] transition-all duration-300 hover:border-[#3b82f6] dark:hover:border-[#60a5fa]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#333333] dark:text-[#cccccc] mb-2">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#ffffff] dark:bg-[#2a2a2a] border-2 border-[#000000] dark:border-[#666666] rounded-lg text-[#000000] dark:text-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:focus:ring-[#60a5fa] focus:border-[#3b82f6] dark:focus:border-[#60a5fa] transition-all duration-300 hover:border-[#3b82f6] dark:hover:border-[#60a5fa]"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#333333] dark:text-[#cccccc] mb-2">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  Subject
                </span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#ffffff] dark:bg-[#000000] border-2 border-[#666666] dark:border-[#999999] rounded-lg text-[#000000] dark:text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#666666] dark:focus:ring-[#999999] transition-all"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#333333] dark:text-[#cccccc] mb-2">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Message
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#ffffff] dark:bg-[#000000] border-2 border-[#666666] dark:border-[#999999] rounded-lg text-[#000000] dark:text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#666666] dark:focus:ring-[#999999] transition-all resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-[#3b82f6] dark:bg-[#3b82f6] text-[#ffffff] rounded-lg hover:bg-[#2563eb] dark:hover:bg-[#2563eb] transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </form>

          {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-[#000000] dark:bg-[#4a4a4a] text-[#ffffff] dark:text-[#e5e5e5] rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-[#000000] dark:bg-[#4a4a4a] text-[#ffffff] dark:text-[#e5e5e5] rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Failed to send message. Please try again or email me directly.
            </div>
          )}

          <div className="border-t-2 border-[#3b82f6] dark:border-[#60a5fa] pt-8 mt-8">
            <p className="text-center text-[#000000] dark:text-[#cccccc] mb-6">Or reach out directly:</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:sithomolamusiki@gmail.com"
                className="group px-8 py-3 bg-[#3b82f6] dark:bg-[#3b82f6] text-[#ffffff] rounded-lg hover:bg-[#2563eb] dark:hover:bg-[#2563eb] transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 group-hover:animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/musiki-sithomola-820a97359"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 border-2 border-[#3b82f6] dark:border-[#60a5fa] text-[#3b82f6] dark:text-[#60a5fa] rounded-lg hover:bg-[#3b82f6] dark:hover:bg-[#3b82f6] hover:text-[#ffffff] transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-125 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 border-2 border-[#3b82f6] dark:border-[#60a5fa] text-[#3b82f6] dark:text-[#60a5fa] rounded-lg hover:bg-[#3b82f6] dark:hover:bg-[#3b82f6] hover:text-[#ffffff] transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
