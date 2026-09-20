import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ImageReveal } from '../components/ui/ImageReveal';
import { THEATRE_IMAGE, THEATRE_IMAGE_SECONDARY } from '../data/contentData';

export function TheatrePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F3F0EA]">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <SectionLabel>STAGE PRODUCTIONS</SectionLabel>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F3F0EA] uppercase font-light mt-2 mb-12">
            THEATRE
          </h1>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <ImageReveal
                  src={THEATRE_IMAGE.src}
                  alt={THEATRE_IMAGE.alt}
                  aspectRatio="16/10"
                  className="border border-[#F3F0EA]/10 shadow-2xl"
                />
              </div>
              <div className="lg:col-span-5 space-y-4">
                <span className="font-sans text-xs text-[#B89A64] tracking-[0.25em] uppercase">STAGE PERFORMANCE 01</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F0EA]">DRAMATIC STAGE WORK</h2>
                <p className="font-sans text-sm text-[#A7A39B] leading-relaxed">
                  Real theatre production performance photographs capturing live stage presence. [Temporary information placeholder for specific play titles, directors, and theatre venues].
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
                <span className="font-sans text-xs text-[#B89A64] tracking-[0.25em] uppercase">STAGE PERFORMANCE 02</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F0EA]">CHARACTER STUDY</h2>
                <p className="font-sans text-sm text-[#A7A39B] leading-relaxed">
                  Stage drama representation focusing on ensemble and solo theatrical execution.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <ImageReveal
                  src={THEATRE_IMAGE_SECONDARY.src}
                  alt={THEATRE_IMAGE_SECONDARY.alt}
                  aspectRatio="16/10"
                  className="border border-[#F3F0EA]/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
