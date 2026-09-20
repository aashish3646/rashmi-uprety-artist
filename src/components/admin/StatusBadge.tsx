import { ContentStatus, InquiryStatus } from '../../types/admin';

export interface StatusBadgeProps {
  status: ContentStatus | InquiryStatus | string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  let styles = 'bg-neutral-100 text-neutral-700 border-neutral-200';

  if (status === 'Published') {
    styles = 'bg-emerald-50 text-emerald-700 border-emerald-200';
  } else if (status === 'Draft' || status === 'New') {
    styles = 'bg-amber-50 text-amber-700 border-amber-200';
  } else if (status === 'Read') {
    styles = 'bg-blue-50 text-blue-700 border-blue-200';
  } else if (status === 'Archived') {
    styles = 'bg-neutral-100 text-neutral-500 border-neutral-200';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
          status === 'Published'
            ? 'bg-emerald-500'
            : status === 'Draft' || status === 'New'
            ? 'bg-amber-500'
            : status === 'Read'
            ? 'bg-blue-500'
            : 'bg-neutral-400'
        }`}
      />
      {status}
    </span>
  );
}
