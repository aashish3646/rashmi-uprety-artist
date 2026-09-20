import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Introduction } from '../components/sections/Introduction';
import { SelectedWork } from '../components/sections/SelectedWork';
import { TheatrePreview } from '../components/sections/TheatrePreview';
import { ShowreelPreview } from '../components/sections/ShowreelPreview';
import { ContactCTA } from '../components/sections/ContactCTA';

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F3F0EA]">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <SelectedWork />
        <TheatrePreview />
        <ShowreelPreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
