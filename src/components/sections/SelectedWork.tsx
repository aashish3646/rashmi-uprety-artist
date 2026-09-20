import { SectionLabel } from '../ui/SectionLabel';
import { ImageReveal } from '../ui/ImageReveal';
import { Button } from '../ui/Button';
import { TEMPORARY_WORK_PROJECTS } from '../../data/contentData';

export function SelectedWork() {
  return (
    <section className="py-24 md:py-36 bg-[#080808] border-t border-[#F3F0EA]/5">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#F3F0EA]/10">
          <div>
            <SectionLabel>PORTFOLIO</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3F0EA] mt-2 uppercase font-light">
              SELECTED WORK
            </h2>
          </div>
          <p className="font-sans text-xs text-[#A7A39B] tracking-widest uppercase">
            [Temporary Project Showcase]
          </p>
        </div>

        {/* Project Rows */}
        <div className="space-y-24 pt-16">
          {TEMPORARY_WORK_PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image */}
                <div className={`lg:col-span-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <ImageReveal
                    src={project.image}
                    alt={project.alt}
                    aspectRatio="16/10"
                    className="border border-[#F3F0EA]/10 shadow-lg"
                  />
                </div>

                {/* Details */}
                <div className={`lg:col-span-4 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="font-sans text-xs text-[#B89A64] tracking-[0.3em] font-semibold block">
                    {project.number}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F3F0EA] uppercase font-light">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#A7A39B] tracking-wider uppercase">
                    {project.role}
                  </p>
                  <p className="font-sans text-xs text-[#A7A39B]/70 tracking-widest">
                    RELEASE / RELEASE YEAR: {project.year}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Link */}
        <div className="pt-20 text-center">
          <Button to="/work" variant="outline" ariaLabel="View all work projects">
            VIEW ALL WORK →
          </Button>
        </div>
      </div>
    </section>
  );
}
