import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ShowreelPreview } from '../components/sections/ShowreelPreview';

export function ShowreelPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F3F0EA]">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container-custom">
          <SectionLabel>VIDEO DEMO</SectionLabel>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F3F0EA] uppercase font-light mt-2 mb-8">
            SHOWREEL
          </h1>
        </div>
        <ShowreelPreview />
      </main>
      <Footer />
    </div>
  );
}
