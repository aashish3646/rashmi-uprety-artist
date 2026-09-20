import { Button } from '../ui/Button';
import { CONTACT_IMAGE } from '../../data/contentData';

export function ContactCTA() {
  return (
    <section className="relative py-28 md:py-44 bg-[#080808] border-t border-[#F3F0EA]/10 text-center overflow-hidden">
      {/* Background image overlay using CONTACT_IMAGE (IMG_9625.JPG) */}
      <div className="absolute inset-0 z-0">
        <img
          src={CONTACT_IMAGE.src}
          alt={CONTACT_IMAGE.alt}
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-[#080808]" />
      </div>

      <div className="container-custom max-w-4xl mx-auto space-y-8 relative z-10">
        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-[#F3F0EA] uppercase font-light tracking-tight">
          <span className="block">LET'S</span>
          <span className="block italic text-[#B89A64]">CREATE</span>
          <span className="block">SOMETHING</span>
          <span className="block font-serif text-4xl sm:text-6xl md:text-7xl">MEANINGFUL.</span>
        </h2>

        <div className="pt-6">
          <Button to="/contact" variant="primary" ariaLabel="Contact Rashmi Uprety">
            CONTACT →
          </Button>
        </div>
      </div>
    </section>
  );
}
