import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F3F0EA]">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-custom max-w-4xl">
          <SectionLabel>REPRESENTATION & INQUIRIES</SectionLabel>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F3F0EA] uppercase font-light mt-2 mb-8">
            CONTACT
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#A7A39B] leading-relaxed mb-12">
            For professional inquiries, bookings, performance representation, and media requests, please reach out via the portal or official management.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6 bg-[#111111] p-8 sm:p-12 border border-[#F3F0EA]/10">
            <div>
              <label htmlFor="name" className="block font-sans text-xs tracking-[0.2em] text-[#A7A39B] uppercase mb-2">
                YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-[#080808] border border-[#F3F0EA]/15 p-4 text-[#F3F0EA] focus:outline-none focus:border-[#B89A64] transition-colors font-sans text-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-sans text-xs tracking-[0.2em] text-[#A7A39B] uppercase mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-[#080808] border border-[#F3F0EA]/15 p-4 text-[#F3F0EA] focus:outline-none focus:border-[#B89A64] transition-colors font-sans text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-sans text-xs tracking-[0.2em] text-[#A7A39B] uppercase mb-2">
                PROJECT INQUIRY / MESSAGE
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#080808] border border-[#F3F0EA]/15 p-4 text-[#F3F0EA] focus:outline-none focus:border-[#B89A64] transition-colors font-sans text-sm"
                placeholder="Details about the performance or project..."
              />
            </div>

            <div className="pt-4">
              <Button variant="primary" ariaLabel="Send message">
                SEND MESSAGE →
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
