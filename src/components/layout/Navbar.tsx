import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuOverlay } from '../navigation/MenuOverlay';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#080808]/80 backdrop-blur-md border-b border-[#F3F0EA]/5 transition-all duration-300">
        <div className="container-custom flex items-center justify-between h-20 sm:h-24">
          {/* Brand identity */}
          <Link
            to="/"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A64]"
          >
            <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.15em] text-[#F3F0EA] group-hover:text-[#B89A64] transition-colors">
              RASHMI UPRETY
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] text-[#A7A39B] uppercase">
              ACTRESS · THEATRE ARTIST
            </span>
          </Link>

          {/* Minimal Menu Trigger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="group flex items-center gap-3 font-sans text-xs tracking-[0.2em] text-[#F3F0EA] hover:text-[#B89A64] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A64] px-4 py-2 border border-[#F3F0EA]/15 hover:border-[#B89A64]"
            aria-label="Open navigation menu"
          >
            <span className="w-2 h-2 rounded-full bg-[#B89A64] inline-block animate-pulse" />
            <span>MENU</span>
          </button>
        </div>
      </header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
