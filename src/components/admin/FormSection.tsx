import { ReactNode } from 'react';

export interface FormSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function FormSection({ title, description, children }: FormSectionProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-xs space-y-6">
      <div className="border-b border-neutral-100 pb-4">
        <h3 className="text-base font-semibold text-neutral-900 font-sans">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-neutral-500 font-sans mt-0.5">
            {description}
          </p>
        )}
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}
