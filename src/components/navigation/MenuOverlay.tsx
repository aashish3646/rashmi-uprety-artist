import { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { NAV_LINKS } from '../../data/contentData';

export interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Prevent background scrolling when overlay is open & handle ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080808] text-[#F3F0EA] p-6 sm:p-12 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Header inside overlay */}
          <div className="flex items-center justify-between border-b border-[#F3F0EA]/10 pb-6">
            <Link to="/" onClick={onClose} className="group text-left">
              <span className="block font-serif text-lg tracking-widest text-[#F3F0EA] group-hover:text-[#B89A64] transition-colors">
                RASHMI UPRETY
              </span>
              <span className="block font-sans text-[10px] tracking-[0.25em] text-[#A7A39B] uppercase">
                ACTRESS · THEATRE ARTIST
              </span>
            </Link>

            <button
              onClick={onClose}
              className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] text-[#F3F0EA] hover:text-[#B89A64] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A64] p-2"
              aria-label="Close navigation menu"
            >
              <span>CLOSE</span>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Navigation Links */}
          <div className="my-auto py-12">
            <nav className="flex flex-col items-start gap-4 sm:gap-6 max-w-4xl mx-auto w-full">
              {NAV_LINKS.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full"
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`group flex items-baseline gap-4 sm:gap-8 py-2 w-full transition-colors ${
                        isActive ? 'text-[#B89A64]' : 'text-[#F3F0EA] hover:text-[#B89A64]'
                      }`}
                    >
                      <span className="font-sans text-xs sm:text-sm tracking-[0.2em] text-[#A7A39B] group-hover:text-[#B89A64] transition-colors">
                        {item.number}
                      </span>
                      <span className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-wide uppercase transition-transform duration-300 group-hover:translate-x-3">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>

          {/* Footer inside overlay */}
          <div className="border-t border-[#F3F0EA]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-[0.15em] text-[#A7A39B] font-sans">
            <div>© {new Date().getFullYear()} RASHMI UPRETY. ALL RIGHTS RESERVED.</div>
            <div className="flex gap-6 uppercase">
              <span>ACTING</span>
              <span>·</span>
              <span>THEATRE</span>
              <span>·</span>
              <span>PERFORMANCE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
