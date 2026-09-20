import { motion, useReducedMotion } from 'framer-motion';
import { HERO_IMAGE } from '../../data/contentData';
import { Button } from '../ui/Button';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-[#080808]">
      <div className="container-custom relative z-10 w-full">
        {/* Editorial composition built around Main Photo.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Photograph Container */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] max-h-[75vh] w-full overflow-hidden bg-[#111111] border border-[#F3F0EA]/10 shadow-2xl">
              <img
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-1000 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Typography & CTA Container */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center space-y-6 md:space-y-8">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.9] text-[#F3F0EA] uppercase font-light">
                <span className="block">RASHMI</span>
                <span className="block italic text-[#B89A64]/90 font-serif">UPRETY</span>
              </h1>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <p className="font-sans text-xs sm:text-sm tracking-[0.25em] text-[#A7A39B] uppercase border-l border-[#B89A64] pl-4">
                ACTRESS · THEATRE ARTIST
              </p>

              <div className="pt-4 flex items-center gap-6">
                <Button to="/work" variant="primary" ariaLabel="View Rashmi Uprety work">
                  VIEW MY WORK →
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#A7A39B]">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#B89A64] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
