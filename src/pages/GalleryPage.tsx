import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ImageReveal } from '../components/ui/ImageReveal';
import { GALLERY_FEATURED } from '../data/contentData';

export function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F3F0EA]">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <SectionLabel>PORTRAITS & STILLS</SectionLabel>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F3F0EA] uppercase font-light mt-2 mb-12">
            GALLERY
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_FEATURED.map((item) => (
              <ImageReveal
                key={item.id}
                src={item.src}
                alt={item.alt}
                aspectRatio="4/5"
                className="border border-[#F3F0EA]/10 shadow-lg"
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
