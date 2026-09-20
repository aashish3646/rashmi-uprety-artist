import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#F3F0EA]/10 pt-16 pb-12 text-[#F3F0EA]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <Link to="/" className="block">
              <span className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-[#F3F0EA]">
                RASHMI UPRETY
              </span>
              <span className="block font-sans text-xs tracking-[0.25em] text-[#A7A39B] uppercase mt-1">
                ACTRESS · THEATRE ARTIST
              </span>
            </Link>
            <p className="font-sans text-xs text-[#A7A39B] max-w-sm pt-2">
              Performance, character, and storytelling across theatre and cinema.
            </p>
          </div>

          {/* Nav Col */}
          <div className="md:col-span-3 space-y-3 font-sans text-xs tracking-[0.15em] text-[#A7A39B]">
            <span className="block text-[#F3F0EA] uppercase tracking-[0.2em] font-medium pb-1">
              NAVIGATION
            </span>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#B89A64] transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B89A64] transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#B89A64] transition-colors">
                  WORK
                </Link>
              </li>
              <li>
                <Link to="/theatre" className="hover:text-[#B89A64] transition-colors">
                  THEATRE
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#B89A64] transition-colors">
                  GALLERY
                </Link>
              </li>
              <li>
                <Link to="/showreel" className="hover:text-[#B89A64] transition-colors">
                  SHOWREEL
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B89A64] transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Col */}
          <div className="md:col-span-3 space-y-3 font-sans text-xs tracking-[0.15em] text-[#A7A39B]">
            <span className="block text-[#F3F0EA] uppercase tracking-[0.2em] font-medium pb-1">
              REPRESENTATION
            </span>
            <p className="leading-relaxed">
              For professional inquiries regarding film, theatre, and commercial projects, please use the contact portal.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block text-[#B89A64] hover:underline tracking-[0.2em]"
              >
                GET IN TOUCH →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F3F0EA]/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] text-[#A7A39B] tracking-[0.15em]">
          <div>© {new Date().getFullYear()} RASHMI UPRETY. ALL RIGHTS RESERVED.</div>
          <div className="text-right">OFFICIAL ARTIST PORTFOLIO</div>
        </div>
      </div>
    </footer>
  );
}
