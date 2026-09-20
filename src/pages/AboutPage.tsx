import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ImageReveal } from '../components/ui/ImageReveal';
import { INTRO_IMAGE, TEMPORARY_BIOGRAPHY } from '../data/contentData';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F3F0EA]">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <SectionLabel>BIOGRAPHY & BACKGROUND</SectionLabel>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F3F0EA] uppercase font-light mt-2 mb-12">
            ABOUT RASHMI
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <ImageReveal
                src={INTRO_IMAGE.src}
                alt={INTRO_IMAGE.alt}
                aspectRatio="4/5"
                className="border border-[#F3F0EA]/10 shadow-2xl"
                objectPosition="center 20%"
              />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <p className="font-serif text-2xl sm:text-3xl text-[#F3F0EA] leading-relaxed">
                "{TEMPORARY_BIOGRAPHY.text}"
              </p>
              <div className="p-6 bg-[#111111] border border-[#F3F0EA]/10 text-xs font-sans text-[#A7A39B] tracking-wider uppercase">
                [Note: Full official biography details, background history, and training credentials can be inserted here when verified content is available.]
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
