import { motion, useReducedMotion } from 'framer-motion';

export interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
  objectPosition?: string;
}

export function ImageReveal({
  src,
  alt,
  className = '',
  imageClassName = '',
  aspectRatio,
  priority = false,
  objectPosition = 'center',
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden bg-[#111111] ${className}`} style={{ aspectRatio }}>
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02] ${imageClassName}`}
          style={{ objectPosition }}
        />
      </motion.div>
    </div>
  );
}
