import { ReactNode } from 'react';

export interface FilterBarProps {
  children: ReactNode;
}

export function FilterBar({ children }: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 bg-white border border-neutral-200 rounded-lg mb-6">
      {children}
    </div>
  );
}
