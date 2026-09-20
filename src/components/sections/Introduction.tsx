import { ImageReveal } from '../ui/ImageReveal';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { INTRO_IMAGE, TEMPORARY_BIOGRAPHY } from '../../data/contentData';

export function Introduction() {
  return (
    <section className="py-24 md:py-36 bg-[#080808] border-t border-[#F3F0EA]/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Secondary Portrait */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ImageReveal
              src={INTRO_IMAGE.src}
              alt={INTRO_IMAGE.alt}
              aspectRatio="4/5"
              className="border border-[#F3F0EA]/10 shadow-xl"
              objectPosition="center 15%"
            />
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <SectionLabel>THE ARTIST</SectionLabel>

            <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#F3F0EA] font-light">
              "{TEMPORARY_BIOGRAPHY.text}"
            </blockquote>

            <p className="font-sans text-xs sm:text-sm text-[#A7A39B] tracking-wider uppercase">
              [Note: Temporary biography preview for structure reference]
            </p>

            <div className="pt-4">
              <Button to="/about" variant="text" ariaLabel="Read full about biography">
                ABOUT RASHMI →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
