import { ReactNode } from 'react';

export interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-block font-sans text-xs tracking-[0.25em] uppercase text-[#B89A64] ${className}`}
    >
      {children}
    </span>
  );
}
