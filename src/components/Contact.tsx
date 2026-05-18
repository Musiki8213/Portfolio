import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BookCallPicker } from './contact/BookCallPicker';
import { ProjectEnquiryForm } from './contact/ProjectEnquiryForm';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const phones = ['067 715 9301'];
  const emails = ['sithomolamusiki@gmail.com'];
  const gmailComposeUrl =
    'https://mail.google.com/mail/?view=cm&fs=1&to=sithomolamusiki@gmail.com&su=Project%20Enquiry&body=Hi%20Musiki%2C%20I%20would%20like%20to%20discuss%20a%20project.';

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] relative overflow-hidden ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-6 md:p-8 border border-[#d4d4d4] dark:border-[#ffffff]/30 rounded-2xl bg-transparent space-y-6">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight">Contact Channels</h3>
                <p className="text-[#737373] dark:text-[#ffffff] mt-1">
                  Reach us directly by phone, email, or WhatsApp.
                </p>
              </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#6b7280] dark:text-[#ffffff] mb-2">Phone</p>
              <div className="space-y-2">
                {phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="w-full rounded-xl bg-[#000000] text-[#ffffff] px-4 py-3 text-sm font-medium flex items-center gap-3"
                  >
                    <Phone size={16} />
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <BookCallPicker />

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#6b7280] dark:text-[#ffffff]">Email</p>
              <div className="space-y-2">
                {emails.map((email) => (
                  <a
                    key={email}
                    href={`${gmailComposeUrl}&bcc=${encodeURIComponent(email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-[#000000] text-[#ffffff] px-4 py-3 text-sm font-medium flex items-center gap-3"
                  >
                    <Mail size={16} />
                    {email}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#6b7280] dark:text-[#ffffff]">WhatsApp</p>
              <div className="space-y-2">
                <a
                  href="https://wa.me/27677159301?text=Hi%20Musiki%2C%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl bg-[#000000] text-[#ffffff] px-4 py-3 text-sm font-medium flex items-center gap-3"
                >
                  <MessageCircle size={16} />
                  WhatsApp 067 715 9301
                </a>
              </div>
            </div>
            </div>

            <div className="p-6 md:p-8 border border-[#d4d4d4] dark:border-[#ffffff]/30 rounded-2xl bg-transparent">
              <h3 className="text-3xl font-semibold tracking-tight">Project Enquiry</h3>
              <p className="text-[#737373] dark:text-[#ffffff] mt-1 mb-6 max-w-xl">
                Leave your details below, including your email, so we can get back to you.
                No technical jargon required - just tell us what you need.
              </p>
              <ProjectEnquiryForm />
            </div>
        </div>
      </div>
    </section>
  );
};
