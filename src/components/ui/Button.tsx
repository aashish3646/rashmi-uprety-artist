import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
  ariaLabel?: string;
}

export function Button({
  children,
  to,
  onClick,
  variant = 'text',
  className = '',
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-3 font-sans text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A64]';

  const variants = {
    primary:
      'bg-[#F3F0EA] text-[#080808] px-6 py-3.5 hover:bg-[#B89A64] hover:text-[#080808] font-medium',
    outline:
      'border border-[#F3F0EA]/30 text-[#F3F0EA] px-6 py-3.5 hover:border-[#B89A64] hover:text-[#B89A64]',
    text:
      'text-[#F3F0EA] hover:text-[#B89A64] py-1 border-b border-transparent hover:border-[#B89A64]',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
