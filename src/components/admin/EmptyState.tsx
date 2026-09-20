import { ReactNode } from 'react';
import { FolderOpen } from 'lucide-react';

export interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="bg-white border border-neutral-200 border-dashed rounded-lg p-12 text-center flex flex-col items-center justify-center my-6">
      <div className="p-3 bg-neutral-50 rounded-full text-neutral-400 mb-3 border border-neutral-100">
        <FolderOpen className="w-8 h-8" />
      </div>
      <h3 className="text-base font-semibold text-neutral-900 font-sans mb-1">
        {title}
      </h3>
      <p className="text-sm text-neutral-500 max-w-sm mb-6 font-sans">
        {description}
      </p>
      {action}
    </div>
  );
}
