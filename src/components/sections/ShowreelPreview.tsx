import { useState } from 'react';
import { Play } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { SHOWREEL_THUMBNAIL } from '../../data/contentData';

export function ShowreelPreview() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 md:py-36 bg-[#080808] border-t border-[#F3F0EA]/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <SectionLabel>ACTING REEL</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3F0EA] mt-2 uppercase font-light">
              SHOWREEL
            </h2>
          </div>
          <p className="font-sans text-xs text-[#A7A39B] tracking-widest uppercase">
            [VIDEO PLACEHOLDER — READY FOR MEDIA EMBED]
          </p>
        </div>

        {/* Cinematic Video Placeholder featuring SHOWREEL_THUMBNAIL (IMG_9578.JPG) */}
        <div className="relative aspect-video max-w-5xl mx-auto w-full bg-[#111111] border border-[#F3F0EA]/10 flex flex-col items-center justify-center text-center overflow-hidden group">
          {/* Background showreel thumbnail image */}
          <img
            src={SHOWREEL_THUMBNAIL.src}
            alt={SHOWREEL_THUMBNAIL.alt}
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/40 to-transparent" />

          {!isPlaying ? (
            <div className="relative z-10 flex flex-col items-center gap-6 p-8">
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#B89A64] bg-[#080808]/80 text-[#B89A64] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#B89A64] hover:text-[#080808] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A64]"
                aria-label="Play showreel demo"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-current" />
              </button>

              <div className="space-y-2">
                <span className="font-serif text-2xl sm:text-3xl text-[#F3F0EA] uppercase block">
                  DEMO REEL PREVIEW
                </span>
                <span className="font-sans text-xs tracking-[0.2em] text-[#A7A39B] uppercase block">
                  ACTING · STAGE · MONOLOGUES
                </span>
              </div>
            </div>
          ) : (
            <div className="relative z-10 space-y-4 max-w-md p-8 bg-[#080808]/90 border border-[#F3F0EA]/10 rounded-lg">
              <p className="font-serif text-2xl text-[#F3F0EA]">
                [SHOWREEL VIDEO CONTAINER READY]
              </p>
              <p className="font-sans text-xs text-[#A7A39B]">
                This container is prepared for YouTube, Vimeo, or MP4 video stream insertion once video media link is provided.
              </p>
              <button
                type="button"
                onClick={() => setIsPlaying(false)}
                className="font-sans text-xs tracking-[0.2em] text-[#B89A64] underline pt-2"
              >
                CLOSE PREVIEW
              </button>
            </div>
          )}
        </div>

        <div className="pt-12 text-center">
          <Button to="/showreel" variant="text" ariaLabel="Watch full showreel">
            WATCH SHOWREEL →
          </Button>
        </div>
      </div>
    </section>
  );
}
