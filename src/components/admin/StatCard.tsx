import { LucideIcon } from 'lucide-react';

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: string;
  description?: string;
}

export function StatCard({ title, value, icon: Icon, change, description }: StatCardProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-xs flex items-start justify-between">
      <div className="space-y-1">
        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider block">
          {title}
        </span>
        <div className="text-2xl font-semibold text-neutral-900 font-sans tracking-tight">
          {value}
        </div>
        {change && (
          <span className="text-xs text-emerald-600 font-medium inline-block">
            {change}
          </span>
        )}
        {description && (
          <p className="text-xs text-neutral-400 pt-1">{description}</p>
        )}
      </div>

      <div className="p-2.5 bg-neutral-50 border border-neutral-100 rounded-md text-neutral-600">
        <Icon className="w-5 h-5" />
      </div>
    </div>
  );
}
