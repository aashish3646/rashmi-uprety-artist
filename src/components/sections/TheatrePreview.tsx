import { SectionLabel } from '../ui/SectionLabel';
import { ImageReveal } from '../ui/ImageReveal';
import { Button } from '../ui/Button';
import { THEATRE_IMAGE } from '../../data/contentData';

export function TheatrePreview() {
  return (
    <section className="relative py-24 md:py-36 bg-[#111111] border-t border-[#F3F0EA]/5 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content side */}
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel>STAGE & DRAMA</SectionLabel>

            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#F3F0EA] uppercase font-light tracking-wide">
              THEATRE
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#A7A39B] max-w-xl leading-relaxed">
              Live theatrical performance and stage production representation. [Temporary description: Exploring deep dramatic presence and spatial storytelling across stage roles.]
            </p>

            <div className="pt-6">
              <Button to="/theatre" variant="primary" ariaLabel="Explore theatre productions">
                EXPLORE THEATRE →
              </Button>
            </div>
          </div>

          {/* Large Theatre Image */}
          <div className="lg:col-span-6">
            <ImageReveal
              src={THEATRE_IMAGE.src}
              alt={THEATRE_IMAGE.alt}
              aspectRatio="4/3"
              className="border border-[#F3F0EA]/10 shadow-2xl"
              objectPosition="center 30%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
